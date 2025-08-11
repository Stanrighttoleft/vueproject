<template>
  <div class="row bg-warning">
    <div class="col-lg-3 d-none d-lg-inline"><img class="styleimg" :src="styleimg" alt=""></div>
    <div class=" col-md-3 d-flex justify-content-center"><img class="aboutimg" :src="aboutus" > </div>
    <div class="col-lg-6 col-md-9 ">
        <div class="d-flex justify-content-end" ><img class="shipment2" :src="shipmentpic" alt="">
        </div>
        <div class="about d-flex align-items-center"><h3 class="text-white">在每一個細節中下苦功把事情做得最好，讓每個收到獲得人都像是收到國外的禮物般受到尊重的感覺。很多時候物流得不方便讓我們在選購東西的時候有了猶豫，即使知道商品是好的，但就是不容易取得，澳打團購就是要彌補這塊鴻溝，讓消費者在團購國外商品時也能夠買得安全又安心。</h3></div>
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
    width:300px;
    height: 150px;
}
.about{
    height: 400px;
    
}


</style>