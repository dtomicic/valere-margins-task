import { useFavoritesContext } from "../../context/FavoritesContext";
import FavoritesList from "../../components/FavoritesList/FavoritesList";

const Favorites = () => {
  const { favorites } = useFavoritesContext();

  return (
    <section>
        <FavoritesList movies={favorites} />
    </section>
  );
};

export default Favorites;
