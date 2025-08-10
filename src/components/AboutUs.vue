<template>
  <div class="row">
    <div class="col-sm-4 "><img class="styleimg" :src="styleimg" alt=""></div>
    <div class="col-sm-2"><img class="aboutimg" :src="aboutus" > </div>
    <div class="col-sm-6">
        <div><img class="shipment2" :src="shipmentpic" alt="">
        </div>
        <div class="bg-warning about"></div>
    </div>
    
  </div>
</template>

<script setup>

const styleimg='/assets/shipment1.png';
const aboutus='/assets/aboutus.svg'
const shipmentpic='/assets/shipment3.png'

</script>

<style>
.styleimg{
    width: 400px;
}
.aboutimg{
    width:200px;
}
.shipment2{
    width:350
}
.about{
    height: 100px;
    width: 100%;
}


</style>