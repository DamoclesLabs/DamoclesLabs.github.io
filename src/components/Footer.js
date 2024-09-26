import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaTwitter } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: #1a1a1a;
  color: #fff;
  padding: 1rem;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
`;

const SocialLinks = styled.div`
  display: flex;
  align-items: center;
`;

const SocialLink = styled.a`
  color: #fff;
  font-size: 1.5rem;
  margin: 0 0.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #1da1f2; // Twitter蓝色
  }
`;

const ContactButton = styled.a`
  color: #fff;
  padding: 0.5rem 1rem;
  border: 1px solid #fff;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #fff;
    color: #1a1a1a;
  }
`;

const Copyright = styled.div`
  margin-right: 1rem;
`;

function Footer() {
  return (
    <FooterContainer>
      <LeftSection>
        <ContactButton href="https://tally.so/r/nWEoda">CONTACT</ContactButton>
      </LeftSection>
      <RightSection>
        <SocialLinks>
          <SocialLink href="https://github.com/DamoclesLabs" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </SocialLink>
          <SocialLink href="https://twitter.com/DamoclesLabs" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </SocialLink>
        </SocialLinks>
      </RightSection>
    </FooterContainer>
  );
}

export default Footer;