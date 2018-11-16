<template>
  <div class="container-fluid" style="min-width: 600px">
    <div class="row" style="background: #dde7ff">
      <div class="col-md-3 col-xs-6" >
          <div v-if="validateLogin"  >欢迎您！{{userName}}</div>
          <div v-if="!validateLogin" ><a href="#/login" style="color: red;font-size: 0.28rem">请登陆</a><span style="padding-left: 1rem">免费注册</span></div>
      </div>
      <div class="col-md-9 col-xs-6">
          <div v-if="validateLogin"><a v-on:click="logout()">退出</a></div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-3 col-md-offset-1   col-xs-6">
        <img  src="../../../assets/images/logo/logo.png" alt="logo" class="logo" />
      </div>
      <div class="col-md-3 col-xs-6">
        <div style="margin-top: 5px;margin-bottom: 5px">
          <el-input placeholder="请输入内容"  class="input-with-select">
            <el-button slot="append" @click="quick_search" icon="el-icon-search"></el-button>
          </el-input>
        </div>
      </div>
    </div>


<!--导航start-->

    <div class="row" style="background-color: rgb(84, 92, 100);" >
      <div class="col-md-11 col-md-offset-1 col-xs-11 col-xs-offset-1"  >
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-submenu v-for="(menu, index) in navigations"
                      :index="index"
                      @mouseover.native="activeNavigation(menu)"
                      @mouseout.native="showBar = false">
            <template slot="title" ><i class="el-icon-document" style="color: white">
              </i>{{menu.name}}<span class="s0" v-show="showItem==index&&showBar"></span>
            </template>
          </el-submenu>
        </el-menu>
      </div>

    </div>
    <div class="row" >
      <div class="contentBar"
           v-show="showBar"
           @mouseover="showBar = true"
           @mouseout="showBar = false">
        <div class="contentBar-item">
          <div class="row" style="margin-left: 0px;margin-right: 0px">
            <div class="col-md-3" style="border-right: 1px solid gainsboro;height: 300px;padding-left: 0px;padding-right: 0px">
                <ul style="text-align: left">
                  <li v-for="(menu, index) in navigation.subMenu"
                      :key="index"
                      style="height: 20px"
                      class="nav_productItem"
                      :class="{activeMenu: currMenu.name == menu.name}"
                      @mouseover="activeMenu(menu)">
                    {{menu.name}}
                  </li>
                </ul>
            </div>
            <div class="col-md-9">
              <div class="row">
                <div class="col-md-4" v-for="(menu,index) in currMenu.subMenu" :key="index">
                  <ul>
                    <li v-for="i in 10" :key="i">{{menu.name}}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
<!--导航end-->

    <router-view></router-view>

    <div class="row">
      <footer class="footer navbar-fixed-bottom " style="color: white;text-align: center;position: relative;margin-top: 0.5rem">
        <div class="" style="background: #6b7780;height: 1.6rem;padding-top: 0.5rem;font-size:0.4rem;">
          中国联通@2018 author by tl
        </div>
      </footer>
    </div>

  </div>


</template>

