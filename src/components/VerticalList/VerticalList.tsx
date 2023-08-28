import { IMovie } from "../../types/MovieTypes";
import MovieCard from "../MovieCard/MovieCard";
import "./VerticalList.css";

interface IVerticalListProps {
  data: IMovie[];
}

const VerticalList = (props: IVerticalListProps) => {
  const { data } = props;
  const renderList = data.map((movie) => <MovieCard key={movie.id} movie={movie} />);
  return <div className="vertical-list">{renderList}</div>;
};

export default VerticalList;
