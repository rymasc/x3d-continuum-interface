//Color.js

function Color(string){
	var pos = string.split(" ");
	var counter = 0, flag = false;
	for (var i = 0; i < pos.length; i++) {
		if( isNumeric(pos[i]) ){
			counter++;
			switch(counter){
				case 1: this.r = +pos[i]; break;
				case 2: this.g = +pos[i]; break;
				case 3: this.b = +pos[i]; flag = true; break;
			}
			if(flag){
				break;
			}
		}
	}

	this.getR = function getR(){
		return this.r;
	}

	this.setR = function setR(r){
		this.r = r;
	}

	this.getG = function getG(){
		return this.g;
	}

	this.setG = function setG(g){
		this.g = g;
	}

	this.getB = function getB(){
		return this.b;
	}

	this.setB = function setB(b){
		this.b = b;
	}


}
