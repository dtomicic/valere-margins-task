import VerticalList from "../VerticalList/VerticalList";
import { IMovie } from "../../types/MovieTypes";
import "./SearchResults.css";

interface ISearchResultsProps {
    searchQuery: string;
    searchResults: IMovie[];
}

const SearchResults = (props: ISearchResultsProps) => {
    const { searchQuery, searchResults } = props;
  return (
    <div className="search-results">
      <p className="search-results-header">
        Search results for: <span className="accented-text">{searchQuery}</span>
      </p>
      <VerticalList data={searchResults} />
    </div>
  );
};

export default SearchResults;
