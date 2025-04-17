'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styled from 'styled-components';
import { FaShoppingBag, FaBars, FaTimes } from 'react-icons/fa';
import { useCart } from '@/context/CartContext';

const HeaderContainer = styled.header`
  background-color: var(--background-color);
  box-shadow: var(--box-shadow);
  position: sticky;
  top: 0;
  z-index: 100;
  padding: 1rem 0;
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 1rem;
`;

const Logo = styled(Link)`
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.8rem;
  font-weight: 500;
  letter-spacing: 1px;
  color: var(--primary-color);
  text-transform: uppercase;
`;

const Nav = styled.nav<{ $isOpen: boolean }>`
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 250px;
    background-color: var(--background-color);
    display: flex;
    flex-direction: column;
    padding: 5rem 2rem;
    transform: ${({ $isOpen }) => $isOpen ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.3s ease-in-out;
    box-shadow: ${({ $isOpen }) => $isOpen ? '-5px 0 15px rgba(0, 0, 0, 0.1)' : 'none'};
    z-index: 200;
  }
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const NavItem = styled.li`
  margin: 0 1rem;
  
  @media (max-width: 768px) {
    margin: 0;
  }
`;

const NavLinkStyled = styled(Link)<{ $isActive?: boolean }>`
  position: relative;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.9rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${props => props.$isActive ? 'var(--accent-color)' : 'var(--primary-color)'};
  
  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -5px;
    width: ${props => props.$isActive ? '100%' : '0'};
    height: 1px;
    background-color: var(--accent-color);
    transition: width 0.3s ease;
  }
  
  &:hover:after {
    width: 100%;
  }
`;

const CartLink = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  margin-left: 1.5rem;
  font-size: 1.2rem;
`;

const CartCount = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: var(--accent-color);
  color: white;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  font-weight: bold;
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: var(--primary-color);
  font-size: 1.2rem;
  cursor: pointer;
  z-index: 300;
  padding: 0.5rem;
  
  &:hover {
    color: var(--accent-color);
    background: none;
  }
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const Overlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: ${({ $isOpen }) => $isOpen ? 1 : 0};
  visibility: ${({ $isOpen }) => $isOpen ? 'visible' : 'hidden'};
  transition: opacity 0.3s ease, visibility 0.3s ease;
  z-index: 150;
`;

const RightContent = styled.div`
  display: flex;
  align-items: center;
`;

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { totalItems } = useCart();
  const pathname = usePathname() || '';
  
  // Handle scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close menu when clicking outside
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('click', handleClick);
    } else {
      document.body.style.overflow = '';
      document.removeEventListener('click', handleClick);
    }
    
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('click', handleClick);
    };
  }, [isMenuOpen]);
  
  const toggleMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <HeaderContainer style={{ 
      boxShadow: isScrolled ? 'var(--box-shadow)' : 'none',
      transition: 'box-shadow 0.3s ease'
    }}>
      <HeaderContent>
        <Logo href="/">Élégance</Logo>
        
        <RightContent>
          <Nav $isOpen={isMenuOpen} onClick={e => e.stopPropagation()}>
            <NavList>
              <NavItem>
                <NavLinkStyled href="/" $isActive={pathname === '/'}>Home</NavLinkStyled>
              </NavItem>
              <NavItem>
                <NavLinkStyled 
                  href="/products" 
                  $isActive={pathname === '/products' || pathname.startsWith('/products/')}
                >
                  Collections
                </NavLinkStyled>
              </NavItem>
              <NavItem>
                <NavLinkStyled href="/about" $isActive={pathname === '/about'}>About</NavLinkStyled>
              </NavItem>
            </NavList>
          </Nav>
          
          <CartLink href="/cart">
            <FaShoppingBag />
            {totalItems > 0 && <CartCount>{totalItems}</CartCount>}
          </CartLink>
          
          <MenuButton onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </MenuButton>
        </RightContent>
      </HeaderContent>
      
      <Overlay $isOpen={isMenuOpen} onClick={toggleMenu} />
    </HeaderContainer>
  );
};

export default Header; 