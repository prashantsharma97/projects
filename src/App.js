import React, { useRef } from 'react';
import { useDisclosure, Box } from '@chakra-ui/react';
import Nav from './components/Nav';
import { Routes, Route } from 'react-router-dom';
import BookList from './components/BookList';
import BookDetail from './components/BookDetail';
import Hero from './components/Hero';
import BookCarousel from './components/BookCarousel';
import Footer from './components/Footer';

function App() {
  // Using Chakra UI's hook for managing open/close state of drawer
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(); // Ref for navigation button

  return (
    <Box>
      {/* Navigation component with reference to open drawer */}
      <Nav ref={btnRef} onOpen={onOpen} />
      <Routes>
        {/* Route for the home page */}
        <Route path="/" element={<Home />} />
        {/* Route for book details page */}
        <Route path="/BookDetails" element={<BookDetail  />} />
      </Routes>
    </Box>
  );
}

// Home component containing various sections
const Home = () => (
  <>
    <Hero /> {/* Hero section */}
    <BookList /> {/* List of books */}
    <BookCarousel /> {/* Carousel of books */}
    <Footer /> {/* Footer component */}
  </>
);

export default App;
