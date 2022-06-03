import styled from "@emotion/styled";
import { Button, TextField } from "@mui/material";

export const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 417,
  height: 499,
  bgcolor: "background.paper",
  border: "none",
  borderRadius: "12px",
  boxShadow: "0px 4px 20px rgba(60, 133, 191, 0.18)",
  p: 4,
};

export const ClosedEyeButton = styled("button")(() => ({
  backgroundColor: "transparent",
  backgroundImage: "url('/images/closed-eye.svg')",
  width: 29,
  height: 29,
  border: "none",
  outline: "none",
  cursor: "pointer",
  position: "absolute",
  marginTop: 26,
  marginLeft: -50,
}));

export const OpenEyeButton = styled("button")(() => ({
  backgroundColor: "transparent",
  backgroundImage: "url('/images/open-eye.svg')",
  width: 29,
  height: 29,
  border: "none",
  outline: "none",
  cursor: "pointer",
  position: "absolute",
  marginTop: 26,
  marginLeft: -50,
}));

export const StyledText = styled("p")(() => ({
  fontSize: 24,
  fontWeight: "800",
  display: "flex",
  justifyContent: "center",
  marginBottom: 60,
}));

export const StyledButtonContainer = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
}));

export const StyledFormicError = styled("p")(() => ({
  color: "red",
  padding: 0,
  margin: 0,
}));

export const TextFieldWrapper = styled(TextField)`
  fieldset {
    border-radius: 10px;
    padding-top: 11px;
  }
`;
export const StyledFormButton = styled(Button)(({ disabled, type }) => ({
  minWidth: 153,
  padding: "15px 0",
  fontWeight: 700,
  fontSize: 17,
  textAlign: "center",
  textTransform: "uppercase",
  cursor: "pointer",
  border: "none",
  borderRadius: 10,
  color: "white",
  lineHeight: "1.21",
  backgroundImage: disabled
    ? "#CAC7C7"
    : type === "submit"
    ? "linear-gradient(to right, #FEB25B 0%, #faab50  50%)"
    : "linear-gradient(to right, #86e8fe 0%, #2196F3  50%)",
  marginTop: 50,
}));
