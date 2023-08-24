import Navigation from "./components/Navigation/Navigation";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <>
      <Navigation />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
