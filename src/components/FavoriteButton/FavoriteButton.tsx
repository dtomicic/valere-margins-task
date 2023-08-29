import React from "react";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import { IMovie } from "../../types/MovieTypes";
import { useFavoritesContext } from "../../context/FavoritesContext";

interface IFavoriteButtonProps {
  movie: IMovie;
  className?: string;
}

const FavoriteButton = (props: IFavoriteButtonProps) => {
  const { movie, className } = props;
  const { favorites, toggleFavorite } = useFavoritesContext();
  const isFavorite = favorites.some((fav) => fav.id === movie.id);

  return (
    <ButtonComponent
      text={isFavorite ? "Unfavorite" : "Favorite"}
      variant={isFavorite ? "success" : "light"}
      type="button"
      className={className}
      onClick={() => toggleFavorite(movie)}
    />
  );
};

export default FavoriteButton;
