'use client'

import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: #333;
    --secondary-color: #4a4a4a;
    --accent-color: #c6a07c;
    --background-color: #fff;
    --light-bg: #f9f9f9;
    --text-color: #333;
    --light-text: #8a8a8a;
    --error-color: #d9534f;
    --success-color: #5cb85c;
    --border-color: #e6e6e6;
    --box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
    --transition: all 0.3s ease;
    --max-width: 1200px;
    --border-radius: 4px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Cormorant Garamond', 'Playfair Display', serif;
    color: var(--text-color);
    background-color: var(--background-color);
    line-height: 1.6;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Cormorant Garamond', serif;
    font-weight: 500;
    margin-bottom: 1rem;
    line-height: 1.2;
  }

  h1 {
    font-size: 2.5rem;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.75rem;
  }

  p {
    margin-bottom: 1rem;
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
  }

  a {
    text-decoration: none;
    color: var(--primary-color);
    transition: var(--transition);
    &:hover {
      color: var(--accent-color);
    }
  }

  button {
    font-family: 'Montserrat', sans-serif;
    background-color: var(--primary-color);
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    cursor: pointer;
    border-radius: var(--border-radius);
    transition: var(--transition);
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    
    &:hover {
      background-color: var(--accent-color);
    }
    
    &:disabled {
      background-color: var(--light-text);
      cursor: not-allowed;
    }
  }

  img {
    max-width: 100%;
    display: block;
  }

  .container {
    width: 100%;
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 0 1rem;
  }

  section {
    padding: 4rem 0;
  }

  .section-title {
    text-align: center;
    margin-bottom: 3rem;
    
    h2 {
      display: inline-block;
      position: relative;
      font-size: 2.5rem;
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
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }
    
    h2 {
      font-size: 1.75rem;
    }
    
    h3 {
      font-size: 1.5rem;
    }
    
    section {
      padding: 3rem 0;
    }
  }
`; 