require(["../../requireconfig"],function(){require(["air","zepto","vue","vue-resource","layer","global","LArea","LAreaData1","LAreaData2"],function(e,t,n,o,a,i,s,l,r){({init:function(){var e=this;n.use(o),e.index=new n({el:"#app",data:{localsearch:"",map:"",zoom:12,marker:"",infoWin:"",bounds:"",config:{},areaStatus:"",isArea:!1,code:"",isAllProvince:"",isAllCity:"",satellite:[],secondGf:[],satelliteIds:[]},methods:{onLoad:function(){var e=this;e.map=new T.Map("mapDiv"),e.map.centerAndZoom(new T.LngLat(113.25723,23.12842),e.zoom),setTimeout(function(){$(".loading").hide()},500),e.config={pageCapacity:10,onSearchComplete:e.localSearchResult},e.localsearch=new T.LocalSearch(e.map,e.config)},search:function(){var e=this;console.log(document.getElementById("keyWord").value),e.localsearch.search(document.getElementById("keyWord").value,7)},localSearchResult:function(e){var t=this;switch(t.clearAll(),t.prompt(e),parseInt(e.getResultType())){case 1:t.pois(e.getPois());break;case 2:t.statistics(e.getStatistics());break;case 3:t.area(e.getArea())}},prompt:function(e){var t=e.getPrompt();if(t){for(var n="",o=0;o<t.length;o++){var a=t[o],i=a.type,s=a.admins,l=a.DidYouMean;if(1==i);else if(2==i)n+="<p>在<strong>"+s[0].name+"</strong>没有搜索到与<strong>"+e.getKeyword()+"</strong>相关的结果。<p>",l&&(n+="<p>您是否要找：<font weight='bold' color='#035fbe'><strong>"+l+"</strong></font><p>");else if(3==i)for(n+="<p style='margin-bottom:3px;'>有以下相关结果，您是否要找：</p>",o=0;o<s.length;o++)n+="<p>"+s[o].name+"</p>"}""!=n&&(document.getElementById("promptDiv").style.display="block",document.getElementById("promptDiv").innerHTML=n)}},pois:function(e){var t=this;if(e){for(var n=document.createElement("div"),o=[],a=0;a<e.length;a++)!function(a){var s=e[a].name,l=e[a].address,r=e[a].lonlat.split(" "),c=new T.LngLat(r[0],r[1]),d="地址:"+l,u=new T.Marker(c),h=u.getIcon();h.setIconUrl(i.markerUrl);var p=new T.Point(35,35);h.setIconSize(p),t.map.addOverLay(u),u.addEventListener("click",function(){t.showPosition(u,s,d)},this),o.push(c);var g=document.createElement("a");g.href="javascript://",g.innerHTML=s,t.map.removeOverLay(u),g.onclick=function(){document.getElementById("resultDiv").style.display="none",t.map.addOverLay(u),t.showPosition(u,s,d),t.map.panTo(c,12)},n.appendChild(g)}(a);t.map.setViewport(o),document.getElementById("searchDiv").appendChild(n),document.getElementById("resultDiv").style.display="block"}},showPosition:function(e,t){var n=this;n.infoWin&&(n.map.removeOverLay(n.infoWin),n.infoWin=null);var o="<h5>"+t+"</h5>";n.infoWin=new T.InfoWindow(o,new T.Point([0,0])),e.openInfoWindow(n.infoWin)},statistics:function(e){if(e){var t="",n="",o=e.priorityCitys;if(o){t+="在中国以下城市有结果<ul>";for(i=0;i<o.length;i++)t+="<li>"+o[i].name+"("+o[i].count+")</li>";t+="</ul>"}var a=e.allAdmins;if(a){n+="更多城市<ul>";for(var i=0;i<a.length;i++){n+="<li>"+a[i].name+"("+a[i].count+")";var s=a[i].childAdmins;if(s)for(var l=0;l<s.length;l++)n+="<blockquote>"+s[l].name+"("+s[l].count+")</blockquote>";n+="</li>"}n+="</ul>"}document.getElementById("statisticsDiv").style.display="block",document.getElementById("statisticsDiv").innerHTML=t+n}},area:function(e){var t=this;if(e){for(var n=[],o=e.points,a=0;a<o.length;a++){for(var i=[],s=o[a].region.split(","),l=0;l<s.length;l++){var r=s[l].split(" "),c=new T.LngLat(r[0],r[1]);i.push(c),n.push(c)}var d=new T.Polyline(i,{strokeColor:"blue",strokeWeight:3,strokeOpacity:1,strokeStyle:"dashed"});t.map.addOverLay(d)}t.map.setViewport(n)}},clearAll:function(){this.map.clearOverLays(),document.getElementById("searchDiv").innerHTML="",document.getElementById("resultDiv").style.display="none",document.getElementById("statisticsDiv").innerHTML="",document.getElementById("statisticsDiv").style.display="none",document.getElementById("promptDiv").innerHTML="",document.getElementById("promptDiv").style.display="none",document.getElementById("suggestsDiv").innerHTML="",document.getElementById("suggestsDiv").style.display="none",document.getElementById("lineDataDiv").innerHTML="",document.getElementById("lineDataDiv").style.display="none"},getMapBounds:function(){var e=this,t=e.map.getBounds(),n=t.getSouthWest(),o=t.getNorthEast();console.log(n);var a=o.getLat(),i=n.getLng(),s=n.getLat(),l=o.getLng(),r=o.getLat(),c=o.getLng(),d=n.getLat(),u=n.getLng();e.bounds={topLeftLatitude:a,topLeftLongitude:i,topRightLatitude:r,topRightLongitude:c,bottomRightLatitude:s,bottomRightLongitude:l,bottomLeftLatitude:d,bottomLeftLongitude:u},console.log("screen"),console.log(e.bounds)},getArea1:function(e){var t=this;e.stopPropagation(),console.log(e.currentTarget.className),console.log(e.target),$(e.currentTarget).addClass("on").siblings().removeClass("on"),console.log($(e.currentTarget)[0].className),console.log($(e.currentTarget).is(".current-area")),$(e.currentTarget).is(".current-area")?(t.areaStatus=0,t.isArea=!1,t.getMapBounds(),$("#areaName").hide()):(t.areaStatus=1,t.isArea=!0,$("#areaName").show(),$("#demo2").click(),$(".area_roll").children("div:first-child").css("display","none"))},getData:function(){var e=this,t=$(".begin").val(),n=$(".end").val();if(0==e.areaStatus)e.bounds;else $("#value2").val();return null==t||0==t.length?(i.popupMobile.msg("请选择开始日期"),!1):null==n||0==n.length?(i.popupMobile.msg("请选择截止日期"),!1):void 0},submit:function(e){var t=this;e.stopPropagation();var n,o,a,s=$(".begin").val(),l=$(".end").val();if(0==t.areaStatus){t.isArea=!1;t.bounds}else{t.isArea=!0;var r=$("#value2").val();console.log(r),console.log(t.code),n=r.substring(0,6),o=r.substring(7,13),a=r.substring(14,23),t.code=""!=a&&"000000"!=a?a:""!=o&&"000000"!=o?o:n}var c=$("#sliderValue").text();console.log(c.length),c=2==c.length?c.substring(-1,1):c.substring(-1,2);for(var d="",u=!1,h=!1,p=!1,g=!1,m=[],v=$(".tree_node_parent_checkbox:checked"),f=0;f<v.length;f++)if(d=$(v[f]).attr("value"),t.satelliteIds.push(d),"GF1"==d){u=!0;for(var y=$(v[f]).parents(".tree_node_parent1").siblings(".tree_node_child1").find(".tree_node_child_checkbox:checked"),_="",b=0;b<y.length;b++)_+=$(y[b]).attr("value")+",";(m=_.split(",")).pop(),console.log(m)}else"GF2"==d?h=!0:"GF3"==d?p=!0:"GF4"==d&&(g=!0);if(console.log("所有的卫星"),console.log(t.satelliteIds),null==s||0==s.length)return i.popupMobile.msg("请选择开始日期"),!1;if(null==l||0==l.length)return i.popupMobile.msg("请选择截止日期"),!1;if(null==d||0==d.length)return i.popupMobile.msg("请选择卫星及传感器"),!1;var k=t.bounds;k.cloudPercent=c,k.startTime=s+" 00:00:00",k.endTime=l+" 24:00:00",k.gf1_enable=u,k.gf2_enable=h,k.gf3_enable=p,k.gf4_enable=g,k.sensorIds_1=m,k.satelliteIds=t.satelliteIds,k.currentPage=1,k.pageSize=10,k.isArea=t.isArea,k.code=t.code,t.code==o?k.isAllCity=!0:t.code==n&&(k.isAllProvince=!0),console.log("code:"+t.code),console.log(encodeURI(JSON.stringify(k))),window.location.href="./resultList.html?data="+encodeURI(JSON.stringify(k))},isLogin:function(){var e=this,t={OPENID:"asasa11a1ss223412"},n=i.baseUrlfjh+"user/getUserInfo";e.$http.post(n,t).then(function(t){200==t.data.code?(e.userInfo=t.data,0==e.userInfo.statu?(i.popupMobile.msg("您还未登陆"),setTimeout(function(){window.location.href="../login.html"},1e3)):i.popupMobile.msg("登陆成功")):i.popupMobile.msg("登陆失败")},function(){i.popupMobile.msg("登陆失败")})},isShowResult:function(){document.getElementById("resultDiv").style.display="none"},getSatellite:function(){var e=this,t=i.baseUrlgch+"getAllSatelliteType";e.$http.get(t).then(function(t){if(200==t.data.code){var n=t.data.data,o=$.inArray("GF1",n);-1!=o&&n.splice(o,1),e.secondGf=n.splice(0,1),e.satellite=n}},function(){i.popupMobile.msg("获取失败")})}},filters:{formateMoney:function(e){return"￥ "+e.toFiexed(2)}},mounted:function(){var e=this;e.onLoad(),e.getMapBounds(),e.getSatellite(),$(".tree_node_child1").hide();var t=$(".push"),n=$("#aside");t.on("click",function(){n.addClass("active"),$("html").addClass("noscroll")}),$(".hideAside").on("click",function(){$("html").removeClass("noscroll"),n.removeClass("active")});var o=new Date,a=i.dateFormat(o.getTime(),"yyyy-MM-dd"),l=i.dateFormat(o.getTime()-7776e6,"yyyy-MM-dd");$("#begin").attr("value",l),$("#end").attr("value",a),e.map.addEventListener("zoomend",e.getMapBounds),e.map.addEventListener("moveend",e.getMapBounds),$(function(){var e=$("#sliderTrack"),t=$("#sliderHandler"),n=$("#sliderValue");console.log(e);var o=$("#sliderInner").width(),a=0,i=0;t.on("touchstart",function(e){a=parseInt(t.css("left"))*o/100,i=e.changedTouches[0].clientX}).on("touchmove",function(s){var l,r=a+s.changedTouches[0].clientX-i;r=r<0?0:r>o?o:r,l=parseInt(r/o*100),e.css("width",l+"%"),t.css("left",l+"%"),n.text(l+"%");n.text();s.preventDefault()})});var r=new s;r.init({trigger:"#demo1",valueTo:"#value1",keys:{id:"id",name:"name"},type:1,data:LAreaData}),r.value=[1,13,3];var c=new s;c.init({trigger:"#demo2",valueTo:"#value2",keys:{id:"value",name:"text"},type:2,data:[provs_data,citys_data,dists_data]}),c.value=[18,0,4],laydate.skin("molv"),laydate({elem:"#demo"}),laydate({elem:"#test1",format:"YYYY年MM月DD日",festival:!0,choose:function(e){alert("得到："+e)}}),laydate({elem:"#hello3",min:laydate.now(-1),max:laydate.now(1)}),$(function(){$(".tree_node_parent_checkbox").click(function(){var e=$(this).prop("checked"),t=$(this);if(e){var n=$(this).parents(".tree_node_parent1").siblings(".tree_node_child1");n.show(),n.find(".tree_node_child_checkbox").prop("checked",!0)}else $(this).parents(".tree_node_parent1").siblings(".tree_node_child1").hide(),t.parents(".tree_node_parent1").siblings(".tree_node_child1").find(".tree_node_child_checkbox").prop("checked",!1)}),$(".tree_node_child_checkbox").click(function(){var e=$(this),t=e.parents(".tree_node_child1").find(".tree_node_child_checkbox:checked").length;e.prop("checked")?1==t&&e.parents(".tree_node_child1").siblings(".tree_node_parent1").find(".tree_node_parent_checkbox").prop("checked",!0):0==t&&e.parents(".tree_node_child1").siblings(".tree_node_parent1").find(".tree_node_parent_checkbox").prop("checked",!1)})}),$(function(){$(".tree_node_parent_checkbox").click(function(){var e=$(this),t=($(this).prop("checked"),$(this).hasClass("check")),n=$(this).hasClass("weui-icon-success");$(this).removeClass("weui-icon-circle"),$(this).addClass("weui-icon-success"),console.log("ischeck1:"+n),console.log("ischeck:"+t);var o=$(this).siblings(".tree_node_child");t?(e.removeClass("check"),$(this).next().find(".tree_node_child_checkbox").removeClass("check")):(e.addClass("check"),$(this).next().find(".tree_node_child_checkbox").addClass("check"),o.show())}),$(".tree_node_child_checkbox").click(function(){$(this).parent().find(".check").length;var e=$(this);$(this).hasClass("check")?e.removeClass("check"):e.addClass("check"),e.parent().find(".check").length>=1?e.parent().prev().addClass("check"):e.parent().prev().removeClass("check")})})}})}}).init()})});