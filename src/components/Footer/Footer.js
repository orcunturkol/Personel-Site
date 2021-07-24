import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:ofturkol@gmail.com">
            ofturkol@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href="https://github.com/orcunturkol"><AiFillGithub size="3rem"/></SocialIcons>
    <SocialIcons href="https://www.linkedin.com/in/orcunturkol/"><AiFillLinkedin size="3rem"/></SocialIcons>
    <SocialIcons href="https://www.instagram.com/orcunfurkanturkol/"><AiFillInstagram size="3rem"/></SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;