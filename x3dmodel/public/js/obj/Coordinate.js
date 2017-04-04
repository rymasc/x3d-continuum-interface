//Coordinate.js

function Coordinate(string){
	var pos = string.split(" ");
	var counter = 0, flag = false;
	for (var i = 0; i < pos.length; i++) {
		if( isNumeric(pos[i]) ){
			counter++;
			switch(counter){
				case 1: this.x = +pos[i]; break;
				case 2: this.y = +pos[i]; break;
				case 3: this.z = +pos[i]; flag = true; break;
			}
			if(flag){
				break;
			}
		}
	}

	this.getX = function getX(){
		return this.x;
	}

	this.setX = function setX(x){
		this.x = x;
	}

	this.getY = function getY(){
		return this.y;
	}

	this.setY = function setY(y){
		this.y = y;
	}

	this.getZ = function getZ(){
		return this.z;
	}

	this.setZ = function setZ(z){
		this.z = z;
	}


}

function isNumeric(string){
	if(strcmp(string, ""))
		return 0;
	return 1;
}

function strcmp(str1, str2){
	if(!str1.localeCompare(str2))  //localeCompare returns 0 if exact match
		return true;
	return false;
}
