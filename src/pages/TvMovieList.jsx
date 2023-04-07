import { Box } from '@chakra-ui/react';
import { Item } from '../components/item/Item';
import { ContainerGrid } from '../components/ContainerGrid';
import { products } from '../components/_data';
import { tvMovieListStyles } from './styles';
import { useEffect, useState } from 'react';
import { fetchPopularMovies } from '../services/movie.service';

const TvMovieList = () => {
  const [ movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function getPopularMovies() {
    const moviesResponse = await fetchPopularMovies();
    setMovies(moviesResponse.results);
    setIsLoading(false);
  }

  useEffect(() => {
    getPopularMovies();
  }, [])
  
  return (
    <>
      {!isLoading &&
        <Box sx={tvMovieListStyles.boxContainer}>
          <ContainerGrid>
            {movies.map((movie) => (
              <Item key={movie.id} name={movie.title} imageUrl={movie.poster_path} rating={movie.vote_average} totalReviews={movie.vote_count} id={movie.id} />
              ))}
          </ContainerGrid>
        </Box>
      }
    </>
  )
}

export default TvMovieList;