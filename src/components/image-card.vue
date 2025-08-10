<script>
export default {
  name: 'ImageCard',
  data(){
    return {

    };
  },
  
  props: {
    
    visibleNumber: {
      type: [Number, String],
      default: 3,
      validator(value) {
        return value > 0 && value <= 5;
      },
    },
    getImages:{
      type:Array,

    }
  },
  computed: {
    visibleList() {
      return this.imageList.slice(0, this.visibleNumber);
    },
  },
};
</script>
<template>
  <div :class="`image-card-container-${visibleNumber} contain container-fluid bg-secondary`">
  <div class="row" >
    <div class="card col-12 col-sm-6 col-md-4 col-lg-2" v-for="(image, index) in getImages" :key="index">
      <img :src="image.src" class="card-img-top " alt="" />
      <div class="card-body text-danger ">{{ image.name }}</div>
    </div>
  </div>
  </div>
</template>

<style scoped>
.card-img-top{
  width: 300px;
  height: 300px;
 
}
.card{
  /* width:16em; */
  display: flex;
  flex-direction: column;
}
.contain{
  display:flex;
  flex-wrap: wrap;
}
</style>