import React, { useEffect, useState, useCallback } from 'react';
import { Grid, GridItem, Spinner } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import Search from './Search';
import BookCard from './BookCard';
import { fetchBooks } from './BookApi'; // Importing fetchBooks function from BookApi
import bgImage from '../assets/bg-2.jpg';


const BookDetail = () => {
  const [books, setBooks] = useState(null); // State to hold books data
  const [loading, setLoading] = useState(false); // State to manage loading state
  const { id } = useParams(); // Accessing URL parameters (if any)

  // Function to fetch all books
  const fetchAllBooks = useCallback(async () => {
    setLoading(true); // Setting loading state to true

    try {
      const booksData = await fetchBooks(); // Fetching books data
      console.log('Fetched books:', booksData); // Logging fetched books data
      setBooks(booksData); // Setting fetched books to state
    } catch (error) {
      console.error('Error fetching books:', error); // Logging error if fetching fails
      setBooks([]); // Setting books to empty array in case of error
    } finally {
      setLoading(false); // Setting loading state to false after fetching completes
    }
  }, []); // useCallback dependencies

  // Function to handle search results
  const handleSearch = async (searchResults) => {
    console.log('Search results:', searchResults); // Logging search results
    setBooks(searchResults); // Setting search results to books state
  };

  useEffect(() => {
    fetchAllBooks(); // Fetching books data on component mount
  }, [fetchAllBooks]); // useEffect dependencies

  return (
    <>
      {/* Search component for searching books */}
      <Search onSearch={handleSearch} fetchAllBooks={fetchAllBooks} />

      {/* Grid layout for displaying books */}
      <Grid
        templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }} // Responsive grid layout
        gap={7} // Gap between grid items
        padding={6} // Padding for grid container
        backgroundImage={bgImage}
      >
        {/* Conditional rendering based on loading state and books data */}
        {loading ? (
          // Display spinner while loading
          <GridItem colSpan={2} textAlign="center">
            <Spinner size="lg" color="blue.500" />
          </GridItem>
        ) : books ? (
          // Display books if books data is available
          books.length > 0 ? (
            books.map((book, index) => (
              <GridItem key={index} colSpan={1}>
                {/* Display each book using BookCard component */}
                <BookCard {...book} />
              </GridItem>
            ))
          ) : (
            // Display message if no books are found
            <GridItem colSpan={2} textAlign="center">
              <p>No books found.</p>
            </GridItem>
          )
        ) : (
          // Display loading message if books data is null
          <GridItem colSpan={2} textAlign="center">
            <p>Loading...</p>
          </GridItem>
        )}
      </Grid>
    </>
  );
};

export default BookDetail;