<script>

	export default {
	  name: 'container',
	  data () {



      var productData = getProductData();
	    return {
        isActive:false,
	      //产品分类
        productData,
        selfServiceTabs: [
          {type:'快捷服务',plist:[{ text: '在线测速' ,'url':'','isHot':true},{ text: '自助检测' ,'url':'','isHot':true}]},
          {type:'账务服务',plist:[{ text: '账户查询' ,'url':'','isHot':true},{ text: '代付账户查询' ,'url':'','isHot':true}]},
        ],
        showItem:'0-1',
        tabPosition: 'left',
        validateLogin:true,
        userName:"",
        showMenu:false,
        activeIndex: '1',
        activeIndex2: '2',//默认旋转哪一个 1 2 3 4
        isPC:true,
        visible2:true,
        showBar:false,
        nav_productItem_index:'-1',
            navigations:[
                {
                    name: '产品分类',
                    subMenu: [
                        {
                            name: 1,
                            subMenu:[
                                {name: 11111},
                                {name: 12222},
                                {name: 13333},
                            ]
                        },
                        {
                            name: 2,
                            subMenu:[
                                {name: 21111},
                                {name: 22222},
                                {name: 23333},
                            ]
                        },
                        {
                            name: 3,
                            subMenu:[
                                {name: 31111},
                                {name: 32222},
                                {name: 33333},
                            ]
                        }
                    ]
                },
                {
                    name: '自主服务',
                    subMenu: [{
                        name: 1,
                        values:[
                            11111,
                            12222,
                            13333
                        ]
                    }]
                },
                {
                    name: '解决方案',
                    subMenu: [{
                        name: 1,
                        values:[
                            11111,
                            12222,
                            13333
                        ]
                    }]
                },
            ],
            navigation: undefined,
            currMenu: undefined
	    }
	  },
	  methods:{
	      activeNavigation (navigation) {
	          this.showBar = true;
              this.navigation = navigation
          },
          activeMenu (menu) {
	          this.currMenu = menu
          },
      showProductItem(index,event){
        $(event.target).css("color","red");
        this.nav_productItem_index = index;
      },
      hideProductItem(index,event){
        $(event.target).css("color","black");
        // this.nav_productItem_index = index;
      },
	    getWidth(){
	      this.width = document.documentElement.clientWidth;
	     if(this.width<576){
	       this.isPC = false;
       }else {
         this.isPC = true;
       }
      },
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

        // $(".contentBar").toggle();
        // this.isShowBar = true;
        // if(this.isShowBar){
        //   this.isShowBar = false;
        // }else{
        //   this.isShowBar = true;
        // }
        this.arrow = id;
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

      window.addEventListener('resize', this.getWidth);
      this.navigation = this.navigations[0];
      this.currMenu = this.navigation.subMenu[0];
	   this.init();

    },
    destroyed(){
      window.addEventListener('resize', this.getWidth);

    }

	}

	//模拟数据
	function getProductData() {

    var productData = [];
    var p = {};
    p.type = '固定电话';
    p.detailList = [];
    var detail = [];
    var item1 = {name:'标题1',plist:[{ text: '普通数字中继*' ,'url':'dataNet','isHot':true},{ text: 'SIP数字中继*' ,'url':'','isHot':true},{ text: '模拟直线' ,'url':'','isHot':false}]};
    var item2 = {name:'标题2',plist:[{ text: '普通数字中继*' ,'url':'','isHot':true},{ text: 'SIP数字中继*' ,'url':'','isHot':true}]};
    var item3 = {name:'标题3',plist:[{ text: '普通数字中继*' ,'url':'','isHot':true},{ text: 'SIP数字中继*' ,'url':'','isHot':true}]};
    var item4 = {name:'标题4',plist:[{ text: '普通数字中继*' ,'url':'','isHot':true},{ text: 'SIP数字中继*' ,'url':'','isHot':true}]};
    detail.push(item1);
    detail.push(item2);
    detail.push(item3);
    detail.push(item4);
    var detail2 = [];
    var item21 = {name:'标题21',plist:[{ text: '普通数字中继*' ,'url':'','isHot':true},{ text: 'SIP数字中继*' ,'url':'','isHot':true}]};
    var item22 = {name:'标题22',plist:[{ text: '普通数字中继*' ,'url':'','isHot':true},{ text: 'SIP数字中继*' ,'url':'','isHot':true}]};
    var item23 = {name:'标题23',plist:[{ text: '普通数字中继*' ,'url':'','isHot':true},{ text: 'SIP数字中继*' ,'url':'','isHot':true}]};
    detail2.push(item21);
    detail2.push(item22);
    detail2.push(item23);
    p.detailList.push(detail);
    p.detailList.push(detail2);

    var p2 = {};
    p2.type = '企业宽带';
    p2.detailList = [];
    var detail = [];
    var item1 = {name:'T1',plist:[{ text: '普通数字中继*' ,'url':'dataNet','isHot':true},{ text: 'SIP数字中继*' ,'url':'','isHot':true},{ text: '模拟直线' ,'url':'','isHot':false}]};
    var item2 = {name:'T2',plist:[{ text: '普通数字中继*' ,'url':'','isHot':true},{ text: 'SIP数字中继*' ,'url':'','isHot':true}]};
    var item3 = {name:'T3',plist:[{ text: '普通数字中继*' ,'url':'','isHot':true},{ text: 'SIP数字中继*' ,'url':'','isHot':true}]};
    detail.push(item1);
    detail.push(item2);
    detail.push(item3);
    var detail2 = [];
    var item21 = {name:'T21',plist:[{ text: '企业宽带*' ,'url':'','isHot':true},{ text: 'SIP数字中继*' ,'url':'','isHot':true}]};
    var item22 = {name:'T22',plist:[{ text: '普通数字中继*' ,'url':'','isHot':true},{ text: 'SIP数字中继*' ,'url':'','isHot':true}]};
    detail2.push(item21);
    detail2.push(item22);
    p2.detailList.push(detail);
    p2.detailList.push(detail2);

    productData.push(p);
    productData.push(p2);

    return productData;

  }
</script>

<!-- rewritten element UI css by tang-->
<style>
  .active{
    color: red;
  }
  .nav_productItem:hover{
    color: red;
  }
