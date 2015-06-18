define("meteo",["SensorWidget","locale-date","bootstrap"],function(e,r){"use strict";r.utc(!1),r.locale("es");var t={service:function(){return"http://sensors.portdebarcelona.cat/sos/json"},offering:function(e){return"http://sensors.portdebarcelona.cat/def/weather/offerings#"+e},feature:function(e){return"http://sensors.portdebarcelona.cat/def/weather/features#"+e},property:function(e){return"http://sensors.portdebarcelona.cat/def/weather/properties#"+e}},o=new Date,n=new Date(o.getTime()-72e5),i=new Date(o.getTime()-108e5),a=new Date(o.getTime()-612e5),p=new Date(o.getTime()-864e5),s=$(".active a").text();switch(s){case"Sirena":new e("bearing",{service:t.service(),offering:t.offering("1m"),feature:t.feature("02"),property:t.property("31"),refresh_interval:15},document.querySelector(".sirena .bearing")),new e("thermometer",{service:t.service(),offering:t.offering("1m"),feature:t.feature("02"),property:t.property("32"),refresh_interval:15},document.querySelector(".sirena .meteo-thermometer")),new e("timechart",{title:"Velocitat Vent",service:t.service(),offering:t.offering("10m"),features:[t.feature("02")],properties:[t.property("30M"),t.property("30")],time_start:p.toISOString().substring(0,19)+"Z",time_end:o.toISOString().substring(0,19)+"Z"},document.querySelector(".sirena .timechart")),new e("windrose",{title:"Rosa vents últimes 3h",subtitle:"Sirena, mostres minutals",service:t.service(),offering:t.offering("1m"),feature:t.feature("02"),properties:[t.property("30"),t.property("31")],time_start:i.toISOString().substring(0,19)+"Z",time_end:o.toISOString().substring(0,19)+"Z",refresh_interval:120},document.querySelector(".sirena .windrose")),new e("table",{title:"Data Table",service:t.service(),offering:t.offering("30m"),feature:t.feature("02"),properties:[t.property("30"),t.property("30M"),t.property("31"),t.property("32"),t.property("33"),t.property("35"),t.property("36"),t.property("34")],time_start:a.toISOString().substring(0,19)+"Z",time_end:o.toISOString().substring(0,19)+"Z"},document.querySelector(".sirena .tablex"));break;case"XMVQA":new e("bearing",{title:"Sirena",service:t.service(),offering:t.offering("1m"),feature:t.feature("02"),property:t.property("31"),refresh_interval:15},document.querySelector(".xmvqa .left .bearing")),new e("panel",{title:"Dades minutals",service:t.service(),offering:t.offering("1m"),feature:t.feature("02"),properties:[t.property("30"),t.property("31"),t.property("32"),t.property("33"),t.property("34"),t.property("35"),t.property("36")],refresh_interval:15},document.querySelector(".xmvqa .left .panel-10m")),new e("timechart",{title:"Velocitat Vent",service:t.service(),offering:t.offering("10m"),features:[t.feature("02")],properties:[t.property("30")],time_start:n.toISOString().substring(0,19)+"Z",time_end:o.toISOString().substring(0,19)+"Z"},document.querySelector(".xmvqa .left .timechart")),new e("panel",{title:"Darrers valors 30-minutals",service:t.service(),offering:t.offering("30m"),feature:t.feature("02"),properties:[t.property("30"),t.property("31"),t.property("32"),t.property("33"),t.property("34"),t.property("35"),t.property("36")],refresh_interval:120},document.querySelector(".xmvqa .left .panel-30m"));var f={"01":"Dispensari",P4:"Dic Sud","03":"Adossat",P6:"Contradic",P3:"Unitat Mobil",P5:"Dàrsena Sud B",10:"ZAL2"};for(var l in f)new e("bearing",{title:f[l],service:t.service(),offering:t.offering("1m"),feature:t.feature(l),property:t.property("31"),refresh_interval:15},document.querySelector(".xmvqa .x"+l+" .bearing")),new e("panel",{title:"Dades minutals",service:t.service(),offering:t.offering("1m"),feature:t.feature(l),properties:[t.property("30"),t.property("31"),t.property("32"),t.property("33"),t.property("34"),t.property("35"),t.property("36")],refresh_interval:15},document.querySelector(".xmvqa .x"+l+" .panel"));break;case"Torre Control":new e("map",{service:t.service(),offering:t.offering("30m"),features:[t.feature("P4")],maxInitialZoom:12},document.querySelector(".torrecontrol .p4 .map")),new e("bearing",{service:t.service(),offering:t.offering("1m"),feature:t.feature("P4"),property:t.property("31"),refresh_interval:15},document.querySelector(".torrecontrol .p4 .bearing")),new e("panel",{title:"Dades minutals",service:t.service(),offering:t.offering("1m"),feature:t.feature("P4"),properties:[t.property("31"),t.property("30")],refresh_interval:15},document.querySelector(".torrecontrol .p4 .panel-10m")),new e("panel",{title:"Dades 30-minutals",service:t.service(),offering:t.offering("30m"),feature:t.feature("P4"),properties:[t.property("31"),t.property("30")],refresh_interval:120},document.querySelector(".torrecontrol .p4 .panel-30m")),new e("map",{service:t.service(),offering:t.offering("30m"),features:[t.feature("02")],maxInitialZoom:12},document.querySelector(".torrecontrol .x02 .map")),new e("bearing",{service:t.service(),offering:t.offering("1m"),feature:t.feature("02"),property:t.property("31"),refresh_interval:120},document.querySelector(".torrecontrol .x02 .bearing")),new e("panel",{title:"Dades minutals",service:t.service(),offering:t.offering("1m"),feature:t.feature("02"),properties:[t.property("31"),t.property("30")],refresh_interval:15},document.querySelector(".torrecontrol .x02 .panel-10m")),new e("panel",{title:"Dades 30-minutals",service:t.service(),offering:t.offering("30m"),feature:t.feature("02"),properties:[t.property("31"),t.property("30")],refresh_interval:120},document.querySelector(".torrecontrol .x02 .panel-30m")),new e("map",{service:t.service(),offering:t.offering("30m"),features:[t.feature("03")],maxInitialZoom:12},document.querySelector(".torrecontrol .x03 .map")),new e("bearing",{service:t.service(),offering:t.offering("1m"),feature:t.feature("03"),property:t.property("31"),refresh_interval:15},document.querySelector(".torrecontrol .x03 .bearing")),new e("panel",{title:"Dades minutals",service:t.service(),offering:t.offering("1m"),feature:t.feature("03"),properties:[t.property("31"),t.property("30")],refresh_interval:15},document.querySelector(".torrecontrol .x03 .panel-10m")),new e("panel",{title:"Dades 30-minutals",service:t.service(),offering:t.offering("30m"),feature:t.feature("03"),properties:[t.property("31"),t.property("30")],refresh_interval:120},document.querySelector(".torrecontrol .x03 .panel-30m"));break;case"Data Browser":var c=["01","02","03","10","P1","P3","P4","P5","P6","P7"],u=["01 - Dispensari","02 - Sirena","03 - Adossat","10 - ZAL2","P1 - ESCU","P3 - Unitat Mobil","P4 - Dic Sud","P5 - Dàrsena sud B","P6 - Contradic","P7 - Torre Control"],m=["1m","10m","30m"],g=["Minutals","10 minutals","30 minutals"],v=$("#item-template").html(),y="";for(var d in c){var h=v.replace(/\{\{id}}/g,c[d]);h=h.replace(/\{\{title}}/g,u[d]),y+=h}$(".databrowser").html(y),$(".panel-collapse").on("show.bs.collapse",function(){$(this).parent().removeClass("panel-default").addClass("panel-primary");for(var r in m){var o=this.id,n=m[r],i=g[r],a=$(this).find(".x"+n)[0];a.children.length||new e("panel",{title:i,service:t.service(),offering:t.offering(n),feature:t.feature(o),properties:[],refresh_interval:60},a)}}),$(".panel-collapse").on("hide.bs.collapse",function(){$(this).parent().removeClass("panel-primary").addClass("panel-default")}),$(".panel").hover(function(){$(this).removeClass("panel-default").addClass("panel-primary")},function(){$(this).find(".in").length||$(this).find(".collapsing").length||$(this).removeClass("panel-primary").addClass("panel-default")})}}),requirejs(["meteo"]);