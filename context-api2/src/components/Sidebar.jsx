import { Box, Text } from '@chakra-ui/react';
import { useContext } from 'react';
import { AuthContext } from '../AuthContext';
import { ThemeContext } from '../ThemeContext';

const Sidebar = () => {
    const { isLoggedIn } = useContext(AuthContext);
    const { theme } = useContext(ThemeContext);

    return (
        <Box
            minW={['0', '200px']}
            display={['none', 'block']}
            bg={theme === 'light' ? 'gray.200' : 'gray.600'}
            p="4"
        >
            {isLoggedIn && <Text>Welcome, User!</Text>}
        </Box>
    );
};

export default Sidebar;
