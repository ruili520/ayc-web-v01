<!--修改笔名-->
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
      <van-field v-model="name" placeholder="6~12个字符，不支持特殊字符"/>
    </van-cell-group>
  </div>
</template>

<script>
  export default {
    name: 'uppenname',
    data() {
      return {
        title: '修改笔名',
        name: '',
      }
    },
    mounted() {
    },
    methods: {
      /*修改笔名*/
      onClickRight() {
        var _this = this;
        _this.AycAxios('/api/userDetail/updateUser',
          {
            method: 'post',
            headers: {
              token: localStorage.getItem('token')
            },
            data: {
              penName: _this.name,
            }
          },function (data) {
            _this.$toast('笔名修改成功');
            _this.$router.go(-1)
          }
        )
      },
      onClickLeft() {
        this.$router.back(-1);
      }
    }
  }
</script>
