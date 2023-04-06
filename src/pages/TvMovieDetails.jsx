import { Grid, GridItem, Image, Heading, Text, HStack, StackDivider, Box } from '@chakra-ui/react'
import { Item } from '../components/Item';
import { Rating } from '../components/Rating';
import { productDetails } from '../components/_data';
import { getYearFromDate, toHoursAndMinutes } from '../utils/datetime';

const TvMovieDetails = () => {
	
    return (
			<Box backgroundColor={"gray.50"}>
				<Grid 
					margin={"1rem 1rem 0rem 1rem"}
					paddingX={10}
					paddingY={10}
					height={"45vh"}
					gridTemplateColumns={"15% 85%"} gridTemplateRows={"repeat(3, 1fr)"} 
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
						<HStack divider={<StackDivider borderColor='gray.300' />} spacing={4} borderColor={"gray.300"} borderWidth={"thin"} rounded={"lg"}>
							<Rating rating={productDetails[0].vote_average} numReviews={12}/>
							<Text>{toHoursAndMinutes(productDetails[0].runtime)}</Text>
							<Text>{getYearFromDate(productDetails[0].release_date)}</Text> {/*first_air_date para tv shows*/}
						</HStack>
					</GridItem>
					<GridItem area={'description'}>
						<Text color={"gray.600"} >
							{productDetails[0].overview}
						</Text>
						<HStack>
							<Text fontWeight={"bold"}>
								Genero:
							</Text>
							<Text>
								{productDetails[0].genres.map(g => g.name).join(', ')}
							</Text>
						</HStack>
					</GridItem>
				</Grid>
				<Heading ml={5}>Similares</Heading>
				<HStack overflowX={"scroll"} whiteSpace={"nowrap"}>
					{productDetails[0].similar.results.map(similar => (
						<Item key={similar.id} name={similar.name} imageUrl={similar.poster_path} rating={similar.vote_average} id={similar.id} />
					))}
				</HStack>
			</Box>
    )
}

export default TvMovieDetails;