<template>
  <motion.div
    class="box"
    :initial="{ opacity: 0 }"
    :whileInView="{ opacity: 1 }"
    @viewport-enter="startAnim = true"
    @viewport-leave="startAnim = false"
    :class="{ active: startAnim }"
  />
</template>

<script setup>
import { ref } from "vue";
import { motion } from "motion-v";

const startAnim = ref(false);
</script>

<style scoped>
.box {
  position: relative;
  width: 120px;
  height: 120px;
  background: lightblue;
  opacity: 0;
  /* Motion will animate this */
}

.box::before {
  content: "";
  position: absolute;
  inset: 0;
  background: red;
}

.box.active::before {
  animation: pulse 2s ease;
}

@keyframes pulse {
  from {
    transform: scale(1);
  }

  to {
    transform: scale(3);
  }
}
</style>
