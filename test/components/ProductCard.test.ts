import { render } from '@testing-library/vue';
import ProductCard from '../../src/components/ProductCard.vue';

describe('ProductCard.vue', () => {
    it('renders product information correctly', () => {
        const product = {
            id: 1,
            title: 'Test Product',
            price: 99.99,
            category: 'Category',
            image: '/test-image.jpg',
            description: 'Test description',
        };

        const { getByText, getByAltText } = render(ProductCard, {
            props: { product },
        });

        expect(getByText('Test Product')).toBeInTheDocument();
        expect(getByText('$99.99')).toBeInTheDocument();
        expect(getByText('Category')).toBeInTheDocument();
        expect(getByAltText('Product Image')).toHaveAttribute('src', '/test-image.jpg');
    });
});
