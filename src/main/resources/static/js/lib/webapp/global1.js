define(["layer","zepto"],function(t,e){var n={baseUrl:"http://gaofen.iask.in/gaofen/",baseUrlfjh:"http://gaofen.iask.in/gaofen/",baseUrlgch:"http://gaofen.iask.in/gaofen/",imgUrl:"http://gaofen.iask.in/gaofen/",popupMobile:{close:function(){t.closeAll()},msg:function(e,n){this.close(),t.open({content:e,skin:"msg",time:2})},dialog:function(e){this.close(),t.open({content:"是否确定取消订单",btn:["是","否"],yes:function(e){location.reload(),t.close(e)}})},dialog2:function(e){this.close(),t.open(e)},loading:function(){t.open({type:2,content:"加载中"})}},getUrlData:function(){var t=window.location.href;return t=t.substr(t.indexOf("?")+1),JSON.parse(decodeURI(t.substr(t.indexOf("=")+1)))},getUrl:function(t){var e=new RegExp("(^|&)"+t+"=([^&]*)(&|$)"),n=window.location.search.substr(1).match(e);return null!=n?decodeURI(n[2]):null},dateFormat:function(t,e){var n=t?new Date(Number(t)):new Date,o=e||"yyyy-MM-dd hh:mm";return n.format(o)},init:function(){Date.prototype.format||(Date.prototype.format=function(t){var e={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length)));for(var n in e)new RegExp("("+n+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[n]:("00"+e[n]).substr((""+e[n]).length)));return t})}};return n.init(),window._g_=n,n});