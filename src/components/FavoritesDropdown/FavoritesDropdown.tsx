import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "react-bootstrap/Image";
import { IMovie } from "../../types/MovieTypes";
import { Link } from "react-router-dom";
import { useFavoritesContext } from "../../context/FavoritesContext";
import "./FavoritesDropdown.css";

const FavoritesDropdown = () => {
  const { favorites } = useFavoritesContext();

  const favoritesLimit = 5;
  const favoritesToRender = favorites.slice(0, favoritesLimit);

  const renderFavorites = favoritesToRender.map((movie: IMovie) => (
    <NavDropdown.Item key={movie.id}>
      <Link to={`/movie/${movie.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
          alt={`Poster for ${movie.title}`}
          className="favorites-dropdown-poster"
        />
        {movie.title}
      </Link>
    </NavDropdown.Item>
  ));

  return (
    <NavDropdown title="Favorited movies" menuVariant="light">
      {renderFavorites.length ? (
        <>
          {renderFavorites}
          <NavDropdown.Divider />
          <NavDropdown.Item>
            <Link to="/favorites">See all favorites</Link>
          </NavDropdown.Item>
        </>
      ) : (
        <NavDropdown.ItemText>No favorites yet</NavDropdown.ItemText>
      )}
    </NavDropdown>
  );
};

export default FavoritesDropdown;
