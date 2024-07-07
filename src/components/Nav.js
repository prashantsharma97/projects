import React, { useState } from 'react';
import {
  Text,
  Flex,
  Spacer,
  IconButton,
  useColorMode,
  useColorModeValue,
  useMediaQuery,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

// Navigation bar component
const Nav = () => {
  const [scroll, setScroll] = useState(false); // State to manage scroll position
  const { colorMode, toggleColorMode } = useColorMode(); // Hook for managing color mode (light/dark)
  const navBg = useColorModeValue('black', 'black'); // Background color based on color mode
  const [isLargerThanMD] = useMediaQuery('(min-width: 48em)'); // Media query for responsive design

  // Function to detect scroll position and update state
  // const changeScroll = () =>
  //   document.body.scrollTop > 80 || document.documentElement.scrollTop > 80
  //     ? setScroll(true)
  //     : setScroll(false);

  // window.addEventListener('scroll', changeScroll); // Event listener for scroll position change

  return (
    <Flex
      h="10vh"
      alignItems="center"
      p="6"
      boxShadow={scroll ? 'base' : 'none'}
      position="sticky"
      top="0"
      zIndex="sticky"
      w="full"
      bg={navBg}
    >
      {/* Logo or brand text */}
      <Text fontSize="xl" fontWeight="bold" color={"white"}>
        MockBook
      </Text>
      
      <Spacer />
      
      {/* Uncomment the following section to include a color mode switcher */}
      {/* <Flex alignItems="center">
        <IconButton mr="10" w={6} h={6} p={5} onClick={toggleColorMode}>
          {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </IconButton>
      </Flex> */}
    </Flex>
  );
};

export default Nav;
