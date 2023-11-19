// Function to generate a random date between January 1, 2020, and the current date
const generateRandomDate = () => {
    const start = new Date(2020, 0, 1);
    const end = new Date();
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};

// Function to generate a random category from a predefined list
const generateRandomCategory = () => {
    const categories = ['Technology', 'Science', 'Business', 'Health', 'Entertainment'];
    const randomIndex = Math.floor(Math.random() * categories.length);
    return categories[randomIndex];
};

// Function to generate a random entry with given ID
const generateRandomEntry = (id) => {
    // Ensure that the first 7 entries have author_id set to 96
    const authorId96Count = Math.min(Math.floor(Math.random() * 7) + 1, 7);

    return {
        id: id,
        title: `Article ${id}`,
        category: generateRandomCategory(),
        views: Math.floor(Math.random() * 20000) + 1000,
        date_published: generateRandomDate().toISOString().split('T')[0],   // Format date as YYYY-MM-DD
        author_id: (id <= authorId96Count) ? 96 : Math.floor(Math.random() * 100) + 1,
    };
};

// Generate an array of 250 random entries using the generateRandomEntry function
export const jsonData = Array.from({ length: 250 }, (_, index) => generateRandomEntry(index + 1));


