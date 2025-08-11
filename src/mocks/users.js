import  Mock  from "mockjs";
import users from '@/mocks/data/users.json'
Mock.mock('/api/users','get',()=>{
  return {
    code:200,
    message:'success',
    data: users,
  }
})