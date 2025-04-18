'use client'

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';
import { FaLock, FaCreditCard, FaPaypal } from 'react-icons/fa';

// Import cart context
import { useCart } from '@/context/CartContext';

const CheckoutContainer = styled.div`
  max-width: var(--max-width);
  margin: 3rem auto;
  padding: 0 1rem;
`;

const PageTitle = styled.h1`
  text-align: center;
  margin-bottom: 3rem;
  font-weight: normal;
`;

const CheckoutLayout = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CheckoutForm = styled.form`
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  padding: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.3rem;
  margin-bottom: 1.5rem;
  font-weight: normal;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 50px;
    height: 2px;
    background-color: var(--accent-color);
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
  
  &.half {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    
    @media (max-width: 576px) {
      grid-template-columns: 1fr;
    }
  }
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  color: var(--secondary-color);
`;

const FormInput = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  font-family: inherit;
  
  &:focus {
    outline: none;
    border-color: var(--accent-color);
  }
`;

const FormSelect = styled.select`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  font-family: inherit;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 1em;
  
  &:focus {
    outline: none;
    border-color: var(--accent-color);
  }
`;

const Separator = styled.div`
  margin: 2rem 0;
  border-top: 1px solid var(--border-color);
`;

const PaymentOptions = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

const PaymentOption = styled.label<{ selected: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  border: 1px solid ${props => props.selected ? 'var(--accent-color)' : 'var(--border-color)'};
  border-radius: var(--border-radius);
  cursor: pointer;
  flex: 1;
  background-color: ${props => props.selected ? 'rgba(var(--accent-color-rgb), 0.05)' : 'transparent'};
  
  input {
    margin-right: 0.5rem;
  }
  
  svg {
    color: ${props => props.selected ? 'var(--accent-color)' : 'var(--secondary-color)'};
  }
  
  &:hover {
    border-color: var(--accent-color);
  }
`;

const OrderSummary = styled.div`
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  padding: 1.5rem;
`;

const SummaryTitle = styled.h2`
  font-size: 1.3rem;
  margin-bottom: 1.5rem;
  font-weight: normal;
`;

const OrderItems = styled.div`
  margin-bottom: 1.5rem;
`;

const OrderItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--border-color);
  
  &:last-child {
    border-bottom: none;
  }
`;

const ItemInfo = styled.div`
  display: flex;
  gap: 1rem;
`;

const ItemImage = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: var(--border-radius);
`;

const ItemDetails = styled.div`
  h3 {
    font-size: 0.9rem;
    margin-bottom: 0.25rem;
    font-weight: normal;
  }
  
  span {
    display: block;
    font-size: 0.8rem;
    color: var(--secondary-color);
  }
`;

const ItemPrice = styled.div`
  font-weight: 500;
`;

const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  
  &.total {
    border-top: 1px solid var(--border-color);
    padding-top: 1rem;
    margin-top: 1rem;
    font-size: 1.1rem;
    font-weight: 500;
  }
`;

const SummaryLabel = styled.span`
  color: var(--secondary-color);
`;

const SummaryValue = styled.span`
  font-weight: ${props => props.className === 'total' ? '500' : 'normal'};
`;

const SecureCheckout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
  color: var(--secondary-color);
  font-size: 0.8rem;
  
  svg {
    color: var(--accent-color);
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  background-color: var(--accent-color);
  color: white;
  padding: 1rem;
  border: none;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: var(--transition);
  margin-top: 2rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 0.9rem;
  
  &:hover {
    background-color: var(--primary-color);
  }
  
  &:disabled {
    background-color: var(--light-text);
    cursor: not-allowed;
  }
`;

