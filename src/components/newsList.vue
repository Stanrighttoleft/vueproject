<template>
     <div>
    <h2>News</h2>
    <div v-if="articles.length">
      <div v-for="(article, index) in articles" :key="index" class="mb-3">
        <h4>{{ article.title }}</h4>
        <p>{{ article.description }}</p>
      </div>
    </div>
    <p v-else>Loading news...</p>
  </div>
  
</template>

<script setup>
import { ref, onMounted } from 'vue';
const articles=ref([]);

const newsUrl='https://newsapi.org/v2/top-headlines?' +'category=business&' +     'country=us&' +'pageSize=3&' +                'apiKey=';

onMounted(async()=>{
    try{
        const response= await fetch(newsUrl);
        const receiveFile=await response.json();
        articles.value=receiveFile.articles;
        console.log(articles.value);
    } catch(error){
        console.error('failed to fetch news:',error)
    }
})

</script>


<style>

</style>