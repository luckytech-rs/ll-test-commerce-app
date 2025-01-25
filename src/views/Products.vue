<script lang="ts" setup>
import Header from '../components/Header.vue';
import ProductList from '../components/ProductList.vue';
import { useProductStore } from '../stores/productStore';

const productStore = useProductStore();
productStore.loadProducts();
</script>

<template>
  <div id="products">
    <Header />
    <ProductList />
  </div>
</template>

<style lang="scss">
#app {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  padding: 10px;
}
</style>