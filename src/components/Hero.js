import {
  Box,
  Button,
  Flex,
  Img,
  Spacer,
  Text,
  useMediaQuery,
} from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import Image1 from '../assets/the-hobbit.webp';
import Image2 from '../assets/the-hobbit2.webp';
import Image3 from '../assets/the-hobbit3.webp';
import bgImage from '../assets/bg-1.jpg';

// Hero component for displaying a featured section with images and text
const Hero = () => {
  const [isLargerThanLG] = useMediaQuery('(min-width: 62em)'); // Media query hook for responsive design
  const [currentImage, setCurrentImage] = useState(0); // State to manage current image index
  const images = [Image1, Image2, Image3]; // Array of images

  // Automatically change image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Interval time in milliseconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, [images.length]); // useEffect dependencies

  return (
    <Flex
      alignItems="center"
      w="full"
      px={isLargerThanLG ? '16' : '6'}
      py="16"
      minHeight="90vh"
      justifyContent="space-between"
      flexDirection={isLargerThanLG ? 'row' : 'column'}
      backgroundImage={bgImage}
    >
      {/* Text and button section */}
      <Box mr={isLargerThanLG ? '6' : '0'} w={isLargerThanLG ? '60%' : 'full'}>
        <Text
          fontSize={isLargerThanLG ? '5xl' : '4xl'}
          fontWeight="bold"
          mb="4"
        >
          Mock Book's {/* Main heading */}
        </Text>

        <Text mb="6" fontSize={isLargerThanLG ? 'lg' : 'base'} opacity={0.7}>
          Explore a diverse collection of books including novels, history, and more. {/* Subtitle */}
          Discover captivating stories and insightful narratives that cater to every reader's taste.
        </Text>

        {/* Button to navigate to BookDetails page */}
        <Button
          w="200px"
          colorScheme="blue"
          variant="solid"
          h="50px"
          size={isLargerThanLG ? 'lg' : 'md'}
          mb={isLargerThanLG ? '0' : '10'}
          onClick={(e) => {
            e.preventDefault();
            window.location.href = '/BookDetails';
          }}
        >
          Latest collection
        </Button>
      </Box>
      
      <Spacer />

      {/* Image section */}
      <Flex
        w={isLargerThanLG ? '40%' : 'full'}
        alignItems="center"
        justifyContent="center"
      >
        <Img src={images[currentImage]} alt="Chakra UI" maxHeight={500} />
      </Flex>
    </Flex>
  );
};

export default Hero;
