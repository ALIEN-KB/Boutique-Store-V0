'use client'

import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { FaHome, FaShoppingBag } from 'react-icons/fa';

const NotFoundContainer = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 5rem 1rem;
  text-align: center;
`;

const ErrorCode = styled.h1`
  font-size: 8rem;
  font-weight: normal;
  color: var(--accent-color);
  margin-bottom: 1rem;
  line-height: 1;
  
  @media (max-width: 576px) {
    font-size: 5rem;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: normal;
  margin-bottom: 1.5rem;
  
  @media (max-width: 576px) {
    font-size: 1.5rem;
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: var(--secondary-color);
  max-width: 500px;
  margin: 0 auto 2.5rem;
  line-height: 1.6;
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  
  @media (max-width: 576px) {
    flex-direction: column;
    align-items: center;
  }
`;

const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: var(--border-radius);
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 0.9rem;
  transition: var(--transition);
`;

const PrimaryLink = styled(StyledLink)`
  background-color: var(--accent-color);
  color: white;
  
  &:hover {
    background-color: var(--primary-color);
    transform: translateY(-3px);
  }
`;

const SecondaryLink = styled(StyledLink)`
  border: 1px solid var(--accent-color);
  color: var(--accent-color);
  
  &:hover {
    background-color: var(--accent-color);
    color: white;
    transform: translateY(-3px);
  }
`;

const NotFoundPage: React.FC = () => {
  return (
    <NotFoundContainer>
      <ErrorCode>404</ErrorCode>
      <Title>Page Not Found</Title>
      <Description>
        We're sorry, the page you're looking for doesn't exist or might have been moved.
      </Description>
      
      <ButtonsContainer>
        <PrimaryLink href="/">
          <FaHome /> Go to Homepage
        </PrimaryLink>
        <SecondaryLink href="/products">
          <FaShoppingBag /> View Collections
        </SecondaryLink>
      </ButtonsContainer>
    </NotFoundContainer>
  );
};

export default NotFoundPage; 