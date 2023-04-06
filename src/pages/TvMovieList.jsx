import { Box } from '@chakra-ui/react';
import { Item } from '../components/Item';
import { ContainerGrid } from '../components/ContainerGrid';
import { products } from '../components/_data';

const TvMovieList = () => {
    return (
      <Box
				maxWidth="7xl"
				marginX="auto"
				paddingX={{
					base: '4',
					md: '8',
					lg: '12',
				}}
				paddingY={{
					base: '6',
					md: '8',
					lg: '12',
				}}
    	>
        <ContainerGrid>
          {products.map((product) => (
            <Item key={product.id} product={product} />
          ))}
        </ContainerGrid>
      </Box>
    )
}

export default TvMovieList;