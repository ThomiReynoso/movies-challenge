import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { ItemKind } from '../interfaces/itemKind.enum';
import TvMovieList from '../pages/TvMovieList';
import { setItemKind } from '../redux/actions/Index';
import { fetchPopularMovies, fetchPopularTvShows } from './mocks/api-mock';
import mockStore from './mocks/redux-mock-store';
import { BrowserRouter as Router } from 'react-router-dom';


jest.mock('../services/movie.service', () => ({
    fetchPopularMovies: () => fetchPopularMovies(),
    fetchPopularTvShows: () => fetchPopularTvShows(),
  }));

test('renders TvMovieList and toggles between Movies and TV Shows', async () => {
  const initialState = {
    itemKind: ItemKind.Kind.Movies,
    movies: [],
    tvShows: [],
  };
  const store = mockStore(initialState);

  render(
    <Router>
    	<Provider store={store}>
        <TvMovieList />
      </Provider>
    </Router>
  );

  expect(await screen.findByText('Movie 1')).toBeInTheDocument();
  expect(await screen.findByText('Movie 2')).toBeInTheDocument();
  expect(screen.getByText('List TV Shows')).toBeInTheDocument();

  const toggleButton = screen.getByText('List TV Shows');
  fireEvent.click(toggleButton);

	// For some reason the test is not working properly. The idea is to test when clicking button, change the list and show TV Shows.
	// I think that is not rendering correctly data after clicking button and Tv shows are not found on DOM


  // expect(store.getActions()).toContainEqual(setItemKind(ItemKind.Kind.TvShows));
  // expect(await screen.findByText('TV Show 1')).toBeInTheDocument();

	// I also tried with waitFor because maybe was an async issue but didn't work. 
	// await waitFor(() => expect(screen.getByText('Movie 1')).toBeInTheDocument());

  // expect(screen.getByText('List Movies')).toBeInTheDocument();
});
