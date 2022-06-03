import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const StyledContainer = styled("div")(() => ({
  fontSize: 20,
  fontWeight: 400,
  minWidth: 235,
  padding: "40px 40px 10px 40px",
  overflowX: "hidden",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
}));
export const StyledAppVersion = styled("div")(() => ({
  fontFamily: "Montserrat, sans-serif",
  fontStyle: "normal",
  color: "white",
  textAlign: "center",
  fontWeight: 700,
  fontSize: 16,
}));
export const LinkWrapper = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
}));

export const StyledLink = styled(NavLink)(() => ({
  textDecoration: "none",
  width: "100%",
}));
export const StyledButton = styled("button")(() => ({
  color: "white",
  fontFamily: "Nunito, sans-serif",
  fontStyle: "normal",
  fontSize: 18,
  fontWeight: 500,
  textTransform: "none",
  width: "100%",
  borderRadius: 10,
  padding: "7%",
  display: "flex",
  justifyContent: "space-around",
  border: "none",
  cursor: "pointer",
}));
export const StyledLogo = styled("h1")(() => ({
  color: "white",
  fontSize: 36,
  marginTop: 0,
}));
export const StyledMenuImg = styled("img")(() => ({
  width: 23,
  height: 18,
  marginLeft: 3,
  marginRight: 3,
}));
export const StyledMenImg = styled("img")(() => ({
  width: 30,
  height: 18,
}));
export const ButtonWrapper = styled("div")(() => ({
  maxWidth: 235,
}));
export const ButtonContent = styled("div")(() => ({
  display: "flex",
}));
export const ButtonImgWrapper = styled("div")(() => ({
  width: "40%",
}));
export const ButtonTextWrapper = styled("div")(() => ({
  width: "60%",
  textAlign: "left",
}));
export const StyledImg = styled("img")(() => ({
  width: "100%",
  maxHeight: 25,
  marginTop: 6,
}));
export const LogoWrapper = styled("div")(() => ({
  display: "flex",
  alignSelf: "center",
  maxWidth: 190,
  height: 43,
  marginBottom: 15,
}));
