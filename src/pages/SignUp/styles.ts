import styled from "@emotion/styled";

export const MainWrapper = styled("div")(() => ({
  display: "table",
  width: "100%",
  height: "100vh",
  textAlign: "center",
}));

export const TitleWrapper = styled("div")(() => ({
  display: "table-cell",
  verticalAlign: "middle",
}));

export const Title = styled("h1")(() => ({
  fontSize: "50px",
  display: "inline-block",
  paddingRight: "12px",
  animation: "type .5s alternate infinite",
}));
export const LoaderWrapper = styled("div")(() => ({
  position: "relative",
  top: "50%",
  margin: "0 auto",
}));
