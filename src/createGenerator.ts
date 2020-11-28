import {random} from "./random";

export const createGenerator = <Value>(values: Readonly<Value[]>) => (middleware?: (value: Value) => Value): Value => {
  if ("function" === typeof middleware) {
    return middleware(random(values));
  }

  return random(values);
};
