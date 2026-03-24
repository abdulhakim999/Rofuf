export interface Product {
  id: string;
  name: string;
  desc: string;
  longDesc?: string;
  price: number;
  oldPrice?: number;
  discount?: number;
  image: string;
  category: string;
  unit: string;
  rating?: number;
  reviews?: number;
  isFlashDeal?: boolean;
}
