import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutContainer = styled.div`
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

const StorySection = styled.section`
  margin-bottom: 4rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const StoryImage = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
  border-radius: 4px;
  
  @media (max-width: 768px) {
    height: 300px;
  }
`;

const StoryContent = styled.div`
  h2 {
    margin-bottom: 1.5rem;
    font-weight: normal;
  }
  
  p {
    margin-bottom: 1.5rem;
    line-height: 1.8;
  }
`;

const ValuesSection = styled.section`
  background-color: var(--light-bg);
  padding: 4rem 0;
  margin: 4rem 0;
`;

const ValuesContainer = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 1rem;
`;

const ValuesSectionTitle = styled.h2`
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

const ValuesTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ValueCard = styled(motion.div)`
  background-color: white;
  padding: 2rem;
  border-radius: 4px;
  box-shadow: var(--box-shadow);
  text-align: center;
  
  h3 {
    margin-bottom: 1rem;
    position: relative;
    display: inline-block;
    
    &:after {
      content: '';
      position: absolute;
      left: 25%;
      bottom: -5px;
      width: 50%;
      height: 1px;
      background-color: var(--accent-color);
    }
  }
  
  p {
    color: var(--secondary-color);
    line-height: 1.6;
  }
`;

const TeamSection = styled.section`
  margin: 4rem 0;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 1rem;
`;

const TeamMember = styled(motion.div)`
  text-align: center;
  
  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 1.5rem;
  }
  
  h3 {
    margin-bottom: 0.5rem;
  }
  
  p.position {
    color: var(--accent-color);
    margin-bottom: 1rem;
    font-style: italic;
  }
  
  p.bio {
    color: var(--secondary-color);
    font-size: 0.9rem;
    line-height: 1.6;
  }
`;

const AboutPage: React.FC = () => {
  return (
    <>
      <AboutContainer>
        <TitleContainer>
          <PageTitle>About Élégance</PageTitle>
        </TitleContainer>
        
        <StorySection>
          <StoryImage src="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Our Boutique" />
          <StoryContent>
            <h2>Our Story</h2>
            <p>
              At Élégance, every garment tells a story. Rooted in a passion for distinctive design and quality craftsmanship, we bring you curated collections that celebrate individuality. Our commitment is to empower your style while providing a personalized, boutique experience.
            </p>
            <p>
              Founded in 2010 by fashion visionary Claire Dubois, Élégance began as a small curated collection in a charming storefront in the heart of the city. With an eye for exceptional quality and a dedication to showcasing emerging designers, Claire's vision quickly resonated with those seeking distinctive pieces beyond mainstream fashion.
            </p>
            <p>
              Today, Élégance has evolved into a destination for discerning fashion enthusiasts, but our core values remain unchanged: meticulous attention to detail, ethical sourcing practices, and a personalized shopping experience that honors the unique style of each client.
            </p>
          </StoryContent>
        </StorySection>
      </AboutContainer>
      
      <ValuesSection>
        <ValuesContainer>
          <ValuesTitleContainer>
            <ValuesSectionTitle>Our Values</ValuesSectionTitle>
          </ValuesTitleContainer>
          
          <ValuesGrid>
            <ValueCard 
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <h3>Quality Craftsmanship</h3>
              <p>
                We believe in the enduring value of well-crafted pieces. Each item in our collection is selected for its exceptional quality and attention to detail.
              </p>
            </ValueCard>
            
            <ValueCard 
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <h3>Ethical Sourcing</h3>
              <p>
                We partner with designers and manufacturers who share our commitment to ethical production methods and fair labor practices.
              </p>
            </ValueCard>
            
            <ValueCard 
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <h3>Personalized Experience</h3>
              <p>
                We believe shopping should be a joy, not a chore. Our team is dedicated to providing a personalized experience that celebrates your individual style.
              </p>
            </ValueCard>
          </ValuesGrid>
        </ValuesContainer>
      </ValuesSection>
      
      <TeamSection>
        <AboutContainer>
          <TitleContainer>
            <PageTitle>Our Team</PageTitle>
          </TitleContainer>
          
          <TeamGrid>
            <TeamMember
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="Claire Dubois" />
              <h3>Claire Dubois</h3>
              <p className="position">Founder & Creative Director</p>
              <p className="bio">
                With over 15 years in luxury fashion, Claire brings her visionary aesthetic and impeccable taste to every collection at Élégance.
              </p>
            </TeamMember>
            
            <TeamMember
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="Michel Laurent" />
              <h3>Michel Laurent</h3>
              <p className="position">Head of Design</p>
              <p className="bio">
                Michel's innovative approach to design has earned him recognition among fashion's elite. He leads our design team with passion and precision.
              </p>
            </TeamMember>
            
            <TeamMember
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80" alt="Sophie Moreau" />
              <h3>Sophie Moreau</h3>
              <p className="position">Buyer & Stylist</p>
              <p className="bio">
                With an expert eye for emerging trends and timeless classics, Sophie curates our collections and offers personalized styling services.
              </p>
            </TeamMember>
          </TeamGrid>
        </AboutContainer>
      </TeamSection>
    </>
  );
};

export default AboutPage; 