export const getQueryOutput = (data, query) => {
    let result = [...data];

    if (query.select) {
        result = result.map(entry => {
            const selectedFields = {};
            query.select.forEach(field => {
                selectedFields[field] = entry[field];
            });
            return selectedFields;
        });
    }



    return result;
};
