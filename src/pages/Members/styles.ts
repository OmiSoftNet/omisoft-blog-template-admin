import styled from "@emotion/styled";

export const StyledTitleNoTopics = styled("h2")(() => ({
  fontWeight: 700,
  fontSize: 48,
  color: "black",
  marginBottom: "4vw",
}));
export const NoTopicsWrapper = styled("div")(() => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-around",
  alignItems: "center",
  marginTop: "15vh",
}));
export const ImageBackground = styled("div")(() => ({
  width: 470,
  height: 457,
  backgroundImage: "url('/images/no-topic.webp')",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
}));
export const NoTopicsTitleWrapper = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "center",
}));
