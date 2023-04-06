import { Grid, GridItem, Image, Heading, Text, VStack } from '@chakra-ui/react'
import { Rating } from '../components/Rating';
import { productDetails } from '../components/_data';

const TvMovieDetails = () => {
	
    return (
			<Grid 
				paddingX={10}
				paddingY={10}
				height={"60vh"}
				gridTemplateColumns={"20% 80%"} gridTemplateRows={"repeat(3, 1fr)"} gap={4} 
				templateAreas={`
					"image title"
					"image extra_info"
					"image description"
				`}
			>
				<GridItem area={'image'}>
					<Image
            rounded={'lg'}
            src={productDetails[0].poster_path}
          />
				</GridItem>
				<GridItem area={'title'}>
					<Heading>
						{productDetails[0].title}
					</Heading>
				</GridItem>
				<GridItem area={'extra_info'}>
					<VStack>
						<Rating rating={productDetails[0].vote_average} numReviews={12}/>
					</VStack>
				</GridItem>
				<GridItem area={'description'}>
					<Text>
						{productDetails[0].overview}
					</Text>
				</GridItem>
				
			</Grid>
    )
}

export default TvMovieDetails;