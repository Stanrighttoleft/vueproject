<template>
    <div class="row d-flex mt-3">
        
        <div class="col-sm-10">
            <Router-Link to="/newslist"><h4 class="d-flex justify-content-center bg-light">澳洲時事</h4></Router-Link> 
            <div v-for="(article, index) in truncatedArticles" :key="index" class="row d-flex mb-0">
                <div class="row">
                    <div class="col-sm-9 overflow-hidden"><h5 class="bg-light">{{ article.title }}</h5></div>
                    <div class="col-sm-3 overflow-hidden "><p class="bg-light"><strong>Date:</strong>{{ article.publishedAt }}</p></div>
                    <!-- <p class="bg-light">{{ article.truncatedContent }}...</p> -->
                </div>

            </div>
              

        </div>
        <div class="col-sm-2">
            <img class="newsDraw" :src="pen" alt="">
        </div>
    </div>
  
</template>

<script setup>
import { ref, computed, onMounted} from 'vue';
import { RouterLink } from 'vue-router';

const name='News';
const articles=ref([]);
const pen=ref('/assets/pen.gif');
const newsUrl='https://newsapi.org/v2/top-headlines?' +'category=business&' +     'country=us&' +'pageSize=3&' +                'apiKey=222dfbdb223a4c6097f1b8155d21e91e';


onMounted(async ()=>{
    try{
        const response=await fetch(newsUrl);
        const receiveFile=await response.json();
        articles.value=receiveFile.articles;
    }catch(error){
    console.error('error loading news:',error);
    }})

//Computed property to truncate content

const truncatedArticles=computed(()=>{
    return articles.value.map(article=>({
        ...article,
        truncatedContent: article.description && article.description.length > 90 
        ? article.description.slice(0,90) 
        :article.description || 'no description'
    }))
})



</script>



<style>
.newsDraw{
    width: 120px;
}


</style>