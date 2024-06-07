import { Stripe } from "stripe";

import { ProductService } from "../apis";


export interface Product {
  id: string;
  active?: boolean;
  name?: string;
  description?: string;
  image?: string;
  metadata?: Stripe.Metadata;
  price?: string;
}


export type ProductsWithImages = Awaited<ReturnType<typeof ProductService.getProductById>>|undefined