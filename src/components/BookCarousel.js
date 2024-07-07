import {
  Flex,
  Spacer,
  Image,
  Text,
  Button,
  useMediaQuery,
} from '@chakra-ui/react';
import { fetchBooks } from './BookApi';// Importing fetchBooks function from BookApi
import React, { useEffect, useState } from 'react'; // Importing useHistory for navigation
import bgImage from '../assets/bg-1.jpg';

const BookCarousel = () => {
  const [isLargerThanLG] = useMediaQuery('(min-width: 62em)'); // Media query hook for responsive design
  const [books, setBooks] = useState(null); // State to hold fetched books data

  useEffect(() => {
    const fetchData = async () => {
      const booksData = await fetchBooks(); // Fetching books data
      if (booksData) {
        setBooks(booksData); // Setting fetched books data to state
      }
    };

    fetchData(); // Calling fetchData function 
  }, []);

  return (
    <Flex
      width="full"
      minHeight="70vh"
      alignItems="center"
      px={isLargerThanLG ? '16' : '6'}
      py="16"
      justifyContent="center"
      flexDirection={isLargerThanLG ? 'row' : 'column'}
      backgroundImage={bgImage}
    >
      {books && (
        <>
         {/* Left side: Displaying main book image */}
          <Flex
            w={isLargerThanLG ? '40%' : 'full'}
            mb={isLargerThanLG ? '0' : '6'}
            alignItems="center"
            justifyContent="center"
          >
            <Image src={books[0].cover_image} alt={books[0].title} w="450px" height={"400"} />
          </Flex>
          <Spacer />
           {/* Right side: Displaying book title, description, and 'See More' button */}
          <Flex
            w={isLargerThanLG ? '60%' : 'full'}
            flexDirection="column"
            ml={isLargerThanLG ? '7' : '0'}
          >
            <Text fontSize={isLargerThanLG ? '5xl' : '4xl'} fontWeight="bold">
              {books[0].title}
            </Text>

            <Text mb="6" opacity="0.8">
              {books[0].description}
            </Text>

            {/* 'See More' button to navigate to BookDetails page */}
            <Button width="200px" size="lg" colorScheme="blue" onClick={(e) => {
              e.preventDefault();
              window.location.href = '/BookDetails';
            }}>
              See More
            </Button>
          </Flex>
        </>
      )}
    </Flex>
  );
};

export default BookCarousel;
