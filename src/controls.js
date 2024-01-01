import * as widgets from "d3-widgets"
import {range,map} from "lodash-es"
import fractals from "./fractals.js"
import cfg from "./config.js"


const fractal = {
	choices: map(fractals,a=>a.name),
	default:0,
	id:"fractals",
	label:"Fractals"
}

const radio = widgets.radio()
				 .choices(fractal.choices)
				 .id(fractal.id)
				 .value(fractal.default)
				 .orientation(cfg.widgets.radio_orientation)
				 .labelposition(cfg.widgets.radio_label_position)
				 .buttonsize(cfg.widgets.radio_buttonsize)
				 .fontsize(cfg.widgets.fontsize)

const go = widgets.button().actions(["play"]).id("play")
const reset = widgets.button().actions(["rewind"])
const buttons = [go,reset];


export default (controls,grid)=>{
	
	
 	const ra_pos=grid.position(cfg.widgets.radio_anchor.x,cfg.widgets.radio_anchor.y);
	
	radio.position(ra_pos)
 		.size(cfg.widgets.radio_size).shape(cfg.widgets.radio_shape)

	reset.position(grid.position(cfg.widgets.resetbutton_anchor.x,cfg.widgets.resetbutton_anchor.y))
 		.size(cfg.widgets.resetbutton_size);
	
 	go.position(grid.position(cfg.widgets.playbutton_anchor.x,cfg.widgets.playbutton_anchor.y))
 		.size(cfg.widgets.playbutton_size);

 	reset.position(grid.position(cfg.widgets.resetbutton_anchor.x,cfg.widgets.resetbutton_anchor.y));


	controls.selectAll(null).data(buttons).enter().append(widgets.widget);
	controls.selectAll(null).data([radio]).enter().append(widgets.widget)

}


export {go,reset,fractal,radio}


