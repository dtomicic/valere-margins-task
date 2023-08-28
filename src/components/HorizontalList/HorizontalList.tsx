import "./HorizontalList.css";
import { IMovie } from "../../types/MovieTypes";
import MovieCard from "../MovieCard/MovieCard";

interface IHorizontalListProps {
  data: IMovie[];
  sectionTitle: string;
}

const HorizontalList = (props: IHorizontalListProps) => {
  const { data, sectionTitle } = props;
  const renderList = data.slice(0, 10).map((movie) => {
    return (
      <MovieCard
        key={movie.id}
        movie={movie}
      />
    );
  });
  return (
    <div className="horizontal-list">
      <h2>{sectionTitle}</h2>
      <div className="list">{renderList}</div>
    </div>
  );
};

export default HorizontalList;
