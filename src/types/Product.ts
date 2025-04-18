export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  collection?: string;
  salePrice?: number;
  tags?: string[];
  stock?: number;
  isOnSale?: boolean;
  rating?: number;
  featured?: boolean;
} 