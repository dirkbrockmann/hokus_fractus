// This is the core module for the implementation of the visualization
// It's analogous to model.js in terms of its relation to other modules,
// e.g. it reads the parameters and provides initialize, go and update functions
// to simulation.js where they get bundled with the analogous functions in model.js
// the observables and variables exported in model.js, e.g. the quantities
// used for the actual visualizations are also imported to viz.js

import * as d3 from "d3"
import fractals from "./fractals.js"
import param from "./parameters.js"
import {state} from "./model.js"


const X = d3.scaleLinear().domain(param.xrange);
const Y = d3.scaleLinear().domain(param.yrange);
const line = d3.line().x(d=>X(d.x)).y(d=>Y(d.y))

const initialize = (display,config) => {
	
	const W = config.display_size.width;
	const H = config.display_size.height;
	
	X.range([0,W]);
	Y.range([H,0]);

	display.selectAll("#origin").remove();
	const origin = display.append("g").attr("id","origin")
	origin.selectAll(".curve").data([state.points]).enter().append("path")
		.attr("class","curve")
		.attr("d",line)
		.style("stroke","black")
		.style("stroke-width","2px")
		.style("fill","none")
};


const iterate = (display,config) => {
	
	const origin = display.select("#origin");
	
	const tantor = origin.selectAll(".curve").attr("class","curve_old")

	
	const onk = origin.selectAll(".curve").data([state.new_points_source]).enter().append("path")
		.attr("class","curve")
		.attr("d",line)
		.style("stroke","darkred")
		.style("stroke-width","1px")
		.style("fill","none")

	tantor.style("stroke","grey");
	tantor.transition().duration(1000).style("opacity",0).remove()

	
	onk.data([state.new_points_target]).transition().duration(500).attr("d",line)
		.transition().style("stroke","black").style("stroke-width","1px")
	
}


export {initialize,iterate}
