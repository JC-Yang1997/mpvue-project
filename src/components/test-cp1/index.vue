<template>
    <div>
    <swiper indicator-dots autoplay circular interval="3000" duration="1000">
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
             imgUrls: [
                "http://dummyimage.com/300x200/79f2a2&text=Michael Clark",
                "http://dummyimage.com/300x200/f27f79&text=Susan Lee",
                "http://dummyimage.com/300x200/7995f2&text=William Garcia",
                "http://dummyimage.com/300x200/b9f279&text=Jessica Rodriguez",
                "http://dummyimage.com/300x200/f279dc&text=Brenda Hall"
            ],
        };
    }
}
</script>
<style scoped>
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

