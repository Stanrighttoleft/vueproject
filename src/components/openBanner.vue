<script setup>

import {ref} from 'vue';
const rabbit=ref('/assets/rabbit.png');
const fu=ref('/assets/fun.png')

</script>

<template>
    <div class="open d-flex justify-content-center align-items-center p-0 m-0">
        
        <div>
            <img :src=rabbit alt="">
        </div>
        <div class="fu">
            <img :src=fu alt="">
        </div>
        
    </div>

</template>

<style>
.open{
    background-image: url('/assets/bg-banner.jpg');
    background-size: cover;
    height: 670px;
    overflow: hidden;
    position: relative;
    
    
    

}
.open::before{
    content: '';
    position: absolute;
    top:40%;
    left: 0;
    right: 0;
    bottom: -70%;
    background-image:url('/assets/grass1.svg');
    background-repeat: repeat-x;
    background-position: center;
}

.open::after{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(256, 256,256, 0.3);  
    z-index: 1;
    pointer-events: none;
}

.fu{
    transform:translate(-40%,-80%)
}


</style>