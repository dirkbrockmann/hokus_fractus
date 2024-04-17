// this is just a collection of utility functions that are frequently used in some explorables

import * as d3 from "d3"
import {map, replace, capitalize, each, has, isBoolean, pickBy, toPairs, mean, range } from "lodash-es"

const add_id_label = (x) => map(toPairs(x), 	
	d => {

		d[1]["id"]=d[0]; 
		if(!has(d[1],"label")) {
			d[1]["label"]=replace(capitalize(d[0]),/_/g," ")			
		} 
	});
	

const toArray = (x) => map(toPairs(x),d=>d[1]);

const add_widget = (p,w) => each(p,(v,i) => v["widget"]=w[i]);	

const get_variables = (p) => pickBy(p, v =>  has(v, "range"))  
const get_booleans = (p) => pickBy(p, v =>  isBoolean(v.default))  
const get_choices = (p) => pickBy(p, v =>  has(v, "choices"))  

const deg2rad = d3.scaleLinear().domain([0,360]).range([0,2*Math.PI]);
const rad2deg = d3.scaleLinear().range([0,360]).domain([0,2*Math.PI]);

const dist = (a,b) => {
	const dx = (a.x-b.x);
	const dy = (a.y-b.y);
	return Math.sqrt(dx*dx + dy*dy);
}

function rotscale(v1,v2,angle,scale){
	var a = Math.sin(angle/180*Math.PI), b = Math.cos(angle/180*Math.PI);
	var dx = (v2.x-v1.x);
	var dy = (v2.y-v1.y);
	
	return {x: scale*( b * dx - a * dy  ), y: scale*( a * dx + b * dy ), state: v1.state }
}

function add_points(v1,v2){
	return {x:v1.x+v2.x,y:v1.y+v2.y,state:v1.state}
}

function mean_points(v1,v2){
	return {x:0.5*(v1.x+v2.x),y:0.5*(v1.y+v2.y),state:v1.state}
}

function anchor(p1,p2,m){
			var v1 = p1;
			var me = mean_points(p1,p2);		
			return range(m).map(function(d,i){return i==0 ? v1 : me});
}

export {add_points,mean_points,anchor,rotscale,toArray,add_id_label,add_widget,get_variables,get_booleans,get_choices,deg2rad,rad2deg,dist}