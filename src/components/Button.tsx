type ButtonType = "button" | "submit";
interface ButtonProps {
  title: string;
  type: ButtonType;
  disabled: boolean;
}

const Button = ({ title, type, disabled }: ButtonProps) => {
  return (
    <input type={type} disabled={disabled}>
      {title}
    </input>
  );
};

Button.defaultProps = {
  type: "Submit",
};

export default Button;
