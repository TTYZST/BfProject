<template>
    <div class="nav clearfix">
      <ul class="sub-nav">
        <li v-on:click="NavClick"><router-link to="/index">首页</router-link></li>
        <li v-on:click="NavClick"><router-link to="/index/local" >本地</router-link></li>
        <li v-on:click="NavClick"><router-link to="/index/equipment">设备</router-link></li>
        <li v-on:click="NavClick"><router-link to="/index/realtime">实时</router-link></li>
        <li v-on:click="NavClick"><router-link v-if="seen" to="/index/user">用户</router-link></li>
      </ul>
      <router-view></router-view>
    </div>
</template>

<script>
export default {
  data () {
    return {
      seen: true
    }
  },
  beforeCreate: function() {
    
      // var url=window.location.href;
      // var reg=new RegExp("^(\w{*}):{0,1}\/{0,2}\w{3,8}\.\w{1,20}\.{2,20}\/\w{*}\/equipment")
      // req.test
      // alert(url.indexOf("equipment"));
      // var token =  window.localStorage.getItem("token");
      // $.ajax({
      //   type:"get",
      //   url:url+"?token="+token,
      //   success: function(res) {
      //     console.log(res)
      //     if(res.aid == 0) {
      //       alert("登录超时")
      //       window.location="/"
      //     }else {
      //       return true;
      //     }
      //   },
      //   error: function(err) {
      //     console.log(err)
      //   }

      // })
    
  },
  methods: {
    NavClick(e) {
      var url="";
      switch(e.target.textContent){
        case "首页": url="http://192.168.0.32:8082/";break;
        case "本地": url="http://192.168.0.32:8082/local";break;
        case "设备": url="http://192.168.0.32:8082/set";break;
        case "实时": url="http://192.168.0.32:8082/time";break;
        case "用户": url="http://192.168.0.32:8082/user";break;
      }
      var token =  window.localStorage.getItem("token");
      $.ajax({
        type:"get",
        url:url+"?token="+token,
        success: function(res) {
          console.log(res)
          if(res.aid == 0) {
            alert("登录超时")
            window.location="/"
          }else {
            return true;
          }
        },
        error: function(err) {
          console.log(err)
        }

      })
    }
  }
}
</script>

<style>
html,body,div,ul,li,a {
  margin:0;
  padding: 0;
}

/*清楚浮动*/
.clearfix:before, .clearfix:after {
  content: "";
  display:table;
}

.clearfix:after {
  clear: both;
}

a:hover {
  text-decoration:none;
}

li {
  list-style: none;
}

/*导航栏样式*/
.nav {
	width: 100%;
	height: 50px;
	background-color: #0B8858;
}

.sub-nav li {
  width: 20%;
  line-height: 50px;
  text-align: center;
  float: left;
}

.sub-nav li:hover{
  background-color: #0B6f58;
}

.sub-nav li a {
  width: 100%;
  line-height: 50px;
  font-size: 20px;
  color: #fff;
  display: block;
}
</style>
