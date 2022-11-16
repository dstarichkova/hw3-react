export const prepareData = (items) => {
    return {
        entities: items.reduce((acc, section) => {
            acc[section.id] = section;
            return acc;
        }, {}),
        ids: items.map(({ id }) => id),
    };
};