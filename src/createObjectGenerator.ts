import {random} from "./random";

type SchemaDefinition<Schema> = {[Key in keyof Schema]: Schema[Key][] | {[K in keyof Schema[Key]]: Schema[Key][K][]}};
type Middlewares<Schema> = {[Key in keyof Schema]?: ((value: Readonly<Schema[Key]>) => Schema[Key]) | Middlewares<Schema[Key]>};
type ObjectGenerator<Schema> = (middlewares?: Readonly<Middlewares<Schema>>) => Schema;

export const createObjectGenerator = <Schema>(schemaDefinition: Readonly<SchemaDefinition<Schema>> = {} as Readonly<SchemaDefinition<Schema>>): ObjectGenerator<Schema> => {
  if ("[object Object]" !== Object.prototype.toString.call(schemaDefinition)) {
    throw new TypeError("schemaDefinition should be an object or empty in createObjectGenerator(schemaDefinition)");
  }

  return (middlewares: Readonly<Middlewares<Schema>> = {} as Readonly<Middlewares<Schema>>): Schema => {
    if ("[object Object]" !== Object.prototype.toString.call(middlewares)) {
      throw new TypeError("middlewares should be an object or empty in createObjectGenerator(schemaDefinition)(middlewares)");
    }

    const schema = {} as Schema;

    for (const property in schemaDefinition) {
      if (!Object.prototype.hasOwnProperty.call(schemaDefinition, property)) {
        continue;
      }

      const values = schemaDefinition[property];

      if (Array.isArray(values)) {
        const value = random(values) as Schema[typeof property];

        const middleware = middlewares[property];

        if ("function" === typeof middleware) {
          schema[property] = middleware(value) as Schema[typeof property];
          continue;
        }

        schema[property] = value;
        continue;
      }

      if ("[object Object]" === Object.prototype.toString.call(values)) {
        const nestedMiddlewares = middlewares[property];
        const nestedValues = values as Schema[typeof property];

        const value = createObjectGenerator(nestedValues)(nestedMiddlewares) as Schema[typeof property];
        schema[property] = value;
        continue;
      }

      throw new TypeError("values should either be an array or an object in createObjectGenerator({something: values})");
    }

    return schema;
  };
};
