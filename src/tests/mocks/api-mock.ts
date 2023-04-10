export const fetchPopularMovies = async () => {
    return {
      results: [
        {
          id: 1,
          title: 'Movie 1',
          poster_path: '/movie1.jpg',
          vote_average: 8.0,
          vote_count: 1000,
        },
        {
          id: 2,
          title: 'Movie 2',
          poster_path: '/movie2.jpg',
          vote_average: 8.5,
          vote_count: 1500,
        },
      ],
    };
  };
  
  export const fetchPopularTvShows = async () => {
    return {
      results: [
        {
          id: 3,
          name: 'TV Show 1',
          poster_path: '/tvshow1.jpg',
          vote_average: 7.5,
          vote_count: 800,
        },
        {
          id: 4,
          name: 'TV Show 2',
          poster_path: '/tvshow2.jpg',
          vote_average: 9.0,
          vote_count: 2000,
        },
      ],
    };
  };
  