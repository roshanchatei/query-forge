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

    if (query.where) {
        result = result.filter(entry => {
            return Object.keys(query.where).every(field => {
                const condition = query.where[field];
                if (Array.isArray(condition)) {
                    return condition.includes(entry[field]);
                } else if (typeof condition === 'object') {
                    const operator = Object.keys(condition)[0];
                    const value = condition[operator];
                    switch (operator) {
                        case '>':
                            return entry[field] > value;
                        case '<':
                            return entry[field] < value;
                        default:
                            return true;
                    }
                } else {
                    return entry[field] === condition;
                }
            });
        });
    }

    if (query.orderBy) {
        const orderDirection = query.orderDirection || 'asc';
        result.sort((a, b) => {
            const orderFactor = orderDirection === 'desc' ? -1 : 1;
            return (a[query.orderBy] > b[query.orderBy] ? 1 : -1) * orderFactor;
        });
    }

    if (query.limit) {
        result = result.slice(0, query.limit);
    }



    return result;
};
