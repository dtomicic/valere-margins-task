import Image from "react-bootstrap/Image";
import "./MovieCard.css";
import { IMovie } from "../../types/MovieTypes";

interface IMovieCardProps {
  movie: IMovie;
}

const MovieCard = (props: IMovieCardProps) => {
  const { movie } = props;
  return (
    <div className="movie-card">
      <Image
        src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
        alt={`Poster for ${movie.title}`}
      />
    </div>
  );
};

export default MovieCard;
