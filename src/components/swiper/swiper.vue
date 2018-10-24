<template>
    <swiper indicator-dots autoplay circular interval="3000" duration="1000">
        <block>
            <swiper-item :class="swiper-item" v-for="(item,index) in imgs" :key="index">
                <image :src="item" class="slide-image"/>
            </swiper-item>
        </block>
    </swiper>
</template>
<script>
export default {
    props:["imgs"]
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

