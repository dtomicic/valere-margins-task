import Navigation from "./components/Navigation/Navigation";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Discovery from "./pages/Discovery/Discovery";
import Movie from "./pages/Movie/Movie";

const App = () => {
  return (
    <>
      <Navigation />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/discovery" element={<Discovery />} />
          <Route path="/movie/:movieId" element={<Movie />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
