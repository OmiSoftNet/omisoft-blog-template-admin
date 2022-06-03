import styled from "@emotion/styled";
import { Button, Stack } from "@mui/material";

export const StyledControlTitle = styled(Button)(() => ({
  fontWeight: "700",
  fontSize: 17,
  color: "white",
  textTransform: "none",
}));

export const MenuBox = styled(Stack)(() => ({
  zIndex: 3,
  display: "flex",
  alignItems: "flex-end",
}));
