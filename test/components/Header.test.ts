import { render, fireEvent } from '@testing-library/vue';
import Header from '../../src/components/Header.vue';
import { createTestingPinia } from '@pinia/testing';
import * as api from '../../src/services/Api';
import { useProductStore } from '../../src/stores/ProductStore';

describe('Header.vue', () => {
    it('renders categories and triggers filtering', async () => {
        // Mock the API response
        vi.spyOn(api, 'fetchProducts').mockResolvedValue([
            { id: 1, title: 'Product 1', category: 'Category 1', price: 10, image: '', description: '' },
            { id: 2, title: 'Product 2', category: 'Category 2', price: 20, image: '', description: '' },
        ]);

        // Create a Pinia instance for testing
        const { getByText, getByRole } = render(Header, {
            global: {
                plugins: [
                    createTestingPinia({
                        initialState: {
                            product: {
                                categories: ['Category 1', 'Category 2'],
                                selectedCategory: '',
                            },
                        },
                        stubActions: false, // Allow actions to be called in Pinia
                    }),
                ],
            },
        });

        const store = useProductStore();

        // Call loadProducts to set up the categories
        await store.loadProducts();

        // Check if categories are rendered
        expect(getByText('Category 1')).toBeInTheDocument();
        expect(getByText('Category 2')).toBeInTheDocument();

        // Simulate changing category
        const select = getByRole('combobox');
        await fireEvent.change(select, { target: { value: 'Category 1' } });

        // Verify selected category in the store
        expect(store.selectedCategory).toBe('Category 1');
    });
});
