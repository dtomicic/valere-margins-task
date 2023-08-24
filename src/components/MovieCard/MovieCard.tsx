import Image from "react-bootstrap/Image";
import "./MovieCard.css";

const MovieCard = () => {
  return (
    <div className="movie-card">
      <Image
        src="https://image.tmdb.org/t/p/w200/1E5baAaEse26fej7uHcjOgEE2t2.jpg"
        fluid
      />
    </div>
  );
};

export default MovieCard;
