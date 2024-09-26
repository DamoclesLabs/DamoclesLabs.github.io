import React, { useState } from 'react';
import styled from 'styled-components';
import { FaServer, FaShieldAlt, FaGlobe } from 'react-icons/fa';
import { SiBlockchaindotcom } from "react-icons/si";
import { FaGamepad } from "react-icons/fa6";
import { LiaHandshakeSolid } from "react-icons/lia";





const ServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100%;
  width: 100%;
  padding: 2rem;
  background-color: #f8f9fa;
  color: #333;
  box-sizing: border-box;
  overflow-y: auto;
  min-height: 80vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const Title = styled.h2`
  font-size: 2.8rem;
  margin-bottom: 2.5rem;
  text-align: center;
  color: #1a1a1a;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  position: relative;
  padding-bottom: 15px;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background-color: #007bff;
  }
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1200px;
  margin-bottom: 2rem;
`;

const Card = styled.div`
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  margin: 1rem;
  width: 280px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  ${props => props.active && `
    background-color: #007bff;
    color: white;
  `}
`;

const CardIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: ${props => props.active ? 'white' : '#007bff'};
  text-align: center;
`;

const CardTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: ${props => props.active ? 'white' : '#1a1a1a'};
  text-align: center;
  font-weight: 500;
`;

const ExpandedCardContent = styled.div`
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  width: 100%;
  max-width: 1000px;
  margin-top: 2rem;
`;

const SubServiceTitle = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: #007bff;
  font-weight: 500;
`;

const SubServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  justify-content: center;
  width: 100%;
`;

const SubServiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${props => props.centerAlign ? 'center' : 'flex-start'};
  text-align: ${props => props.centerAlign ? 'center' : 'left'};
`;

const ItemList = styled.ul`
  list-style-type: none;
  padding-left: 0;
  width: 100%;
  text-align: ${props => props.centerAlign ? 'center' : 'left'};
`;

const Item = styled.li`
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  color: #666;

  &:before {
    content: "•";
    color: #1da1f2;
    font-weight: bold;
    display: ${props => props.centerAlign ? 'none' : 'inline-block'};
    width: 1em;
    margin-right: 0.5em;
  }
`;

function Services() {
  const [activeCard, setActiveCard] = useState(null);

  const services = [
    {
      title: "GameFi Security Analysis",
      icon: <FaGamepad />,
      subServices: [
        {
          title: "GameFi Server Vulnerabilities Analysis",
          items: [
            "Vuln Discovery for Login Protocol",
            "Vuln Discovery for Wallet Protocol",
            "Vuln Discovery for Task Protocol",
            "Vuln Discovery for Trading System",
            "Vuln Discovery for Growth System",
            "Vuln Discovery for Skill System",
            "Vuln Discovery for Social System",
            "Vuln Discovery for Equipment System",
          ]
        },
        {
          title: "GameFi Client Security Risk Analysis And Improve",
          items: [
            "Client Security Analysis",
            "Client Code Reverse Audit",
            "Anti-Debug Solutions",
            "Anti-Decompilation Solutions",
            "Engine-based Customization Solutions",
            "Sensitive Data Encrypt Solutions",
          ]
        }
      ]
    },
    {
      title: "GameFi Security Advisor",
      icon: <FaShieldAlt />,
      subServices: [
        {
          title: "GameFi Security Strategy Consulting",
          items: [
            "Cheating Analysis And Detection",
            "Security Architecture Optimization",
            "Security Public Opinion Monitoring",
            "Security emergency response",
            "Local Security Protection Access Guide",
          ]
        }
      ]
    },
    {
      title: "Web3 Traditional Security Services",
      icon: <SiBlockchaindotcom />,
      subServices: [
        {
          title: "Web3 Security Services",
          items: [
            "Blockchain Security Audit",
            "Exchange Security Audit",
            "Wallet Security Audit",
            "Smart Contract Security Audit",
          ]
        },
        {
          title: "Web Client Security Services",
          items: [
            "Web Server Penetration Testing",
            "Application Logic Audit",
            "Mobile App Risk Security Analysis",
            "Penetration Testing Exercise",
          ]
        }
      ]
    }
  ];

  return (
    <ServicesContainer>
      <Title>Damocles Security Services</Title>
      <CardContainer>
        {services.map((service, index) => (
          <Card 
            key={index} 
            onClick={() => setActiveCard(activeCard === index ? null : index)}
            active={activeCard === index}
          >
            <CardIcon active={activeCard === index}>{service.icon}</CardIcon>
            <CardTitle active={activeCard === index}>{service.title}</CardTitle>
          </Card>
        ))}
      </CardContainer>
      {activeCard !== null && (
        <ExpandedCardContent>
          <SubServicesGrid>
            {services[activeCard].subServices.map((subService, subIndex) => (
              <SubServiceContainer 
                key={subIndex}
                centerAlign={services[activeCard].title === "GameFi Security Advisor"}
              >
                <SubServiceTitle>{subService.title}</SubServiceTitle>
                <ItemList centerAlign={services[activeCard].title === "GameFi Security Advisor"}>
                  {subService.items.map((item, itemIndex) => (
                    <Item 
                      key={itemIndex}
                      centerAlign={services[activeCard].title === "GameFi Security Advisor"}
                    >
                      {item}
                    </Item>
                  ))}
                </ItemList>
              </SubServiceContainer>
            ))}
          </SubServicesGrid>
        </ExpandedCardContent>
      )}
    </ServicesContainer>
  );
}

export default Services;