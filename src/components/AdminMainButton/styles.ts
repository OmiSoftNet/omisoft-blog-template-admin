import styled from "@emotion/styled";
import { Button } from "@mui/material";
export const StyledButton = styled(Button)(() => ({
  minWidth: "14vw",
  padding: 10,
  fontWeight: 700,
  fontSize: 17,
  textAlign: "center",
  textTransform: "uppercase",
  cursor: "pointer",
  border: "none",
  borderRadius: 10,
  color: "white",
  backgroundImage: "linear-gradient(to right, #69BDFF 30%, #2196F3  50%)",
}));
