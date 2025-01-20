import { setActivePinia, createPinia } from 'pinia';
import { useProductStore } from '../../src/stores/productStore';
import * as api from '../../src/services/api'; // Mock the entire API module


describe('ProductStore', () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    });

    it('loads products and sets categories', async () => {
        const store = useProductStore();

        // Mock the API response
        vi.spyOn(api, 'fetchProducts').mockResolvedValue([
            { id: 1, title: 'Product 1', category: 'Category 1', price: 10, image: '', description: '' },
            { id: 2, title: 'Product 2', category: 'Category 2', price: 20, image: '', description: '' },
        ]);

        // Call the loadProducts action
        await store.loadProducts();

        // Check if categories are set correctly
        expect(store.categories).toEqual(['Category 1', 'Category 2']);
        expect(store.products).toHaveLength(2); // Optional: Verify products are loaded
    });

    it('filters products by category', () => {
        const store = useProductStore();

        store.$patch({
            products: [
                { id: 1, title: 'Product 1', category: 'Category 1', price: 10, image: '', description: '' },
                { id: 2, title: 'Product 2', category: 'Category 2', price: 20, image: '', description: '' },
            ],
        });

        store.filterByCategory('Category 1');
        expect(store.filteredProducts).toEqual([
            { id: 1, title: 'Product 1', category: 'Category 1', price: 10, image: '', description: '' },
        ]);
    });
});
