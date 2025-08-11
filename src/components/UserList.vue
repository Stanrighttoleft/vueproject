<template>
    <div>
        <h2>Users</h2>
        <ul>
            <li v-for="user in users" :key="user.id">
                {{ user.name }} {{user.age  }}

            </li>
        </ul>
    </div>
  
</template>

<script setup>
import { onMounted, watch } from 'vue';
import { storeToRefs } from 'pinia';
import { useUserStore } from '@/stores/userStore';

const userStore = useUserStore()
const { users}=storeToRefs(userStore)
const { fetchUsers }=userStore


onMounted(async () => {
 
    await fetchUsers()
    console.log('Users in component:', users.value)  // this should show an array
})

watch(users, (newVal)=>{
    console.log('users updated:', newVal)
})


</script>

<style>

</style>