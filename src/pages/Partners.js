import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import partnersData from '../Partners/partners.json';

const PartnersContainer = styled.div`
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

  @media (max-width: 768px) {
    position: static;
    min-height: 100vh;
  }
`;

const Title = styled.h2`
  font-size: 3.5rem;
  margin-bottom: 4rem;
  text-align: center;
  color: #1a202c;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 3px;
  position: relative;
  padding-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 150px;
    height: 5px;
    background-color: #4299e1;
    border-radius: 2px;
  }
`;

const LogoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 3rem;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 2rem;
  }
`;

const LogoLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120px;
  transition: all 0.3s ease;
  padding: 1rem;

  @media (max-width: 768px) {
    height: 100px;
  }

  &:hover {
    transform: translateY(-5px);
  }
`;

const LogoImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

function Partners() {
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    // 直接使用 public 文件夹中的图片路径
    const loadedPartners = partnersData.map((partner) => ({
      ...partner,
      logo: `/Partners/${partner.logo}`
    }));
    setPartners(loadedPartners);
  }, []);

  return (
    <PartnersContainer>
      <Title>Our Partners</Title>
      <LogoGrid>
        {partners.map((partner, index) => (
          <LogoLink key={index} href={partner.url} target="_blank" rel="noopener noreferrer">
            <LogoImage src={partner.logo} alt={partner.name} />
          </LogoLink>
        ))}
      </LogoGrid>
    </PartnersContainer>
  );
}

export default Partners;