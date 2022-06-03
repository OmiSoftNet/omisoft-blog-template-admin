import { styled } from "@mui/material";

export const StyledFooter = styled("div")(() => ({
  background: "#333333",
}));

export const MainFooterContent = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",
}));

export const Divider = styled("div")(() => ({
  height: 1,
  background: "white",
}));

export const StyledLinks = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
  flexDirection: "row",
  margin: theme.spacing(0, 0),
}));

export const Socials = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  gap: theme.spacing(4),
  position: "relative",
  alignItems: "center",
  marginBottom: 0,
}));

export const ImageLink = styled("a")(({ theme }) => ({
  position: "relative",
  display: "block",
  width: 38,
  height: 38,
}));

export const InfoText = styled("p")(({ theme }) => ({
  textAlign: "center",
  margin: 0,
  padding: "15px 0",
  fontSize: 14,
  color: "white",
}));
export const StyledLink = styled("a")(() => ({
  color: "white",
  fontWeight: 600,
  textDecoration: "none",
  cursor: "pointer",
}));
export const StyledTitles = styled("h6")(() => ({
  color: "white",
  fontWeight: 600,
  fontSize: 16,
  textDecoration: "none",
}));
