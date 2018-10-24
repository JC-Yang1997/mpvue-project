<template>
    <div>
        <swiper :imgs="imgUrls"/>
    </div>
</template>
<script>
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
    }
}
</script>
<style scoped>

</style>

