import { Grid, GridItem, Image, Heading, Text, HStack, Box } from '@chakra-ui/react'
import { ExtraInfo } from '../components/ExtraInfo';
import { Item } from '../components/Item';
import { productDetails } from '../components/_data';

const TvMovieDetails = () => {
	
    return (
			<Box backgroundColor={"gray.50"}>
				<Grid 
					margin={"0.5rem 0.5rem 0rem 0.5rem"}
					paddingX={8}
					paddingY={8}
					height={"45vh"}
					gridTemplateColumns={"15% 85%"} gridTemplateRows={"30% 30% 40%"} 
					rowGap={0}
					columnGap={1}
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
							maxHeight={"100%"}
						/>
					</GridItem>
					<GridItem area={'title'}>
						<Heading>
							{productDetails[0].title}
						</Heading>
					</GridItem>
					<GridItem area={'extra_info'}>
						<ExtraInfo voteAverage={productDetails[0].vote_average} releaseDate={productDetails[0].release_date} genres={productDetails[0].genres} runtime={productDetails[0].runtime} />
					</GridItem>
					<GridItem area={'description'}>
						<Text color={"gray.600"} >
							{productDetails[0].overview}
						</Text>
					</GridItem>
				</Grid>
				<Heading ml={5}>Similares</Heading>
				<HStack overflowX={"scroll"} whiteSpace={"nowrap"} maxHeight={"70%"}>
					{productDetails[0].similar.results.map(similar => (
						<Item key={similar.id} name={similar.name} imageUrl={similar.poster_path} rating={similar.vote_average} id={similar.id} />
					))}
				</HStack>
			</Box>
    )
}

export default TvMovieDetails;