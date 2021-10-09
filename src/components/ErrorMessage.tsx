import React from "react";
interface IErrorProps {
  onReset: () => void;
}
const ErrorMessage: React.FC<IErrorProps> = ({ onReset }) => {
  return (
    <div>
      <h2>{`Sorry there was an unexpected error`}</h2>
      {`To continue: `}
      <a
        href="/"
        onClick={() => {
          onReset();
        }}
      >
        {`go to home page`}
      </a>
    </div>
  );
};

export default ErrorMessage;
