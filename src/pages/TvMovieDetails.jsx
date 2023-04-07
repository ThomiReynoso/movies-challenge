import { Grid, GridItem, Image, Heading, Text, HStack, Box } from '@chakra-ui/react'
import { ExtraInfo } from '../components/ExtraInfo';
import { Item } from '../components/item/Item';
import { productDetails } from '../components/_data';
import { tvMovieDetailsStyles } from './styles'

const TvMovieDetails = () => {
	
    return (
			<Box backgroundColor={"gray.50"}>
				<Grid sx={tvMovieDetailsStyles.gridContainer} >
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
				<HStack sx={tvMovieDetailsStyles.similarStack}>
					{productDetails[0].similar.results.map(similar => (
						<Item key={similar.id} name={similar.name} imageUrl={similar.poster_path} rating={similar.vote_average} id={similar.id} />
					))}
				</HStack>
			</Box>
    )
}

export default TvMovieDetails;