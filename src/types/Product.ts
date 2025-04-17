export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  salePrice?: number;
  tags?: string[];
  stock?: number;
  isOnSale?: boolean;
  rating?: number;
  featured?: boolean;
} 