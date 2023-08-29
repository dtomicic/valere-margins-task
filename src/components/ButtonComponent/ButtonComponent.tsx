import React from "react";
import Button from "react-bootstrap/Button";

interface IButtonComponentProps {
  type: "submit" | "button";
  text: string;
  variant?: "primary" | "light" | "success";
  className?: string;
  onClick?: () => void;
}

const ButtonComponent = (props: IButtonComponentProps) => {
  const { type = "button", text, variant = "primary", className, onClick } = props;
  return (
    <Button type={type} onClick={onClick} variant={variant} className={className}>
      {text}
    </Button>
  );
};

export default ButtonComponent;