const CheckoutPage: React.FC = () => {
  const { cart, totalPrice, clearCart } = useCart();
  const router = useRouter();
  
  const [paymentMethod, setPaymentMethod] = useState<'credit' | 'paypal'>('credit');
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'USA',
    cardName: '',
    cardNumber: '',
    expDate: '',
    cvv: ''
  });
  
  const [submitting, setSubmitting] = useState(false);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  // Calculate subtotal, taxes, and shipping
  const subtotal = totalPrice;
  const taxes = subtotal * 0.1; // 10% tax
  const shipping = subtotal > 100 ? 0 : 10; // Free shipping on orders over $100
  const orderTotal = subtotal + taxes + shipping;
  
  useEffect(() => {
    if (cart.length === 0) {
      router.push('/cart');
    }
  }, [cart, router]);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Process checkout logic here
    
    // Show confirmation and redirect
    alert('Thank you for your order! Your items will be shipped shortly.');
    clearCart();
    router.push('/');
  };
  
  if (cart.length === 0) {
    return null; // Return null while redirecting
  }
  
  return (
    <CheckoutContainer>
      <PageTitle>Checkout</PageTitle>
      
      <CheckoutLayout>
        <CheckoutForm onSubmit={handleSubmit}>
          <SectionTitle>Shipping Information</SectionTitle>
          
          <FormGroup className="half">
            <div>
              <FormLabel htmlFor="firstName">First Name</FormLabel>
              <FormInput
                id="firstName"
                name="firstName"
                type="text"
                value={formState.firstName}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div>
              <FormLabel htmlFor="lastName">Last Name</FormLabel>
              <FormInput
                id="lastName"
                name="lastName"
                type="text"
                value={formState.lastName}
                onChange={handleInputChange}
                required
              />
            </div>
          </FormGroup>
          
          <FormGroup>
            <FormLabel htmlFor="email">Email Address</FormLabel>
            <FormInput
              id="email"
              name="email"
              type="email"
              value={formState.email}
              onChange={handleInputChange}
              required
            />
          </FormGroup>
          
          <FormGroup>
            <FormLabel htmlFor="address">Street Address</FormLabel>
            <FormInput
              id="address"
              name="address"
              type="text"
              value={formState.address}
              onChange={handleInputChange}
              required
            />
          </FormGroup>
          
          <FormGroup className="half">
            <div>
              <FormLabel htmlFor="city">City</FormLabel>
              <FormInput
                id="city"
                name="city"
                type="text"
                value={formState.city}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div>
              <FormLabel htmlFor="state">State/Province</FormLabel>
              <FormInput
                id="state"
                name="state"
                type="text"
                value={formState.state}
                onChange={handleInputChange}
                required
              />
            </div>
          </FormGroup>
          
          <FormGroup className="half">
            <div>
              <FormLabel htmlFor="zipCode">ZIP/Postal Code</FormLabel>
              <FormInput
                id="zipCode"
                name="zipCode"
                type="text"
                value={formState.zipCode}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div>
              <FormLabel htmlFor="country">Country</FormLabel>
              <FormSelect
                id="country"
                name="country"
                value={formState.country}
                onChange={handleInputChange}
                required
              >
                <option value="USA">United States</option>
                <option value="Canada">Canada</option>
                <option value="UK">United Kingdom</option>
                <option value="Australia">Australia</option>
                <option value="Germany">Germany</option>
                <option value="France">France</option>
              </FormSelect>
            </div>
          </FormGroup>
          
          <Separator />
          
          <SectionTitle>Payment Method</SectionTitle>
          
          <PaymentOptions>
            <PaymentOption selected={paymentMethod === 'credit'}>
              <input
                type="radio"
                name="paymentMethod"
                value="credit"
                checked={paymentMethod === 'credit'}
                onChange={() => setPaymentMethod('credit')}
              />
              <FaCreditCard />
              <span>Credit Card</span>
            </PaymentOption>
            
            <PaymentOption selected={paymentMethod === 'paypal'}>
              <input
                type="radio"
                name="paymentMethod"
                value="paypal"
                checked={paymentMethod === 'paypal'}
                onChange={() => setPaymentMethod('paypal')}
              />
              <FaPaypal />
              <span>PayPal</span>
            </PaymentOption>
          </PaymentOptions>
          
          {paymentMethod === 'credit' && (
            <>
              <FormGroup>
                <FormLabel htmlFor="cardName">Name on Card</FormLabel>
                <FormInput
                  id="cardName"
                  name="cardName"
                  type="text"
                  value={formState.cardName}
                  onChange={handleInputChange}
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <FormLabel htmlFor="cardNumber">Card Number</FormLabel>
                <FormInput
                  id="cardNumber"
                  name="cardNumber"
                  type="text"
                  placeholder="XXXX XXXX XXXX XXXX"
                  value={formState.cardNumber}
                  onChange={handleInputChange}
                  required
                />
              </FormGroup>
              
              <FormGroup className="half">
                <div>
                  <FormLabel htmlFor="expDate">Expiration Date</FormLabel>
                  <FormInput
                    id="expDate"
                    name="expDate"
                    type="text"
                    placeholder="MM/YY"
                    value={formState.expDate}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div>
                  <FormLabel htmlFor="cvv">CVV</FormLabel>
                  <FormInput
                    id="cvv"
                    name="cvv"
                    type="text"
                    placeholder="123"
                    value={formState.cvv}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </FormGroup>
            </>
          )}
          
          <SubmitButton type="submit" disabled={submitting}>
            {submitting ? 'Processing...' : 'Place Order'}
          </SubmitButton>
          
          <SecureCheckout>
            <FaLock /> Secure checkout - Your data is protected
          </SecureCheckout>
        </CheckoutForm>
        
        <OrderSummary>
          <SummaryTitle>Order Summary ({cart.length} item{cart.length !== 1 ? 's' : ''})</SummaryTitle>
          
          <OrderItems>
            {cart.map(item => (
              <OrderItem key={item.id}>
                <ItemInfo>
                  <ItemImage src={item.image} alt={item.name} />
                  <ItemDetails>
                    <h3>{item.name}</h3>
                    <span>Qty: {item.quantity}</span>
                  </ItemDetails>
                </ItemInfo>
                <ItemPrice>${(item.price * item.quantity).toFixed(2)}</ItemPrice>
              </OrderItem>
            ))}
          </OrderItems>
          
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
        </OrderSummary>
      </CheckoutLayout>
    </CheckoutContainer>
  );
};

export default CheckoutPage; 