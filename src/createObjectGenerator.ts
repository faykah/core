import {random} from "./random";

export const createObjectGenerator = <Schema>(schemaDefinition: Readonly<{[Key in keyof Schema]: Schema[Key][]}>) => (middlewares?: Readonly<{[Key in keyof Schema]?: (value: Schema[Key]) => Schema[Key]}>): Schema => {
  const schema = {} as Schema;

  for (const property in schemaDefinition) {
    if (Object.prototype.hasOwnProperty.call(schemaDefinition, property)) {
      const values = schemaDefinition[property];
      const firstValue = random(values);

      if ("undefined" !== typeof middlewares) {
        const middleware = middlewares[property];

        if ("undefined" !== typeof middleware) {
          schema[property] = middleware(firstValue);
          continue;
        }
      }

      schema[property] = firstValue;
    }
  }

  return schema;
};
