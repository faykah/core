declare type SchemaDefinition<Schema> = {
    [Key in keyof Schema]: Schema[Key][] | {
        [K in keyof Schema[Key]]: Schema[Key][K][];
    };
};
declare type Middlewares<Schema> = {
    [Key in keyof Schema]?: ((value: Readonly<Schema[Key]>) => Schema[Key]) | Middlewares<Schema[Key]>;
};
declare type ObjectGenerator<Schema> = (middlewares?: Readonly<Middlewares<Schema>>) => Schema;
export declare const createObjectGenerator: <Schema>(schemaDefinition?: Readonly<SchemaDefinition<Schema>>) => ObjectGenerator<Schema>;
export {};
