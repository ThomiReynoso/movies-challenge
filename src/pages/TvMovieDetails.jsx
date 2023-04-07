import { Grid, GridItem, Image, Heading, Text, HStack, Box } from '@chakra-ui/react'
import { ExtraInfo } from '../components/ExtraInfo';
import { Item } from '../components/item/Item';
import { tvMovieDetailsStyles } from './styles'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMovie } from '../services/movie.service';
import { getImageUrl } from '../utils/images';

const TvMovieDetails = () => {
	const { id } = useParams();
	const [ movie, setMovie] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
  
	async function getMovie() {
	  const movieResponse = await fetchMovie(id);
	  setMovie(movieResponse);
	  setIsLoading(false);
	}
  
	useEffect(() => {
	  getMovie();
	}, [])
	
    return (
			<>
			{!isLoading &&
				<Box backgroundColor={"gray.50"}>
					<Grid sx={tvMovieDetailsStyles.gridContainer} >
						<GridItem area={'image'}>
							<Image
								rounded={'lg'}
								src={getImageUrl("w200", movie.poster_path)}
								maxHeight={"100%"}
							/>
						</GridItem>
						<GridItem area={'title'}>
							<Heading>
								{movie.title || movie.name}
							</Heading>
						</GridItem>
						<GridItem area={'extra_info'}>
							<ExtraInfo voteAverage={movie.vote_average} releaseDate={movie.release_date} genres={movie.genres} runtime={movie.runtime} />
						</GridItem>
						<GridItem area={'description'}>
							<Text color={"gray.600"} >
								{movie.overview}
							</Text>
						</GridItem>
					</Grid>
					<Heading ml={5}>Similares</Heading>
					<HStack sx={tvMovieDetailsStyles.similarStack}>
						{movie.similar.results.map(similar => (
							<Item key={similar.id} name={similar.title || similar.name} imageUrl={similar.poster_path} rating={similar.vote_average} id={similar.id} totalReviews={similar.vote_count} />
						))}
					</HStack>
				</Box>
				}
			</>
    )
}

export default TvMovieDetails;