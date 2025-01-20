<script lang="ts" setup>
defineProps<{ product: Product, viewMode: string }>();
</script>

<template>
  <div class="product-card" :class="viewMode">
    <article class="img-holder">
      <img :src="product.image" alt="Product Image" width="auto" loading="lazy" />
    </article>
    <h3>{{ product.title }}</h3>
    <article class="content">
      <p class="price">${{ product.price }}</p>
      <p class="category">{{ product.category }}</p>
    </article>
  </div>
</template>

<style lang="scss" scoped>
.product-card {
  display: flex;
  padding: 10px;
  border: 1px solid #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3), 0 1px 3px rgba(0, 0, 0, 0.06);
  &.grid {
    flex-direction: column;
    width: 250px;
    gap: 10px;
    justify-content: space-around;
    .img-holder {
      height: 200px;
      display: flex;
      align-items: center;
      vertical-align: middle;
      margin: 0 auto;
    }
    img {
      height: auto;
      width: auto;
      max-width: 200px;
      max-height: 200px;
      mix-blend-mode: multiply;
    }
    .content {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }
  &.list {
    flex-direction: row;
    width: 100%;
    gap: 10px;
    justify-content: space-between;
    img {
      height: 80px;
      width: auto;
      mix-blend-mode: multiply;
    }
  }
}
.content {
  flex-direction: column;
  justify-content: flex-end;
  p.price {
    color: #888888;
    font-weight: bold;
    text-align: right;
  }
  p.category {
    background: crimson;
    color: #f9f9f9;
    border-radius: 10px;
    max-width: 200px;
    width: max-content;
    padding: 10px;
  }
}
</style>