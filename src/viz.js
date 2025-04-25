import * as d3 from "d3"
import fractals from "./fractals.js"
import param from "./parameters.js"
import {state} from "./model.js"
import styles from "./styles.module.css"


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
	origin.selectAll("."+styles.curve).data([state.points]).enter().append("path")
		.attr("class",styles.curve)
		.attr("d",line)
};


const iterate = (display,config) => {
	
	const origin = display.select("#origin");	
	const tantor = origin.selectAll("."+styles.curve).attr("class",styles.curve_old)	
	const onk = origin.selectAll("."+styles.curve_new)
		.data([state.new_points_source]).enter().append("path")
		.attr("class",styles.curve_new)
		.attr("d",line)

	tantor.transition().duration(1000).style("opacity",0).remove()
	onk.data([state.new_points_target]).transition().duration(500).attr("d",line)
	.on("end", function() {
	       d3.select(this)
	         .attr("class", styles.curve);
	   });
	
}


export {initialize,iterate}
