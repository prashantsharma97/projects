import { Flex, Text } from '@chakra-ui/react';
import React from 'react';

// Footer component for displaying a simple footer
const Footer = () => {
  return (
    <Flex
      w="full"
      bg="blackAlpha.50"
      minHeight="20vh"
      flexDirection="column"
      alignItems="center"
      textAlign="center"
      justifyContent="center"
      bgColor={'black'}
    >
      {/* Text content of the footer */}
      <Text opacity="0.5" color={'white'}>Footer</Text>
    </Flex>
  );
};

export default Footer;
