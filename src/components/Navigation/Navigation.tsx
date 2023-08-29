import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import SearchForm from "../SearchForm/SearchForm";
import { useNavigate } from "react-router-dom";
import FavoritesDropdown from "../FavoritesDropdown/FavoritesDropdown";

const Navigation = () => {
  const navigate = useNavigate();

  const handleSearchSubmit = (search: string) => {
    navigate(`/search/${search}`);
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-between"
        >
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Discovery</Nav.Link>
            <FavoritesDropdown />
          </Nav>
          <SearchForm onSubmit={handleSearchSubmit} />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
