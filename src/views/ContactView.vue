<template>

    <div class="kk">
        <ProductList />
        <UserList />
        <test />


    </div>

</template>

<script setup>
import ProductList from '@/components/ProductList.vue';
import UserList from '@/components/UserList.vue';
import test from '@/components/test.vue';

</script>

<style>
.kk {
    height: 2000px;
}
</style>