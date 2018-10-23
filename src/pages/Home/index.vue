<template>
    <div>
       <div class="test_message">{{message}}</div>
       <swiper indicator-dots autoplay interval="3000" duration="1000">
        <block>
            <swiper-item :class="swiper-item" v-for="(item,index) in imgUrls" :key="index">
                <image :src="item" class="slide-image"/>
            </swiper-item>
        </block>
        </swiper>
    </div>
</template>
<script>

export default {
    data(){
        return {
            message :"hello yangjinchun",
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

    },
    methods:{
       
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
.test_message{
    height: 50px;
    width: 100%;
    background-color: yellow;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
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
