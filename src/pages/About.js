import React from 'react';
import styled from 'styled-components';
import { FaFlag, FaEye, FaBalanceScale, FaUsers } from 'react-icons/fa';

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  min-height: 100vh;
  width: 100%;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: auto;

  @media (max-width: 1024px) {
    position: static;
    min-height: 100vh;
  }
`;

const AboutContent = styled.div`
  display: flex;
  max-width: 1200px;
  width: 100%;
  gap: 4rem;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const AboutLeft = styled.div`
  flex: 1;
  max-width: 600px;

  @media (max-width: 1024px) {
    max-width: 100%;
  }
`;

const AboutRight = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 10rem;
  @media (max-width: 1024px) {
    padding-top: 2rem;
  }
`;

const Title = styled.h2`
  font-size: 3rem;
  margin-bottom: 2rem;
  color: #1a202c;
  font-weight: 800;
  text-transform: uppercase;
  position: relative;
  padding-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 80px;
    height: 4px;
    background-color: #4299e1;
    border-radius: 2px;
  }
`;

const AboutList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const AboutItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  background-color: #ffffff;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  }

  svg {
    font-size: 2.5rem;
    color: #4299e1;
    flex-shrink: 0;
  }
`;

const ItemContent = styled.div`
  flex: 1;

  h3 {
    font-size: 1.5rem;
    color: #2c3e50;
    margin-bottom: 0.5rem;
    display: flex; // 添加这行
    align-items: center; // 添加这行
    min-height: 2.5rem; // 添加这行，与图标高度相同
  }

  p {
    font-size: 1rem;
    color: #34495e;
    line-height: 1.5;
  }
`;

const TeamIntro = styled.div`
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  h3 {
    font-size: 2.5rem;
    color: #2c3e50;
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  h4 {
    font-size: 1.1rem;
    color: #34495e;
    line-height: 1.8;
    font-weight: normal;
  }
`;

function About() {
  return (
    <AboutContainer>
      <AboutContent>
        <AboutLeft>
          <Title>About Us</Title>
          <AboutList>
            <AboutItem>
              <FaFlag />
              <ItemContent>
                <h3>Our Mission</h3>
                <p>To safeguard the GameFi ecosystem by providing top-notch security solutions and ensuring a safe and fair gaming experience for all participants.</p>
              </ItemContent>
            </AboutItem>
            <AboutItem>
              <FaEye />
              <ItemContent>
                <h3>Our Vision</h3>
                <p>To be the leading authority in GameFi security, pioneering innovative solutions that set the standard for safety and trust in the gaming industry.</p>
              </ItemContent>
            </AboutItem>
            <AboutItem>
              <FaBalanceScale />
              <ItemContent>
                <h3>Our Values</h3>
                <p>Integrity, Innovation, and Excellence. We are committed to upholding the highest standards of integrity, driving innovation in security solutions, and delivering excellence in all our services.</p>
              </ItemContent>
            </AboutItem>
          </AboutList>
        </AboutLeft>
        <AboutRight>
          <TeamIntro>
            <h3><FaUsers /> Our Team</h3>
            <h4>Our team members have extensive experience in traditional gaming and Web3 security, having worked on high-traffic projects at renowned companies such as Tencent, OKEX, KuCoin, and Ubisoft. With unique insights and solutions for GameFi security issues, the Damocles team is dedicated to focusing more on the GameFi sector in the future. We aim to delve deeper into business security within this field, providing comprehensive security assurance for users and project teams.</h4>
          </TeamIntro>
        </AboutRight>
      </AboutContent>
    </AboutContainer>
  );
}

export default About;