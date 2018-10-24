<template>
    <div>
        <div class="tabbar">
            <div class="tabbar_item">
                <navigator class="tabbar_item_nav" url="/pages/mall/main">商城</navigator>
            </div>
            <div class="tabbar_item">
                <navigator class="tabbar_item_nav" url="/pages/list/main">列表</navigator>
            </div>
            <div class="tabbar_item">
                <navigator class="tabbar_item_nav" url="/pages/detail/main">详情</navigator>
            </div>
            <div class="tabbar_item">
                <navigator class="tabbar_item_nav" url="/pages/mine/main">我的</navigator>
            </div>
        </div>
        <div class="ydt_button">
            <navigator url="/pages/basicPage/main">一点通</navigator>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
          
        }
    }
}
</script>
<style scoped>
.tabbar{
    height: 40px;
    width: 100%;
    background-color: lightblue;
    position: fixed;
    bottom: 0px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.tabbar_item{
    width: 60px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    background-color: green;
    color: white;
    margin: 0 2%;
}
.tabbar_item:nth-of-type(2){
    margin-right: 20%;
}
.tabbar_item_nav{
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.ydt_button{
    height: 50px;
    width:50px;
    background-color: orange;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    border-radius: 50%;
    position: fixed;
    bottom: 0px;
    left: 42%;
}
</style>
