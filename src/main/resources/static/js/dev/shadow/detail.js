require(["../../requireconfig"],function(){require(["zepto","vue","vue-resource","layer","global","air"],function(t,e,i,o,a,n){({init:function(){var t=this;e.use(i),t.index=new e({el:"#app",data:{map:"",zoom:12,marker:"",infoWin:"",bounds:"",dataId:a.getUrl("dataId"),satelliteType:a.getUrl("satelliteType"),imgDetail:[],satelliteId:"",time:"",sensorId:"",cloundPercent:"",heightInPixels:"",bottomLeftLatitude:"",bottomLeftLongitude:"",bottomRightLatitude:"",bottomRightLongitude:"",topRightLatitude:"",topRightLongitude:"",topLeftLatitude:"",topLeftLongitude:"",LonAndLat:""},methods:{onLoad:function(t,e){var i=this;i.map=new T.Map("mapDiv"),i.map.centerAndZoom(new T.LngLat(t,e),12)},showSensor:function(){$(".sensor1").toggleClass("hideSensor").blur()},getDetail:function(){var t=this,e=a.baseUrlgch+"getImageByDataId?dataId="+t.dataId+"&satelliteType="+t.satelliteType;t.$http.get(e).then(function(e){if(200==e.data.code){setTimeout(function(){$(".detail-list").show()},800),t.imgDetail=e.data.data;var i=a.getPx(t.imgDetail.satelliteId,t.imgDetail.sensorId);t.heightInPixels=i.resolvingNum,t.sensorId=i.resolving;var o=t.imgDetail.satelliteId;"GF1"==o?t.satelliteId="高分一号":"GF2"==o?t.satelliteId="高分二号":"GF3"==o?t.satelliteId="高分三号":"GF4"==o&&(t.satelliteId="高分四号"),t.time=a.dateFormat(t.imgDetail.sceneDate,"yyyy-MM-dd"),t.cloundPercent=t.imgDetail.cloudPercent+"%",t.bottomLeftLatitude=t.imgDetail.bottomLeftLatitude,t.bottomLeftLongitude=t.imgDetail.bottomLeftLongitude,t.bottomRightLatitude=t.imgDetail.bottomRightLatitude,t.bottomRightLongitude=t.imgDetail.bottomRightLongitude,t.topRightLatitude=t.imgDetail.topRightLatitude,t.topRightLongitude=t.imgDetail.topRightLongitude,t.topLeftLatitude=t.imgDetail.topLeftLatitude,t.topLeftLongitude=t.imgDetail.topLeftLongitude,t.onLoad(t.bottomLeftLatitude,t.bottomLeftLongitude);var n=[];n.push(new T.LngLat(t.bottomRightLongitude,t.bottomRightLatitude)),n.push(new T.LngLat(t.bottomLeftLongitude,t.bottomLeftLatitude)),n.push(new T.LngLat(t.topLeftLongitude,t.topLeftLatitude)),n.push(new T.LngLat(t.topRightLongitude,t.topRightLatitude)),t.LonAndLat="("+t.bottomRightLongitude+","+t.bottomRightLatitude+"),("+t.bottomLeftLongitude+","+t.bottomLeftLatitude+"),("+t.topLeftLongitude+","+t.topLeftLatitude+"),("+t.topRightLongitude+","+t.topRightLatitude+")",console.log(t.LonAndLat),t.map.panTo(new T.LngLat(t.bottomRightLongitude,t.bottomRightLatitude)),t.map.setZoom(6);var d=new T.Polygon(n,{color:"red",weight:2,opacity:.3,fillColor:"#FFFFFF",fillOpacity:.5});t.map.addOverLay(d)}else a.popupMobile.msg("请求失败")},function(){a.popupMobile.msg("请求失败")}),setTimeout(function(){$(".loading").hide()},1e3)},showList:function(){$(".detail").fadeToggle(),$(".detail").css("opacity",.7),console.log($(".detail")[0].className)}},mounted:function(){this.getDetail()}})}}).init()})});