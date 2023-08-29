import React from "react";
import { IMovie } from "../../types/MovieTypes";
import VerticalList from "../VerticalList/VerticalList";
import "./FavoritesList.css";

interface IFavoritesListProps {
  movies: IMovie[];
}

const FavoritesList = (props: IFavoritesListProps) => {
  const { movies } = props;

  return (
    <div className="favorites-list">
      <h2 className="favorites-list-header">Your favorited movies</h2>
      {movies.length > 0 ? (
        <VerticalList data={movies} />
      ) : (
        <p className="favorites-list-text">
          You haven't favorited any movies yet
        </p>
      )}
    </div>
  );
};

export default FavoritesList;
