'use client'

import React from 'react';
import styled from 'styled-components';

const PrivacyContainer = styled.div`
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
`;

const PolicyContent = styled.div`
  h2 {
    margin: 2rem 0 1rem;
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
    
    &:first-of-type {
      margin-top: 0;
    }
  }
  
  p {
    margin-bottom: 1rem;
    line-height: 1.6;
    color: var(--secondary-color);
  }
  
  ul {
    list-style-type: disc;
    margin: 1rem 0;
    padding-left: 1.5rem;
    
    li {
      margin-bottom: 0.5rem;
      color: var(--secondary-color);
      line-height: 1.6;
    }
  }
  
  .updated-date {
    font-style: italic;
    margin-bottom: 1.5rem;
  }
`;

export default function PrivacyPageClient() {
  return (
    <PrivacyContainer>
      <TitleContainer>
        <PageTitle>Privacy Policy</PageTitle>
      </TitleContainer>
      
      <PolicySection>
        <PolicyContent>
          <p className="updated-date">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
          
          <p>
            At Élégance Boutique, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or make a purchase from our store.
          </p>
          
          <h2>Information We Collect</h2>
          
          <p>We may collect the following types of information:</p>
          
          <ul>
            <li><strong>Personal Information:</strong> Name, email address, postal address, phone number, and payment information when you create an account, place an order, or sign up for our newsletter.</li>
            <li><strong>Order Information:</strong> Purchase history, product preferences, and shipping details.</li>
            <li><strong>Technical Information:</strong> IP address, browser type, device information, and cookies to improve your browsing experience.</li>
            <li><strong>Usage Information:</strong> Pages visited, products viewed, and interaction with our website.</li>
          </ul>
          
          <h2>How We Use Your Information</h2>
          
          <p>We use the information we collect to:</p>
          
          <ul>
            <li>Process and fulfill your orders</li>
            <li>Communicate with you about your orders, products, and services</li>
            <li>Send you marketing communications (with your consent)</li>
            <li>Improve our website, products, and customer service</li>
            <li>Detect and prevent fraud or abuse</li>
            <li>Comply with legal obligations</li>
          </ul>
          
          <h2>Sharing Your Information</h2>
          
          <p>We may share your information with:</p>
          
          <ul>
            <li><strong>Service Providers:</strong> Payment processors, shipping companies, and marketing platforms that help us operate our business.</li>
            <li><strong>Business Partners:</strong> Trusted third parties who assist us in offering products and services.</li>
            <li><strong>Legal Requirements:</strong> When required by law or to protect our rights, property, or safety.</li>
          </ul>
          
          <h2>Your Rights</h2>
          
          <p>Depending on your location, you may have rights regarding your personal information, including:</p>
          
          <ul>
            <li>Accessing your personal information</li>
            <li>Correcting inaccurate information</li>
            <li>Deleting your information</li>
            <li>Restricting or objecting to processing</li>
            <li>Data portability</li>
            <li>Withdrawing consent</li>
          </ul>
          
          <h2>Security</h2>
          
          <p>
            We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, so we cannot guarantee absolute security.
          </p>
          
          <h2>Cookies</h2>
          
          <p>
            We use cookies and similar technologies to enhance your browsing experience, analyze website traffic, and personalize content. You can manage cookie preferences through your browser settings.
          </p>
          
          <h2>Changes to This Policy</h2>
          
          <p>
            We may update this Privacy Policy from time to time. The updated version will be indicated by an updated "Last Updated" date, and the revised policy will be effective immediately upon posting.
          </p>
          
          <h2>Contact Us</h2>
          
          <p>
            If you have any questions about this Privacy Policy, please contact us at:<br />
            Email: privacy@elegance-boutique.com<br />
            Phone: +1 (555) 123-4567
          </p>
        </PolicyContent>
      </PolicySection>
    </PrivacyContainer>
  );
} 