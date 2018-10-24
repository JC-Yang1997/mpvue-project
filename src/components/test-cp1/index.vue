<template>
    <div>
        <swiper :imgs="imgUrls"/>

        <!-- <div @click="testAjax">测试ajax请求</div> -->

        <div class="yj_buy">一键购买</div>
    </div>
</template>
<script>
import axios from '@/configs/axios/axios';
import swiper from '@/components/swiper/swiper.vue';
export default {
    data(){
        return {
             imgUrls: [
                "http://dummyimage.com/300x200/79f2a2&text=Michael Clark",
                "http://dummyimage.com/300x200/f27f79&text=Susan Lee",
                "http://dummyimage.com/300x200/7995f2&text=William Garcia",
                "http://dummyimage.com/300x200/b9f279&text=Jessica Rodriguez",
                "http://dummyimage.com/300x200/f279dc&text=Brenda Hall"
            ],
        };
    },
    components:{
        swiper
    },
    methods:{
        testAjax(){
            axios.get('/105586/example/1540260667868')
                .then(function(res){
                console.log(res.data);
                },function(){
                console.log("axios请求出错")
            });
        }
    }
}
</script>
<style scoped>
.yj_buy{
    width: 100%;
    height: 50px;
    margin-top: 5px;
    background-color: gray;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>

