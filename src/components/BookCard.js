import React from 'react';
import { Box, Flex, Image, Heading, Text } from '@chakra-ui/react';

// Functional component representing a book card
const BookCard = ({ title, author, publication_year, cover_image, description }) => {
    return (
        <Flex className="book-card" flexDirection={{ base: 'column', md: 'row' }} boxShadow="md" maxW="md" borderWidth="1px" borderRadius="17px" overflow="hidden">
            {/* Book cover image */}
            <Image src={cover_image} alt={title} height={{ base: 'auto', md: '160px' }} width={{ base: '100%', md: 'auto' }} />

            <Box p="4">
                {/* Book title with truncation and tooltip */}
                <Heading as="h2" size="md" mb="1" title={title}>{title}</Heading>
                {/* Author */}
                <Text fontSize="sm" mb="1">{author}</Text>
                {/* Publication year */}
                <Text fontSize="sm" mb="1">{publication_year}</Text>
                {/* Description with truncation and tooltip */}
                <Text fontSize="sm" title={description}>{description}</Text>
            </Box>
        </Flex>
    );
};

export default BookCard;
