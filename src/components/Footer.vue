<template>
  <div
    class="footerdiv position-relative container-fluid bg-secondary text-white pt-3"
  >
    <div class="row">
      <motion.div
        class="col-md-3 try"
        :initial="{ backgroundColor: 'rgb(0, 255, 0)', opacity: 0 }"
        :whileInView="{ backgroundColor: 'rgb(255, 0, 0)', opacity: 1 }"
        >掃我到客服</motion.div
      >
      <motion.div class="try" />
      <div class="col-md-3">
        <img class="img-fluid" src="/assets/logov12.png" alt="" />
      </div>
      <div class="col-md-6 d-flex justify-content-center">
        <ul class="list-unstyled">
          <li class="">澳丁團購</li>
          <li class="">會員登入</li>
          <li class="">購物流程</li>
          <li class="">隱私權聲明</li>
          <li class="">會員條款</li>
          <li class="">FAQ問與答</li>
          <li class="">聯絡我們</li>
          <li class=" ">追蹤澳丁</li>
        </ul>
      </div>
    </div>
    <hr />
    <div class="d-flex justify-content-center">copyright</div>
  </div>
</template>

<script setup>
import { motion } from "motion-v";
</script>

<style scoped>
.footerdiv::before {
  content: "";
  position: absolute;
  display: block;
  background-image: url("/assets/footer.png");
  background-size: auto 100%;
  gap: 0;
  width: 100%;
  height: 200px;
  background-repeat: repeat-x;

  margin: 0;
  padding: 0;

  bottom: 100%;
  left: 0;
  z-index: 0;
}

.try {
  width: 100px;
  height: 100px;
}
</style>
