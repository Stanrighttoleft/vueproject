<template>
    <div class="container-fluid p-0">
        <!-- <div class="row nav-top bg-secondary g-0">
            <div class="nav-top-left d-flex justify-content-end col-sm-8 d-sm-flex d-none">
                <img class="facebook" :src="facebook" alt="">
                <span class="text-light" >Follow us on Facebook</span>
                <img :src="like" alt="" class="like">
            </div>
            <div class="nav-top-right col-sm-4  justify-content-end d-flex">
                <img :src="search" alt="" class="search">
                <RouterLink to="/login">
                <img :src="login" alt="" class="login"></RouterLink>
                <img :src="cart" alt="" class="search">

            </div>
            
        </div> -->
        
        <div class="row bg-secondary">
            <div class="logo col-2">
                <RouterLink to="/" class="text-danger"><img :src="logo" alt="" class="w-100"></RouterLink>
            </div>
            <div class="nav-right-top col-10 d-flex flex-column justify-content-between">
                <div class="d-flex flex-row" >
                    <div class="col-sm-7 d-flex justify-content-end">
                        <img class="facebook" :src="facebook" alt="">
                        <span class="text-light" ></span>
                        <img :src="like" alt="" class="like">
                    </div> 
                    <div class="nav-top-right col-sm-5  justify-content-end d-flex">
                        
                        <RouterLink to="/login"> <img :src="login" alt="" class="login"></RouterLink>
                        <img :src="cart" alt="" class="cart">
                         <img :src="searchIcon" alt="" class="search-icon">

                    </div>
                </div>
                <div class="col-sm-12 d-flex justify-content-end align-items-end">
                    
                  
                   
                    
                </div>
                
                <div class="navlist col-md-12 d-none d-md-flex justify-content-center align-items-center p-0 m-0">
                    <ul>
                        <li 
                        v-for="(item,index) in link"
                        :key="index"
                        ><RouterLink :to=item.goTo class="navlink">{{ item.name }}</RouterLink></li>
                    </ul>
                </div>
                
            </div>
        </div>       
    </div>
</template>
<script setup>
import { ref } from 'vue';
import { RouterLink, useRoute } from 'vue-router';

const name=ref('Navbar');
const logo=ref('./assets/logov12.png');
const facebook=ref('./assets/facebook.png');
const like=ref('./assets/like.png');
const login=ref('./assets/user.png');
const searchIcon=ref('./assets/search.png');
const cart=ref('./assets/cart.png');
// provide function for the nav link
const isActiveLink=(routePath)=>{
    const route=useRoute();
    return route.path===routePath;
}
const link=ref([{
        name:'Home',
        goTo:'/',

    },
    {
        name:'About',
        goTo:'/about',
    },
    {
        name:'Products',
        goTo:'/products',

    },{
        name:'Contact Us',
        goTo:'/contact',
    }])
      
    
</script>
<style scoped>
/* body, html {
  margin: 0;
  padding: 0;
} */
/* .navbar {
  display: flex;
  height: 100px;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  width:100%;
  box-sizing: border-box;
} */
/* .nav-top{
    background-color: rgb(240, 186, 9);
} */
.facebook{  
    height: 25px;
    margin: 0 5px;
}
.like{
    height:25px;
    margin:0  5px;
}
.login{
    height: 25px;
    margin:0 5px;
}
.search-icon{
    height: 25px;
    margin:0 5px;
    
    width: auto;
    display: inline-block;
}
.cart{
    height: 25px;
    margin:0 5px;
}
.search-put{
    width: 200px;
    height: 25px;
    margin-left: 8px;
}
.navlist ul{
    display: flex;
    list-style: none;
    justify-content: space-evenly;
    gap: 1rem;
    margin-left: auto;
    
   
}
.navlist li{
    margin-right: 2rm;
}

.navlink {
   
    cursor: pointer;
    color: white;
    text-decoration: none;
    font-size: 1.3rem;
    font-family: "Alata", sans-serif;
    font-weight: 400;
    font-style: normal;
 
}
.logo img {
  height: 100px;
  width: 60px;
}

</style>