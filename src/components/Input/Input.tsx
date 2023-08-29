import React from "react";
import Form from "react-bootstrap/Form";

interface IInputProps {
  type: string;
  placeholder: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = (props: IInputProps) => {
  const { type, placeholder, onChange, value } = props;
  return (
    <Form.Control
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};

export default Input;
