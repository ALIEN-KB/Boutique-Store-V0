'use client'

import React from 'react';
import styled from 'styled-components';

const ShippingContainer = styled.div`
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

const PolicySection = styled.div`
  background-color: var(--light-bg);
  padding: 2rem;
  border-radius: 4px;
  box-shadow: var(--box-shadow);
  margin-bottom: 2rem;
`;

const Section = styled.section`
  margin-bottom: 3rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const SectionTitle = styled.h2`
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
`;

const PolicyContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const PolicyBlock = styled.div`
  h3 {
    font-weight: 500;
    margin-bottom: 0.5rem;
  }
  
  p {
    color: var(--secondary-color);
    line-height: 1.6;
  }
  
  ul, ol {
    margin-top: 0.5rem;
    padding-left: 1.5rem;
    
    li {
      margin-bottom: 0.5rem;
      color: var(--secondary-color);
      line-height: 1.6;
    }
  }
  
  ul {
    list-style-type: disc;
  }
  
  ol {
    list-style-type: decimal;
  }
`;

export default function ShippingPageClient() {
  return (
    <ShippingContainer>
      <TitleContainer>
        <PageTitle>Shipping & Returns</PageTitle>
      </TitleContainer>
      
      <PolicySection>
        <Section>
          <SectionTitle>Shipping Policy</SectionTitle>
          
          <PolicyContent>
            <PolicyBlock>
              <h3>Processing Time</h3>
              <p>
                All orders are processed within 1-3 business days. Orders placed on weekends or holidays will be processed on the next business day.
              </p>
            </PolicyBlock>
            
            <PolicyBlock>
              <h3>Shipping Methods & Delivery Times</h3>
              <ul>
                <li><strong>Standard Shipping:</strong> 5-7 business days (Free on orders over $50)</li>
                <li><strong>Express Shipping:</strong> 2-3 business days ($12.95)</li>
                <li><strong>Next Day Delivery:</strong> 1 business day ($24.95, order must be placed before 12pm EST)</li>
              </ul>
            </PolicyBlock>
            
            <PolicyBlock>
              <h3>International Shipping</h3>
              <p>
                We currently ship to over 80 countries worldwide. International shipping times vary depending on the destination, typically between 7-21 business days. Please note that customs fees may apply for international orders.
              </p>
            </PolicyBlock>
            
            <PolicyBlock>
              <h3>Tracking Information</h3>
              <p>
                You will receive a shipping confirmation email with your tracking number once your order has been shipped. You can track your order status at any time by logging into your account.
              </p>
            </PolicyBlock>
          </PolicyContent>
        </Section>
        
        <Section>
          <SectionTitle>Returns & Exchanges</SectionTitle>
          
          <PolicyContent>
            <PolicyBlock>
              <h3>Return Policy</h3>
              <p>
                We accept returns within 30 days of delivery for a full refund or exchange. Items must be in their original condition with tags attached and unworn.
              </p>
            </PolicyBlock>
            
            <PolicyBlock>
              <h3>How to Return</h3>
              <ol>
                <li>Log into your account and request a return by filling out the return form</li>
                <li>Print the prepaid return label that will be sent to your email</li>
                <li>Package your items securely in the original packaging if possible</li>
                <li>Attach the return label to your package</li>
                <li>Drop off your package at the nearest postal service location</li>
              </ol>
            </PolicyBlock>
            
            <PolicyBlock>
              <h3>Refund Process</h3>
              <p>
                Once we receive and inspect your return, we'll process your refund. The refund will be credited to your original payment method within 3-5 business days, although it may take longer for the funds to appear in your account depending on your financial institution.
              </p>
            </PolicyBlock>
            
            <PolicyBlock>
              <h3>Exceptions</h3>
              <p>
                Some items are non-returnable for hygiene reasons, including earrings, swimwear, and intimates. Sale items marked as "Final Sale" cannot be returned or exchanged.
              </p>
            </PolicyBlock>
          </PolicyContent>
        </Section>
      </PolicySection>
    </ShippingContainer>
  );
} 