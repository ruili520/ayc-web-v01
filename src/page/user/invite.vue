<template>
    <div>
         <div class="head">
    </div>
    <h3 class="title">个性海报分享</h3>
    <div class="guanzhu-area">
        <div class="user">
            <img src="../../assets/img/默认头像.png" alt="">
            <div>
                <p>等待开放</p>
                <p><span>11-11</span><span>13:00</span></p>
            </div>
        </div>
    </div>
    <div class="operation">
        <div class="chang">长按图片保存到手机相册</div><div class="huan"> <span class="icon"></span> <span>换一种风格</span></div>
    </div>
    <!--<div class="sj-media">-->
        <!--<div class="sj-media-title">-->
            <!--<span class="line"></span>-->
            <!--<span class="desc">社交媒体分享</span>-->
            <!--<span class="line"></span>-->
        <!--</div>-->
        <!--&lt;!&ndash;<div class="sj-media-other">&ndash;&gt;-->
            <!--&lt;!&ndash;<div><img src="../../assets/微信-邀请@2x.png" alt=""></div>&ndash;&gt;-->
            <!--&lt;!&ndash;<div><img src="./img/朋友圈-邀请@2x.png" alt=""></div>&ndash;&gt;-->
            <!--&lt;!&ndash;<div><img src="./img/QQ-邀请@2x.png" alt=""></div>&ndash;&gt;-->
            <!--&lt;!&ndash;<div><img src="./img/微博-邀请@2x.png" alt=""></div>&ndash;&gt;-->
        <!--&lt;!&ndash;</div>&ndash;&gt;-->
    <!--</div>-->
    </div>
</template>

<script>
export default {
    name:'invite'
}
</script>

<style scoped>
 .head {
            width: 100%;
            height: 52.7333vw;
            background: url('../../assets/img/邀请好友-头部@2x.png') no-repeat;
            background-size: 100% 100%;
        }

        .title {
            text-align: center;
            font-size: 4vw;
            margin: 3.2vw 0 3.2vw 0;
            color: #aeb2bc;
        }
        .guanzhu-area{
            width:53.3333vw;
            height:90.9333vw;
            background: url('../../assets/img/海报-占位@3x.png') no-repeat;
            background-size: 100% 100%;
            margin:auto;
        }
        .operation{
            display:flex;
            justify-content: space-around;
            align-items:center;
        }
        .operation .chang{
            font-size:2.6667vw;
            color:#c0c4cb;
        }
        .operation .huan{
            font-size:2.6667vw;
            color:#80d8ff;
        }
        .sj-media{
            width:100%;
            height:27.6vw;
            margin-top:7.2vw;
            padding-top:5.3333vw;
            background-color: #f9f9f9;
        }
        .sj-media .sj-media-title{
            width:73.6vw;
            margin: auto;
            display:flex;
            justify-content: space-between;
            align-items:center;
        }
        .sj-media .sj-media-title .line{
            width:21.3333vw;
            height:0.2667vw;
            background-color: #e5e8ef;
        }
        .sj-media .sj-media-title .desc{
            font-size:2.6667vw;
            color:#b4b8c1;
        }
        .sj-media-other{
            width:73.6vw;
            height:9.3333vw;
            margin: 8vw auto;
            display:flex;
            justify-content: space-between;
            align-items:center;
        }
        .sj-media .sj-media-other .other{
            width:9.3333vw;
            height:9.3333vw;
            border-radius: 50%;
        }
        .sj-media-other{
            display: flex;
            justify-content: center;
        }
        .sj-media-other img{
            width: 9.3333vw;
            height: 9.3333vw;
            padding: 3.3333vw
        }
        .user{
            width: 32.6667vw;
            display: flex;
            justify-content: center;
            font-size: 2.6667vw;
            border-radius: 5.6666vw;
            background: #707bf3;
            color: #fff;
            position: relative;
            top: 6.6667vw;
            left: 2.6667vw;
        }
        .user img{
            width: 10.3333vw;
            height: 10.333vw;
        }
</style>
