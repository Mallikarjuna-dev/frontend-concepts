import { ChakraProvider, Flex } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import { ThemeContextProvider } from './ThemeContext';
import { AuthContextProvider } from './AuthContext';
import { extendTheme } from '@chakra-ui/react';

const customTheme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
});

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <ThemeContextProvider>
        <AuthContextProvider>
          <Flex direction="column" minH="100vh">
            <Navbar />
            <Flex flex="1">
              <Sidebar />
              <MainContent />
            </Flex>
            <Footer />
          </Flex>
        </AuthContextProvider>
      </ThemeContextProvider>
    </ChakraProvider>
  );
}

export default App;
