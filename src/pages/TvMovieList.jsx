import { Box } from '@chakra-ui/react';
import { Item } from '../components/Item';
import { ContainerGrid } from '../components/ContainerGrid';
import { products } from '../components/_data';

const TvMovieList = () => {
    return (
      <Box maxWidth="7xl" marginX="auto" paddingX={10} paddingY={10}>
        <ContainerGrid>
          {products.map((product) => (
            <Item key={product.id} name={product.name} imageUrl={product.imageUrl} rating={product.rating} id={product.id} />
          ))}
        </ContainerGrid>
      </Box>
    )
}

export default TvMovieList;