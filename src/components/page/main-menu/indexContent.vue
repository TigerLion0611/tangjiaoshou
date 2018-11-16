<template>
  <div class="container-fluid" >
    <div class="row" >

        <el-carousel indicator-position="inside" height="8rem">
          <el-carousel-item v-for="(item,index) in carouselListData" :key="index+1">
            <!--<h3>{{ item.title}}</h3>-->
            <img :src=item.url class="carousel">
          </el-carousel-item>
        </el-carousel>

    </div>
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h4>热销商品</h4>
      </div>
    </div>
    <div class="row" style="margin-left: 30px;margin-right: 30px" >
        <div class="col-md-3 col-xs-6" v-for="item in hotProductData" >
          <div class="hotproduct">
            <ul>
              <li><p><img :src=item.url  style="height:auto;width: 100%"/></p></li>
              <li><p style="text-align: left;margin-left: 5px;color: red;font-weight:bold">{{item.title}}</p></li>
              <li><p style="text-align: left;margin-left: 5px">{{item.desc}}</p></li>

            </ul>
          </div>
        </div>
    </div>

  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .row{
    margin-left: 0px;
    margin-right: 0px;
  }
  .el-button--medium{
    color: red;
  }
  .el-button{
    border: 1px solid red;
  }
  .container-fluid{
    padding-left: 0px;
    padding-right: 0px;
  }
  .carousel{
    height: 100%;
    width: 100%;
  }
  .hotproduct{
    font-size: 0.3rem;
    margin-top: 10px;
    border-left: 1px solid #e0e3e6;
    border-bottom: 1px solid #e0e3e6;

  }
</style>
<style scoped>
  /*.el-carousel__item h3 {*/
    /*color: #475669;*/
    /*font-size: 18px;*/
    /*opacity: 0.75;*/
    /*line-height: 300px;*/
    /*margin: 0;*/
  /*}*/

  /*.el-carousel__item:nth-child(2n) {*/
    /*background-color: #99a9bf;*/
  /*}*/

  /*.el-carousel__item:nth-child(2n+1) {*/
    /*background-color: #d3dce6;*/
  /*}*/
</style>

<script>

	export default {
	  name: 'indexContent',
	  data () {
	    return {
        hotProductData:[
          {url:require('../../../assets/images/hotProduct/hot1.png'),title:'微餐饮',desc:'用餐预约，外卖服务，门店查询，排队取号,门店查询，排队取号'},
          {url:require('../../../assets/images/hotProduct/hot1.png'),title:'微餐饮',desc:'用餐预约，外卖服务，门店查询，排队取号,门店查询，排队取号'},
          {url:require('../../../assets/images/hotProduct/hot1.png'),title:'微餐饮',desc:'用餐预约，外卖服务，门店查询，排队取号,门店查询，排队取号'},
          {url:require('../../../assets/images/hotProduct/hot1.png'),title:'微餐饮',desc:'用餐预约，外卖服务，门店查询，排队取号,门店查询，排队取号'}

        ],
	      carouselListData:[{'url':require('../../../assets/images/carousel/carousel1.png'),content:'hahahaha',title:'1'},
          {'url':require('../../../assets/images/carousel/carousel2.jpg'),content:'sddddddd',title:'2'},
          {'url':require('../../../assets/images/carousel/carousel3.jpg'),content:'wwwwww',title:'3'},
          {'url':require('../../../assets/images/carousel/carousel4.jpg'),content:'wwwwww',title:'3'}]
	    }
	  },
	  methods:{

		},
		mounted:function(){

			
		}
	}


</script>


