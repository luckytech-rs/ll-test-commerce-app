import { defineStore } from 'pinia';
import { fetchProducts } from '../services/api';
import type { Product } from '../types/Product';

export const useProductStore = defineStore('product', {
    state: () => ({
        products: [] as Product[],
        filteredProducts: [] as Product[],
        categories: [] as string[],
        selectedCategory: '' as string,
        sortOrder: 'asc' as 'asc' | 'desc',
        viewMode: 'list' as 'list' | 'grid',
    }),
    actions: {
        async loadProducts() {
            const data = await fetchProducts();
            this.products = data;
            this.filteredProducts = data;
            this.categories = [...new Set(data.map((product) => product.category))];
        },
        filterByCategory(category: string) {
            if (category === '') {
                this.selectedCategory = category
                this.filteredProducts = this.products
            } else {
                this.selectedCategory = category;
                this.filteredProducts = this.products.filter(
                    (product) => product.category === category
                );
            }
        },
        sortByPrice(order: 'asc' | 'desc') {
            this.sortOrder = order;
            this.filteredProducts.sort((a, b) =>
                order === 'asc' ? a.price - b.price : b.price - a.price
            );
        },
        toggleViewMode() {
            this.viewMode = this.viewMode === 'list' ? 'grid' : 'list';
        },
    },
});