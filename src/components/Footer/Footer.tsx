import React from "react";
import {
  Divider,
  ImageLink,
  InfoText,
  MainFooterContent,
  Socials,
  StyledFooter,
  StyledLinks,
  StyledLink,
  StyledTitles,
} from "./styles";
import { StyledImg, LogoWrapper } from "../SideBar/styles";

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <MainFooterContent>
        <LogoWrapper>
          <StyledImg src="/logo.svg" alt="logo image" />
        </LogoWrapper>
        <StyledLinks>
          <StyledTitles>All About Game</StyledTitles>
          <StyledTitles>Privacy Policy</StyledTitles>
        </StyledLinks>
        <Socials>
          <ImageLink
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              width="38px"
              height="38px"
              src="/images/twitter.svg"
              alt=" Twitter page"
            />
          </ImageLink>
          <ImageLink
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              width="38px"
              height="38px"
              src="/images/instagram.svg"
              alt="Instagram page"
            />
          </ImageLink>
          <ImageLink
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              width="38px"
              height="38px"
              src="/images/facebook.svg"
              alt="Facebook page"
            />
          </ImageLink>
        </Socials>
      </MainFooterContent>

      <Divider />

      <InfoText>
        Copyright © 2022{" "}
        <StyledLink href="https://omisoft.net" target="_blank" rel="noopener">
          OmiSoft LLC
        </StyledLink>
        . All Rights Reserved
      </InfoText>
    </StyledFooter>
  );
};

export default Footer;
