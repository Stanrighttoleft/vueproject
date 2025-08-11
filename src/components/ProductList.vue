<template>
  <div>
    <h2>Products</h2>
    <ul>
        <li v-for="product in products" :key="product.id">
            {{ product.title }} - ${{ product.price }}
        </li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted, watch } from 'vue';
import { useProductStore } from '@/stores/productStore';
import { storeToRefs } from 'pinia';

const productStore = useProductStore()
const { products}=storeToRefs(productStore)
const { fetchProducts }=productStore


onMounted(async()=>{
    await fetchProducts()
    console.log('products in component:',products.value)
})

watch(products, (newVal)=>{
    console.log('products updated:', newVal)
})
</script>

<style>

</style>