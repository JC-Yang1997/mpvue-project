<template>
    <div>
       <div class="title_list">
           <div 
               v-for="(item,index) in titleList" 
               :key="index"
               class="title_item">
                <div 
                    class="title_router"
                    @click="handleTitleItem(index)">
                    {{item}}
                </div>
                <!-- 路由页面跳转样式用navigator -->
               <!-- <navigator 
                    :url="item.router"
                    class="title_router">{{item.title}}</navigator> -->
           </div>
       </div>
        <!-- 组件切换样式用v-if判断 -->
        <div>
            <div v-if="componentChooseId == 0"><test-cp-one /></div>
            <div v-if="componentChooseId == 1"><test-cp-two /></div>
            <div v-if="componentChooseId == 2"><test-cp-three /></div>
            <div v-if="componentChooseId == 3"><test-cp-four /></div>
        </div>
    </div>
</template>
<script>
import testCpOne from "@/components/test-cp1/index.vue";
import testCpTwo from "@/components/test-cp2/index.vue";
import testCpThree from "@/components/test-cp3/index.vue";
import testCpFour from "@/components/test-cp4/index.vue";
export default {
    data(){
        return {
            titleList:[
                "页面1","页面2","页面3","页面4"
            ],
            componentChooseId:0
        };
    },
    components:{
        testCpOne,
        testCpTwo,
        testCpThree,
        testCpFour
    },
    methods:{
       handleTitleItem(a){
           this.componentChooseId = a;
       }
    },
    computed:{
        
    },
    watch:{

    },
    beforecreate(){

    },
    created(){
       
    },
    mounted(){
        
    }
}
</script>
<style scoped>
.title_list{
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #ccc;
}
.title_item{
    height: 40px;
    width: 80px;
}
.title_router{
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000;
    color: #fff;
    font-weight: bolder;
}
</style>
