import "./VerticalList.css";
import { IMovie } from "../../types/MovieTypes";

interface IVerticalListProps {
  data: IMovie[];
  sectionTitle: string;
}

const VerticalList = (props: IVerticalListProps) => {
  const { data, sectionTitle } = props;
  const renderList = data.slice(0, 10).map((movie) => {
    return (
      <img
        key={movie.id}
        src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
        alt={`Poster for ${movie.title}`}
      />
    );
  });
  return (
    <div className="vertical-list">
      <h2>{sectionTitle}</h2>
      <div className="list">{renderList}</div>
    </div>
  );
};

export default VerticalList;
