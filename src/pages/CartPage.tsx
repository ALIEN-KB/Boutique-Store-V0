'use client'

import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaTrashAlt, FaArrowRight, FaShoppingCart } from 'react-icons/fa';

// Import cart context
import { useCart } from '@/context/CartContext';

const CartContainer = styled.div`
  max-width: var(--max-width);
  margin: 3rem auto;
  padding: 0 1rem;
`;

const PageTitle = styled.h1`
  text-align: center;
  margin-bottom: 3rem;
  font-weight: normal;
`;

const EmptyCart = styled.div`
  text-align: center;
  padding: 3rem 0;
  
  svg {
    font-size: 3rem;
    color: var(--light-text);
    margin-bottom: 1.5rem;
  }
  
  h2 {
    margin-bottom: 1rem;
    font-weight: normal;
  }
  
  p {
    color: var(--secondary-color);
    margin-bottom: 2rem;
  }
`;

const ShopButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: var(--accent-color);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: var(--border-radius);
  transition: var(--transition);
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 0.9rem;
  
  &:hover {
    background-color: var(--primary-color);
    transform: translateY(-3px);
  }
`;

const CartLayout = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CartItems = styled.div`
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  padding: 1.5rem;
`;

const CartItemsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const CartItem = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr auto;
  gap: 1rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--border-color);
  
  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 80px 1fr;
    row-gap: 1rem;
  }
`;

const ItemImage = styled.img`
  width: 100%;
  height: 100px;
  object-fit: cover;
  border-radius: var(--border-radius);
`;

const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ItemName = styled(Link)`
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  font-weight: normal;
  
  &:hover {
    color: var(--accent-color);
  }
`;

const ItemPrice = styled.div`
  font-size: 1rem;
  color: var(--accent-color);
  font-weight: 500;
`;

const ItemControls = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  
  @media (max-width: 576px) {
    grid-column: 1 / -1;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  overflow: hidden;
`;

const QuantityButton = styled.button`
  background-color: white;
  border: none;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s ease;
  padding: 0;
  
  &:hover {
    background-color: var(--light-bg);
  }
  
  &:disabled {
    color: var(--light-text);
    cursor: not-allowed;
  }
`;

const QuantityInput = styled.input`
  width: 40px;
  height: 30px;
  border: none;
  border-left: 1px solid var(--border-color);
  border-right: 1px solid var(--border-color);
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  
  &:focus {
    outline: none;
  }
  
  /* Remove arrows from number input */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  
  &[type=number] {
    -moz-appearance: textfield;
  }
`;

const RemoveButton = styled.button`
  background: none;
  border: none;
  color: var(--light-text);
  cursor: pointer;
  padding: 0;
  font-size: 1rem;
  
  &:hover {
    color: var(--error-color);
  }
`;

const CartSummary = styled.div`
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  padding: 1.5rem;
`;

const SummaryTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  font-weight: normal;
`;

const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  
  &.total {
    border-top: 1px solid var(--border-color);
    padding-top: 1rem;
    margin-top: 1rem;
    font-weight: 500;
  }
`;

const SummaryLabel = styled.span`
  color: var(--secondary-color);
`;

const SummaryValue = styled.span`
  font-weight: ${props => props.className === 'total' ? '500' : 'normal'};
`;

const CheckoutButton = styled(Link)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  background-color: var(--accent-color);
  color: white;
  padding: 0.75rem;
  border-radius: var(--border-radius);
  transition: var(--transition);
  margin-top: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 0.9rem;
  
  &:hover {
    background-color: var(--primary-color);
  }
`;

const ContinueShopping = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--accent-color);
  margin-top: 1rem;
  justify-content: center;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  
  &:hover {
    text-decoration: underline;
  }
`;

const CartPage: React.FC = () => {
  const { cart, updateQuantity, removeFromCart, totalItems, totalPrice } = useCart();
  
  const handleQuantityChange = (productId: string, quantity: number) => {
    updateQuantity(productId, quantity);
  };
  
  // Calculate subtotal, taxes, and shipping
  const subtotal = totalPrice;
  const taxes = subtotal * 0.1; // 10% tax
  const shipping = subtotal > 100 ? 0 : 10; // Free shipping on orders over $100
  const orderTotal = subtotal + taxes + shipping;
  
  if (cart.length === 0) {
    return (
      <CartContainer>
        <PageTitle>Your Cart</PageTitle>
        <EmptyCart>
          <FaShoppingCart />
          <h2>Your cart is empty</h2>
          <p>Looks like you haven't added anything to your cart yet.</p>
          <ShopButton href="/products">
            Start Shopping <FaArrowRight />
          </ShopButton>
        </EmptyCart>
      </CartContainer>
    );
  }
  
  return (
    <CartContainer>
      <PageTitle>Your Cart ({totalItems} item{totalItems !== 1 ? 's' : ''})</PageTitle>
      
      <CartLayout>
        <CartItems>
          <CartItemsList>
            {cart.map(item => (
              <CartItem key={item.id}>
                <ItemImage src={item.image} alt={item.name} />
                
                <ItemDetails>
                  <div>
                    <ItemName href={`/products/${item.id}`}>{item.name}</ItemName>
                    <p>Category: {item.category}</p>
                  </div>
                  <ItemPrice>${item.price.toFixed(2)}</ItemPrice>
                </ItemDetails>
                
                <ItemControls>
                  <QuantityControl>
                    <QuantityButton 
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >
                      -
                    </QuantityButton>
                    <QuantityInput 
                      type="number" 
                      min="1" 
                      value={item.quantity} 
                      onChange={(e) => {
                        const val = parseInt(e.target.value);
                        if (!isNaN(val) && val > 0) {
                          handleQuantityChange(item.id, val);
                        }
                      }} 
                    />
                    <QuantityButton onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>
                      +
                    </QuantityButton>
                  </QuantityControl>
                  
                  <RemoveButton onClick={() => removeFromCart(item.id)}>
                    <FaTrashAlt />
                  </RemoveButton>
                </ItemControls>
              </CartItem>
            ))}
          </CartItemsList>
        </CartItems>
        
        <CartSummary>
          <SummaryTitle>Order Summary</SummaryTitle>
          
          <SummaryRow>
            <SummaryLabel>Subtotal</SummaryLabel>
            <SummaryValue>${subtotal.toFixed(2)}</SummaryValue>
          </SummaryRow>
          
          <SummaryRow>
            <SummaryLabel>Taxes</SummaryLabel>
            <SummaryValue>${taxes.toFixed(2)}</SummaryValue>
          </SummaryRow>
          
          <SummaryRow>
            <SummaryLabel>Shipping</SummaryLabel>
            <SummaryValue>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</SummaryValue>
          </SummaryRow>
          
          <SummaryRow className="total">
            <SummaryLabel>Total</SummaryLabel>
            <SummaryValue className="total">${orderTotal.toFixed(2)}</SummaryValue>
          </SummaryRow>
          
          <CheckoutButton href="/checkout">
            Proceed to Checkout <FaArrowRight />
          </CheckoutButton>
          
          <ContinueShopping href="/products">
            Continue Shopping
          </ContinueShopping>
        </CartSummary>
      </CartLayout>
    </CartContainer>
  );
};

export default CartPage; 