<template>
    <div class="col-md-3 col-sm-3 col-xs-3 equipment">
      <ul class="eq_class" v-for="names in eqnames">
        <li>{{names.type}}
          <!-- 设备名称 -->
          <ul class="eq_name" v-for="dat in data">
            <li>{{dat.name}}</li>
          </ul>
          
        </li>     
      </ul>
    </div>
</template>

<script>
export default {
   data: function () {
    return {
      eqnames:[],
      data:[],
      i:0
    }
  },
  // 获取设备名
  created: function () {
     var that=this;
     // $.ajax({
     //      type:"GET",
     //      url:"http://192.168.0.32:8082",
     //      success:function(res) {
     //        that.data=res.data;
     //        // console.log(res);
     //        for(var k=0;k<res.data.length;k++){
     //          console.log(res.data[k].type);
     //        }
            
     //      },
     //      error:function(err) {
     //        console.log(err);

     //      }
     //    });
  },
  // 获取设备类型json
  mounted() {
      this.axios.get('../../../../../static/data/eqname.json')
      .then((res) => {
        this.eqnames = res.data.eqnames
        console.log(res.eqnames)
      },(err) => {
        console.log(err);
      });  
  }
}
</script>

<style>
/*左边设备样式*/
.equipment{
  border: 1px solid #107023;
  margin-top: 74px;
}

.eq_class > li {
  color: #107023;
  margin-left: 30px;
  margin-top: 10px;
  margin-bottom:10px;
}

.eq_name li {
  color: #18CA59;
  margin-left:30px;
}
</style>
