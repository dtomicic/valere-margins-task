import React from "react";
import { IMovie } from "../../types/MovieTypes";
import { fetchMovies } from "../../utils/Api";
import Banner from "../../components/Banner/Banner";
import HorizontalList from "../../components/HorizontalList/HorizontalList";

const Home = () => {
  const [popularMovies, setPopularMovies] = React.useState<IMovie[]>([]);
  const [upcomingMovies, setUpcomingMovies] = React.useState<IMovie[]>([]);

  const popularMoviesUrl = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${process.env.REACT_APP_API_KEY}`;

  const upcomingMoviesUrl = `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&api_key=${process.env.REACT_APP_API_KEY}`;

  React.useEffect(() => {
    const fetchPopularMovies = async () => {
      const popularMovies = await fetchMovies(popularMoviesUrl);
      setPopularMovies(popularMovies.results);
    };

    const fetchUpcomingMovies = async () => {
      const upcomingMovies = await fetchMovies(upcomingMoviesUrl);
      setUpcomingMovies(upcomingMovies.results);
    };

    fetchPopularMovies();
    fetchUpcomingMovies();
  }, [popularMoviesUrl, upcomingMoviesUrl]);

  return (
    <section>
      <Banner />
      <HorizontalList data={popularMovies} sectionTitle="Popular Movies" />
      <HorizontalList data={upcomingMovies} sectionTitle="Upcoming Movies" />
    </section>
  );
};

export default Home;