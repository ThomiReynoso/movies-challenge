import { Box, Button } from '@chakra-ui/react';
import { Item } from '../components/item/Item';
import { ContainerGrid } from '../components/ContainerGrid';
import { tvMovieListStyles } from './styles';
import { useEffect, useState } from 'react';
import { fetchPopularMovies, fetchPopularTvShows } from '../services/movie.service';
import { useDispatch, useSelector } from 'react-redux';
import { setItemKind, setMovies, setTVShows } from '../redux/actions/Index';


const TvMovieList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [ items, setItems ] = useState([]);
  const dispatch = useDispatch();
  const listType = useSelector((state) => state.listType);
  const movies = useSelector((state) => state.movies);
  const tvShows = useSelector((state) => state.tvShows);

  async function getPopularMovies() {
    const moviesResponse = await fetchPopularMovies();
    //setMovies(moviesResponse.results);
    dispatch(setMovies(moviesResponse.results));
    setItems(moviesResponse.results)
  }
  
  async function fetchTVShows() {
    const showsResponse = await fetchPopularTvShows();

    dispatch(setTVShows(showsResponse.results))
  }

  // useEffect(() => {
  //   getPopularMovies();
  // }, [])

  useEffect(() => {
    // Fetch the data from APIs only once
    getPopularMovies();
    fetchTVShows();
    setIsLoading(false);
  }, []);

  const toggleList = () => {
    const newListType = listType === 'movies' ? 'tvShows' : 'movies';
    dispatch(setItemKind(newListType));
    if( newListType === 'movies') {
      setItems(movies)
    } else {
      setItems(tvShows)
    }
  };
  
  return (
    <>
      {!isLoading &&
        <Box sx={tvMovieListStyles.boxContainer}>
           <Button onClick={toggleList}>Switch List</Button>
          <ContainerGrid>
            {items.map((movie) => (
              <Item key={movie.id} name={movie.title || movie.name} imageUrl={movie.poster_path} rating={movie.vote_average} totalReviews={movie.vote_count} id={movie.id} />
            ))}
          </ContainerGrid>
        </Box>
      }
    </>
  )
}

export default TvMovieList;