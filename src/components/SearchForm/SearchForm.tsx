import React from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import Input from "../Input/Input";

interface ISearchFormProps {
  onSubmit?: (search: string) => void;
}

const SearchForm = (props: ISearchFormProps) => {
  const { onSubmit } = props;
  const [search, setSearch] = React.useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(search);
    }
    navigate(`/search/${search}`);
    setSearch("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col xs="auto">
          <Input
            type="text"
            placeholder="Search"
            onChange={handleChange}
            value={search}
          />
        </Col>
        <Col xs="auto">
          <ButtonComponent text="Search" type="submit" />
        </Col>
      </Row>
    </Form>
  );
};

export default SearchForm;
