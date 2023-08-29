import Image from "react-bootstrap/Image";
import { IMovie } from "../../types/MovieTypes";
import "./MovieDetails.css";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

interface IMovieDetailsProps {
    movieDetails: IMovie;
}

const MovieDetails = (props: IMovieDetailsProps) => {
    const { movieDetails } = props;
  return (
    <div className="movie-details">
      <div>
        <Image
          src={`https://image.tmdb.org/t/p/w300/${movieDetails.poster_path}`}
          alt={`Poster for ${movieDetails.title}`}
        />
      </div>
      <div className="movie-details-info">
        <h2>{movieDetails.title}</h2>
        <p><span className="accented-text">Overview:</span> {movieDetails.overview}</p>
        <p><span className="accented-text">Release date:</span> {movieDetails.release_date}</p>
        <FavoriteButton movie={movieDetails} />
      </div>
    </div>
  );
};

export default MovieDetails;
