<template>
    <div class="about">
       
       
        <Carousel
            class="carousel"
            v-slot="{ currentSlide }"
            :navigation="true"
            :pagination="true"
            :timeout="15000"
            :startAutoPlay="true"
            :slide-count="carouselSlides.length"
        >
            <Slide v-for="(slide, index) in carouselSlides" :key="index">
                <div 
                v-show="currentSlide ===index+1" 
                class="slide-info">
                    <img :src="`./assets/${slide}.jpg`"  alt=""/>
                    
                </div>
            </Slide>
        </Carousel>
    </div>
  
</template>

<script setup>
import Carousel from '@/components/Carousel.vue';
import Slide from '@/components/Slide.vue';
import { ref } from 'vue';

const name="about";
const carouselSlides=ref(["bg-1","bg-2","bg-3"])


</script>

<style>
.carousel{
    position:relative;
    width: 100%;
    height:500px;
    
    
}
.slide-info{
    position:absolute;
    top: 0;
    left: 0;
    width: 100%;
    max-height: 100%;
    height: 100%;
}
.slide-info img{
    min-width:100%;
    height:100%;
    object-fit:cover;
}

</style>