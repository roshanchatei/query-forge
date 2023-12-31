// Function to parse user input and construct a query object
export const getParseUserQuery = (queryInput) => {
    const parsedQuery = {};

    // Parse the SELECT clause
    if (queryInput.select) {
        parsedQuery.select = queryInput.select.split(',').map(field => field.trim());
    }

    // Parse the FROM clause
    if (queryInput.from) {
        parsedQuery.from = queryInput.from.trim();
    }

    // Parse the WHERE clause
    if (queryInput.where) {
        parsedQuery.where = {};
        const conditions = queryInput.where.split('AND');
        conditions.forEach(condition => {
            const [field, rest] = condition.trim().split(/\s+(?=(?:[^\']*\'[^\']*\')*[^\']*$)/);
            const operatorMatch = rest.match(/([<>!=]+)\s+(.+)/);
            if (operatorMatch) {
                const operator = operatorMatch[1].trim();
                const value = operatorMatch[2].trim();

                if (operator.toUpperCase() === 'IN') {
                    parsedQuery.where[field.trim()] = value
                        .replace(/\(|\)/g, '')
                        .split(',')
                        .map(item => item.trim());
                } else {
                    if (!parsedQuery.where[field.trim()]) {
                        parsedQuery.where[field.trim()] = {};
                    }
                    parsedQuery.where[field.trim()][operator] = value;
                }
            } else {
                const value = rest.trim();
                parsedQuery.where[field.trim()] = value;
            }
        });
    }

    // Parse the ORDER BY clause
    if (queryInput.orderBy) {
        parsedQuery.orderBy = queryInput.orderBy.trim();
        parsedQuery.orderDirection = queryInput.orderDirection ? queryInput.orderDirection.trim().toUpperCase() : 'ASC';
    }

    // Parse the GROUP BY clause
    if (queryInput.groupBy) {
        parsedQuery.groupBy = queryInput.groupBy.trim();
    }

    // Parse the AGGREGATE clause
    if (queryInput.aggregate) {
        const [func, field, alias] = queryInput.aggregate.split(',').map(item => item.trim());
        parsedQuery.aggregate = { [field]: func, alias };
    }

    return parsedQuery;
};
