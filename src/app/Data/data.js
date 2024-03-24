import img1 from '../../../public/img1.png'
import img2 from '../../../public/img2.png'
import img3 from '../../../public/img3.png'
import img4 from '../../../public/img4.png'
import img5 from '../../../public/mstory1.jpg'
import img6 from '../../../public/mstory2.jpg'
// Generate a random date between January 1st, 2024, and February 1st, 2024
function getRandomDate() {
    const startDate = new Date('2024-01-01').getTime();
    const endDate = new Date('2024-02-01').getTime();
    const randomTime = startDate + Math.random() * (endDate - startDate);
    return new Date(randomTime);
}

// Format the date and time
function formatDateTime(dateTime) {
    const year = dateTime.getFullYear();
    const month = String(dateTime.getMonth() + 1).padStart(2, '0');
    const day = String(dateTime.getDate()).padStart(2, '0');
    const hours = String(dateTime.getHours()).padStart(2, '0');
    const minutes = String(dateTime.getMinutes()).padStart(2, '0');
    const seconds = String(dateTime.getSeconds()).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

// Array of objects with random date, time, and user images
const dissData = [
    {
        id: 1,
        name: 'chinmaya kumar',
        sector: 'oil',
        postDetails: "lorem ipsum dolor sit amet, consectetur adipiscing",
        date: formatDateTime(getRandomDate()),
        img: img1 // Add user image path or URL here
    },
    {
        id: 2,
        name: 'John Doe',
        sector: 'finance',
        postDetails: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        date: formatDateTime(getRandomDate()),
        img: img2 // Add user image path or URL here
    },
    {
        id: 3,
        name: 'Jane Smith',
        sector: 'technology',
        postDetails: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        date: formatDateTime(getRandomDate()),
        img: img3 // Add user image path or URL here
    },
    {
        id: 4,
        name: 'Alice Johnson',
        sector: 'healthcare',
        postDetails: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        date: formatDateTime(getRandomDate()),
        img: img4 // Add user image path or URL here
    },
    {
        id: 5,
        name: 'Bob Williams',
        sector: 'automobile',
        postDetails: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        date: formatDateTime(getRandomDate()),
        img: img1 // Add user image path or URL here
    }
];



// You can add more entries to disDat array following the same pattern if needed
const marketStories = [
   
    {
        img: img5,
        title: "Global Stock Markets Reach All-Time High",
        description: "Stock markets around the world surge to record highs as investor confidence grows amidst positive economic indicators.",
        tags: ["Stock Markets", "Economy", "Investing"]
    },
    {
        img: img6,
        title: "Cryptocurrency Adoption Soars",
        description: "Cryptocurrency adoption continues to rise as more businesses and individuals embrace digital currencies for transactions and investments.",
        tags: ["Cryptocurrency", "Digital Currency", "Finance"]
    },
    {
        img: img5,
        title: "Supply Chain Disruptions Impacting Retail Sector",
        description: "Supply chain disruptions lead to shortages and delays in the retail sector, prompting retailers to explore alternative sourcing strategies.",
        tags: ["Supply Chain", "Retail", "Logistics"]
    }
];


// Exporting the arrays
export { dissData, marketStories };
