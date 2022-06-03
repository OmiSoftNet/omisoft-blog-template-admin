import { StyledButton } from "./styles";

type Props = {
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "reset" | "submit";
};

const ActionTopicButton: React.FC<Props> = ({
  text,
  onClick,
  type = "submit",
}) => {
  return (
    <StyledButton
      sx={{
        "&:hover": {
          backgroundImage:
            "linear-gradient(to right, #62b1ef 30%, #2090e9  50%)",
        },
      }}
      onClick={onClick}
      type={type}
    >
      {text}
    </StyledButton>
  );
};
export default ActionTopicButton;
