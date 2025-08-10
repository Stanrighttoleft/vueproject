<template>
    <div class="d-flex justify-content-center  row loginform">
        
        <div class="col-sm-6 mt-5">
            <form @submit.prevent="onSubmit" action="">
            <div class="shadow p-5 pt-3 rounded-4">

                <h1>會員登入</h1>
                <br>
                <label class="form-label" for="acName">帳號：</label>
                
                <input class="form-control" type="text" name="acName">
               
                <br>
                <br>
                <label class="form-label" for="acPassword">密碼：</label>
                <input class="form-control" type="password" name="acPassword">
                <Router-Link to="/login/password"><span class="float-end text-danger">忘記密碼?</span></Router-Link>
                <br>
                <br>
                <br>
                

                <div class="d-flex justify-content-between gap-3">
                    <div><RouterLink to="/login/createacc"><button class="btn btn-primary">申請帳號</button></RouterLink></div>
                    <div>
                        <button type="reset" class="btn btn-primary me-3">清除</button>
                        <button type="submit" class="btn btn-primary ">提交</button>
                        
                    </div>
                </div>
    
            
                
            </div>
            </form>
            <div>
    
            </div>
        </div>
    </div>
    
  
</template>

<script setup>
import { RouterLink } from 'vue-router';

</script>

<style scoped>




.loginform{
    height: 600px;
}

</style>