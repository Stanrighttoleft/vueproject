<template>
    <div class="row d-flex justify-content-center createacc mt-5">
        <div class="col-sm-6 d-flex flex-column ">
            <form action="" class="shadow p-5 pt-3 rounded-4">
                <h1>註冊帳號</h1>
                <br>
                <label class="form-label" for="name">姓氏：</label>
                <input class="form-control" type="text">
                <br>
                <label class="form-label" for="name">名字：</label>
                <input class="form-control" type="text">
                <br>
                <label class="form-label" for="name">電子郵件：(設為登入帳號)</label>
                <input class="form-control" type="text">
                <br>
                <label class="form-label" for="name">密碼：</label>
                <input class="form-control" type="text">
                <br>
                <label class="form-label" for="name">密碼確認：(請重複輸入密碼)</label>
                <input class="form-control" type="text">
                <br>
                <br>
                <div class="float-end"><button type="submit" class="btn btn-primary me-3 ">提交</button></div>
            </form>
        </div>

    </div>

</template>

<script setup>



</script>

<style>
.createacc{
    height: 600px;
    width: 100%;
}

</style>