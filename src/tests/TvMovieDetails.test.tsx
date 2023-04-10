import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { fetchMovie, fetchTvShow } from '../services/movie.service';
import { ItemKind } from '../interfaces/itemKind.enum';
import TvMovieDetails from '../pages/TvMovieDetails';


jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn(),
}));

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useSelector: jest.fn(),
  }));

jest.mock('../services/movie.service', () => ({
    fetchMovie: jest.fn(),
    fetchTvShow: jest.fn(),
  }));

const mockStore = configureStore([]);

const mockMovie = {
  id: 1,
  title: 'Movie 1',
  original_title: 'Original Movie 1',
  poster_path: 'path/to/movie1.jpg',
  vote_average: 8.0,
  vote_count: 1000,
  release_date: '2022-01-01',
  genres: [{ id: 1, name: 'Action' }],
  runtime: 120,
  overview: 'A description of the movie',
  credits: { cast: [{ id: 1, name: 'Actor 1' }, { id: 2, name: 'Actor 2' }] },
  similar: { results: [] },
};

const mockTvShow = {
  ...mockMovie,
  title: null,
  original_title: null,
  name: 'TV Show 1',
  original_name: 'Original TV Show 1',
  first_air_date: '2022-01-01',
  seasons: [{ id: 1 }, { id: 2 }],
};

describe('TvMovieDetails', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders movie details', async () => {
    
    (useParams as jest.Mock).mockReturnValue({ id: '1' });
    (useSelector as jest.Mock).mockReturnValue(ItemKind.Kind.Movies);
    (fetchMovie as jest.Mock).mockResolvedValue(mockMovie);
    (fetchTvShow as jest.Mock).mockResolvedValue(mockTvShow);

    const store = mockStore({});

    render(
      <Router>
        <Provider store={store}>
          <TvMovieDetails />
        </Provider>
      </Router>
    );

    await waitFor(() => expect(screen.getByText('Movie 1')).toBeInTheDocument());
    expect(screen.getByText('Original Movie 1')).toBeInTheDocument();
    expect(screen.getByText('A description of the movie')).toBeInTheDocument();
    expect(screen.getByText('Actor 1, Actor 2')).toBeInTheDocument();
  });

  it('renders TV show details', async () => {
    (useParams as jest.Mock).mockReturnValue({ id: '1' });
    (useSelector as jest.Mock).mockReturnValue(ItemKind.Kind.TvShows);
    (fetchMovie as jest.Mock).mockResolvedValue(mockMovie);
    (fetchTvShow as jest.Mock).mockResolvedValue(mockTvShow);

    const store = mockStore({});

    render(
      <Router>
        <Provider store={store}>
          <TvMovieDetails />
        </Provider>
      </Router>
    );

    await waitFor(() => expect(screen.getByText('TV Show 1')).toBeInTheDocument());
    expect(screen.getByText('Original TV Show 1')).toBeInTheDocument();
    expect(screen.getByText('A description of the movie')).toBeInTheDocument();
    expect(screen.getByText('Actor 1, Actor 2')).toBeInTheDocument();
    });

})