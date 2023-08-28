import React from "react";
import { IGenre } from "../../types/GenreTypes";
import { fetchGenres } from "../../utils/Api";
import Form from 'react-bootstrap/Form';

const GenreSelect = () => {
  const [genres, setGenres] = React.useState<IGenre[]>([]);

  React.useEffect(() => {
    const getGenres = async () => {
      const response = await fetchGenres();
      setGenres(response);
    };

    getGenres();
  }, []);

  const renderOptions = genres.map((genre) => {
    return (
      <option key={genre.id} value={genre.id}>
        {genre.name}
      </option>
    );
  });

  return (
    <Form.Select>
      <option>Select genre</option>
      {renderOptions}
    </Form.Select>
  );
};

export default GenreSelect;
