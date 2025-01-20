import { render } from '@testing-library/vue';
import ProductList from '../../src/components/ProductList.vue';
import { createTestingPinia } from '@pinia/testing';

describe('ProductList.vue', () => {
    it('renders the correct number of products', () => {
        const pinia = createTestingPinia({
            initialState: {
                product: {
                    filteredProducts: [
                        { id: 1, title: 'Product 1', price: 50, image: '', category: 'A', description: '' },
                        { id: 2, title: 'Product 2', price: 100, image: '', category: 'B', description: '' },
                    ],
                },
            },
        });

        const { getAllByRole } = render(ProductList, {
            global: { plugins: [pinia] },
        });

        const productItems = getAllByRole('img'); // Assumes each product has an image
        expect(productItems.length).toBe(2);
    });
});
