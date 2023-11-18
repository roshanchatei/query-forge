const generateRandomDate = () => {
    const start = new Date(2020, 0, 1);
    const end = new Date();
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};

const generateRandomCategory = () => {
    const categories = ['Technology', 'Science', 'Business', 'Health', 'Entertainment'];
    const randomIndex = Math.floor(Math.random() * categories.length);
    return categories[randomIndex];
};

const generateRandomEntry = (id) => ({
    id: id,
    title: `Article ${id}`,
    category: generateRandomCategory(),
    views: Math.floor(Math.random() * 20000) + 1000,
    date_published: generateRandomDate().toISOString().split('T')[0],
    author_id: Math.floor(Math.random() * 100) + 1,
});

export const jsonData = Array.from({ length: 250 }, (_, index) => generateRandomEntry(index + 1));


