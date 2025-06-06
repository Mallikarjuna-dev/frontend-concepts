import { Grid, Box, Text } from '@chakra-ui/react';
import { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

const products = ['Product 1', 'Product 2', 'Product 3', 'Product 4'];

const MainContent = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <Grid
            templateColumns={['1fr', 'repeat(2, 1fr)', 'repeat(3, 1fr)']}
            gap={4}
            p={4}
            flex="1"
        >
            {products.map((product) => (
                <Box
                    key={product}
                    p="6"
                    borderRadius="md"
                    bg={theme === 'light' ? 'gray.100' : 'gray.700'}
                    color={theme === 'light' ? 'black' : 'white'}
                    shadow="md"
                >
                    <Text>{product}</Text>
                </Box>
            ))}
        </Grid>
    );
};

export default MainContent;
