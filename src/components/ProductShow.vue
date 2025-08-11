<template>
     <div class="productShow position-relative m-0">
      <div class="container-fluid shows p-0 m-0 "  >
        <div ref="productDiv" class="row d-flex flex-row flex-nowrap overflow-hidden position-relative">
          <div class="col-1 col-sm-3 productcard p-2 m-1 rounded-3 bg-light" v-for="(product, index) in productsList" :key="index">
            <div class="position-relative">
              <img class="productimage " :src="product.image" alt="">
              <img v-if="product.topsale" class="position-absolute top-0 start-0" :src="hot" alt="">
            </div>
            <div class="productTag ">
              <div class="bg-light">{{'TW '+ product.price }}</div>
              <div class="bg-warning">{{product.name }}</div>
            </div>
          </div>
        </div>
        <!-- Navigation -->
        <div class="navigation position-absolute d-flex start-0 end-0 justify-content-between px-2 " style="top: 45%; transform: translateY(-50%);">
            <div class="navPrev col-2">
              <img 
              class="productBun"  @mousedown="startScroll('prev')"
              @mouseup="stopScroll"
              @mouseleave="stopScroll" :src="prevBun" alt="">
            </div>
            <div class="navNext d-flex justify-content-end  col-10">
              <img 
              class="productBun"
              @mousedown="startScroll('next')"
              @mouseup="stopScroll"
              @mouseleave="stopScroll" :src="nextBun" alt="">

            </div>

          </div>
        
      </div>

    </div> 
</template>

<script setup>
import { ref, onMounted } from 'vue';

const hot=ref('/assets/hot.png');
const prevBun=ref('/assets/left.png');
const nextBun=ref('/assets/right.png');
const productDiv=ref(null);
const scrollInterval=ref(null);
const scrollAmount=3000;
const startScroll=(direction)=>{
  if(!productDiv.value) return;


  scrollInterval.value=setInterval(()=>{
    productDiv.value.scrollBy({
      left:direction==='next' ? scrollAmount /10 : -scrollAmount /10, behavior:'smooth'
  })
},50);
};

const stopScroll=()=>{
  clearInterval(scrollInterval.value);
  scrollInterval.value=null;
}

onMounted(() => {
  const width = productDiv.value.offsetWidth;
  console.log('Width:', width);


  const rect = productDiv.value.getBoundingClientRect();
  console.log('Width from getBoundingClientRect:', rect.width);
});

const props=defineProps({
  productsList:
  {
    type:Array,
    default:'',
  },

})



</script>

<style>

.productcard{
  width:330px;
  height: 300px;
}
.productimage{
  width:300px;
  height: 200px;
}
.productBun{
  height: 40px;
  cursor: pointer;
}
</style>