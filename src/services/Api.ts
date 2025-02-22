import axios from 'axios';
import type { Product } from '../types/product';

export async function fetchProducts(): Promise<Product[]> {
    const response = await axios.get('https://fakestoreapi.com/products');
    return response.data;
}