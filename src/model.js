// this is a module that contains most of the explorable specific code
// the "math" of the explorable, the model itself, without the elements
// of visualization which are done in viz.js

import fractals from "./fractals.js"
import {each,range,map,mean} from "lodash-es"
import {mean_points as center,anchor} from "./utils.js"
import {radio} from "./controls.js"

var state = {
	iteration:0, 
	points:[]
};

const initialize = () => {
	state.points=[];
	state.new_points_target=[];
	state.iteration=0;
	
	const F = fractals[radio.value()];
	each(F.axiom,p=>{
		state.points.push({x:p.x,y:p.y,state:p.state})
		state.new_points_target.push({x:p.x,y:p.y,state:p.state})
	})
};

const iterate  = () => {
 	const F = fractals[radio.value()];
	const m = F.M;
	
	state.iteration++;
	
	state.points = state.new_points_target;
	
	state.new_points_source = [].concat(...state.points.map(function(d,i){
			return d.state != 'E' ? anchor(state.points[i],state.points[i+1],m) : d
	}))

	state.new_points_target = [].concat(...state.points.map(function(d,i){
			return d.state != 'E' ? F.rule(state.points[i],state.points[i+1]) : d
	}))
	return(state.iteration>=F.K)
	
}

export {state,initialize,iterate}
