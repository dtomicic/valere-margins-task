import "./Banner.css";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="banner">
      <div className="hero-text">
        <h1 className="hero-text-header">Explore your favorite movies</h1>
        <Link to="/discovery">
          <ButtonComponent text="Discover movies" type="button" />
        </Link>
      </div>
    </div>
  );
};

export default Banner;
