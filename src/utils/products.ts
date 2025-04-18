import { Product } from '@/types/Product';
import { featuredProducts, allProducts } from './sampleData';

// Simulated API function - in a real app this would fetch from a real API
export async function getProducts(options?: {
  featured?: boolean;
  category?: string;
  collection?: string;
  limit?: number;
}): Promise<Product[]> {
  // In a real app, this would be an API call
  // For now, simulate a delay to mimic real-world API
  await new Promise(resolve => setTimeout(resolve, 100));
  
  let result = [...allProducts];
  
  // Filter by featured
  if (options?.featured) {
    return featuredProducts;
  }
  
  // Filter by category
  if (options?.category) {
    result = result.filter(product => 
      product.category.toLowerCase() === options.category?.toLowerCase()
    );
  }
  
  // Filter by collection
  if (options?.collection) {
    result = result.filter(product => 
      product.collection?.toLowerCase() === options.collection?.toLowerCase()
    );
  }
  
  // Apply limit
  if (options?.limit && result.length > options.limit) {
    result = result.slice(0, options.limit);
  }
  
  return result;
}

// Get a single product by ID
export async function getProductById(id: string): Promise<Product | undefined> {
  // In a real app, this would be an API call
  await new Promise(resolve => setTimeout(resolve, 50));
  
  return allProducts.find(product => product.id === id);
} 