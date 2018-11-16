
<template>


  <div class="container">

    <!--距离页面顶部的高度-->
    <div class="row border" style="height: 38px"></div>

    <div class="row border">

      <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 border2 ">
          <img src="../../../../assets/images/logo/logo.png" alt="">
      </div>

      <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div class="border2 loginHeadposition">
        <a href="#">返回首页</a>
        <span>|</span>
        <a href="#">帮组中心</a>
        </div>
      </div>

    </div>

    <!--注册和logo之间的空白-->
    <div class="row border" style="height: 34px"></div>

    <div class="border row">


      <!--左边图片-->
      <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 border2">
        <div class="border" style="border-right: #cad3de solid">


        <h3 class="border2">更全面，更专业，更安全</h3>
        <h6 class="border2">致力于打造全球高品质软件服务商</h6>
        <img src="../../../../assets/images/logo/loginflag.png"  class="border2" alt="">

        <div class="row border" style="height: 38px"></div>
        </div>
      </div>

      <!--右边组册-->
      <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div class="border2 row">
          <div class="row">
            <P class="col-xs-6 col-sm-6 col-md-6 col-lg-6">用户登录</P>
            <a href="#" class="col-xs-6 col-sm-6 col-md-6 col-lg-6">立即组册</a>
          </div>


          <!--输入框-->
          <form class="bs-example bs-example-form" role="form">
            <div class="input-group">
              <span class="input-group-addon">@</span>
              <input type="text" class="form-control" placeholder="请输出账号">
            </div>
            <br>
            <div>
              <div class="input-group">
                <span class="input-group-addon">@</span>
                <input type="text" class="form-control" placeholder="请输出密码">
              </div>
            </div>


          </form>

          <!--记住密码和忘记密码-->
          <div>
            <div class="row border2">
              <el-checkbox>记住密码</el-checkbox>
              <a href="#">忘记密码</a>
            </div>

          </div>

          <div>
            <button class="btn-danger btn-lg border2">登录</button>
          </div>



        </div>

      </div>


    </div>











    <footer class="login-foot">
        <small>Copyright@1999-2018 中国联通 版权所有 | 经营许可证编号：A2.B1.B2-20090003</small>
    </footer>


    <div class="row border" style="height: 38px"></div>





  </div>
</template>



<script>




</script>



<style scoped>
  .border{
    border: 1px solid cadetblue;
  }

  .border2{
    border: 1px solid gold;
  }

  img{
    max-width: 100%;
    height: auto;
  }

  .loginHeadposition{
    position:relative;
    margin-top:4.3%;

  }


  .login-foot{
    margin-top: 50px;
  }

</style>










<!--<script>-->

    <!--export default {-->
      <!--name: 'backlogin',-->
      <!--data () {-->
        <!--return {-->
                <!--username:"tanglei",/*TODO:先预存测试值，以免手动输入*/-->
                <!--password:"123456",-->
                <!--disablebtn:false,-->
                <!--loginText:"登录"-->
        <!--}-->
      <!--},-->
      <!--methods:{-->
            <!--login(){-->
                  <!--var _this = this;-->
                  <!--this.disablebtn = true;-->
                  <!--this.loginText = "登录中...";-->
                  <!--//this.$reqs就访问到了main.js中绑定的axios-->
                   <!--var params={'params':{-->
                          <!--userName:this.username,-->
                          <!--password:this.password-->
                   <!--}};-->
                   <!--var data = {userName:this.username,password:this.password};-->
                   <!--// var fd = new FormData()-->
                   <!--// fd.append('userName',this.username)-->
                   <!--// fd.append('password',this.password)-->
                   <!--// let config = {-->
                   <!--//     headers: {-->
                   <!--//         'Content-Type': 'multipart/form-data'-->
                   <!--//     }-->
                   <!--// }-->
                  <!--this.$reqs.post("/api/demo/login",data).then(function(result){-->
                  <!--//this.$reqs.get("/api/demo/login",params).then(function(result){-->
                      <!--//成功-->
                      <!--if(result.data){-->
                        <!--// sessionStorage.setItem('user.list',result.data.password);-->
                        <!--_this.$router.push({-->
                          <!--path:'/',-->
                          <!--query:{-->
                            <!--'username':result.data.userName-->
                          <!--}-->
                        <!--});-->
                      <!--}else{-->
                        <!--alert("登录失败");-->


                      <!--}-->
                      <!--_this.disablebtn = false;-->
                      <!--_this.loginText = "登录";-->


                  <!--}).catch(function (error) {-->
                      <!--//失败-->
                      <!--_this.disablebtn = false;-->
                      <!--_this.loginText = "登录"-->
                  <!--});-->



             <!--}-->
        <!--}-->
    <!--}-->
