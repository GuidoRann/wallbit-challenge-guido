export interface Product {
  category: string;
  description: string;
  id: number;
  price: number;
  quantity: number;
  rating: {
    count: number;
    rate: number;
  }
  title: string;
  image: string;
}