import React from "react";
import VerticalList from "../VerticalList/VerticalList";
import { IMovie } from "../../types/MovieTypes";
import { fetchPaginatedData } from "../../utils/Api";
import "./NewestMovies.css";
import GenreSelect from "../GenreSelect/GenreSelect";
import YearFilter from "../YearFilter/YearFilter";

const NewestMovies = () => {
  const [newestMovies, setNewestMovies] = React.useState<IMovie[]>([]);
  const [filteredMovies, setFilteredMovies] = React.useState<IMovie[]>([]);

  const [selectedGenre, setSelectedGenre] = React.useState<number>(0);
  const [selectedYear, setSelectedYear] = React.useState<number>(0);

  const newestMoviesUrl =
    "https://api.themoviedb.org/3/discover/movie?language=en-US&page=1";

  React.useEffect(() => {
    const fetchNewestMovies = async () => {
      const responseNewestMovies = await fetchPaginatedData(newestMoviesUrl, 5);
      setNewestMovies(responseNewestMovies);
      setFilteredMovies(responseNewestMovies);
    };

    fetchNewestMovies();
  }, [newestMoviesUrl]);

  const handleGenreSelect = (genreId: number) => {
    setSelectedGenre(genreId);
    applyFilters(genreId, selectedYear);
  };

  const handleYearSelect = (year: number) => {
    setSelectedYear(year);
    applyFilters(selectedGenre, year);
  };

  const applyFilters = (genreId: number, year: number) => {
    let filtered = newestMovies;

    if (genreId !== 0) {
      filtered = filtered.filter((movie) => movie.genre_ids.includes(genreId));
    }

    if (year !== 0) {
      filtered = filtered.filter((movie) => {
        const movieYear = new Date(movie.release_date).getFullYear();
        return movieYear === year;
      });
    }

    setFilteredMovies(filtered);
  };

  return (
    <div className="newest-movies">
      <div className="filters">
        <GenreSelect onGenreSelect={handleGenreSelect} />
        <YearFilter onYearSelect={handleYearSelect} />
      </div>
      <VerticalList data={filteredMovies} />
    </div>
  );
};

export default NewestMovies;
