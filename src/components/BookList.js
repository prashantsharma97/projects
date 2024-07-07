import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Axios for making HTTP requests
import { useMediaQuery, Box, Flex } from '@chakra-ui/react'; // Chakra UI components
import { useDisclosure } from '@chakra-ui/react'; // Chakra UI hook for modal control
import BookModal from './BookModal'; // Modal component for displaying book details
import { fetchBooks } from './BookApi'; // Importing fetchBooks function from BookApi
import './main.css'; // Custom CSS file
import 'dragscroll'; // External library for scrollable elements
import bgImage from '../assets/bg-1.jpg';


const BookList = () => {
  const [books, setBooks] = useState(null); // State to hold books data
  const { isOpen, onOpen, onClose } = useDisclosure(); // Hooks for managing modal state
  const [selectedBook, setSelectedBook] = useState(null); // State to manage selected book

  useEffect(() => {
    const fetchData = async () => {
      try {
        const booksData = await fetchBooks(); // Fetching books data using fetchBooks function
        if (booksData) {
          setBooks(booksData); // Setting fetched books to state
        }
      } catch (error) {
        console.error('Error fetching books:', error); // Logging error if fetching fails
      }
    };

    fetchData(); // Calling fetchData function on component mount
  }, []); // useEffect dependency array

  // Function to open modal and set selected book
  const openModal = (book) => {
    setSelectedBook(book); // Setting selected book to state
    onOpen(); // Opening modal
  };

  return (
    <>
      {/* Wrapper for scrollable cards */}
      <Box backgroundImage={bgImage}>
        <h1 className='font-56' style={{ paddingTop: '10px', textAlign: 'center' }}>Book's </h1>


        <div className="cards-wrapper dragscroll" style={{ display: 'flex', overflowX: 'auto' }}>
          {/* Mapping through books and rendering each as a card */}
          {books && books.map(book => (
            <div key={book.id} onClick={() => openModal(book)} className="card" style={{ marginBottom: '20px', textAlign: 'center', cursor: 'pointer' }}>
              {/* Book cover image */}
              <img src={book.cover_image} alt={book.title} style={{ width: '170px', height: '200px' }} />
              {/* Book title */}
              <h3 className='font-17 Over-flow2' title={book.title} style={{ marginTop: '10px' }}>{book.title}</h3>
            </div>
          ))}
        </div>
        {/* Modal component for displaying book details */}
        <BookModal isOpen={isOpen} onClose={onClose} selectedBook={selectedBook} />
      </Box>
    </>
  );
};

export default BookList;
