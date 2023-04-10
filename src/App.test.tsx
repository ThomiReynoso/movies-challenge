import { render, screen, act } from '@testing-library/react';
import App from './App';
import { ItemKind } from './interfaces/itemKind.enum';

import { Provider } from 'react-redux';
import { fetchPopularMovies, fetchPopularTvShows } from './tests/mocks/api-mock';
import mockStore from './tests/mocks/redux-mock-store';

jest.mock('./services/movie.service', () => ({
  fetchPopularMovies: () => fetchPopularMovies(),
  fetchPopularTvShows: () => fetchPopularTvShows(),
}));

test('renders popular movies title', async () => {
  const initialState = {
    itemKind: ItemKind.Kind.Movies,
    movies: [],
    tvShows: [],
  };
  const store = mockStore(initialState);

   // I need to wrapp the component in act because it was throwing a warning when running tests
   await act(async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });
  const linkElement = screen.getByText(/popular/i);
  expect(linkElement).toBeInTheDocument();
});
