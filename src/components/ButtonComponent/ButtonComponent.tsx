import React from "react";
import Button from "react-bootstrap/Button";

interface IButtonComponentProps {
  type: "submit" | "button";
  text: string;
  onClick?: () => void;
}

const ButtonComponent = (props: IButtonComponentProps) => {
  const { type = "button", text, onClick } = props;
  return <Button type={type} onClick={onClick}>{text}</Button>;
};

export default ButtonComponent;
