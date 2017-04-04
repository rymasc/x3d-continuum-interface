//Section.js

//section max min
//  base
//   mid

function Section(type, anchorObj) {
	this.n =(document.querySelectorAll('transform').length -6) /3;
	this.type = type;
	this.objs = [];
	this.k = 0.0012;
	this.phi = 0;
	for (var i = 0; i < this.n; i++) {
		this.objs[i] = new x3dSphere(type+i);
	}

	this.anchor = anchorObj;

	this.startpt = this.objs[0];

	this.radius = this.objs[0].radius;

	this.getRadius = function getRadius() {
		this.radius;
	}

	this.setRadius = function setRadius(rad){
		for (var i = 0; i < this.objs.length; i++) {
			this.objs[i].radius = rad;
		}
		this.radius = rad;
	}

	this.color = this.objs[0].color;
	this.length = qwikMath.dist(this.objs[this.n-1], this.anchor.coords);
	this.d = this.length/this.n;

}
