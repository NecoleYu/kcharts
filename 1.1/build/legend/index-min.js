KISSY.add("gallery/kcharts/1.1/legend/index",function(f,l,n,k,p){function m(a){this._cfg=f.mix({themeCls:"ks-charts-legend",switchable:!0,css:{},x:0,y:0,layout:"horizontal",align:"center",verticalAlign:"bottom",evtBind:!1},a);this.init()}var d=f.all,g=f.Event;f.augment(m,{init:function(){var a=this._cfg;if(a.container&&(this.$ctn=d(a.container),!this.$ctn[0]))return;this.render()},render:function(){var a=this,b=a._cfg,c=b.chart;a.renderIconContainer();a.renderIcon();a.setStyle();b.evtBind&&c.on("afterRender",
function(){a.bindEvt()});f.log(a)},setStyle:function(){var a=this._cfg,b=a.x,c=a.y,e=a.align,h=a.verticalAlign,d=this.$legend.outerWidth()||this.$legend.width(),f=this.$legend.outerHeight()||this.$legend.height(),g=this.filterPx(this.$ctn.width()),k=this.filterPx(this.$ctn.height());switch(e){case "left":e=0;break;case "center":e=g/2-d/2;break;default:e=g-d}switch(h){case "bottom":h=k-f;break;case "middle":h=k/2-f/2;break;default:h=0}h+=this.filterPx(c);e+=this.filterPx(b);this.$legend.css({marginLeft:e,
marginTop:h}).css(a.css)},filterPx:function(a){return!a?"":(a+"").replace("px","")-0},renderIcon:function(){var a=this._cfg.chart,b,c,e;"linechart"==a.chartType?d(".legend-icon",this.$legend).each(function(h,d){var f=a._stocks[d];b=f.color;c=l(this[0]);e=f.type;c.path("M0,5L16,5").attr({stroke:b.DEFAULT,"stroke-width":2});switch(e){case "triangle":$stock=k.triangle(c,8,6,5);break;case "rhomb":$stock=k.rhomb(c,8,5,8,8);break;case "square":$stock=k.rhomb(c,8,5,8,8,45);break;default:$stock=c.circle(8,
5,3)}$stock.attr({fill:b.DEFAULT,stroke:b.DEFAULT})}):d(".legend-icon",this.$legend).each(function(h,d){b=a.color.getColor(d);c=l(this[0]);c.rect(0,0,10,8,2).attr({fill:b.DEFAULT,"stroke-width":"0px"})})},renderIconContainer:function(){var a=this._cfg,b=a.chart;this._len=0;this._html="<div class='"+a.themeCls+" "+a.themeCls+"-"+a.layout+"'><ul>";for(var c in b._datas.total)this._len++,this._html+=n("<li class="+(!1==b._cfg.series[c].isShow?"clearfix disable":"clearfix")+"><div class='legend-icon'></div><div class='legend-text'>{{text}}</div></li>").render(b._cfg.series[c]);
this._html+="</ul></div>";this.$legend=d(this._html).appendTo(this.$ctn);return this._html},show:function(){return this.$legend.show()},destroy:function(){g.detach(d("li",_cfg.container),"click");this.$ctn.html("")},bindEvt:function(){var a=this._cfg,b=a.chart,c=b.chartType,e=this.$ctn;a.switchable&&(g.detach(d("li",e),"click"),g.on(d("li",e),"click",function(a){var g=d(a.currentTarget).toggleClass("disable");a=f.indexOf(a.currentTarget,d("li",e));g.hasClass("disable")?("linechart"===c&&b.hideLine(a),
"barchart"===c&&b.hideBar(a),"scatterchart"===c&&b.hidePoints(a)):("linechart"===c&&b.showLine(a),"barchart"===c&&b.showBar(a),"scatterchart"===c&&b.showPoints(a))}),g.detach(d("li",e),"mouseenter"),g.on(d("li",e),"mouseenter",function(a){var g=d(a.currentTarget);a=f.indexOf(a.currentTarget,d("li",e));g.hasClass("disable")||"linechart"===c&&b.lineChangeTo(a)}))}});return m},{requires:["gallery/kcharts/1.1/raphael/index","gallery/template/1.0/index","gallery/kcharts/1.1/tools/graphtool/index","./assets/legend.css"]});
