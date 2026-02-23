export type Category = 'Apparel' | 'Accessories' | 'Home';

export interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  compareAtPrice?: number;
  category: Category;
  description: string;
  features: string[];
  images: string[];
  rating: number;
  reviewCount: number;
  stockStatus: 'in_stock' | 'low_stock' | 'out_of_stock';
  tags: string[];
  isNew: boolean;
  isBestSeller: boolean;
  variants?: {
    type: 'Size' | 'Color';
    options: string[];
  }[];
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize?: string;
  selectedColor?: string;
}

export interface OrderSummary {
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
}
