'use client'

import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

// Import components
import ProductCard from '../components/ProductCard';

// Import sample data (to be replaced with API call)
import { featuredProducts } from '@/utils/sampleData';

const HeroSection = styled.section`
  height: 80vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/images/hero-bg.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    height: 60vh;
  }
`;

const HeroContent = styled.div`
  max-width: 800px;
  padding: 0 1rem;
`;

const HeroTitle = styled(motion.h1)`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  font-weight: normal;
  letter-spacing: 2px;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  font-family: 'Montserrat', sans-serif;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const StyledLink = styled(Link)`
  background-color: var(--accent-color);
  color: white;
  padding: 0.75rem 2rem;
  border: none;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  display: inline-block;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: white;
    color: var(--accent-color);
  }
`;

const MotionDiv = motion.div;

const SectionTitle = styled.div`
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
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 1rem;
`;

const CategorySection = styled.section`
  padding: 4rem 0;
  background-color: var(--light-bg);
`;

const CategoryContainer = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const CategoryCard = styled(Link)`
  position: relative;
  height: 400px;
  overflow: hidden;
  display: block;
  
  &:hover img {
    transform: scale(1.05);
  }
  
  &:hover .category-overlay {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

const CategoryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
`;

const CategoryOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease;
  padding: 1rem;
  text-align: center;
`;

const CategoryTitle = styled.h3`
  color: white;
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const CategoryButton = styled.span`
  color: white;
  border: 1px solid white;
  padding: 0.5rem 1.5rem;
  font-size: 0.9rem;
  text-transform: uppercase;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: white;
    color: var(--primary-color);
  }
`;

const BannerSection = styled.section`
  padding: 8rem 0;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/banner-bg.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  color: white;
  text-align: center;
`;

const BannerContent = styled.div`
  max-width: 700px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const BannerTitle = styled.h2`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  font-weight: normal;
`;

const BannerText = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  font-family: 'Montserrat', sans-serif;
`;

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection>
        <HeroContent>
          <HeroTitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Discover Your Unique Style
          </HeroTitle>
          <HeroSubtitle
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Unveil the elegance of curated fashion. Find standout pieces that express your individuality.
          </HeroSubtitle>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            <StyledLink href="/products">
              Shop Collection
            </StyledLink>
          </motion.div>
        </HeroContent>
      </HeroSection>
      
      <section>
        <SectionTitle>
          <h2>Featured Collection</h2>
        </SectionTitle>
        <ProductsGrid>
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ProductsGrid>
      </section>
      
      <CategorySection>
        <SectionTitle>
          <h2>Shop By Category</h2>
        </SectionTitle>
        <CategoryContainer>
          <CategoryCard href="/products?category=dresses">
            <CategoryImage src="/images/category-dresses.jpg" alt="Dresses" />
            <CategoryOverlay className="category-overlay">
              <CategoryTitle>Dresses</CategoryTitle>
              <CategoryButton>
                Shop Now <FaArrowRight />
              </CategoryButton>
            </CategoryOverlay>
          </CategoryCard>
          
          <CategoryCard href="/products?category=tops">
            <CategoryImage src="/images/category-tops.jpg" alt="Tops" />
            <CategoryOverlay className="category-overlay">
              <CategoryTitle>Tops</CategoryTitle>
              <CategoryButton>
                Shop Now <FaArrowRight />
              </CategoryButton>
            </CategoryOverlay>
          </CategoryCard>
          
          <CategoryCard href="/products?category=accessories">
            <CategoryImage src="/images/category-accessories.jpg" alt="Accessories" />
            <CategoryOverlay className="category-overlay">
              <CategoryTitle>Accessories</CategoryTitle>
              <CategoryButton>
                Shop Now <FaArrowRight />
              </CategoryButton>
            </CategoryOverlay>
          </CategoryCard>
        </CategoryContainer>
      </CategorySection>
      
      <BannerSection>
        <BannerContent>
          <BannerTitle>Summer Breezes Collection</BannerTitle>
          <BannerText>
            Light fabrics, ethereal silhouettes, and vibrant hues inspired by coastal sunsets.
            Designed for the modern woman who embraces elegance with a touch of bohemian spirit.
          </BannerText>
          <motion.div whileHover={{ scale: 1.05 }}>
            <StyledLink href="/products?collection=summer">
              Explore Collection
            </StyledLink>
          </motion.div>
        </BannerContent>
      </BannerSection>
    </>
  );
};

export default HomePage; 