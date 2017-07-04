<template>
	<div>
		<div class="col-md-5 col-sm-8 col-xs-10 modal fade modal-location">
			<!-- 模态框内容 -->
            <div class="modal-body">
            	<div class="modal-header">
	              	<div class="modal-title">
	                  	<h4>请输入坐标</h4>
	              	</div>
            	</div>
            	<!-- 经纬度框 -->
	            <div class="row modal-contents">
	              	<div class="col-md-6 col-sm-6 col-xs-12">
		                <p>左上角</p>
		                <div>
		                	<span>经度</span>
		                	<input type="number" min="0" id="left1">
		                </div>
		                <div>
		                	<span>纬度</span>
		                	<input type="number" min="0" id="left2">
		                </div>
	              	</div>

	              	<div class="col-md-6 col-sm-6 col-xs-12">
		                <p>右上角</p>
		                <div>
		                	<span>经度</span>
		                	<input type="number" min="0" id="right1">
		                </div>
		                <div>
		                	<span>纬度</span>
		                	<input type="number" min="0" id="right2">
		                </div>
	              	</div>
	            </div>
	            <div class="modal-button modal-footer">
	            	<button class="cancel" v-on:click="closeMapPara">取消</button>
	              	<button class="ensure" v-on:click="sureLocation">确定</button>
	            </div>
	        </div>
        </div>
        <!-- 阴影 -->
    	<div class="modal-backup"></div>
    	<div class="map-button pull-right">
    		<button class="map-para" v-on:click="openMapPara">地图参数</button>
    	</div>
	</div>
</template>

<script>
	export default {
		// 模态框显示与隐藏的方法
		methods: {
		    openMapPara: function() {
		        $(".modal-location").addClass("in");
		        $(".modal-location").css('z-index','1001');   //模态框的层级为1001，此时阴影处的层级为1000
		        $(".modal-backup").css('display','block');
		    },
		    closeMapPara: function() {
		          $(".modal-location").removeClass('in');
		          $(".modal-location").css('z-index','-1');
		          $(".modal-backup").css('display','none');
		    },
		    sureLocation: function(){
		    	$(".modal-location").removeClass('in');
		        $(".modal-location").css('z-index','-1');
		        $(".modal-backup").css('display','none');

			var left1=$("#left1").val(),
				left2=$("#left2").val(),
				right1=$('#right1').val(),
				right2=$('#right2').val();

			// $.ajax({
			// 	type:"POST",
			// 	url:"http://192.168.199.248:8082/index",
			// 	data:{left1,left2,right1,right2},
			// 	success:function(res){

			// 		console.log(res);
			// 	},
			// 	error:function(err){
			// 		console.log(err);
			// 	}
			// })
			}	
		}
	}
</script>

<style type="text/css">
	/*模态框外层*/
.fade {
  top: -10%;
  border-radius: 7px;
  margin-right: auto;
  margin-left: auto;
  display:block;
  z-index: -1;
  -webkit-transition:top 0.3s linear;  /*模态框进场动画*/
  -o-transition:top 0.3s linear;
  transition:top 0.3s linear;
}

/*点击地图参数时添加给模态框外层*/
.in {
  margin-top:50px;
  top:0;
}

/*模态框内容*/
.modal-body {
  width:100%;
  background-color: #fff;
  border-radius:7px;
}

/*模态框标题*/
.modal-title {
  height: 20px;
  line-height: 20px;
}

/*经纬度框*/
.modal-contents input{
	height: 30px;
	margin-bottom:18px;
}

/*取消、确定按钮*/
.modal-button {
	margin-top: 5px;
}

.modal-button button{
	padding: 0px 20px 0px 20px;
	border-radius: 5px;
	line-height: 40px;
	margin-left: 10px;
}

.cancel {
	background-color: #FFFFFF;
	border: 1px solid #D2D2D2;
}

.ensure {
	color: #fff;
	background-color: #41ABDC;
	border: 1px solid #41ABDC;
}

.cancel:hover {
	background-color: #E4E4E4;
}

.ensure:hover {
	background-color: #147EB3;
}

/*阴影部分*/
.modal-backup {
  position:fixed;  /*使阴影部分全屏*/
  top:0;
  left:0;
  right:0;
  width:100%;
  height:100%;
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 1000;   /*设置阴影层级为1000，比模态框低*/
  display:none;    /*弹出模态框前隐藏阴影*/
}

/*地图参数按钮*/
.map-button {
	margin-top: 20px;
	margin-bottom: 10px;
}

.map-para {
	color: #fff;
	background-color: #0B8858;
	border: 1px solid #0B8858;
	border-radius: 2px;
	line-height: 40px;
	margin-left: 10px;
}

.map-para:hover {
	background-color: #0B6f58;
}
</style>