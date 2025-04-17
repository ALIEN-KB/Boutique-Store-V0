'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaFilter, FaSearch, FaSortAmountDown, FaSortAmountUp } from 'react-icons/fa';

// Import products data
import { allProducts as products } from '@/utils/sampleData';

// Import cart context
import { useCart } from '@/context/CartContext';
import { Product } from '@/types/Product';

const PageContainer = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const PageHeader = styled.div`
  margin-bottom: 3rem;
  text-align: center;
  
  h1 {
    font-size: 2.5rem;
    font-weight: normal;
    margin-bottom: 1rem;
  }
  
  p {
    color: var(--secondary-color);
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
  }
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const FiltersGroup = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
  }
`;

const FilterButton = styled.button<{ isActive?: boolean }>`
  padding: 0.5rem 1rem;
  background-color: ${props => props.isActive ? 'var(--accent-color)' : 'transparent'};
  color: ${props => props.isActive ? 'white' : 'var(--primary-color)'};
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: var(--transition);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    background-color: ${props => props.isActive ? 'var(--accent-color)' : 'var(--light-bg)'};
  }
`;

const SearchContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 300px;
  
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.5rem 1rem 0.5rem 2.5rem;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  
  &:focus {
    outline: none;
    border-color: var(--accent-color);
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--secondary-color);
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
`;

const ProductCard = styled(motion.div)`
  border-radius: var(--border-radius);
  overflow: hidden;
  transition: var(--transition);
  
  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  transition: var(--transition);
  
  &:hover {
    transform: scale(1.05);
  }
`;

const ProductInfo = styled.div`
  padding: 1rem;
`;

const ProductName = styled.h3`
  font-size: 1rem;
  font-weight: normal;
  margin-bottom: 0.5rem;
`;

const ProductPrice = styled.div`
  color: var(--accent-color);
  font-size: 1.1rem;
`;

const CategoryBadge = styled.span`
  position: absolute;
  top: 1rem;
  left: 1rem;
  background-color: var(--accent-color);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 2px;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const ProductActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5rem;
`;

const AddToCartButton = styled.button`
  background-color: var(--primary-color);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: var(--transition);
  
  &:hover {
    background-color: var(--accent-color);
  }
`;

const ViewDetailsLink = styled(Link)`
  color: var(--secondary-color);
  font-size: 0.9rem;
  
  &:hover {
    color: var(--accent-color);
    text-decoration: underline;
  }
`;

const NoProductsFound = styled.div`
  text-align: center;
  padding: 3rem;
  color: var(--secondary-color);
  
  h3 {
    margin-bottom: 1rem;
    font-weight: normal;
    font-size: 1.5rem;
  }
  
  p {
    margin-bottom: 1.5rem;
  }
  
  button {
    background-color: var(--accent-color);
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: var(--border-radius);
    cursor: pointer;
    transition: var(--transition);
    
    &:hover {
      background-color: var(--primary-color);
    }
  }
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
  gap: 0.5rem;
