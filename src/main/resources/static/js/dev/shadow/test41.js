require(["../../requireconfig"],function(){require(["zepto","vue","vue-resource","layer","global","map"],function(n,e,i,o,t,a){({init:function(){var n=this;e.use(i),n.index=new e({el:"#app",data:{},methods:{onLoad:function(){var n=this;n.map=new T.Map("mapDiv"),n.map.centerAndZoom(new T.LngLat(116.40969,39.89945),12)}},mounted:function(){this.onLoad()}})}}).init()})});