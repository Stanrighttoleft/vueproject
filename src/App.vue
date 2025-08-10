<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from '@/components/navbar.vue'
import NewNavbar from '@/components/NewNavbar.vue';

</script>

<template>
  <main>
    <NewNavbar/>
     
    <!-- <Navbar/> -->
    <RouterView />
    

  </main>
</template>

<style>
html, body, div  {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>