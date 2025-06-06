import { Flex, Button, Text } from '@chakra-ui/react';
import { useContext } from 'react';
import { AuthContext } from '../AuthContext';
import { ThemeContext } from '../ThemeContext';

const Navbar = () => {
    const { isLoggedIn, toggleAuth } = useContext(AuthContext);
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <Flex
            justify="space-between"
            align="center"
            p="4"
            bg={theme === 'light' ? 'gray.100' : 'gray.700'}
            color={theme === 'light' ? 'black' : 'white'}
        >
            <Text>{isLoggedIn ? 'Logged In' : 'Logged Out'}</Text>
            <Flex gap={3}>
                <Button onClick={toggleAuth}>{isLoggedIn ? 'Logout' : 'Login'}</Button>
                <Button onClick={toggleTheme}>
                    {theme === 'light' ? 'Dark' : 'Light'} Theme
                </Button>
            </Flex>
        </Flex>
    );
};

export default Navbar;
