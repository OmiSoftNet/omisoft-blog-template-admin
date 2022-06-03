import styled from "@emotion/styled";
import { Grid, TextField } from "@mui/material";

export const StyledTitle = styled("h1")(() => ({
  fontWeight: 700,
  fontSize: 17,
  color: "#2196F3",
  textTransform: "uppercase",
  margin: "50px 0 13px 0",
}));
export const StyledTitleWrapper = styled("div")(() => ({
  width: "100%",
  background: "inherit",
  position: "sticky",
  top: 0,
  left: "-2px",
  zIndex: 2,
}));

export const StyledGrid = styled(Grid)(() => ({
  marginBottom: 18,
}));
export const StyledGridItem = styled(Grid)(() => ({
  marginBottom: 18,
}));
export const StyledGridBottom = styled(Grid)(() => ({
  display: "flex",
  alignItems: "center",
}));
export const ButtonsWrapper = styled("div")(() => ({
  width: "25vw",
  display: "flex",

  alignItems: "center",
  justifyContent: "space-between",
  marginTop: 10,
  position: "fixed",
  bottom: 10,
  right: "8vw",
}));
export const SaveButtonWrapper = styled(Grid)(() => ({
  marginLeft: 19,
}));

export const StyledWrapper = styled("div")(() => ({
  color: "white",
  padding: "0 40px 0 0",
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
}));
export const TextFieldWrapper = styled(TextField)`
  fieldset {
    border-radius: 10px;
  }
`;
export const StyledStatusButton = styled("button")(() => ({
  borderRadius: 50,
  fontWeight: 400,
  fontSize: 16,
  color: "white",
  border: "none",
  padding: "8px 15px",
  textTransform: "lowercase",
  cursor: "pointer",
}));
export const InputGrid = styled(Grid)(() => ({
  margin: 0,
}));
export const StyledGridSelect = styled(Grid)(() => ({
  display: "flex",
  justifyContent: "flex-end",
  padding: "2px 0",
}));
export const FormWrapper = styled("div")(() => ({
  marginLeft: 1,
  marginTop: 5,
}));
export const StyledTitleGrid = styled(Grid)(() => ({
  padding: "2px 0",
}));
