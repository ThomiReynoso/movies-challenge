import { Grid, GridItem, Image, Heading, Text, HStack, Box } from '@chakra-ui/react'
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
								maxHeight={"100%"}
							/>
						</GridItem>
						<GridItem area={'title'}>
							<Heading>
								{item.title || item.name}
							</Heading>
						</GridItem>
						<GridItem area={'extra_info'}>
							<ExtraInfo voteAverage={item.vote_average} releaseDate={item.release_date || item.first_air_date} genres={item.genres} runtime={item.runtime} amountSeasons={item.seasons?.length}/>
						</GridItem>
						<GridItem area={'description'}>
							<Text color={"gray.600"} >
								{item.overview}
							</Text>
							<Text>
								{item.credits.cast.slice(0,10).map(cast => (cast.name)).join(', ')}
							</Text>
						</GridItem>
					</Grid>
					{item.similar.results.length > 0 && 
						<>
							<Heading ml={5}>Similares</Heading>
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