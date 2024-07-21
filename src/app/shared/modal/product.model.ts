export class Product {
  id?: number;
  name?: string;
  description?: string;
  price!: number;
  thumbnail?: string;
  image?: string;
  brand?: string;
  rating!: number;
  stock?: number;
  category?: string;
}
