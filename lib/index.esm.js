const random = (values) => {
    const items = values;
    items.sort(() => Math.random() - 0.5);
    return items[0];
};
const createObjectGenerator = (properties) => () => {
    const record = {};
    for (const [key, values] of Object.entries(properties)) {
        if (typeof values === "function") {
            record[key] = values();
            continue;
        }
        record[key] = random(values);
    }
    return record;
};
const createArrayGenerator = (values) => () => {
    return random(values);
};

export { createArrayGenerator, createObjectGenerator };
