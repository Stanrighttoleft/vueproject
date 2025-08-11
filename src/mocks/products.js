import  Mock from "mockjs";
import products from '@/mocks/data/products.json'

Mock.mock('/api/products', 'get', ()=>{
    return {
        code:200,
        message:'success',
        data:products,
    }
})