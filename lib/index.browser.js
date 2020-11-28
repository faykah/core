var Faykah = (function (exports) {
    'use strict';

    const random = (values) => {
        const items = [...values];
        const SEED = 0.5;
        const FIRST = 0;
        items.sort(() => Math.random() - SEED);
        return items[FIRST];
    };
    const createObjectGenerator = (schemaDefinition) => (middlewares) => {
        const schema = {};
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
    const createGenerator = (values) => (middleware) => {
        if ("function" === typeof middleware) {
            return middleware(random(values));
        }
        return random(values);
    };

    exports.createGenerator = createGenerator;
    exports.createObjectGenerator = createObjectGenerator;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

}({}));
