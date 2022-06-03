import * as React from "react";
import Container from "../../components/Container";
import {
  StyledTitleNoTopics,
  NoTopicsWrapper,
  ImageBackground,
  NoTopicsTitleWrapper,
} from "./styles";

const Members: React.FC = () => {
  return (
    <Container>
      <NoTopicsWrapper>
        <ImageBackground></ImageBackground>
        <NoTopicsTitleWrapper>
          <StyledTitleNoTopics>Under development...</StyledTitleNoTopics>
        </NoTopicsTitleWrapper>
      </NoTopicsWrapper>
    </Container>
  );
};

export default Members;
