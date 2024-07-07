import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Text,
  useDisclosure,
  Flex,
} from '@chakra-ui/react';

// Modal component for displaying detailed book information
const BookModal = ({ isOpen, onClose, selectedBook }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{selectedBook && selectedBook.title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {selectedBook && (
            <Flex justifyContent="center" alignItems="center" flexDirection="column">
              {/* Book cover image */}
              <img src={selectedBook.cover_image} alt={selectedBook.title} style={{ width: '200px', height: '280px', marginBottom: '20px' }} />
              {/* Book author */}
              <h2>{selectedBook.author}</h2>
              {/* Publication year */}
              <p><strong>Publication Year:</strong> {selectedBook.publication_year}</p>
              {/* Genre */}
              <p><strong>Genre:</strong> {selectedBook.genre.join(', ')}</p>
              {/* Book description */}
              <Text fontSize="lg" alignItems={"center"}><strong>Description:</strong> {selectedBook.description}</Text>
            </Flex>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default BookModal;
