<template>
	<div class="container">
		<div class="row login-box">
			<div>
				<input class="username" type="text" placeholder="手机号或邮箱" id="user" />
			</div>
			<div>
				<input class="pwd" type="text"  placeholder="密码" id="pwd"/>
			</div>
			<div>
				<button class="login" type="button" v-on:click="logoin">登录</button>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		methods: {
		logoin:function(){
			var user=$("#user").val();
			var pwd=$("#pwd").val();

			$.ajax({
				type:"POST",
				url:"http://192.168.0.32:8082/logoin",
				data:{user,pwd},
				success:function(res){

					console.log(res);

					if(res.aid == 1) {
						window.location="/index"
					}
					if(res.role == 0) {
						
					}
					window.localStorage.setItem("token",res.token);
				},
				error:function(err){
					console.log(err);
				}
			})
		}	
		}
	}
</script>

<style type="text/css">
/*登录框居中*/
.login-box {
	text-align: center;
}

/*用户名，密码框样式*/
.username, .pwd {
	width: 330px;
	height: 40px;
	border-top: 0 solid #000;
	border-left: 0 solid #000;
	border-right:0 solid #000;
	border-bottom:1px solid #999;
}

.username {
	margin-top: 240px;
}

.pwd {
	margin-top: 30px;
	margin-bottom: 20px;
}

/*登录按钮样式*/
.login {
	width: 330px;
	height: 40px;
	border: 0;
	color: #fff;
	background-color: #16AF51;
	font-size:16px;
	letter-spacing: 3px;
	margin-top: 27px;
}

.login:hover {
	background-color: #0E8844;
}

</style>
