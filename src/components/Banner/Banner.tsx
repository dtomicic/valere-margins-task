import { Link } from "react-router-dom";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import "./Banner.css";

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
