import { defineStore } from "pinia";
import { ref } from "vue";
import request from "@/api/request";

export const useProductStore = defineStore('product', () => {
    const products = ref([])
    const fetchProducts = async () => {
        try {
            const response = await request.get('api/products')

            products.value = response.data.data

            console.log('Users assigned to store:', products.value)
        } catch (error) {
            console.error('Failed to fetch products:', error)
        }
    }
    return {
        products,
        fetchProducts,
    }
})