import React, { useState, useEffect } from 'react';
import { searchBooks } from './BookApi';

// Search component for filtering books by title
const Search = ({ onSearch, fetchAllBooks }) => {
  const [query, setQuery] = useState(''); // State for search query
  const [loading, setLoading] = useState(false); // State for loading indicator

  // Function to handle search logic
  const handleSearch = async () => {
    if (query.trim() === '') {
      fetchAllBooks(); // Fetch all books if search query is empty
      return;
    }

    setLoading(true); // Start loading state
    try {
      const response = await fetch(`https://freetestapi.com/api/v1/books?search=${query}`); // Fetch books based on search query
      const data = await response.json(); // Parse response JSON

      console.log('Full API response:', data); // Log the entire response

      if (Array.isArray(data) && data.length > 0) {
        onSearch(data); // Pass array of books to callback function
      } else {
        console.warn('No books found in response:', data); // Log warning if no books found
        onSearch([]);
      }
    } catch (error) {
      console.error('Error fetching books:', error); // Log error if fetching fails
      onSearch([]);
    } finally {
      setLoading(false); // End loading state
    }
  };

  // useEffect to fetch all books when search query is empty
  useEffect(() => {
    if (query.trim() === '') {
      fetchAllBooks();
    }
  }, [query, fetchAllBooks]); // Dependency array including query and fetchAllBooks function

  return (
    <div className="search">
      <h1>Find the book <br /> <strong>you've been looking for</strong></h1>
      {/* Input field for search query */}
      <input 
        type="text" 
        placeholder="Search by book title" 
        value={query}
        onChange={(e) => setQuery(e.target.value)} // Update query state on change
      />
      {/* Button to trigger search */}
      <button onClick={handleSearch} disabled={loading}>
        {loading ? 'Searching...' : 'Search'}
      </button>
    </div>
  );
};

export default Search;
