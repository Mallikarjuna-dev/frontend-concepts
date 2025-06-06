import React, { useContext } from 'react';
import {
  ChakraProvider,
  Box,
  Flex,
  Grid,
  Button,
  extendTheme,
} from '@chakra-ui/react';
// import { extendTheme } from '@chakra-ui/theme';
import { AuthContextProvider, AuthContext } from './AuthContext';
import { ThemeContextProvider, ThemeContext } from './ThemeContext';

const customTheme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  colors: {
    brand: {
      100: "#f7fafc",
      900: "#1a202c",
    },
  },
});

function Content() {
  const { isLoggedIn, toggleAuth } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const bgNav = theme === 'light' ? 'gray.100' : 'gray.700';
  const bgCard = theme === 'light' ? 'gray.200' : 'gray.600';
  const bgFooter = theme === 'light' ? 'gray.300' : 'gray.800';
  const textColor = theme === 'light' ? 'black' : 'white';

  return (
    <Box minH="100vh" bg={theme === 'light' ? 'white' : 'gray.900'} color={textColor}>
      <Flex as="nav" p="4" bg={bgNav} justifyContent="space-between">
        <Button onClick={toggleAuth}>
          {isLoggedIn ? 'Log Out' : 'Log In'}
        </Button>
        <Button onClick={toggleTheme}>
          Toggle to {theme === 'light' ? 'Dark' : 'Light'} Theme
        </Button>
      </Flex>

      <Grid
        templateColumns={['1fr', 'repeat(2, 1fr)', 'repeat(3, 1fr)']}
        gap="4"
        p="4"
      >
        {['Card 1', 'Card 2', 'Card 3', 'Card 4'].map((card) => (
          <Box key={card} p="6" shadow="md" bg={bgCard} borderRadius="md">
            {card}
          </Box>
        ))}
      </Grid>

      <Box as="footer" p="4" bg={bgFooter} textAlign="center">
        {isLoggedIn ? 'Welcome, User' : 'Please log in'}
      </Box>
    </Box>
  );
}

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <ThemeContextProvider>
        <AuthContextProvider>
          <Content />
        </AuthContextProvider>
      </ThemeContextProvider>
    </ChakraProvider>
  );
}

export default App;
