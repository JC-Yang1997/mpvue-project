<template>
    <div>
        <div class="tabbar">
            <div class="tabbar_item">首页</div>
            <div class="tabbar_item">列表</div>
            <div class="tabbar_item">详情</div>
            <div class="tabbar_item">我的</div>
            <div class="ydt_item">一点通</div>
        </div>
    </div>
</template>
<script>
export default {
    
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
.ydt_item{
    height: 50px;
    width: 50px;
    background-color: orange;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    position:absolute;
    top: -28%;
    left: 43%;
    border-radius: 50%;
}
</style>
