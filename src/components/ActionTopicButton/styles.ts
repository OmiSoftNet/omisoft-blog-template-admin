import styled from "@emotion/styled";
import { Button } from "@mui/material";
export const StyledButton = styled(Button)(() => ({
  minWidth: "7vw",
  paddingTop: 4,
  paddingBottom: 4,
  fontWeight: 700,
  fontSize: 16,
  textAlign: "center",
  textTransform: "inherit",
  cursor: "pointer",
  border: "none",
  borderRadius: 10,
  color: "white",
  backgroundImage: "linear-gradient(to right, #69BDFF 30%, #2196F3  50%)",
}));
