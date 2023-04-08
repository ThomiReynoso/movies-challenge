import { Box, Button } from '@chakra-ui/react';
import { Item } from '../components/item/Item';
import { ContainerGrid } from '../components/ContainerGrid';
import { tvMovieListStyles } from './styles';
import { useEffect, useState } from 'react';
import { fetchPopularMovies, fetchPopularTvShows } from '../services/movie.service';
import { useDispatch, useSelector } from 'react-redux';
import { setItemKind, setMovies, setTVShows } from '../redux/actions/Index';
import { ItemKind } from '../interfaces/itemKind.enum';


const TvMovieList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState([]);
  const dispatch = useDispatch();
  const itemKind = useSelector((state) => state.itemKind);
  const movies = useSelector((state) => state.movies);
  const tvShows = useSelector((state) => state.tvShows);

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
      {!isLoading &&
        <Box sx={tvMovieListStyles.boxContainer}>
           <Button onClick={toggleList}>Switch List</Button>
          <ContainerGrid>
            {items.map((item) => (
              <Item key={item.id} name={item.title || item.name} imageUrl={item.poster_path} rating={item.vote_average} totalReviews={item.vote_count} id={item.id} />
            ))}
          </ContainerGrid>
        </Box>
      }
    </>
  )
}

export default TvMovieList;