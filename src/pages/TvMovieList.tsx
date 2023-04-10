import { Box, Button, Flex, Heading, Skeleton, Text } from '@chakra-ui/react';
import { Item } from '../components/item/Item';
import { ContainerGrid } from '../components/ContainerGrid';
import { tvMovieListStyles } from './styles';
import { useEffect, useState } from 'react';
import { fetchPopularMovies, fetchPopularTvShows } from '../services/movie.service';
import { useDispatch, useSelector } from 'react-redux';
import { setItemKind, setMovies, setTVShows } from '../redux/actions/Index';
import { ItemKind } from '../interfaces/itemKind.enum';
import { TitleButtonList } from '../components/TitleButtonList';
import { Movie } from '../interfaces/movie';
import { TVShow } from '../interfaces/TvShow';
import { ContextState } from '../redux/interfaces';

const TvMovieList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState<Movie[] | TVShow[]>([]);
  const dispatch = useDispatch();
  const itemKind = useSelector((state: ContextState) => state.itemKind);
  const movies = useSelector((state: ContextState) => state.movies);
  const tvShows = useSelector((state: ContextState) => state.tvShows);

  async function getPopularMovies() {
    const moviesResponse = await fetchPopularMovies();
    dispatch(setMovies(moviesResponse.results));
    setItems(moviesResponse.results)
  }

  async function getPopularTVShows() {
    const showsResponse = await fetchPopularTvShows();
    dispatch(setTVShows(showsResponse.results))
  }

  useEffect(() => {
    getPopularMovies();
    getPopularTVShows();
    dispatch(setItemKind(ItemKind.Kind.Movies));
    setIsLoading(false);
  }, []);

  const toggleList = () => {
    const newItemKind = itemKind === ItemKind.Kind.Movies ? ItemKind.Kind.TvShows : ItemKind.Kind.Movies;
    dispatch(setItemKind(newItemKind));
    if(newItemKind === ItemKind.Kind.Movies) {
      setItems(movies);
    } else {
      setItems(tvShows);
    }
  };
  
  return (
    <>
      {isLoading ? <Skeleton startColor='gray.700' endColor='gray.100' height={'100vh'} fadeDuration={2} isLoaded={!isLoading}/> :
        <Box sx={tvMovieListStyles.boxContainer}>
          <TitleButtonList itemKind={itemKind} toggleList={toggleList}/>
          <ContainerGrid>
            {items.map((item: any) => (
              <Item key={item.id} name={item.title|| item.name} imageUrl={item.poster_path} rating={item.vote_average} totalReviews={item.vote_count} id={item.id} />
            ))}
          </ContainerGrid>
        </Box>
      }
    </>
  )
}

export default TvMovieList;