import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Importing global CSS styles
import App from './App'; // Importing the main App component
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'; // Chakra UI components for styling
import theme from './theme'; // Custom Chakra UI theme
import { BrowserRouter as Router } from 'react-router-dom'; // Router for managing navigation

// Using ReactDOM's createRoot method for concurrent mode rendering
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendering the entire application wrapped in necessary providers and components
root.render(
  <React.StrictMode>
    <ChakraProvider>
      {/* Initializing Chakra UI color mode with custom theme */}
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      {/* Using BrowserRouter for routing */}
      <Router>
        {/* Main App component */}
        <App />
      </Router>
    </ChakraProvider>
  </React.StrictMode>
);
