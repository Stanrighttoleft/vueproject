<template>
  <button href="#" class="btn" ref="btnEl" @mouseover="handleMouseover">
    <span>Button</span>
  </button>
</template>

<script setup>
import { ref } from 'vue'

const btnEl = ref(null)

function handleMouseover(event) {
  const rect = btnEl.value.getBoundingClientRect()

  const x = event.clientX - rect.left
  const y = event.clientY - rect.top

  btnEl.value.style.setProperty('--xPos', `${x}px`)
  btnEl.value.style.setProperty('--yPos', `${y}px`)
}
</script>

<style>
.btn {
  background-color: pink;
  padding: 20px 40px;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  text-decoration: none;
  color: black;
  position: relative;
  overflow: hidden;
  display: inline-block;
}

.btn span {
  position: relative;
  z-index: 4;
}

.btn::before {
  content: '';
  position: absolute;
  background-color: orangered;
  width: 0px;
  height: 0px;
  left: var(--xPos);
  top: var(--yPos);
  transform: translate(-50%, -50%);
  border-radius: 50%;
  transition: width 0.5s, height 0.5s;
  z-index: 3;
}

.btn:hover::before {
  width: 300px;
  height: 300px;
}
</style>