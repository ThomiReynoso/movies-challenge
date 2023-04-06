import { Box } from '@chakra-ui/react';
import { Item } from '../components/Item';
import { ProductGrid } from '../components/ProductGrid';
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
        <ProductGrid>
          {products.map((product) => (
            <Item key={product.id} product={product} />
          ))}
        </ProductGrid>
      </Box>
    )
}

export default TvMovieList;