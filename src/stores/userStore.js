import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import request from '@/api/request'

export const useUserStore = defineStore('user', () => {
  const users = ref([])
  const fetchUsers = async () => {
    try {
      const response = await request.get('/api/users')
      console.log('API response data:', response.data.data)
      users.value = response.data.data
      console.log('Users assigned to store:', users.value)
    } catch (error) {
      console.error('failed to fetch users', error)
    }


  }
  return {
    users,
    fetchUsers,
  }


})
