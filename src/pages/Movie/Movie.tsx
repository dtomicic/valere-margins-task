import React from "react";
import { useParams } from "react-router-dom";
import { IMovie } from "../../types/MovieTypes";
import { fetchMovieDetails } from "../../utils/Api";
import MovieDetails from "../../components/MovieDetails/MovieDetails";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

const Movie = () => {
  const { movieId = "" } = useParams();
  const [movieDetails, setMovieDetails] = React.useState<IMovie>();

  React.useEffect(() => {
    const fetchMovie = async () => {
      const response = await fetchMovieDetails(movieId);
      setMovieDetails(response);
    };
    fetchMovie();
  }, [movieId]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <section>
      {movieDetails.status_code === 34 ? (
        <ErrorMessage message="Movie not found!" />
      ) : (
        <MovieDetails movieDetails={movieDetails} />
      )}
    </section>
  );
};

export default Movie;
