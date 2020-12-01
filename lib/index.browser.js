var Faykah = (function (exports) {
    'use strict';

    const random = (values) => values[Math.floor(Math.random() * values.length)];

    const createGenerator = (values) => (middleware) => {
        if ("function" === typeof middleware) {
            return middleware(random(values));
        }
        return random(values);
    };

    const createObjectGenerator = (schemaDefinition = {}) => (middlewares = {}) => {
        const schema = {};
        for (const property in schemaDefinition) {
            if (!Object.prototype.hasOwnProperty.call(schemaDefinition, property)) {
                continue;
            }
            const values = schemaDefinition[property];
            if (Array.isArray(values)) {
                const value = random(values);
                if ("undefined" !== typeof middlewares) {
                    const middleware = middlewares[property];
                    if ("function" === typeof middleware) {
                        schema[property] = middleware(value);
                        continue;
                    }
                }
                schema[property] = value;
                continue;
            }
            if ("object" === typeof values) {
                if ("undefined" !== typeof middlewares) {
                    const nestedMiddlewares = middlewares[property];
                    const nestedValues = values;
                    if ("object" === typeof nestedMiddlewares) {
                        const value = createObjectGenerator(nestedValues)(nestedMiddlewares);
                        schema[property] = value;
                        continue;
                    }
                }
                const nestedValues = values;
                const value = createObjectGenerator(nestedValues)();
                schema[property] = value;
                continue;
            }
        }
        return schema;
    };

    exports.createGenerator = createGenerator;
    exports.createObjectGenerator = createObjectGenerator;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

}({}));
