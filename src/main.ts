interface Property {
    [key: string]: any;
}

const random = <T>(values: T[]): T => {
    const items = values;

    items.sort(() => Math.random() - 0.5);

    return items[0];
};

const createObjectGenerator = (properties: Property) => (): Property => {
    const record: Property = {};

    for (const [key, values] of Object.entries(properties)) {
        if ("function" === typeof values) {
            /* eslint-ignore-next-line */
            record[key] = values as Function();

            continue;
        }

        record[key] = random(values);
    }

    return record;
};

const createArrayGenerator = <T>(values: T[]) => (): T => random(values);

export {
    createObjectGenerator,
    createArrayGenerator
};
