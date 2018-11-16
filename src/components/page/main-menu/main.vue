<template>
  <el-container>
    <el-header>
      <el-row :gutter="10">
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
          <div v-if="validateLogin" class="grid-content">
          欢迎您！{{userName}}
        </div>
          <div v-if="!validateLogin" class="grid-content">
            <a href="#/login" style="color: red;font-size: 12px">请登陆</a><span style="padding-left: 1rem">免费注册</span>
          </div>
        </el-col>

        <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
          <div class="grid-content bg-purple-light">

          </div>
        </el-col>

        <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple"></div></el-col>
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light"></div></el-col>
      </el-row>

      <el-row :gutter="2">
        <el-col :xs="8" :sm="6" :md="5" :lg="6" :xl="1">
          <div class="grid-content bg-purple">
            <img  src="../../../assets/images/logo/logo.png" alt="logo" class="logo" />
          </div>
        </el-col>

        <el-col :xs="4" :sm="6" :md="7" :lg="6" :xl="11"><div class="grid-content bg-purple-light"></div></el-col>
        <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple"></div></el-col>
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light"></div></el-col>
      </el-row>

    </el-header>
    <el-main>Main</el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>
<style>
  .logo{
    width:80%;
    height:auto;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>
<script>

  export default {
    name: 'container',
    data () {

      var productData = getProductData();
      return {
        //产品分类
        productData,
        selfServiceTabs: [
          {type:'快捷服务',plist:[{ text: '在线测速' ,'url':'','isHot':true},{ text: '自助检测' ,'url':'','isHot':true}]},
          {type:'账务服务',plist:[{ text: '账户查询' ,'url':'','isHot':true},{ text: '代付账户查询' ,'url':'','isHot':true}]},
        ],
        showItem:'2-1',
        tabPosition: 'left',
        validateLogin:true,
        userName:"",
        showMenu:false,
        activeIndex: '1',
        activeIndex2: '-1'//默认旋转哪一个 1 2 3 4

      }
    },
    methods:{
      init(){
        this.validateLogin = false;
        var user = this.$route.query.username;

        if(user){
          this.userName = user;
          this.validateLogin = true;
        }
      },
      logout(){
        alert("登出");
        this.$router.push({
          path:'/'
        })
      },
      //切换子导航和对应内容
      changeContentFun(id){
        console.log(id)
        this.showItem= id;
      },
      quick_search(){
        this.$message({
          dangerouslyUseHTMLString: true,
          message: '查询为空',
          customClass:'hehe',
          showClose:true
        })
      },
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      // open() {
      //   this.$message('这是一条消息提示');
      // }
    },
    watch:{ //监控路径变化  当路径发送变化的时候，改变面包屑导航的显示
      // $route: {
      // 	handler: function (val, oldVal) {
      // 		var path = val.path;
      // 		this.pageTitle = pageTitleObj[ path.substr( path.lastIndexOf("/")+1 ) ] || "网站首页";
      // 	}
      // }
      '$route': 'init'

    },
    created (){
      this.init();
    }
  }
</script>
