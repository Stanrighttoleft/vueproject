<template>
    <div class="container-fluid p-0 m-0">
        <div class="nav row bg-secondary p-0 m-0">
            <div class="logo p-0 m-0 col-3">
                <RouterLink to="/" class="text-danger"><img :src="logo" alt="" class=""><span class="text-white text-docoration-none">澳丁團購</span></RouterLink>
            </div>
            <div class="nav-right-top col-sm-9 d-flex flex-column p-0 m-0">
                <div class="d-flex flex-row p-0 m-0" >
                    <div class="col-sm-6 d-flex justify-content-end p-0 m-0">
                        <img class="facebook" :src="facebook" alt="">
                        <span class="text-light d-none d-lg-block" >關注我們</span>
                        <img :src="like" alt="" class="like">
                    </div>
                    <div class="nav-top-right col-sm-6  justify-content-end d-flex p-0 m-0"> 
                        <RouterLink to="/login">
                            <img :src="login" alt="" class="login"><span class="text-light d-none d-lg-inline">會員登入</span>
                        </RouterLink>
                        <img :src="cart" alt="" class="cart"><span class="text-light d-none d-lg-inline">購物車</span>
                         <img :src="searchIcon" alt="" class="search-icon"><span class="text-light d-none d-lg-inline">搜尋商品</span>
                    </div>
                </div>               
                <div class="navlist col-sm-12 d-none d-sm-flex justify-content-end align-items-center p-0 m-0">
                    <ul class="navlistul">
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
import { RouterLink } from 'vue-router';

const name=ref('Navbar');
const logo=ref('./assets/logov12.png');
const facebook=ref('./assets/facebook.png');
const like=ref('./assets/like.png');
const login=ref('./assets/user.png');
const searchIcon=ref('./assets/search.png');
const cart=ref('./assets/cart.png');
const link=ref([{
        name:'購物首頁',
        goTo:'/',

    },
    {
        name:'關於澳丁',
        goTo:'/about',
    },
    {
        name:'商品瀏覽',
        goTo:'/products',

    },{
        name:'聯繫我們',
        goTo:'/contact',
    }])
      
    
</script>
<style >
body, html {
    margin: 0;
    padding: 0;
}
.nav{
    height: 100px;
    display: flex;
    align-items: stretch;
}
/* .navbar {
  display: flex;
  height: 100px;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  width:100%;
  box-sizing: border-box;
} */
.nav-top{
    background-color: rgb(240, 186, 9);
}
.facebook{  
    height: 30px;
    margin: 0 5px;
}
.like{
    height:30px;
    margin:0  5px;
}
.login{
    height: 30px;
    margin:0 5px;
}
.search-icon{
    height: 30px;
    margin:0 5px;
    
    width: auto;
    display: inline-block;
}
.cart{
    height: 30px;
    margin:0 5px;
}
.search-put{
    width: 200px;
    height: 30px;
    margin-left: 8px;
}
.navlist{
    height: 75px;

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
  max-height: 100px;
  max-width: 120px;
}

</style>