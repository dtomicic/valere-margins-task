import React from "react";
import { IMovie } from "../../types/MovieTypes";
import { fetchMovies } from "../../utils/Api";
import HorizontalList from "../HorizontalList/HorizontalList";

const PopularMovies = () => {
  const [popularActionMovies, setPopularActionMovies] = React.useState<IMovie[]>([]);
  const [popularComedyMovies, setPopularComedyMovies] = React.useState<IMovie[]>([]);

  const popularActionMoviesUrl = `https://api.themoviedb.org/3/discover/movie?language=en-US&page=1&with_genres=28&api_key=${process.env.REACT_APP_API_KEY}`;
  const popularComedyMoviesUrl = `https://api.themoviedb.org/3/discover/movie?language=en-US&page=1&with_genres=35&api_key=${process.env.REACT_APP_API_KEY}`;

  React.useEffect(() => {
    const fetchPopularActionMovies = async () => {
      const responseActionMovies = await fetchMovies(popularActionMoviesUrl);
      setPopularActionMovies(responseActionMovies.results);
    };

    const fetchPopularComedyMovies = async () => {
      const responseComedyMovies = await fetchMovies(popularComedyMoviesUrl);
      setPopularComedyMovies(responseComedyMovies.results);
    };

    fetchPopularActionMovies();
    fetchPopularComedyMovies();
  }, [popularActionMoviesUrl, popularComedyMoviesUrl]);

  return (
    <div>
        <HorizontalList data={popularActionMovies} sectionTitle="Popular action movies" />
        <HorizontalList data={popularComedyMovies} sectionTitle="Popular comedy movies" />
    </div>
  );
};

export default PopularMovies;
