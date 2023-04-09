import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
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
          <Flex justifyContent={"space-between"} marginBottom={"1rem"}>
            <Heading>Popular
              <Text as={"span"} color={"green.500"}>{itemKind === ItemKind.Kind.Movies ? " Movies" : " TV Shows"}</Text>
            </Heading>
            <Button onClick={toggleList} variant={"outline"} colorScheme={'green'} rounded={'full'} px={6}  _hover={{ bg: 'green.500', color: 'white'}}>
              {itemKind === ItemKind.Kind.Movies ? "List TV Shows" : "List Movies"}
            </Button>
          </Flex>
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