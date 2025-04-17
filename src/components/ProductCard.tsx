'use client'

import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaShoppingCart, FaHeart } from 'react-icons/fa';
import { useCart } from '@/context/CartContext';
import { Product } from '@/types/Product';

interface ProductCardProps {
  product: Product;
}

const Card = styled(motion.div)`
  background-color: white;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: var(--box-shadow);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
  
  &:hover .product-image {
    transform: scale(1.1);
  }
  
  &:hover .product-actions {
    opacity: 1;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  height: 300px;
  overflow: hidden;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
`;

const ProductBadge = styled.span`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: var(--accent-color);
  color: white;
  padding: 0.25rem 0.75rem;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-radius: 2px;
`;

const ProductActions = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  opacity: 0;
  transition: opacity 0.3s ease;
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
  padding: 1rem;
`;

const ActionButton = styled.button`
  background-color: white;
  color: var(--primary-color);
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;
  
  &:hover {
    background-color: var(--accent-color);
    color: white;
  }
`;

const ProductInfo = styled.div`
  padding: 1.5rem;
`;

const ProductNameLink = styled(Link)`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  display: block;
  font-weight: normal;
  color: var(--primary-color);
  
  &:hover {
    color: var(--accent-color);
  }
`;

const ProductPrice = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
`;

const Price = styled.span`
  font-size: 1.1rem;
  color: var(--accent-color);
  font-weight: 500;
`;

const OriginalPrice = styled.span`
  font-size: 0.9rem;
  color: var(--light-text);
  text-decoration: line-through;
`;

const AddToCartButton = styled.button`
  width: 100%;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const StyledLink = styled(Link)`
  color: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  
  const handleAddToCart = () => {
    addToCart(product);
  };
  
  return (
    <Card
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ImageContainer>
        <ProductImage src={product.image} alt={product.name} className="product-image" />
        {product.category === 'new' && <ProductBadge>New</ProductBadge>}
        {product.category === 'sale' && <ProductBadge>Sale</ProductBadge>}
        
        <ProductActions className="product-actions">
          <ActionButton aria-label="Add to wishlist">
            <FaHeart />
          </ActionButton>
          <ActionButton aria-label="Quick view">
            <StyledLink href={`/products/${product.id}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
              </svg>
            </StyledLink>
          </ActionButton>
        </ProductActions>
      </ImageContainer>
      
      <ProductInfo>
        <ProductNameLink href={`/products/${product.id}`}>{product.name}</ProductNameLink>
        <ProductPrice>
          <Price>${product.price.toFixed(2)}</Price>
          {product.category === 'sale' && (
            <OriginalPrice>${(product.price * 1.2).toFixed(2)}</OriginalPrice>
          )}
        </ProductPrice>
        <AddToCartButton onClick={handleAddToCart}>
          <FaShoppingCart /> Add to Cart
        </AddToCartButton>
      </ProductInfo>
    </Card>
  );
};

export default ProductCard; 