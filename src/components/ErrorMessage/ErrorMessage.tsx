import "./ErrorMessage.css";

interface IErrorMessageProps {
  message: string;
}

const ErrorMessage = (props: IErrorMessageProps) => {
  const { message } = props;
  return (
    <div className="error-message">
      <h3>{message}</h3>
    </div>
  );
};

export default ErrorMessage;
