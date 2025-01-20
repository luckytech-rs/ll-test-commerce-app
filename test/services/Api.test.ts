import { fetchProducts } from '../../src/services/api';
import axios from 'axios';

vi.mock('axios');

describe('fetchProducts', () => {
    it('fetches and returns products', async () => {
        const mockProducts = [
            { id: 1, title: 'Product 1', category: 'Category 1', price: 10, image: '', description: '' },
        ];
        (axios.get as jest.Mock).mockResolvedValueOnce({ data: mockProducts });

        const products = await fetchProducts();
        expect(products).toEqual(mockProducts);
        expect(axios.get).toHaveBeenCalledWith('https://fakestoreapi.com/products');
    });
});
