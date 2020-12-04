declare type Generator<Value> = (middleware?: (value: Value) => Value) => Value;
export declare const createGenerator: <Value>(values: readonly Value[]) => Generator<Value>;
export {};
