import Navigation from "./components/Navigation/Navigation";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Discovery from "./pages/Discovery/Discovery";
import Movie from "./pages/Movie/Movie";
import SearchPage from "./pages/SearchPage/SearchPage";
import Favorites from "./pages/Favorites/Favorites";

const App = () => {
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/discovery" element={<Discovery />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/movie/:movieId" element={<Movie />} />
          <Route path="/search/:searchQuery" element={<SearchPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
