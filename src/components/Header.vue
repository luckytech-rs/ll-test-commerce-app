<script lang="ts" setup>
import { useProductStore } from '../stores/productStore';

const productStore = useProductStore();
</script>

<template>
  <header>
    <select @change="productStore.filterByCategory($event.target.value)">
      <option value="">All Categories</option>
      <option v-for="category in productStore.categories" :key="category" :value="category">
        {{ category }}
      </option>
    </select>
    <article class="sorting">
      <button @click="productStore.sortByPrice('asc')" class="sort" :class="productStore.sortOrder === 'asc' ? 'active' : ''">Sort Asc</button>
      <button @click="productStore.sortByPrice('desc')" class="sort" :class="productStore.sortOrder === 'desc' ? 'active' : ''">Sort Desc</button>
    </article>
    <div class="toggle-switch">
      <input type="checkbox" id="view-switch" checked @click="productStore.toggleViewMode"/>
      <label for="view-switch" class="switch">
        <span class="toggle-text grid">GRID</span>
        <span class="toggle-text list">LIST</span>
        <div class="slider"></div>
      </label>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  display: flex;
  flex-direction: row;
  padding-bottom: 20px;
  justify-content: space-between;
  .sorting {
    display: flex;
    flex-direction: row;
  }
}
button {
  cursor: pointer;
  border: none;
  border-radius: 5px;
  padding: 10px;
  &.sort {
    display: flex;
    align-items: center;
    background-color: #535bf2;
    color: #f9f9f9;
    font-weight: normal;
    border-radius: 0;
    &:nth-of-type(1) {
      border-bottom-left-radius: 15px;
      border-top-left-radius: 15px;
    }
    &:nth-of-type(2) {
      border-bottom-right-radius: 15px;
      border-top-right-radius: 15px;
    }
    &.active {
      font-weight: bold;
      color: #ffffff;
      background-color: adjust-hue(#535bf2, 10)
    }
  }
}
/* Toggle Switch Container */
.toggle-switch {
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Hidden Checkbox */
input[type="checkbox"] {
  display: none;
}

/* Label Acting as Switch */
.switch {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100px;
  height: 40px;
  background-color: #4caf50;
  border-radius: 50px;
  position: relative;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

/* GRID/LIST Text */
.toggle-text {
  position: absolute;
  font-size: 14px;
  font-weight: bold;
  color: white;
  pointer-events: none;
  transition: opacity 0.3s ease;
}

.toggle-text.grid {
  left: 40px;
  opacity: 0;
  right: 0;
}

.toggle-text.list {
  right: 10px;
  opacity: 1;
  left: 10px;
}

/* Slider (Circle) */
.slider {
  position: absolute;
  top: 4px;
  left: 4px;
  width: 32px;
  height: 32px;
  background-color: white;
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
  transform: translateX(60px);
}

/* Checkbox Checked State */
input[type="checkbox"]:not(:checked) + .switch {
  background-color: #1e90ff;
}

input[type="checkbox"]:not(:checked) + .switch .toggle-text.grid {
  opacity: 1; /* GRID visible when unchecked */
}

input[type="checkbox"]:not(:checked) + .switch .toggle-text.list {
  opacity: 0; /* LIST hidden when unchecked */
}

input[type="checkbox"]:not(:checked) + .switch .slider {
  transform: translateX(0); /* Slider moves to GRID position */
}

</style>