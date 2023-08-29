import React from "react";
import { useParams } from "react-router-dom";
import { fetchSearchData } from "../../utils/Api";
import SearchResults from "../../components/SearchResults/SearchResults";

const SearchPage = () => {
  const { searchQuery = "" } = useParams();
  const [searchResults, setSearchResults] = React.useState([]);

  React.useEffect(() => {
    const fetchSearchResults = async () => {
      const response = await fetchSearchData(searchQuery);
      setSearchResults(response.results);
    };

    fetchSearchResults();
  }, [searchQuery]);
  return (
    <section>
      <SearchResults searchQuery={searchQuery} searchResults={searchResults} />
    </section>
  );
};

export default SearchPage;
