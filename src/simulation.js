// this connects the model and the visualization. For each we have three categories of events
// 1. initialization, 2. update, 3. iteration
// this is used by index.js, e.g. to initialize the explorable

import {initialize as model_init, iterate as model_iterate} from "./model.js"
import {initialize as visual_init, iterate as visual_iterate} from "./viz.js"

function iterate (display,config) {
	const steps = model_iterate();
	visual_iterate(display,config);
	return steps;
};

function initialize (display,config) {	
	model_init();
	visual_init(display,config); 
};


export {iterate,initialize}