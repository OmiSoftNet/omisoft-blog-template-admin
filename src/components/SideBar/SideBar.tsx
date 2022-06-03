import {
  StyledContainer,
  StyledAppVersion,
  LinkWrapper,
  StyledLink,
  StyledButton,
  StyledMenuImg,
  StyledMenImg,
  ButtonWrapper,
  ButtonImgWrapper,
  ButtonTextWrapper,
  StyledLogo,
} from "./styles";

import { AdminRoutes } from "../../config/routes";
import { useLocation } from "react-router-dom";
import { TOPICS_BUTTON } from "../../helpers/constants";

export default function SideBar() {
  const location = useLocation();
  const isMembers = location.pathname === TOPICS_BUTTON.MEMBERS;

  return (
    <StyledContainer>
      <LinkWrapper>
        <StyledLogo>OmiSoft Blog</StyledLogo>
        <ButtonWrapper>
          <StyledLink to={AdminRoutes.Topics}>
            <StyledButton
              style={
                !isMembers
                  ? { background: "#689DF6" }
                  : { background: "inherit" }
              }
            >
              <ButtonImgWrapper>
                <StyledMenuImg src="/images/menu.svg" alt="menu" />
              </ButtonImgWrapper>
              <ButtonTextWrapper>Topics</ButtonTextWrapper>
            </StyledButton>
          </StyledLink>
          <StyledLink to={AdminRoutes.Members}>
            <StyledButton
              style={
                isMembers
                  ? { background: "#689DF6" }
                  : { background: "inherit" }
              }
            >
              <ButtonImgWrapper>
                <StyledMenImg src="/images/men.svg" alt="men" />
              </ButtonImgWrapper>
              <ButtonTextWrapper>Members</ButtonTextWrapper>
            </StyledButton>
          </StyledLink>
        </ButtonWrapper>
      </LinkWrapper>

      <StyledAppVersion>v 0.6.0</StyledAppVersion>
    </StyledContainer>
  );
}
