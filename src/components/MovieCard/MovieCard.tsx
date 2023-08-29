import Image from "react-bootstrap/Image";
import "./MovieCard.css";
import { IMovie } from "../../types/MovieTypes";
import { Link } from "react-router-dom";

interface IMovieCardProps {
  movie: IMovie;
}

const MovieCard = (props: IMovieCardProps) => {
  const { movie } = props;
  return (
    <div className="movie-card">
      <Link to={`/movie/${movie.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
          alt={`Poster for ${movie.title}`}
        />
      </Link>
    </div>
  );
};

export default MovieCard;
