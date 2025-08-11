<script setup>
import { ref } from 'vue'

const menus = ref([
  {
    title: '新品直購',
    children: []
  },
  {
    title: '澳洲直購',
    expanded: false,
    children: [
      '運動/戶外',
      '名牌精品',
      '私密生活',
      '健康零嘴',
      '美妝保養',
      '居家/生活',
      '母嬰兒童',
      '生活/玩具',
      '流行時尚',
      '寵物用品',
      '家電家具',
      '特惠專購'
    ]
  },
  {
    title: '航太超跑',
    children: []
  },
  {
    title: '委託代購',
    children: []
  },
  {
    title: '代購試算',
    children: []
  }
])

function toggleMenu(index) {
  menus.value[index].expanded = !menus.value[index].expanded
}
</script>

<template>
  <div class="sidebar">
    <div
      v-for="(menu, index) in menus"
      :key="index"
      class="menu-item"
    >
      <div class="menu-header" @click="toggleMenu(index)">
        ▶ {{ menu.title }}
      </div>

      <ul v-if="menu.children && menu.expanded" class="submenu">
        <li v-for="(child, i) in menu.children" :key="i">
          {{ child }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.sidebar {
  width: 250px;
  border: 1px solid #ccc;
  background: #fff;
  font-size: 14px;
}

.menu-item {
  border-bottom: 1px solid #ddd;
}

.menu-header {
  background-color: #e6f2ee;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  border-left: 5px solid #4cae4c;
}

.submenu {
  list-style: none;
  padding-left: 15px;
  margin: 0;
}

.submenu li {
  padding: 8px 10px;
  border-bottom: 1px solid #f0f0f0;
  cursor: pointer;
}
</style>