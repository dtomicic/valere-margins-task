import { Link } from "react-router-dom";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import "./ErrorPage.css";

const ErrorPage = () => {
  return (
    <section>
      <div className="error-page">
        <h1>404</h1>
        <p>Page not found</p>
        <Link to="/">
          <ButtonComponent text="Go back to homepage" type="button" />
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage;
