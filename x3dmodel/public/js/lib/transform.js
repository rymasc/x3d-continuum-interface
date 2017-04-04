//transform.js

var transform = {
	createMatrix : function createMatrix(s, k, phi){

		var H3d = $M([
			[Math.cos(phi), -Math.sin(phi)*Math.cos(s*k),  Math.sin(phi)*Math.sin(s*k),  (1/k)*(Math.sin(phi)*(1-Math.cos(s*k)))],
			[Math.sin(phi),  Math.cos(phi)*Math.cos(s*k), -Math.cos(phi)*Math.sin(s*k), -(1/k)*(Math.cos(phi)*(1-Math.cos(s*k)))],
			[            0,                Math.sin(s*k),                Math.cos(s*k),                      (1/k)*Math.sin(s*k)],
			[            0,                            0,                            0,                                        1]
		]);

		return H3d;
	},


	kinematics : function kinematics(base, mid, tip){

		for (var i = 0; i < base.objs.length; i++) {
			var Hb = transform.createMatrix(base.d*(i+1), base.k, base.phi);
			base.objs[i].setX(Hb.e(1,4));
			base.objs[i].setY(Hb.e(2,4));
			base.objs[i].setZ(Hb.e(3,4));
		}


		for (var i = 0; i < mid.objs.length; i++) {
			var Hm = transform.createMatrix(mid.d*(i+1), mid.k, mid.phi);
			var m = Hb.multiply(Hm);
			var mres = m.minor(1,4,3,1);
			mid.objs[i].setX(mres.e(1,1));
			mid.objs[i].setY(mres.e(2,1));
			mid.objs[i].setZ(mres.e(3,1));

		}

		for (var i = 0; i < base.objs.length; i++) {
			var Ht = transform.createMatrix(tip.d*(i+1), tip.k, tip.phi);
			var t = Hb.multiply(Hm).multiply(Ht);
			var tres = t.minor(1,4,3,1);
			tip.objs[i].setX(tres.e(1,1));
			tip.objs[i].setY(tres.e(2,1));
			tip.objs[i].setZ(tres.e(3,1));

		}

	},


}
