<!--修改个性签名-->
<template>
  <div>
    <van-nav-bar
      :title=title
      left-arrow
      right-text="保存"
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <van-cell-group>
      <van-field v-model="sign" type="textarea" placeholder="请输入你的个性签名" rows="1" autosize/>
    </van-cell-group>
  </div>
</template>

<script>
  export default {
    name: 'upsign',
    data() {
      return {
        title: '修改个性签名',
        sign:'让原创变得有价值',
        name:''
      }
    },
    /*1.0版本没有个性签名*/
    /*mounted(){
      this.axios({
        method:'post',
        url:'/api/userDetail/updateUser',
        data:{
          autograph:this.name
        }
      }).then(result=>{
        console.log(result.data.data);
      })
    },*/
    methods:{
      onClickRight(){

      }
    }
  }
</script>
