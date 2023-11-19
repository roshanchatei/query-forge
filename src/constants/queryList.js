//sample SQL queries with its parsedQueries
export const queryList = [
    {
        u_id: 0,
        query: "SELECT * FROM articleData;",
        parsedQuery: {}
    },
    {
        u_id: 1,
        query: "SELECT id, title, category, views FROM articleData WHERE category = 'Technology';",
        parsedQuery: {
            select: ['id', 'title', 'category', 'views'],
            where: { category: 'Technology'},
        }
    },
    {
        u_id: 2,
        query: "SELECT title, category, views FROM articleData WHERE category IN ('Science', 'Technology') AND views > 10000 ORDER BY views DESC;",
        parsedQuery: {
            select: ['title', 'category', 'views'],
            where: { category: ['Science', 'Technology'], views: { '>': 10000 } },
            orderBy: 'views',
            orderDirection: 'desc',
        }
    },
    {
        u_id: 3,
        query: "SELECT * FROM articleData WHERE views > 5000;",
        parsedQuery: {
            where: { views: { '>': 5000 } },
        }
    },
    {
        u_id: 4,
        query: "SELECT category, COUNT(*) AS count_category FROM articleData GROUP BY category;",
        parsedQuery: {
            select: ['category'],
            groupBy: 'category',
            aggregate: { category: 'COUNT', alias: 'count_category' },
        }
    },
    {
        u_id: 5,
        query: "SELECT category, SUM(views) AS sum_views FROM articleData WHERE views > 1000 GROUP BY category",
        parsedQuery: {
            select: ['category', 'views'],
            where: { views: { '>': 1000 } },
            groupBy: 'category',
            aggregate: { views: 'SUM', alias: 'sum_views' },
        }
    },
    {
        u_id: 6,
        query: "SELECT * FROM articleData WHERE category = 'Science' AND views > 1000 ORDER BY views ASC LIMIT 15;",
        parsedQuery: {
            where: { category: 'Science', views: { '>': 500 } },
            orderBy: 'views',
            orderDirection: 'asc',
            limit: 15,
        }
    },
];
