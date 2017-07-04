<template>
  <div class="container" @click="clicke">
    <div class="row" id="leftWidth">
      <!-- 左侧设备名模态框 -->
      <component v-bind:is = "eqnamemodal"></component>

      <div class="col-md-9 col-sm-9 col-xs-9 Right_map">
        <!-- 上传图片按钮 -->
        <a href="#" class="import-map pull-right">
          <input type="file" @change="onFileChange" id="imgUpload" accept="image/*" />
           导入地图
        </a>

        <!-- 地图参数模态框 -->
        <component v-bind:is = "locationmodal"></component>

        <!-- 地图 -->
        <div class="col-md-12 col-sm-12 col-xs-12 map-imgbox" id="map-imgboxs">
          <img src="" class="col-md-12 col-sm-12 col-xs-12 map-img" id="map-imgid" alt="error" @contextmenu.prevent="increaseEq"  @DOMMouseScroll="imgBigf" >
          
          </div>
          <button @click="imgBig(1)">放大</button>
          <button @click="imgBig(0)">缩小</button>
        </div>

        <!-- 右键添加设备 -->
        <ul class="menu" id="menu">
          <li class="sub-menu">添加设备
            <ul class="eq-imgs">
              <li class="submenu1 p">233333</li>
              <li class="submenu1 p">233333</li>
              <li class="submenu1 p">233333</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>


<script>
import EqNamemodal from "./modal/EqNamemodal.vue"      //引入左侧设备名模态框
import Locationmodal from "./modal/Locationmodal.vue"     //引入设置地图参数模态框
export default {
  data: function () {
    return {
      eqnamemodal: 'EqNamemodal',
      locationmodal: 'Locationmodal',
      image:"",
      i:1
    }
  },
  components: {
    EqNamemodal,
    Locationmodal
  },
  methods: {
    // 选择上传的图片，input发生改变
    onFileChange() {
        //上传单张地图
        var file = document.getElementById('imgUpload');
        this.createReader(file.files[0]);
    },
    createReader (file) {
            var reader = new FileReader();    //新建FileReader对象

            reader.onload = function (evt) {   //上传地图读取完成
                var image = new Image();      //新建Image对象
                image.onload = function () {      //地图上传完成，获取上传地图的宽高
                    var width = $('.map-img').width(),
                        height = $('.map-img').height();
                        $("#map-imgboxs").width(width+50);
                         $("#map-imgboxs").height(height+50);
                         $("#map-imgboxs").css({
                          "border":"1px solid red"
                         })
                      }
                  
                 image.src = evt.target.result;  //读取的数据保存在result里,赋值给image.src
                $('.map-img').attr("src",image.src);
                $('.map-img').css("display","block")

            };
            reader.readAsDataURL(file);       //将文件读取为base64的格式，也就是可以当成图片的src
    },

    // 滚动滚轮图片放大,缩小
    imgBig (mode) {
      // var e=event || e;
      // var mode=0;//图片放大或者缩小标志
      // if(e.wheelDelta > 0){
      //   mode=1;
      // }
      var width=$("img").width();
        var height=$("img").height();
        //获取span的长度
        var span_length=$("#map-imgboxs>span").length;
        var spanleft_value=[];
        var spantop_value=[];
        
        //将每一个span的初始位置，都存入一个数组中
       
        for(var k=0;k<span_length;k++){
          spanleft_value.push($("#sp"+(k+1)).offset().left);
          spantop_value.push($("#sp"+(k+1)).offset().top);
        }
          console.log("left检查"); 
        var offset_left=$("img").offset().left;
        var offset_top=$("img").offset().top;
        
        //获得每一个span到图片左边线的距离与图片宽度的比例，以及高度的比例，且将这些存入数组
        var width_per=[];
        var height_per=[];

        for(var l=0;l<span_length;l++){
          width_per.push((spanleft_value[l]-offset_left)/width);
          height_per.push((spantop_value[l]-offset_top)/height);
          
        }

        if(mode==1){
          width=width*1.1;
          height=height*1.1;
        }
        else{
        width=width/1.1;
        height=height/1.1;
        }
        $("img").width(width);
        $("img").height(height);
        
        $("img").css({
          "position":"absolute",
          "margin-top":-height/2,
          "margin-left":-width/2,
          "top":"50%",
          "left":"50%"
        });

        offset_left=$("img").offset().left;
        offset_top=$("img").offset().top;

        var marg_width=[];
        var marg_height=[];
        for(var m=0;m<span_length;m++){
          marg_width.push(width*width_per[m]);
          marg_height.push(height*height_per[m]);

        }

        for(var h=0;h<span_length;h++){
          marg_width[h]=offset_left+marg_width[h];
          marg_height[h]=offset_top+marg_height[h];
        }
        
        for(var o=0;o<span_length;o++){         
          $("#sp"+(o+1)).offset({"left":marg_width[o],"top":marg_height[o]});
        }
    },
    imgBigf (e) {   //Firefox滑轮事件
      
    },

    // 右键添加设备
    increaseEq (e) {
        var clientx="";
        var clienty="";
      //自定义右键菜单
      // $("img").contextmenu(function(e){
      //获取鼠标坐标点
      $("#menu").css({
        "display":"block",
        "position":"absolute",
        "left":e.clientX,
        "top":e.clientY,
      });
      clientx=e.clientX;
      clienty=e.clientY;
      e.preventDefault();
    
    //自定义菜单的点击事件（追加节点，添加设备）
    $("#menu").on("click",".p",function(e){
      console.log("事件绑定");
      var span_length=$("#map-imgboxs>span").length;
      if(span_length>0){
        span_length=span_length+1;
      }
      else{
        span_length=1;
      }
      var content=e.target.textContent;
      var node=$("<span id='sp"+span_length+"'></span>");
      node.append(content);
      //在将传感器器追加到div之前，应该判断div的top与left
      var left=$(".map-imgbox").offset().left;
      var top=$(".map-imgbox").offset().top;
      $(".map-imgbox").append(node);
      
      //获取图片距离left与top的距离
      
      node.css({
        "position":"absolute",
        "left":clientx-left,
        "top":clienty-top
      })
      $("#menu").css({
        "display":"none"
      })
    })
    },
    clicke () {
      $('.menu').css("display","none");
    }
  }
}
</script>


