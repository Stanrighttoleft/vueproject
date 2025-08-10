<script>
export default{
    data:function(){
        return{
            list:[]
        };
    },
    watch:{
        list:{
        handler:function(newList,oldList){
            console.log('normal',this.$refs.ullist.offsetHeight);
            this.$nextTick(function(){
                console.log('nextTick',this.$refs.ullist.offsetHeight);
        
            })
        },
        deep:true,
        }
    },
    
    
    mounted() {
        console.log('nextTick component mounted');
    }

}

</script>
<template>
    <div id="app">
        <button @click="list.push(list.length+1)">追加</button>
        <ul ref="ullist">
            <li v-for="(item,index) in list" :key="index">{{ item }}</li>
        </ul>
    </div>

</template>