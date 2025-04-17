'use client'

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaShoppingCart, FaArrowLeft, FaHeart } from 'react-icons/fa';
import Link from 'next/link';

// Import cart context
import { useCart } from '@/context/CartContext';
import { Product } from '@/types/Product';

// Import products data
import { allProducts as products } from '@/utils/sampleData';

const ProductDetailContainer = styled.div`
  max-width: var(--max-width);
  margin: 3rem auto;
  padding: 0 1rem;
`;

const BackLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
  font-size: 0.9rem;
  color: var(--secondary-color);
  
  &:hover {
    color: var(--accent-color);
  }
`;

const ProductLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ProductImageContainer = styled.div`
  position: relative;
  
  .wishlist {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: rgba(255, 255, 255, 0.8);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: var(--transition);
    
    &:hover {
      background: white;
      color: var(--accent-color);
    }
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: var(--border-radius);
  object-fit: cover;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProductName = styled.h1`
  font-size: 2rem;
  margin-bottom: 0.5rem;
  font-weight: normal;
`;

const ProductPrice = styled.div`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: var(--accent-color);
`;

const ProductDescription = styled.p`
  line-height: 1.6;
  margin-bottom: 2rem;
  color: var(--secondary-color);
`;

const ProductMeta = styled.div`
  margin-bottom: 2rem;
  
  h3 {
    font-size: 1rem;
    margin-bottom: 0.5rem;
    font-weight: normal;
  }
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    
    li {
      margin-bottom: 0.25rem;
      color: var(--secondary-color);
      font-size: 0.9rem;
    }
  }
`;

const QuantitySelector = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  
  span {
    margin-right: 1rem;
    color: var(--secondary-color);
  }
  
  .controls {
    display: flex;
    align-items: center;
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius);
    overflow: hidden;
  }
  
  button {
    background: var(--light-bg);
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
    font-size: 1rem;
    
    &:hover {
      background: var(--border-color);
    }
  }
  
  input {
    width: 50px;
    border: none;
    border-left: 1px solid var(--border-color);
    border-right: 1px solid var(--border-color);
    text-align: center;
    padding: 0.5rem 0;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

const AddToCartButton = styled(motion.button)`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: var(--accent-color);
  color: white;
  border: none;
  border-radius: var(--border-radius);
  padding: 1rem;
  cursor: pointer;
  font-size: 1rem;
  transition: var(--transition);
  
  &:hover {
    background-color: var(--primary-color);
  }
`;

const BuyNowButton = styled(motion.button)`
  flex: 1;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: var(--border-radius);
  padding: 1rem;
  cursor: pointer;
  font-size: 1rem;
  transition: var(--transition);
  
  &:hover {
    background-color: var(--secondary-color);
  }
`;

const RelatedProducts = styled.div`
  margin-top: 4rem;
  
  h2 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    font-weight: normal;
    position: relative;
    display: inline-block;
    
    &:after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -10px;
      width: 100%;
      height: 2px;
      background-color: var(--accent-color);
    }
  }
  
  .products {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
    
    @media (max-width: 992px) {
      grid-template-columns: repeat(3, 1fr);
    }
    
    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
    
    @media (max-width: 576px) {
      grid-template-columns: 1fr;
    }
  }
  
  .product {
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius);
    overflow: hidden;
    transition: var(--transition);
    
    &:hover {
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
      transform: translateY(-5px);
    }
    
    img {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }
    
    .info {
      padding: 1rem;
      
      h3 {
        font-size: 1rem;
        margin-bottom: 0.5rem;
        font-weight: normal;
      }
      
      .price {
        color: var(--accent-color);
      }
    }
  }
`;

// Add a styled version of the related product link
const RelatedProductLink = styled(Link)`
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  overflow: hidden;
  transition: var(--transition);
  display: block;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--box-shadow);
  }
  
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  
  .info {
    padding: 1rem;
    
    h3 {
      font-size: 1rem;
      margin-bottom: 0.5rem;
      font-weight: normal;
    }
    
    .price {
      color: var(--accent-color);
      font-weight: bold;
    }
  }
`;

interface ProductDetailPageProps {
  productId?: string;
}

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ productId }) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const { addToCart } = useCart();

  useEffect(() => {
    if (productId) {
      const foundProduct = products.find(p => p.id === productId);
      if (foundProduct) {
        setProduct(foundProduct);
        
        // Find related products in the same category
        const related = products
          .filter(p => p.category === foundProduct.category && p.id !== foundProduct.id)
          .slice(0, 4);
        setRelatedProducts(related);
      }
    }
  }, [productId]);
  
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value > 0) {
      setQuantity(value);
    }
  };
  
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  
  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
    }
  };
  
  if (!product) {
    return (
      <ProductDetailContainer>
        <h2>Product not found</h2>
        <BackLink href="/products">
          <FaArrowLeft /> Back to Products
        </BackLink>
      </ProductDetailContainer>
    );
  }
  
  return (
    <ProductDetailContainer>
      <BackLink href="/products">
        <FaArrowLeft /> Back to Products
      </BackLink>
      
      <ProductLayout>
        <ProductImageContainer>
          <ProductImage src={product.image} alt={product.name} />
          <div className="wishlist">
            <FaHeart />
          </div>
        </ProductImageContainer>
        
        <ProductInfo>
          <ProductName>{product.name}</ProductName>
          <ProductPrice>${product.price.toFixed(2)}</ProductPrice>
          <ProductDescription>
            {product.description || 'No description available for this product.'}
          </ProductDescription>
          
          <ProductMeta>
            <h3>Details</h3>
            <ul>
              <li>Category: {product.category}</li>
              <li>SKU: {product.id.toString().padStart(6, '0')}</li>
              <li>Materials: Premium quality</li>
              <li>Shipping: Free on orders over $100</li>
            </ul>
          </ProductMeta>
          
          <QuantitySelector>
            <span>Quantity:</span>
            <div className="controls">
              <button onClick={decreaseQuantity}>-</button>
              <input 
                type="text" 
                value={quantity} 
                onChange={handleQuantityChange}
                min="1" 
              />
              <button onClick={increaseQuantity}>+</button>
            </div>
          </QuantitySelector>
          
          <ButtonGroup>
            <AddToCartButton 
              whileTap={{ scale: 0.95 }}
              onClick={handleAddToCart}
            >
              <FaShoppingCart /> Add to Cart
            </AddToCartButton>
            <BuyNowButton whileTap={{ scale: 0.95 }}>
              Buy Now
            </BuyNowButton>
          </ButtonGroup>
        </ProductInfo>
      </ProductLayout>
      
      {relatedProducts.length > 0 && (
        <RelatedProducts>
          <h2>Related Products</h2>
          <div className="products">
            {relatedProducts.map(related => (
              <RelatedProductLink href={`/products/${related.id}`} key={related.id}>
                <img src={related.image} alt={related.name} />
                <div className="info">
                  <h3>{related.name}</h3>
                  <div className="price">${related.price.toFixed(2)}</div>
                </div>
              </RelatedProductLink>
            ))}
          </div>
        </RelatedProducts>
      )}
    </ProductDetailContainer>
  );
};

export default ProductDetailPage; 