<!--</script>-->

<!--&lt;!&ndash; Add "scoped" attribute to limit CSS to this component only &ndash;&gt;-->
<!--<style scoped>-->
    <!--.header{-->
        <!--height: 60px;-->
        <!--box-shadow: 0 1px 5px rgba(13,62,73,0.2) ;-->
    <!--}-->
    <!--.header img{-->
        <!--width: 170px;-->
        <!--margin-top: 12px;-->
        <!--margin-left: 15px;-->
        <!--float: left;-->
    <!--}-->
    <!--.header span{-->
        <!--float: left;-->
        <!--color: #566a80;-->
        <!--margin: 21px 0 0 20px;-->
    <!--}-->
    <!--.login_box{-->
        <!--width: 320px;-->
        <!--margin: 50px auto;-->
    <!--}-->
    <!--.login_box .myinput{-->
        <!--width: 100%;-->
        <!--border: 1px solid #cad3de;-->
        <!--height: 40px;-->
        <!--line-height: 40px;-->
        <!--margin: 5px 0 10px;-->
        <!--border-radius: 3px;-->
        <!--padding: 0 10px;-->
        <!--outline: none;-->
        <!--box-sizing: border-box;-->
    <!--}-->
    <!--.login_box .myinput:focus{-->
        <!--border: 1px solid #4289dc;-->
    <!--}-->
    <!--.login_other{-->
        <!--overflow: hidden;-->
    <!--}-->

    <!--.login_other a{-->
        <!--float: right;-->
        <!--color: #727f8f;-->
    <!--}-->
    <!--.login_other a:hover{-->
        <!--color: #273444;-->
    <!--}-->
    <!--.login_other input, .login_other label{-->
        <!--float: left;-->
        <!--color: #727f8f;-->
    <!--}-->
    <!--.login_other input{-->
        <!--margin: 4px 5px 0 0;-->
    <!--}-->
    <!--.login{-->
        <!--box-sizing: border-box;-->
        <!--border: none 0;-->
        <!--height: 44px;-->
        <!--line-height: 44px;-->
        <!--width: 100%;-->
        <!--background:#4187db;-->
        <!--font-size: 16px;-->
        <!--border-radius: 3px;-->
        <!--margin-right: 40px;-->
        <!--transition: all 0.5s ease;-->
        <!--cursor: pointer;-->
        <!--outline: none;-->
        <!--color: #fff;-->
        <!--margin-top: 15px;-->
    <!--}-->
    <!--.login:hover{-->
        <!--background: #2668b5;-->
    <!--}-->
    <!--.login[disabled]{-->
        <!--opacity: 0.8;-->
    <!--}-->
    <!--.login[disabled]:hover{-->
        <!--background:#4187db;-->
    <!--}-->
    <!--.title{-->
        <!--color: #273444;-->
        <!--font-size: 1.5em;-->
        <!--text-align: center;-->
        <!--margin: 0 0 20px 0;-->
    <!--}-->

    <!--@media only screen and (max-width: 768px) {-->
        <!--.login_box{-->
            <!--width: 280px;-->
            <!--margin: 50px auto;-->
        <!--}-->
    <!--}-->
<!--</style>-->