/*
灰色导航的高度调整
*/
  .el-menu--horizontal>.el-submenu .el-submenu__title, .el-menu--horizontal>.el-menu-item{
    height: 40px !important;
    line-height: 40px !important;
  }

  .el-input{
    font-size: 0.3rem !important;
  }
  .el-input-group__append{
    background: red !important;
    color: white !important;
  }
  .el-input__inner{
    height: 1rem !important;
  }
  .logo{
    width:80%;
    height:auto;
    margin-top: 15px;
  }
  .class-hot{
    display: inline-block;
    color: red;
  }

  /*.menu-item{*/
    /*margin-top: 10px;*/
    /*margin-bottom: 10px;*/
    /*font-size: 12px;*/
  /*}*/
  /*.menu-item:hover{*/
    /*background: #6b7780;*/
    /*color: red;*/
  /*}*/
  /*.menu-item a:hover{*/
    /*color: red;*/
  /*}*/
  /*.el-menu--horizontal>.el-submenu .el-submenu__title {*/
    /*height: 40px !important;*/
    /*line-height: 40px !important;*/
    /*width: 3rem !important;*/
    /*font-size: 0.375rem;*/
  /*}*/

  /*el-menu.el-menu--popup.el-menu--popup-right-start{*/
    /*height: 400px !important;*/
  /*}*/

  /*!*设置伸缩菜单的高度*!*/
  /*.el-menu.el-menu--popup.el-menu--popup-bottom-start{*/
    /*!*min-height: 10rem !important;*!*/
    /*display: none;*/
  /*}*/
  /*.el-tabs__item.is-left:hover{*/
    /*background: #4289dc !important;*/
  /*}*/
  /*.el-menu.el-menu--horizontal {*/
    /*border-bottom: solid 0px #e6e6e6 !important;*/
  /*}*/


  .el-menu--popup-bottom-start{
    display: none !important;
  }
  .el-menu.el-menu--horizontal{
    border-bottom: solid 0px #e6e6e6 !important;
  }
  .el-menu-item:hover,.el-submenu__title:hover{
    background: red !important;
  }





.s0{
  position:absolute;
  bottom:-2px;
  left:70px;
  width:0px;
  height:0px;
  border-top:8px solid transparent;
  border-left:8px solid transparent;
  border-right:8px solid transparent;
  border-bottom:8px solid white;
}
.s1{
  position:absolute;
  bottom:-2px;
  left:42px;
  width:0px;
  height:0px;
  border-top:8px solid transparent;
  border-left:8px solid transparent;
  border-right:8px solid transparent;
  border-bottom:8px solid white;
}



  .contentBar{
    /*border: 20px transparent solid;*/
    /*border-top-color: #000;*/
    /*opacity: 0.95;*/
    background: white !important;
    z-index: 100;
    /*margin-top: 1px;*/
    /*display: none;*/
    position: absolute;
    left: 10%;
    /*top: 22%;*/
    /*margin-top: 10%;*/
    margin-left: -3px;
    width: 600px;
    height: 300px;
    /*border:1px solid #1eff70;*/
    overflow:auto;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
  }

  .contentBar::-webkit-scrollbar {
    width: 10px;
    background-color: rgba(217,217,217,0.3);
  }
  .contentBar::-webkit-scrollbar-thumb {
    background-color: rgba(111, 122, 128, 0.3);
    border-radius: 6px;
  }
  .contentBar::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(107, 119, 128, 0.3);
    background-color: #fff;
  }

  .activeMenu {
    color: red
  }

  .contentBar-item{
    /*display: none;*/
  }
  .isActived{
    display: block;
  }

/*a{*/
  /*color: black;*/
  /*text-decoration:none !important;*/
/*}*/

  /*!*.el-menu--horizontal .el-menu-item:not(.is-disabled):hover{*!*/
    /*!*background-color: white !important;*!*/
    /*!*color: red !important;*!*/
    /*!*border:1px solid #15ff55;*!*/
    /*!*!*margin: 0 15px; *!*!*/

  /*!*}*!*/
/*.el-menu--horizontal .el-menu-item:not(.is-disabled) a:hover{*/
  /*!*background-color: white !important;*!*/
  /*color: red !important;*/
/*}*/
/*.el-menu--horizontal .el-menu-item:not(.is-disabled) router-link:hover{*/
  /*background-color: #defdff !important;*/
  /*color: red !important;*/
/*}*/



  /*.el-menu--popup-bottom-start{*/
    /*margin-top: 0px !important;*/
    /*background-color: white !important;*/
  /*}*/
  /*.el-menu--popup-right-start{*/
    /*background-color: white !important;*/
  /*}*/
  /*.el-menu--horizontal>.el-submenu .el-submenu__title{*/
    /*border-bottom-color: transparent; color: rgb(255, 255, 255) !important;*/
    /*border-bottom: none !important;*/
  /*}*/
  /*.el-menu--horizontal .el-menu-item{*/
    /*color: black !important;*/
    /*background-color: white !important;*/
  /*}*/
  /*.el-menu--horizontal .el-menu .el-submenu__title{*/
    /*background-color: white !important;*/
    /*color: black !important;*/
  /*}*/

  /*#tanglei .el-submenu__title:hover,#tanglei1 .el-submenu__title:hover,#tanglei3 .el-submenu__title:hover,#tanglei4 .el-submenu__title:hover{*/
    /*background-color: red !important;*/
  /*}*/
  /*#tanglei4{*/
    /*background: dimgray;*/
  /*}*/
  /*#tanglei4 :hover{*/
    /*background-color: red !important;*/
  /*}*/


</style>
<style scoped>

</style>
