import {random} from "./random";

type Generator<Value> = (middleware?: (value: Value) => Value) => Value;
type Middleware<Value> = (value: Value) => Value;

export const createGenerator = <Value>(values: Readonly<Value[]>): Generator<Value> => {
  if (!Array.isArray(values)) {
    throw new TypeError("values should be an array in createGenerator(values)");
  }

  return (middleware?: Middleware<Value>): Value => {
    if ("undefined" === typeof middleware) {
      return random(values);
    }

    if ("function" === typeof middleware) {
      return middleware(random(values));
    }

    throw new TypeError("middleware should be a function or undefined in createGenerator(values)(middleware)");
  };
};
