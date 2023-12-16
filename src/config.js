// the global properties of the explorable, widget geometries etc. depending on the choice and application
// you are free to define new variables and properties for later access and for setting up the explorable
// the only place this is needed is for setting up the interactions in setup_interactions.js and in
// controls.js

export default { 
	widgets:{
		fontsize:20,
		playbutton_size: 120,
		playbutton_anchor:{x:3,y:3},
		resetbutton_size: 80,
		resetbutton_anchor:{x:3,y:7},
		radio_anchor:{x:6,y:2},
		radio_size:320,
		radio_orientation:"vertical",
		radio_label_position:"right",
		radio_shape:"circ",
		radio_buttonsize:30,
	}
}