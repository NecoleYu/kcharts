KISSY.add("gallery/kcharts/1.1/ratiochart/index",function(g,r,p,n){function m(a){this.init(a)}var q=p.all;g.augment(m,{version:"1.0",CONFIG:{},TEMPLATE:{START:'<div style="{{containerStyles}}">',END:"</div>",PERSON:"",ITEM:'<div style="overflow:hidden;position: relative; {{itemStyles}}"><div style="float:left;text-align:center; {{titleStyles}}">{{titleHTML}}</div><div style="float:left;position: relative;"><div style="{{backStyles}} position: absolute; top:0;left:0;"></div><div style="{{frontStyles}} position: absolute; top:0;left:0;"></div></div><div style="position: absolute; top:0;left:0; {{introStyles}}">{{introHTML}}</div></div>',
ITEM2:""},init:function(a){this.CONFIG=a;this.countCenter();var c=this.drawCol(this.CONFIG.colsData);this.paint(a.container,c)},countCenter:function(){var a=this,c=[],e="";cfg=a.CONFIG;cs=cfg.styles.containerStyles;is=cfg.styles.itemStyles;ts=cfg.styles.titleStyles;bs=cfg.styles.backStyles;fs=cfg.styles.frontStyles;ins=cfg.styles.introStyles;g.each(cfg.cols,function(h){var d="",e="",f="",g="",k="",l="",b;for(b in cs)d+=a.utils.parseCssName(b,cs[b]);for(b in is)e+=a.utils.parseCssName(b,is[b]);f+=
"line-height: "+ts.height+"px;";for(b in ts)f+=a.utils.parseCssName(b,ts[b]);for(b in bs)g+=a.utils.parseCssName(b,bs[b]);k+="width:"+bs.width*h.graph.per/100+"px;";for(b in fs)k+=a.utils.parseCssName(b,fs[b]);l+="top: "+(bs.height+10)+"px; left: "+ts.width+"px;";for(b in ins)l+=a.utils.parseCssName(b,ins[b]);for(b in h.title.styles)f+=a.utils.parseCssName(b,h.title.styles[b]);for(b in h.graph.styles)k+=a.utils.parseCssName(b,h.graph.styles[b]);for(b in h.intro.styles)l+=a.utils.parseCssName(b,h.intro.styles[b]);
c.push({containerStyles:d,itemStyles:e,titleStyles:f,backStyles:g,frontStyles:k,introStyles:l,titleHTML:h.title.text,introHTML:h.intro.text,person:20*h.graph.per/100})});for(var d in cs)e+=a.utils.parseCssName(d,cs[d]);a.TEMPLATE.PERSON='<div style="height: '+fs.height+"px; width: 12px;float:left; margin-right:15px; background:url(http://img04.taobaocdn.com/tps/i4/T1vUQ1XkJbXXcJuKk.-12-32.gif) 0 "+(fs.height-32)/2+'px no-repeat;"></div>';a.CONFIG.colsData=c;a.CONFIG.containerStyles=e},drawCol:function(a){var c=
this,e=c.CONFIG.type,d="";g.each(a,function(a){if(2==e){for(var g=a.person,m=c.TEMPLATE.PERSON,f="";0<g;)f+=m,g--;c.TEMPLATE.ITEM2='<div style="overflow:hidden;position: relative; {{itemStyles}}"><div style="float:left;text-align:center; {{titleStyles}}">{{titleHTML}}</div><div style="float:left;position: relative;overflow:hidden;">'+f+'</div><div style="position: absolute; top:0;left:0; {{introStyles}}">{{introHTML}}</div></div>';d+=(new n(c.TEMPLATE.ITEM2)).render(a)}else d+=(new n(c.TEMPLATE.ITEM)).render(a)});
return d},utils:{parseCssName:function(a,c){var e=/[A-Z]/;return a.match(/[A-Z]/)?(e=a.replace(e,"-"+a.match(/[A-Z]/).toString().toLowerCase()),""+e+": "+c+(isNaN(c)?"":"px")+";"):""+a+": "+c+(isNaN(c)?"":"px")+";"}},paint:function(a,c){var e=this.TEMPLATE;c=c||"";var d="",d=(new n(e.START)).render(this.CONFIG),d=d+c+e.END;q(a).html(d)}});return m},{requires:["ua","node","xtemplate"]});
