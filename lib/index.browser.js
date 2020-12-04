var Faykah = (function (exports) {
    'use strict';

    const random = (values) => values[Math.floor(Math.random() * values.length)];

    const createGenerator = (values) => {
        if (!Array.isArray(values)) {
            throw new TypeError("values should be an array in createGenerator(values)");
        }
        return (middleware) => {
            if ("undefined" === typeof middleware) {
                return random(values);
            }
            if ("function" === typeof middleware) {
                return middleware(random(values));
            }
            throw new TypeError("middleware should be a function or undefined in createGenerator(values)(middleware)");
        };
    };

    const createObjectGenerator = (schemaDefinition = {}) => {
        if ("[object Object]" !== Object.prototype.toString.call(schemaDefinition)) {
            throw new TypeError("schemaDefinition should be an object or empty in createObjectGenerator(schemaDefinition)");
        }
        return (middlewares = {}) => {
            if ("[object Object]" !== Object.prototype.toString.call(middlewares)) {
                throw new TypeError("middlewares should be an object or empty in createObjectGenerator(schemaDefinition)(middlewares)");
            }
            const schema = {};
            for (const property in schemaDefinition) {
                if (!Object.prototype.hasOwnProperty.call(schemaDefinition, property)) {
                    continue;
                }
                const values = schemaDefinition[property];
                if (Array.isArray(values)) {
                    const value = random(values);
                    const middleware = middlewares[property];
                    if ("function" === typeof middleware) {
                        schema[property] = middleware(value);
                        continue;
                    }
                    schema[property] = value;
                    continue;
                }
                if ("[object Object]" === Object.prototype.toString.call(values)) {
                    const nestedMiddlewares = middlewares[property];
                    const nestedValues = values;
                    const value = createObjectGenerator(nestedValues)(nestedMiddlewares);
                    schema[property] = value;
                    continue;
                }
                throw new TypeError("values should either be an array or an object in createObjectGenerator({something: values})");
            }
            return schema;
        };
    };

    exports.createGenerator = createGenerator;
    exports.createObjectGenerator = createObjectGenerator;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

}({}));
