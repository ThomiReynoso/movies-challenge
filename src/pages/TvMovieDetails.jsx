import { Grid, GridItem, Image, Heading, Text, HStack, Box, List, ListItem } from '@chakra-ui/react'
import { ExtraInfo } from '../components/ExtraInfo';
import { Item } from '../components/item/Item';
import { tvMovieDetailsStyles } from './styles'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMovie, fetchTvShow } from '../services/movie.service';
import { getImageUrl } from '../utils/images';
import { NO_IMG_URL } from '../utils/constants';
import { ItemKind } from '../interfaces/itemKind.enum';
import { useSelector } from 'react-redux';

const TvMovieDetails = () => {
	const { id } = useParams();
	const [ item, setItem ] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const itemKind = useSelector((state) => state.itemKind);
	const MAX_ACTORS_SHOWED = 10;
  
	async function getMovie() {
	  const movie = await fetchMovie(id);
	  setItem(movie);
		setIsLoading(false);
	}

	async function getTvShow() {
	  const tvShow = await fetchTvShow(id);
	  setItem(tvShow);
		setIsLoading(false);
	}

	useEffect(() => {
		if (itemKind === ItemKind.Kind.Movies) {
			getMovie();
		} else {
			getTvShow();
		}
	}, [id])
	
    return (
			<>
			{!isLoading &&
				<Box backgroundColor={"gray.50"} height={"100vh"}>
					<Grid sx={tvMovieDetailsStyles.gridContainer} >
						<GridItem area={'image'}>
							<Image
								rounded={'lg'}
								src={item.poster_path ? getImageUrl("w200", item.poster_path) : NO_IMG_URL}
								height={"100%"}
							/>
						</GridItem>
						<GridItem area={'title'}>
							<Heading>{item.title || item.name}</Heading>
							<Text fontSize={"lg"} color={"gray.500"}>{item.original_title || item.original_name}</Text>
						</GridItem>
						<GridItem area={'extra_info'}>
							<ExtraInfo voteAverage={item.vote_average} totalVotes={item.vote_count} releaseDate={item.release_date || item.first_air_date} genres={item.genres} runtime={item.runtime} amountSeasons={item.seasons?.length}/>
						</GridItem>
						<GridItem area={'description'}>
							<Text color={"gray.600"} noOfLines={4}>
								{item.overview}
							</Text>
						</GridItem>
						<GridItem area={"actors"}>
							<Text as={"span"} fontWeight={"bold"}>Actors:</Text>{' '}
							{item.credits.cast.slice(0,MAX_ACTORS_SHOWED).map(cast => (cast.name)).join(', ')}
						</GridItem>
					</Grid>
					{item.similar.results.length > 0 && 
						<>
							<Heading ml={8}>Similars</Heading>
							<HStack sx={tvMovieDetailsStyles.similarStack} spacing={4}>
								{item.similar.results.map(similar => (
									<Item key={similar.id} name={similar.title || similar.name} imageUrl={similar.poster_path} rating={similar.vote_average} id={similar.id} totalReviews={similar.vote_count} />
									))}
							</HStack>
						</>
					}
				</Box>
				}
			</>
    )
}

export default TvMovieDetails;