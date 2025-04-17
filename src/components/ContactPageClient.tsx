'use client'

import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 3rem 1rem;
`;

const PageTitle = styled.h1`
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
  display: inline-block;
  font-weight: normal;
  
  &:after {
    content: '';
    position: absolute;
    left: 25%;
    bottom: -10px;
    width: 50%;
    height: 1px;
    background-color: var(--accent-color);
  }
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
`;

const ContactSection = styled.div`
  background-color: var(--light-bg);
  padding: 2rem;
  border-radius: 4px;
  box-shadow: var(--box-shadow);
  margin-bottom: 2rem;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  h2 {
    margin-bottom: 1.5rem;
    font-weight: normal;
    position: relative;
    display: inline-block;
    
    &:after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -5px;
      width: 40px;
      height: 1px;
      background-color: var(--accent-color);
    }
  }
  
  p {
    margin-bottom: 1.5rem;
    line-height: 1.6;
    color: var(--secondary-color);
  }
`;

const InfoBlock = styled.div`
  margin-bottom: 1.5rem;
  
  h3 {
    font-weight: 500;
    margin-bottom: 0.5rem;
  }
  
  p {
    color: var(--secondary-color);
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  
  label {
    margin-bottom: 0.5rem;
    font-weight: 500;
  }
  
  input, textarea {
    padding: 0.75rem;
    border: 1px solid var(--border-color);
    border-radius: 4px;
    font-family: 'Montserrat', sans-serif;
    
    &:focus {
      outline: none;
      border-color: var(--accent-color);
    }
  }
  
  textarea {
    min-height: 150px;
    resize: vertical;
  }
`;

const SubmitButton = styled.button`
  background-color: var(--primary-color);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  transition: var(--transition);
  align-self: flex-start;
  
  &:hover {
    background-color: var(--accent-color);
  }
`;

export default function ContactPageClient() {
  return (
    <ContactContainer>
      <TitleContainer>
        <PageTitle>Contact Us</PageTitle>
      </TitleContainer>
      
      <ContactSection>
        <ContactGrid>
          <ContactInfo>
            <h2>Get In Touch</h2>
            <p>
              We'd love to hear from you. Please fill out the form and we'll get back to you as soon as possible.
            </p>
            
            <InfoBlock>
              <h3>Email</h3>
              <p>support@elegance-boutique.com</p>
            </InfoBlock>
            
            <InfoBlock>
              <h3>Phone</h3>
              <p>+1 (555) 123-4567</p>
            </InfoBlock>
            
            <InfoBlock>
              <h3>Address</h3>
              <p>
                123 Fashion Avenue<br />
                New York, NY 10001<br />
                United States
              </p>
            </InfoBlock>
          </ContactInfo>
          
          <ContactForm>
            <FormGroup>
              <label htmlFor="name">Name</label>
              <input 
                type="text" 
                id="name" 
                required
              />
            </FormGroup>
            
            <FormGroup>
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                required
              />
            </FormGroup>
            
            <FormGroup>
              <label htmlFor="subject">Subject</label>
              <input 
                type="text" 
                id="subject" 
                required
              />
            </FormGroup>
            
            <FormGroup>
              <label htmlFor="message">Message</label>
              <textarea 
                id="message" 
                required
              ></textarea>
            </FormGroup>
            
            <SubmitButton type="submit">
              Send Message
            </SubmitButton>
          </ContactForm>
        </ContactGrid>
      </ContactSection>
    </ContactContainer>
  );
} 