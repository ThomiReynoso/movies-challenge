import { Box } from '@chakra-ui/react';
import { Item } from '../components/Item';
import { ContainerGrid } from '../components/ContainerGrid';
import { products } from '../components/_data';
import { tvMovieListStyles } from './styles';

const TvMovieList = () => {
    return (
      <Box sx={tvMovieListStyles.boxContainer}>
        <ContainerGrid>
          {products.map((product) => (
            <Item key={product.id} name={product.name} imageUrl={product.imageUrl} rating={product.rating} id={product.id} />
          ))}
        </ContainerGrid>
      </Box>
    )
}

export default TvMovieList;