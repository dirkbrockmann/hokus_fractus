import {rotscale, add_points as add} from "./utils.js"

export default [
	{
		name:"Sierpinksi Dreieck",
		M:3,
		K:10,
		scale:1/2,
		states:['A','B'],
		axiom:[
			{x:-0.5,y:-0.5+(1-Math.sqrt(3)/2)/2,state:'A'},
			{x:0.5,y:-0.5+(1-Math.sqrt(3)/2)/2,state:'E'}
		],
		rule: function(p1,p2){
			var v1,v2,v3;
			if (p1.state == 'A'){
				v1 = p1;
				v2 = add(v1,rotscale(p1,p2,60,this.scale));
				v3 = add(v2,rotscale(p1,p2,0,this.scale));
				v1.state='B';
				v2.state='A';
				v3.state='B';
			} else {
				v1 = p1;
				v2 = add(v1,rotscale(p1,p2,-60,this.scale));
				v3 = add(v2,rotscale(p1,p2,0,this.scale));
				v1.state='A';
				v2.state='B';
				v3.state='A';

			}
			return [v1,v2,v3]
		}
	},
	{
		name:"Koch Schneeflocke",
		M:4,
		K:7,
		scale:1/3,
		states:['A'],
		axiom:[
			{x:-0.5/2*Math.sqrt(3),y:-1/4,state:'A'},
			{x:0.5/2*Math.sqrt(3),y:-1/4,state:'A'},
			{x:0,y:(3/4-1/4),state:'A'},			
			{x:-0.5/2*Math.sqrt(3),y:-1/4,state:'E'}			
		],
		rule: function(p1,p2){
			var v1 = p1;
			var v2 = add(v1,rotscale(p1,p2,0,this.scale));
			var v3 = add(v2,rotscale(p1,p2,-60,this.scale));
			var v4 = add(v3,rotscale(p1,p2,60,this.scale));
			return [v1,v2,v3,v4]
		}
	},
	{
		name:"Anti Koch Schneeflocke",
		M:4,
		K:7,
		scale:1/3,
		states:['A'],
		axiom:[
			{x:-0.5,y:-1/2+(1-Math.sqrt(3)/2)/2,state:'A'},
			{x:0.5,y:-1/2+(1-Math.sqrt(3)/2)/2,state:'A'},
			{x:0,y:Math.sqrt(3)/2-1/2+(1-Math.sqrt(3)/2)/2,state:'A'},			
			{x:-0.5,y:-1/2+(1-Math.sqrt(3)/2)/2,state:'E'}			
		],
		rule: function(p1,p2){
			var v1 = p1;
			var v2 = add(v1,rotscale(p1,p2,0,this.scale));
			var v3 = add(v2,rotscale(p1,p2,60,this.scale));
			var v4 = add(v3,rotscale(p1,p2,-60,this.scale));
			return [v1,v2,v3,v4]
		}
	},
	
	{
		name:"Drachenkurve",
		M:2,
		K:15,
		scale:1/Math.sqrt(2),
		states:['A','B'],
		axiom:[
			{x:-1/3+1/18,y:-1/9,state:'A'},
			{x:1/3+1/18,y:-1/9,state:'E'}
		],
		rule: function(p1,p2){
			var v1,v2;
			if (p1.state == 'A'){
				v1 = p1;
				v2 = add(v1,rotscale(p1,p2,45,this.scale));
				v1.state='A';
				v2.state='B';
			} else {
				v1 = p1;
				v2 = add(v1,rotscale(p1,p2,-45,this.scale));
				v1.state='A';
				v2.state='B';
			}
			return [v1,v2]
		}
	},
	{
		name:"Terdrachenkurve",
		M:3,
		K:9,
		scale:1/Math.sqrt(3),
		states:['A'],
		axiom:[
			{x:-0.42,y:0,state:'A'},
			{x:0.42,y:0,state:'E'}
		],
		rule: function(p1,p2){
			var v1,v2,v3;
				v1 = p1;
				v2 = add(v1,rotscale(p1,p2,-30,this.scale));
				v3 = add(v2,rotscale(p1,p2,90,this.scale));
				
			return [v1,v2,v3]
		}
	},
	{
		name:"Goldener Drache",
		M:2,
		K:15,
		scale:1/2,
		states:['A','B'],
		axiom:[
			{x:-1/3+1/18,y:-1/9,state:'A'},
			{x:1/3+1/18,y:-1/9,state:'E'}
		],
		rule: function(p1,p2){
			var v1,v2;
			if (p1.state == 'A'){
				v1 = p1;
				v2 = add(v1,rotscale(p1,p2,32.893818,0.74274));
				v1.state='A';
				v2.state='B';
			} else {
				v1 = p1;
				v2 = add(v1,rotscale(p1,p2,-46.98598225,0.74274*0.74274));
				v1.state='A';
				v2.state='B';
			}
			return [v1,v2]
		}
	}
]