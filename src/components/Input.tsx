import React from "react";

type InputType = "text" | "password";

interface InputProps {
  type: InputType;
  placeholder: string;
  required: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
}

const Input = ({
  type,
  placeholder,
  required,
  value,
  onChange,
  name,
}: InputProps) => {
  return (
    <Input
      type={type}
      placeholder={placeholder}
      required={required}
      value={value}
      onChange={onChange}
      name={name}
    />
  );
};

Input.defaultProps = {
  type: "text",
};

export default Input;
