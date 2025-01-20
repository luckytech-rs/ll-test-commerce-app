<script lang="ts" setup>
import { computed } from 'vue';
import { useProductStore } from '../stores/productStore';
import ProductCard from './ProductCard.vue';

const productStore = useProductStore();
const products = computed(() => productStore.filteredProducts);
const viewMode = computed(() => productStore.viewMode);
</script>

<template>
  <section class='products' :class="viewMode">
    <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
        :viewMode="viewMode"
    />
  </section>
</template>

<style lang="scss">
.products {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  max-width: 860px;
  width: 100%;
  @media screen and (min-width: 900px) {
    min-width: 860px;
  }
  &.list {
    flex-direction: column;
    flex-wrap: wrap;
    flex: 1;
  }
  &.grid {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>