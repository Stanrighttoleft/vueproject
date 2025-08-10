<script setup>
import openBanner from '@/components/openBanner.vue'; 
import ImageCard from '@/components/image-card.vue';
import { ref } from 'vue';
import product from '@/components/product.vue';
import ProductShow from '@/components/ProductShow.vue';
import News from '@/components/news.vue';
import AboutUs from '@/components/AboutUs.vue';





const list=ref([{
    id:1,
    category:'雜貨',
    name:'澳洲的土',
    image:'./assets/1.jpg',
    price:1200,
    topsale:true,
    latest:true,


},{
    id:2,
    category:'雜貨',
    name:'澳洲的水',
    image:'./assets/2.jpg',
    price:1200,
    topsale:false,
    latest:true,

},{
    id:3,
    category:'雜貨',
    name:'澳洲的空氣',
    image:'./assets/3.jpg',
    price:1200,
    topsale:true,
    latest:true,


},{
    id:4,
    category:'雜貨',
    name:'澳洲的空氣',
    image:'./assets/4.jpg',
    price:1200,
    topsale:true,
    latest:true,


},{
    id:5,
    category:'雜貨',
    name:'澳洲的空氣',
    image:'./assets/5.jpg',
    price:1200,
    topsale:true,
    latest:true,


},{
    id:6,
    category:'雜貨',
    name:'澳洲的空氣',
    image:'./assets/6.jpg',
    price:1200,
    topsale:true,
    latest:true,

}
])

const getImages= ref([
        { src: './assets/1.jpg', name: 'Image 1' },
        { src: '/assets/2.jpg', name: 'Image 2' },
        { src: '/assets/3.jpg', name: 'Image 3' },
        { src: '/assets/4.jpg', name: 'Image 4' },
        { src: '/assets/5.jpg', name: 'Image 5' },
        { src: '/assets/6.jpg', name: 'Image 6' },
      ]);

</script>



<template>
    <div>
    
    <openBanner/>
    <ProductShow :productsList="list"/>
    <News/>
    <AboutUs/>
         
    <ImageCard :visibleNumber="6" :getImages="getImages"/>
    </div>
    

   
    
  
</template>
