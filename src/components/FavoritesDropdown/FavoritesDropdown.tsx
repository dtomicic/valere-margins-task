import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "react-bootstrap/Image";
import { IMovie } from "../../types/MovieTypes";
import { useFavoritesContext } from "../../context/FavoritesContext";
import "./FavoritesDropdown.css";

const FavoritesDropdown = () => {
  const { favorites } = useFavoritesContext();

  const favoritesLimit = 5;
  const favoritesToRender = favorites.slice(0, favoritesLimit);

  const renderFavorites = favoritesToRender.map((movie: IMovie) => (
    <NavDropdown.Item key={movie.id} href={`/movie/${movie.id}`}>
      <Image
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w185/${movie.poster_path}`
            : "/images/image_not_found.png"
        }
        alt={`Poster for ${movie.title}`}
        className="favorites-dropdown-poster"
      />
      {movie.title}
    </NavDropdown.Item>
  ));

  return (
    <NavDropdown title="Favorited movies" menuVariant="light">
      {renderFavorites.length ? (
        <>
          {renderFavorites}
          <NavDropdown.Divider />
          <NavDropdown.Item href="/favorites">
            See all favorites
          </NavDropdown.Item>
        </>
      ) : (
        <NavDropdown.ItemText>No favorites yet</NavDropdown.ItemText>
      )}
    </NavDropdown>
  );
};

export default FavoritesDropdown;
