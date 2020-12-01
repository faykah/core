import {random} from "./random";

type SchemaDefinition<Schema> = {[Key in keyof Schema]: Schema[Key][] | {[K in keyof Schema[Key]]: Schema[Key][K][]}};
type Middlewares<Schema> = {[Key in keyof Schema]?: ((value: Readonly<Schema[Key]>) => Schema[Key]) | Middlewares<Schema[Key]>};

export const createObjectGenerator = <Schema>(schemaDefinition: Readonly<SchemaDefinition<Schema>> = {} as Readonly<SchemaDefinition<Schema>>) => (middlewares: Readonly<Middlewares<Schema>> = {} as Readonly<Middlewares<Schema>>): Schema => {
  const schema = {} as Schema;

  for (const property in schemaDefinition) {
    if (!Object.prototype.hasOwnProperty.call(schemaDefinition, property)) {
      continue;
    }

    const values = schemaDefinition[property];

    if (Array.isArray(values)) {
      const value = random(values) as Schema[typeof property];

      if ("undefined" !== typeof middlewares) {
        const middleware = middlewares[property];

        if ("function" === typeof middleware) {
          schema[property] = middleware(value) as Schema[typeof property];
          continue;
        }
      }

      schema[property] = value;
      continue;
    }

    if ("object" === typeof values) {
      if ("undefined" !== typeof middlewares) {
        const nestedMiddlewares = middlewares[property];
        const nestedValues = values as Schema[typeof property];

        if ("object" === typeof nestedMiddlewares) {
          const value = createObjectGenerator(nestedValues)(nestedMiddlewares) as Schema[typeof property];
          schema[property] = value;
          continue;
        }
      }

      const nestedValues = values as Schema[typeof property];
      const value = createObjectGenerator(nestedValues)() as Schema[typeof property];
      schema[property] = value;
      continue;
    }
  }

  return schema;
};
