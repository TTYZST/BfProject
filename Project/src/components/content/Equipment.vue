<template>
	<div class="equipment-modal">

		<!-- 设置两种搜索-->
		<div class="row equipment">
			<div class="col-md-3 col-md-offset-4">
				<button @click="common">普通</button>
			</div>
			<div class="col-md-3">
				<button @click="senior">高级</button>
			</div>
		</div>

		<!-- 普通搜索框 -->
		<div class="common col-md-3 col-md-offset-4">
			<input type="text" name="">
			<button @click="openmodal1" class="butn">搜索</button>
		</div>

		<!-- 高级搜索框 -->
		<div class="senior col-md-3 col-md-offset-4">
			<div>
				<select name="" id="">
				<option>1</option>
				<option>2</option>
			</select>
			</div>
			<div>
				<select name="" id="">
					<option>1</option>
					<option>2</option>
				</select>
			</div>
			<button v-on:click="openmodal1" class="butn">搜索</button>
		</div>

		<!-- 显示内容 -->
		<div class="row equipment">
				
			<!-- 第一个表格 -->
			<div class="col-md-5 col-md-offset-4">
				<h2>A1</h2>
				<table>
					<tr>
						<td>名称</td>
						<td>地址</td>
						<td>型号</td>
						<td>参数</td>
						<td style="border:0"><button>删除</button></td>
					</tr>
					<tr>
						<td>传感器</td>
						<td>。。。</td>
						<td>mxyz</td>
						<td>yyym</td>
						<td style="border:0"><button>编辑</button></td>
					</tr>
				</table>
			</div>

			<!-- 第二个表格 -->
			<div class="col-md-5 col-md-offset-4">
				<h2>A2</h2>
				<table>
				<tr>
					<td>名称</td>
					<td>地址</td>
					<td>型号</td>
					<td>参数</td>
					<td style="border:0"><button>删除</button></td>
				</tr>
				<tr>
					<td>传感器</td>
					<td>。。。</td>
					<td>mxyz</td>
					<td>yyym</td>
					<td style="border:0"><button>编辑</button></td>
				</tr>
			</table>
			</div>

			<!-- 第三个表格 -->
			<div class="col-md-5 col-md-offset-4">
				<h2>A3</h2>
				<table>
				<tr>
					<td>名称</td>
					<td>地址</td>
					<td>型号</td>
					<td>参数</td>
					<td style="border:0"><button>删除</button></td>
				</tr>
				<tr>
					<td>传感器</td>
					<td>。。。</td>
					<td>mxyz</td>
					<td>yyym</td>
					<td style="border:0"><button>编辑</button></td>
				</tr>
			</table>
			
			</div>
		</div>

		<!-- 弹窗 -->
		<div class="tanchuang">
		<div class="col-md-4 col-sm-6 col-xs-12 modal fade modal-location">
			
			<!-- 模态框内容 -->
            <div class="modal-body">
            	<div class="modal-header">
	              	<div class="modal-title">
	                  	<h4>搜索结果</h4>
	              	</div>
            	</div>

            	<!-- 获得的结果 -->
	            <div class="modal-contents">
	              	<div>
		                
		                <div>
		                	<span>传感器</span>
		                	<p><button>添加</button>
		                	<button>编辑</button></p>
		                	
		                </div>
		                <div>
		                	<span>型号</span>
		                	<p><button>添加</button>
		                	<button>编辑</button></p>
		                	
		                </div>
	              	</div>

	            </div>

	            <!-- 关闭模态框 -->
	            <div class="modal-button modal-footer">
	            	<button class="cancel" v-on:click="closemodal1">取消</button>
	              	<button class="ensure">确定</button>
	            </div>
	        </div>
        </div>
        
        <!-- 阴影 -->
    	<div class="modal-backup"></div>

		</div>
		
	</div>
</template>
<script >
	export default{
		methods:{
			show(){
				$(".tanchuang").css('display','block');
			},//控制弹窗的显示

			senior(){
				$(".senior").css("display","block");
				$(".common").css("display","none")
			},
			common(){
				$(".senior").css("display","none");
				$(".common").css("display","block")
			},//高级搜索和普通搜索的切换

			openmodal1: function() {
		        $(".modal-location").addClass("in");
		        $(".modal-location").css('z-index','1001');   //模态框的层级为1001，此时阴影处的层级为1000
		        $(".modal-backup").css('display','block');
		    },//打开模态框

		    closemodal1: function() {
		          $(".modal-location").removeClass('in');
		          $(".modal-location").css('z-index','-1');
		          $(".modal-backup").css('display','none');
		    }//关闭模态框
		}


  }
</script>
<style>
	.equipment-modal {
		margin-top: 50px;
	}

	/*普通搜索*/
	.common{
		display: block;
	}
	.common input{
		width: 100%;
		height: 30px;
		margin-top: 10px;
	}
	.butn{
		margin-top: 10px;

	}

	/*高级搜索*/
	.senior{
		display: none;
	}
	.senior select{
		width: 100%;
		height: 30px;
		margin-top: 10px;
	}

	/*设备显示*/
	.equipment{
		margin: 0
	}
	.equipment td{
		border: 1px solid black;
		width: 10%;
		height: 40px;
		text-align: center;
	}

	/*设置模态框*/
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

	/*点击搜索时添加模态框*/
	.in {
	  margin-top:50px;
	  top:0;
	}

	/*模态框主体*/
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

	/*模态框内容*/
	.modal-contents{
		width: 100%;
	}
	.modal-contents input{
		width: 100%;
		height: 30px;
	}

	/*取消、确定按钮*/
	.modal-button {
		margin-top: 5px;
	}

	.modal-button button{
		padding: 0px 20px 0px 20px;
		border-radius: 5px;
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
	
	/*设置按钮的hover效果*/
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


</style>