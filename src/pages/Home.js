import React from 'react';
import styled from 'styled-components';
import DamoclesLogo from '../image/Damocles_middle.png';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  text-align: center;
  padding: 2rem;
  background: linear-gradient(135deg, #1a1a1a 0%, #2c3e50 100%);
  color: #ffffff;
  box-sizing: border-box;
  user-select: none;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const LogoContainer = styled.div`
  width: 250px;
  height: 250px;
  margin-bottom: 3rem;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  box-shadow: 0 0 30px rgba(52, 152, 219, 0.7);
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }

  &:hover {
    box-shadow: 0 0 40px rgba(52, 152, 219, 0.9);
  }
`;

const Logo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  max-width: 1100px;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  font-size: 1.3rem;
  max-width: 800px;
  margin: 0 auto 3rem;
  line-height: 1.6;
  opacity: 0.9;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const Button = styled.a`
  display: inline-block;
  padding: 1rem 2rem;
  background-color: #3498db;
  color: #ffffff;
  text-decoration: none;
  border-radius: 5px;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background-color: #2980b9;
    transform: translateY(-3px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

function Home() {
  return (
    <HomeContainer>
      <LogoContainer>
        <Logo src={DamoclesLogo} alt="Damocles Logo" />
      </LogoContainer>
      <Title>THE FUTURE IS HERE — Let's build a secure GameFi future together</Title>
      <Description>
        Damocles is a security team deeply rooted in the GameFi industry, truly ensuring product security from a business perspective.
      </Description>
      <Button href="https://tally.so/r/nWEoda">Contact US</Button>
    </HomeContainer>
  );
}

export default Home;