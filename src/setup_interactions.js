import * as ct from "./controls.js"
import {iterate,initialize} from "./simulation.js"


export default (display,controls,config) => {
		
		ct.radio.update(()=>{
 			controls.select("#button_play").transition(1000).style("opacity",null)
			controls.select("#button_play").style("pointer-events",null) 			
			initialize(display,config)
		})
		ct.reset.update(()=>{
 			controls.select("#button_play").transition(1000).style("opacity",null)
			controls.select("#button_play").style("pointer-events",null) 			
			initialize(display,config)
		})	
		ct.go.update(()=>{
			const steps = iterate(display,config);
			if(steps){
				controls.select("#button_play").transition(1000).style("opacity",0)
				controls.select("#button_play").style("pointer-events","none") 
			}
		}) 
	
}

