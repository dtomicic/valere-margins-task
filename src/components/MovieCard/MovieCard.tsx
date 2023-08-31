import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import { IMovie } from "../../types/MovieTypes";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import "./MovieCard.css";

interface IMovieCardProps {
  movie: IMovie;
}

const MovieCard = (props: IMovieCardProps) => {
  const { movie } = props;
  return (
    <div className="movie-card">
      <FavoriteButton
        className="favorite-button"
        movie={movie}
      />
      <Link to={`/movie/${movie.id}`}>
        <Image
          src={movie.poster_path ? `https://image.tmdb.org/t/p/w185/${movie.poster_path}` : "/images/image_not_found.png"}
          alt={`Poster for ${movie.title}`}
        />
      </Link>
    </div>
  );
};

export default MovieCard;
