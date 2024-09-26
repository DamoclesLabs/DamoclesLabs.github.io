import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import DamoclesLogo from '../image/Damocles.png';

const HeaderContainer = styled.header`
  background-color: rgba(26, 26, 26, 0.9);
  padding: 1rem 2rem;
  position: fixed;
  width: 100%;
  z-index: 1000;
  box-sizing: border-box;
  backdrop-filter: blur(5px);
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 2400px;
  margin: 0 auto;
`;

const Logo = styled.img`
  height: 40px;
  margin: 0;
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: #1a1a1a;
    padding: 1rem;
  }
`;

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  white-space: nowrap;
  transition: all 0.3s ease;
  
  &:hover {
    color: #3498db;
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HeaderContainer>
      <Nav>
        <Logo src={DamoclesLogo} alt="Damocles Logo" />
        <MenuButton onClick={toggleMenu}>
          <FaBars />
        </MenuButton>
        <NavLinks isOpen={isMenuOpen}>
          <li><NavLink href="#home" onClick={() => setIsMenuOpen(false)}>Home</NavLink></li>
          <li><NavLink href="#services" onClick={() => setIsMenuOpen(false)}>Services</NavLink></li>
          <li><NavLink href="#reports" onClick={() => setIsMenuOpen(false)}>Reports</NavLink></li>
          <li><NavLink href="#partners" onClick={() => setIsMenuOpen(false)}>Partners</NavLink></li>
          <li><NavLink href="#about" onClick={() => setIsMenuOpen(false)}>About</NavLink></li>
        </NavLinks>
      </Nav>
    </HeaderContainer>
  );
}

export default Header;