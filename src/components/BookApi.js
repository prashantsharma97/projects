import axios from 'axios'; // Importing Axios for HTTP requests

// Function to fetch all books from an API endpoint
const fetchBooks = async () => {
  try {
    const response = await axios.get('https://freetestapi.com/api/v1/books');
    return response.data; // Returning the data received from the API
  } catch (error) {
    console.error('Error fetching data:', error); // Logging error if API request fails
    return null; // Returning null in case of error
  }
};

// Function to search for books based on a query parameter
const searchBooks = async (query) => {
  try {
    const response = await fetch(`https://freetestapi.com/api/v1/books?search=${query}`);
    const data = await response.json(); // Parsing JSON data from response
    return Array.isArray(data) && data.length > 0 ? data : []; // Returning array of books if data is valid
  } catch (error) {
    console.error('Error fetching books:', error); // Logging error if search request fails
    return []; // Returning an empty array in case of error
  }
};

// Exporting fetchBooks and searchBooks functions for use in other modules
export { fetchBooks, searchBooks };
