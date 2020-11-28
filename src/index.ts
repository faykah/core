const random = <T>(values: Readonly<T[]>): T => {
  const items = [...values];
  const SEED = 0.5;
  const FIRST = 0;

  items.sort(() => Math.random() - SEED);

  return items[FIRST];
};

const createObjectGenerator = <Schema>(schemaDefinition: Readonly<{[Key in keyof Schema]: Schema[Key][]}>) => (middlewares?: Readonly<{[Key in keyof Schema]?: <Value extends Schema[Key]>(value: Value) => Value}>): Schema => {
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

const createGenerator = <Value>(values: Readonly<Value[]>) => (middleware?: (value: Value) => Value): Value => {
  if ("function" === typeof middleware) {
    return middleware(random(values));
  }

  return random(values);
};

export {
  createObjectGenerator,
  createGenerator
};
