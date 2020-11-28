export const random = <Value>(values: Readonly<Value[]>): Value => values[Math.floor(Math.random() * values.length)] as Value;