`;

const PageButton = styled.button<{ isActive?: boolean }>`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${props => props.isActive ? 'var(--accent-color)' : 'var(--border-color)'};
  background-color: ${props => props.isActive ? 'var(--accent-color)' : 'transparent'};
  color: ${props => props.isActive ? 'white' : 'var(--primary-color)'};
  cursor: pointer;
  transition: var(--transition);
  
  &:hover {
    background-color: ${props => props.isActive ? 'var(--accent-color)' : 'var(--light-bg)'};
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const ProductsPage: React.FC = () => {
  const { addToCart } = useCart();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const productsPerPage = 8;

  // Get all unique categories
  const categories: string[] = ['all', ...Array.from(new Set(products.map((product: Product) => product.category))) as string[]];
  
  // Filter products when category, search term, or sort order changes
  useEffect(() => {
    let result = [...products];
    
    // Filter by category
    if (activeCategory !== 'all') {
      result = result.filter(product => product.category === activeCategory);
    }
    
    // Filter by search term
    if (searchTerm) {
      const searchTermLower = searchTerm.toLowerCase();
      result = result.filter(
        product => 
          product.name.toLowerCase().includes(searchTermLower) || 
          product.description?.toLowerCase().includes(searchTermLower)
      );
    }
    
    // Sort by price
    result.sort((a, b) => {
      return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
    });
    
    setFilteredProducts(result);
    // Reset to first page when filters change
    setCurrentPage(1);
  }, [activeCategory, searchTerm, sortOrder]);
  
  // Calculate current products for pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  
  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  
  // Handle filter changes
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };
  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  
  const toggleSortOrder = () => {
    setSortOrder(prevOrder => prevOrder === 'asc' ? 'desc' : 'asc');
  };
  
  const handleAddToCart = (product: Product) => {
    addToCart(product, 1);
  };
  
  const handleResetFilters = () => {
    setActiveCategory('all');
    setSearchTerm('');
    setSortOrder('asc');
  };
  
  return (
    <PageContainer>
      <PageHeader>
        <h1>Our Products</h1>
        <p>Explore our collection of high-quality products designed to elevate your lifestyle.</p>
      </PageHeader>
      
      <FilterContainer>
        <FiltersGroup>
          <FilterButton
            onClick={toggleSortOrder}
          >
            {sortOrder === 'asc' ? <FaSortAmountUp /> : <FaSortAmountDown />}
            Price: {sortOrder === 'asc' ? 'Low to High' : 'High to Low'}
          </FilterButton>
          
          <FilterButton onClick={() => setActiveCategory('all')} isActive={activeCategory === 'all'}>
            <FaFilter /> All Products
          </FilterButton>
          
          {categories.filter(cat => cat !== 'all').map((category: string) => (
            <FilterButton
              key={category}
              onClick={() => handleCategoryChange(category)}
              isActive={activeCategory === category}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </FilterButton>
          ))}
        </FiltersGroup>
        
        <SearchContainer>
          <SearchIcon>
            <FaSearch />
          </SearchIcon>
          <SearchInput
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </SearchContainer>
      </FilterContainer>
      
      {currentProducts.length > 0 ? (
        <>
          <ProductGrid>
            {currentProducts.map(product => (
              <ProductCard
                key={product.id}
                whileHover={{ y: -5 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div style={{ position: 'relative', overflow: 'hidden' }}>
                  <Link href={`/products/${product.id}`}>
                    <ProductImage src={product.image} alt={product.name} />
                  </Link>
                  {product.category && (
                    <CategoryBadge>
                      {product.category}
                    </CategoryBadge>
                  )}
                </div>
                
                <ProductInfo>
                  <ProductName>{product.name}</ProductName>
                  <ProductPrice>${product.price.toFixed(2)}</ProductPrice>
                  
                  <ProductActions>
                    <ViewDetailsLink href={`/products/${product.id}`}>View Details</ViewDetailsLink>
                    <AddToCartButton onClick={() => handleAddToCart(product)}>
                      Add to Cart
                    </AddToCartButton>
                  </ProductActions>
                </ProductInfo>
              </ProductCard>
            ))}
          </ProductGrid>
          
          {totalPages > 1 && (
            <Pagination>
              <PageButton 
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
              >
                &lt;
              </PageButton>
              
              {[...Array(totalPages)].map((_, index) => (
                <PageButton
                  key={index}
                  onClick={() => paginate(index + 1)}
                  isActive={currentPage === index + 1}
                >
                  {index + 1}
                </PageButton>
              ))}
              
              <PageButton 
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                &gt;
              </PageButton>
            </Pagination>
          )}
        </>
      ) : (
        <NoProductsFound>
          <h3>No Products Found</h3>
          <p>Try changing your search criteria or explore our other categories.</p>
          <button onClick={handleResetFilters}>View All Products</button>
        </NoProductsFound>
      )}
    </PageContainer>
  );
};

export default ProductsPage; 