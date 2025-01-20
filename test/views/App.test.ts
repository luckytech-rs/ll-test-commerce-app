import { render, waitFor } from '@testing-library/vue';
import App from '../../src/views/App.vue';
import { vi } from 'vitest';
import * as api from '../../src/services/Api';
import { createTestingPinia } from '@pinia/testing';

vi.spyOn(api, 'fetchProducts').mockResolvedValue([
    { id: 1, title: 'Product 1', category: 'Category 1', price: 10, image: '', description: '' },
    { id: 2, title: 'Product 2', category: 'Category 2', price: 20, image: '', description: '' },
]);

describe('App.vue', () => {
    it('renders Header and ProductList components', async () => {
        // Render the App component with Pinia
        const { getByText } = render(App, {
            global: {
                plugins: [
                    createTestingPinia({
                        initialState: {
                            product: {
                                categories: ['Category 1', 'Category 2'],
                                selectedCategory: '',
                            },
                        },
                        stubActions: false, // Allow actions to run
                    }),
                ],
            },
        });

        // Verify Category 1 is visible
        expect(getByText('Category 1')).toBeInTheDocument();

        // Wait for Product 1 to appear in the DOM
        await waitFor(() => {
            expect(getByText('Product 1')).toBeInTheDocument();
        });

    });
});