<style >
/*右边地图*/
.Right_map {
  padding-left:30px;
  padding-right:30px;
}

/*导入地图按钮样式*/
.import-map {
  color: #fff;
  background-color: #0B8858;
  border: 1px solid #0B8858;
  border-radius: 2px;
  line-height: 40px;
  margin-top: 20px;
  margin-left: 10px;
  padding: 1px 7px 1px 7px;
}

/*input透明度为0，以改变按钮样式*/
.import-map input {
  width: 72px;
  height: 42px;
  display: block;
  margin-left: -8px;
  margin-top: -1px;
  position: absolute;
  opacity: 0;
}

.import-map:hover {
  background-color: #0B6f58;
  color: #fff;
}

/*地图框*/
.map-imgbox {
  padding:0;
  overflow: hidden;
  position: relative;
}

.map-img {
  position: relative;
  padding: 0;
  display: none;
}

/*右键功能样式*/
.menu {
  width:150px;
  border:1px solid black;
  border:1px solid black;
  position:fixed;
  left:0;
  top:0;
  display:none;
  background:white;
}

.menu li {
  padding:3px;
  cursor: pointer;
}

.sub-menu {
  position: relative;
}

.sub-menu:hover {
  background:#CCC;
}

.submenu1 {
  display: none;
  cursor: pointer;
}

.submenu1:hover {
  background:#CCC;
}

.sub-menu:hover .submenu1{
  display: block;
}
</style>
