<template>
  <div class="carousel">
    <slot :currentSlide="currentSlide"></slot>

    <!--Navigation  -->
    <div v-if="navEnabled" class="navigate" >
      <div class="toggle-page left">
          <span ><img @click="prevSlide" :src="left" alt=""></span>
      </div>
      <div class="toggle-page right">
          <span ><img @click="nextSlide" :src="right" alt=""></span>
      </div>
    </div>
    <!-- pagination -->
    
  <div v-if="paginationEnabled"  class="pagination">
      <span
          @click="goToSlide(index)" 
          v-for="(slide, index) in getSlideCount"
          :key="index"
          :class="[{active :index+1 ===currentSlide}, 'paginationdot']"
        >
  
      </span>
    </div> 
    
  </div>
</template>

<script setup>
import {ref, onMounted} from "vue";
const props=defineProps({
    startAutoPlay:{
        type:Boolean,
        default:true,
    },
    timeout:{
      type:Number,
      default:10000
    },
    navigation:{
      type:Boolean,
      default:true
    },
    pagination:{
      type:Boolean,
      default: true,
    },
    slideCount: { 
      type: Number, 
      required: true
    }


})

//refs and state

const currentSlide = ref(1);
const getSlideCount= ref(props.slideCount);
const left=ref('./assets/left.png');
const right=ref('./assets/right.png');
const paginationEnabled=ref(props.pagination);
const navEnabled=ref(props.navigation);

//Navigation handlers
const nextSlide=()=>{
  currentSlide.value=currentSlide.value==getSlideCount.value ? 1 : currentSlide.value+1;
}
const prevSlide=()=>{
  if(currentSlide.value>1){
    currentSlide.value--
  }
}
const goToSlide=(index)=>{
  currentSlide.value=index+1
}

//autoplay setup
const autoPlay=()=>{
  setInterval(()=>{
    nextSlide()
  },props.timeout)
}
if(props.startAutoPlay){
  autoPlay()
}

onMounted(()=>{
  getSlideCount.value=document.querySelectorAll('.slide').length
})

</script>

<style>
.carousel {
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
}
.toggle-page{
  z-index: 1;
  position:absolute;
  display: flex;
  top: 50%;
  transform: translateY(-50% );
  align-items: center;
}
.toggle-page img{
  width: 40px;
  height: 40px;
  cursor: pointer;
}
.left{
left: 16px;
justify-content: flex-start;
}
.right{
right: 16px;
justify-content: flex-end;
}
.pagination{
  position: absolute;
  bottom: 24px;
  width: 100%;
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
}
.paginationdot{
  
  cursor: pointer;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 0 1px 3px 0 rgba(0,0,0,0.2), 0 1px 2px 0 rgba(0,0,0,0.16);

}
.paginationdot.active{
  background-color: red;
}



</style>