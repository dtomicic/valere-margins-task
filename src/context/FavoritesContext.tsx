import React from "react";
import { IMovie } from "../types/MovieTypes";

interface IFavoritesContext {
  favorites: IMovie[];
  toggleFavorite: (movie: IMovie) => void;
}

const FavoritesContext = React.createContext<IFavoritesContext>({
  favorites: [],
  toggleFavorite: () => {},
});

export const useFavoritesContext = () => {
  return React.useContext(FavoritesContext);
};

interface FavoritesProviderProps {
  children: React.ReactNode;
}

export const FavoritesProvider: React.FC<FavoritesProviderProps> = ({
  children,
}) => {
  const [favorites, setFavorites] = React.useState<IMovie[]>([]);

  React.useEffect(() => {
    const storedFavorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );
    setFavorites(storedFavorites);
  }, []);

  const toggleFavorite = (movie: IMovie) => {
    const updatedFavorites = favorites.some((fav) => fav.id === movie.id)
      ? favorites.filter((fav) => fav.id !== movie.id)
      : [...favorites, movie];

    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
