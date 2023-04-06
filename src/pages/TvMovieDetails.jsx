import { Grid, GridItem, Image, Heading, Text, HStack, StackDivider } from '@chakra-ui/react'
import { Rating } from '../components/Rating';
import { productDetails } from '../components/_data';
import { getYearFromDate, toHoursAndMinutes } from '../utils/datetime';

const TvMovieDetails = () => {
	
    return (
			<Grid 
				paddingX={10}
				paddingY={10}
				height={"50vh"}
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
					<HStack divider={<StackDivider borderColor='gray.200' />} spacing={4}>
						<Rating rating={productDetails[0].vote_average} numReviews={12}/>
						<Text>{toHoursAndMinutes(productDetails[0].runtime)}</Text>
						<Text>{getYearFromDate(productDetails[0].release_date)}</Text> {/*first_air_date para tv shows*/}
					</HStack>
				</GridItem>
				<GridItem area={'description'}>
					<Text>
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
    )
}

export default TvMovieDetails;