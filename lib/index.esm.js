const random = (values) => values[Math.floor(Math.random() * values.length)];

const createGenerator = (values) => (middleware) => {
    if ("function" === typeof middleware) {
        return middleware(random(values));
    }
    return random(values);
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

export { createGenerator, createObjectGenerator };
