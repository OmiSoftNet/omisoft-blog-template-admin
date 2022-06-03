import { StyledButton } from "./styles";

type Props = {
  text: string;
  onClick: (values: any) => void;
  type?: "button" | "reset" | "submit";
};

const CancelButton: React.FC<Props> = ({ text, onClick, type = "submit" }) => {
  return (
    <StyledButton
      sx={{ "&:hover": { backgroundColor: "#f1a855" } }}
      onClick={onClick}
      type={type}
    >
      {text}
    </StyledButton>
  );
};
export default CancelButton;
