interface IProps {
  msg?: string;
}

const InputErrorMessage = ({ msg }: IProps) => {
  return msg ? (
    <span className="block text-primary text-sm text-right">{msg}</span>
  ) : null;
};

export default InputErrorMessage;
