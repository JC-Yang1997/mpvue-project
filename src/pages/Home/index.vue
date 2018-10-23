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
                    {{item.title}}
                </div>
               <!-- <navigator 
                    :url="item.router"
                    class="title_router">{{item.title}}</navigator> -->
           </div>
       </div>
       <swiper indicator-dots autoplay interval="3000" duration="1000">
        <block>
            <swiper-item :class="swiper-item" v-for="(item,index) in imgUrls" :key="index">
                <image :src="item" class="slide-image"/>
            </swiper-item>
        </block>
        </swiper>
        <div>
            <div v-if="componentChooseId == 0"><test-cp-one /></div>
            <div v-if="componentChooseId == 1"><test-cp-two /></div>
            <div v-if="componentChooseId == 2"><test-cp-three /></div>
            <div v-if="componentChooseId == 3"><test-cp-four /></div>
        </div>
    </div>
</template>
<script>
import testCpOne from "../../components/test-cp1/index.vue";
import testCpTwo from "../../components/test-cp2/index.vue";
import testCpThree from "../../components/test-cp3/index.vue";
import testCpFour from "../../components/test-cp4/index.vue";
export default {
    data(){
        return {
            titleList:[
                {
                    title:"页面1",
                    router:"/pages/test-page1/main"
                },
                {
                    title:"页面2",
                    router:"/pages/test-page2/main"
                },
                {
                    title:"页面3",
                    router:"/pages/test-page3/main"
                },
                {
                    title:"页面4",
                    router:"/pages/test-page4/main"
                },
            ],
            imgUrls: [
                "http://dummyimage.com/300x200/79f2a2&text=Michael Clark",
                "http://dummyimage.com/300x200/f27f79&text=Susan Lee",
                "http://dummyimage.com/300x200/7995f2&text=William Garcia",
                "http://dummyimage.com/300x200/b9f279&text=Jessica Rodriguez",
                "http://dummyimage.com/300x200/f279dc&text=Brenda Hall"
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
    background-color: yellow;
    color: white;
    font-weight: bolder;
}
swiper{
    height: 200px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 10px;
}
.slide-image{
    height: 100%;
    width: 100%;
}
</style>
