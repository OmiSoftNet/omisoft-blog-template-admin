import styled from "@emotion/styled";

export const StyledWrapper = styled("div")(() => ({
  color: "white",
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
  paddingRight: 40,
  height: "100%",
}));

export const StyledContainer = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  overflow: "auto",
  overflowY: "scroll",
  backgroundColor: "white",
  borderRadius: "10px 10px 0 0",
  padding: "0 30px 30px 30px",
  flexGrow: 1,
  position: "relative",
  width: "96%",
}));
export const MainContainer = styled("div")(() => ({
  display: "flex",
  backgroundColor: "#4285f4",
  backgroundImage: "url('/images/wave.webp')",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "top left",
  backgroundSize: "42%",
  height: "100vh",
}));
export const HeaderContainer = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
  margin: "40px 0 8px 0",
}));
export const Title = styled("h1")(() => ({
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: 36,
  margin: 0,
}));

export const StyledMenuArrow = styled("button")(() => ({
  backgroundColor: "transparent",

  border: "none",
  outline: "none",
  cursor: "pointer",
}));

export const MenuBox = styled("div")(() => ({
  display: "flex",
  alignItems: "baseline",
  position: "relative",
}));

export const StyledMenuTitle = styled("p")(() => ({
  fontWeight: "700",
  fontSize: 17,
  marginRight: 9,
}));

export const StyledMenuList = styled("ul")(() => ({
  position: "absolute",
  zIndex: "3",
  listStyleType: "none",
  backgroundColor: "white",
  color: "#717384",
  fontWeight: "600",
  fontSize: 17,
  padding: "15px 26px",
  width: 190,
  borderRadius: 10,
  left: "-175%",
  top: "-50%",
  boxShadow: "0px 4px 20px rgba(60, 133, 191, 0.18)",
}));

export const StyledMenuItem = styled("li")(() => ({
  cursor: "pointer",
  "&:first-of-type": {
    marginBottom: 10,
  },
}));
