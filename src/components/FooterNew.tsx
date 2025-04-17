'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { FaFacebookF, FaInstagram, FaPinterestP, FaTwitter } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: var(--light-bg);
  padding: 4rem 0 2rem;
  margin-top: 3rem;
`;

const FooterContent = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
`;

const FooterSection = styled.div`
  h3 {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
    position: relative;
    display: inline-block;
    
    &:after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -8px;
      width: 40px;
      height: 1px;
      background-color: var(--accent-color);
    }
  }
`;

const FooterLinks = styled.ul`
  list-style: none;
  
  li {
    margin-bottom: 0.8rem;
    
    a {
      font-family: 'Montserrat', sans-serif;
      font-size: 0.9rem;
      color: var(--secondary-color);
      transition: var(--transition);
      
      &:hover {
        color: var(--accent-color);
        padding-left: 5px;
      }
    }
  }
`;

const NewsletterForm = styled.form`
  display: flex;
  flex-direction: column;
  
  p {
    font-size: 0.9rem;
    color: var(--secondary-color);
    margin-bottom: 1rem;
  }
`;

const InputContainer = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;

const EmailInput = styled.input`
  flex: 1;
  border: 1px solid var(--border-color);
  border-right: none;
  padding: 0.75rem;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.9rem;
  
  &:focus {
    outline: none;
    border-color: var(--accent-color);
  }
`;

const SubscribeButton = styled.button`
  background-color: var(--primary-color);
  color: white;
  border: none;
  padding: 0 1.5rem;
  cursor: pointer;
  transition: var(--transition);
  text-transform: uppercase;
  font-size: 0.8rem;
  letter-spacing: 1px;
  
  &:hover {
    background-color: var(--accent-color);
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
  
  a {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: var(--primary-color);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.9rem;
    transition: var(--transition);
    
    &:hover {
      background-color: var(--accent-color);
      transform: translateY(-3px);
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: 2rem;
  margin-top: 3rem;
  border-top: 1px solid var(--border-color);
  font-size: 0.9rem;
  color: var(--light-text);
  
  a {
    color: var(--primary-color);
    
    &:hover {
      color: var(--accent-color);
    }
  }
`;

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your newsletter service
    setIsSubscribed(true);
    setEmail('');
  };
  
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>Élégance</h3>
          <p>Handpicked collections. Exclusive designs. Unforgettable style.</p>
          <SocialIcons>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
              <FaPinterestP />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
          </SocialIcons>
        </FooterSection>
        
        <FooterSection>
          <h3>Shop</h3>
          <FooterLinks>
            <li><Link href="/products">All Collections</Link></li>
            <li><Link href="/products?category=new">New Arrivals</Link></li>
            <li><Link href="/products?category=bestsellers">Bestsellers</Link></li>
            <li><Link href="/products?category=sale">Sale</Link></li>
          </FooterLinks>
        </FooterSection>
        
        <FooterSection>
          <h3>Information</h3>
          <FooterLinks>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
            <li><Link href="/shipping">Shipping & Returns</Link></li>
            <li><Link href="/privacy">Privacy Policy</Link></li>
          </FooterLinks>
        </FooterSection>
        
        <FooterSection>
          <h3>Newsletter</h3>
          {isSubscribed ? (
            <p>Thank you for subscribing to our newsletter!</p>
          ) : (
            <NewsletterForm onSubmit={handleSubmit}>
              <p>Subscribe to receive updates, access to exclusive deals, and more.</p>
              <InputContainer>
                <EmailInput 
                  type="email" 
                  placeholder="Your email" 
                  value={email} 
                  onChange={e => setEmail(e.target.value)} 
                  required
                />
                <SubscribeButton type="submit">Join</SubscribeButton>
              </InputContainer>
            </NewsletterForm>
          )}
        </FooterSection>
      </FooterContent>
      
      <Copyright>
        <p>&copy; {new Date().getFullYear()} Élégance. All rights reserved.</p>
      </Copyright>
    </FooterContainer>
  );
};

export default Footer; 