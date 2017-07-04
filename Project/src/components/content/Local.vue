<!-- 本地设备信息 -->
<template>
  <div class="list_width">
    <div class="info basic-info">
    	<p>基本信息</p>
    	<div class="row">
    		<label class="col-md-2 col-sm-2 col-xs-4" for="eq-name">设备名称</label>
    		<input class="col-md-9 col-sm-9 col-xs-7" type="text" id="eq-name">
    	</div>
    	<div class="row">
    		<label class="col-md-2 col-sm-2 col-xs-4" for="eq-state">设备状态</label>
    		<input class="col-md-9 col-sm-9 col-xs-7" type="text" id="eq-state">
    	</div>
    	<div class="row">
    		<label class="col-md-2 col-sm-2 col-xs-4" for="fi-version">固件版本</label>
    		<input class="col-md-9 col-sm-9 col-xs-7" type="text" id="fi-version">
    	</div>
    </div>

    <div class="info">
    	<p>工作参数</p>
    	<div class="row">
    		<label class="col-md-2 col-sm-2 col-xs-4" for="net">网络</label>
    		<input class="col-md-9 col-sm-9 col-xs-7" type="text" id="eq-name">
    	</div>
    	<div class="row">
    		<label class="col-md-2 col-sm-2 col-xs-4" for="eq-state">本级地址(0x)</label>
    		<input class="col-md-9 col-sm-9 col-xs-7" type="text" id="eq-state">
    	</div>
    	<div class="row">
    		<label class="col-md-2 col-sm-2 col-xs-4" for="fi-version">目标地址(0x)</label>
    		<input class="col-md-9 col-sm-9 col-xs-7" type="text" id="fi-version">
    	</div>
    	<div class="row">
    		<label class="col-md-2 col-sm-2 col-xs-4" for="work-type">工作类型</label>
	    	<select class="col-md-9 col-sm-9 col-xs-7" name="work-type" id="work-type">
	    		<option value="host-mode"></option>
	    	</select>
    	</div>
    </div>

    <div class="info">
    	<p>串口参数</p>
    	<div class="row">
    		<label class="col-md-2 col-sm-2 col-xs-4" for="baud-rate">波特率</label>
	    	<select class="col-md-9 col-sm-9 col-xs-7" name="baud-rate" id="baud-rate">
	    		<option value="baud"></option>
	    	</select>
    	</div>
    	<div class="row">
    		<label class="col-md-2 col-sm-2 col-xs-4" for="data-bits">数据位</label>
	    	<select class="col-md-9 col-sm-9 col-xs-7" name="data-bits" id="data-bits">
	    		<option value="data"></option>
	    	</select>
    	</div>
    	<div class="row">
    		<label class="col-md-2 col-sm-2 col-xs-4" for="check-digit">校验位</label>
	    	<select class="col-md-9 col-sm-9 col-xs-7" name="check-digit" id="check-digit">
	    		<option value="check"></option>
	    	</select>
    	</div>
    	<div class="row">
    		<label class="col-md-2 col-sm-2 col-xs-4" for="stop-bit">停止位</label>
	    	<select class="col-md-9 col-sm-9 col-xs-7" name="stop-bit" id="stop-bit">
	    		<option value="stop"></option>
	    	</select>
    	</div>
    </div>

    <div class="info">
    	<p>通信参数</p>
    	<div class="row">
    		<label class="col-md-2 col-sm-2 col-xs-4" for="rate">速率</label>
	    	<select class="col-md-9 col-sm-9 col-xs-7" name="rate" id="rate">
	    		<option value="rates"></option>
	    	</select>
    	</div>
    	<div class="row">
    		<label class="col-md-2 col-sm-2 col-xs-4" for="send-power">发送功率</label>
	    	<select class="col-md-9 col-sm-9 col-xs-7" name="send-power" id="send-power">
	    		<option value="send"></option>
	    	</select>
    	</div>
    	<div class="row">
    		<label class="col-md-2 col-sm-2 col-xs-4" for="work-fre">工作频率</label>
	    	<select class="col-md-9 col-sm-9 col-xs-7" name="work-fre" id="work-fre">
	    		<option value="work"></option>
	    	</select>
    	</div>
    </div>

    <div class="info">
    	<p>其他参数</p>
    	<div class="row">
    		<label class="col-md-2 col-sm-2 col-xs-4" for="frame-spacing">分帧间隔</label>
    		<input class="col-md-9 col-sm-9 col-xs-7" type="text" id="frame-spacing">
    	</div>
    	<div class="row">
    		<label class="col-md-2 col-sm-2 col-xs-4" for="frame-length">分帧长度</label>
    		<input class="col-md-9 col-sm-9 col-xs-7" type="text" id="from-length">
    	</div>
    	<div class="row">
    		<label class="col-md-2 col-sm-2 col-xs-4" for="send-time">发送重试次数</label>
    		<input class="col-md-9 col-sm-9 col-xs-7" type="text" id="send-time">
    	</div>
    	<div class="row">
    		<label class="col-md-2 col-sm-2 col-xs-4" for="send-interval">发送时间间隔</label>
    		<input class="col-md-9 col-sm-9 col-xs-7" type="text" id="send-interval">
    	</div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
.list_width {
    width: 65%;
    margin: 0 auto; 
}

/*为每个信息模块设置样式*/
.info {
    border-radius: 7px;
    box-shadow: inset -2px -2px 0 rgba( 255, 255, 250, 0.6), 
                inset -3px -3px 0 rgba( 45,107,198, 0.2),
                inset 2px 2px 0 rgba( 255, 255, 250, 0.6), 
                inset 3px 3px 0 rgba( 45,107,198, 0.2);
	margin-bottom: 20px;
    padding-bottom: 20px;
}

/*设置每个信息模块标题样式*/
.info p {
    font-size: 18px;
    font-weight: 600;
    margin-left: 40px;
}

/*设置每个输入框的间距*/
.info div {
	margin-bottom: 10px;
}

.info label {
    font-size: 16px;
    text-align: right;  /*label文字右对齐*/
    line-height: 40px;
    padding-right: 10px;
}

.info input, .info select{
	height: 40px;
    border:1px solid #999;
    border-radius: 3px;
    box-shadow :0 0 4px rgba(0,0,0,.2);
}

/*设置到与导航栏的距离*/
.basic-info {
	margin-top: 100px;
}

</style>
