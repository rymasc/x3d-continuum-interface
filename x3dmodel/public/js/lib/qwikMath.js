//qwikMath.js

var qwikMath = {

	dist: function dist(obj1, obj2){
		var x1 = obj1.getX();
		var y1 = obj1.getY();
		var z1 = obj1.getZ();
		var x2 = obj2.getX();
		var y2 = obj2.getY();
		var z2 = obj2.getZ();
		var ssx = (x2-x1)*(x2-x1);
		var ssy = (y2-y1)*(y2-y1);
		var ssz = (z2-z1)*(z2-z1);

		return Math.sqrt(ssx+ssy+ssz);
	},

	formatAngles: function formatAngles(angle) {
		if(angle >= 360){
			return Math.round(angle) - 360;
		} else if(angle <= -360){
			return Math.round(angle) + 360;
		} else{
			return Math.round(angle);
		}
	}

}
