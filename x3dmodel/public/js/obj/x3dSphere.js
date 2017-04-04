//x3dSphere.js

function x3dSphere(id) {
	this.id = "#"+id;
	this.position = $(this.id).attr('translation');
	this.coords = new Coordinate(this.position);
	this.radius = Number($(this.id).children().children("sphere").attr('radius'));
	this.color = new Color($(this.id).children().children("appearance").children().attr('diffuseColor'));

	this.getPosition = function getPosition(){
		return this.position;
	}

	this.setPosition = function setPosition(x,y,z){
		this.coords.setX(x);
		this.coords.setY(y);
		this.coords.setZ(z);
		this.position = this.coords.x + " " + this.coords.y +  " " + this.coords.z;
		$(this.id).attr('translation', this.position);
	}

	this.getX = function getX(){
		return this.coords.x;
	}

	this.setX = function setX(x){
		this.coords.setX(x);
		this.position = this.coords.x + " " + this.coords.y +  " " + this.coords.z;
		$(this.id).attr('translation', this.position);
	}

	this.addX = function addX(x){
		this.coords.setX(this.coords.x+x);
		this.position = this.coords.x + " " + this.coords.y +  " " + this.coords.z;
		$(this.id).attr('translation', this.position);
	}

	this.getY = function getY(){
		return this.coords.y;
	}

	this.setY = function setY(y){
		this.coords.setY(y);
		this.position = this.coords.x + " " + this.coords.y +  " " + this.coords.z;
		$(this.id).attr('translation', this.position);
	}

	this.addY = function addY(y){
		this.coords.setY(this.coords.y+y);
		this.position = this.coords.x + " " + this.coords.y +  " " + this.coords.z;
		$(this.id).attr('translation', this.position);
	}

	this.getZ = function getZ(){
		return this.coords.z;
	}

	this.setZ = function setZ(z){
		this.coords.setZ(z);
		this.position = this.coords.x + " " + this.coords.y +  " " + this.coords.z;
		$(this.id).attr('translation', this.position);
	}

	this.addZ = function addZ(z){
		this.coords.setZ(this.coords.z+z);
		this.position = this.coords.x + " " + this.coords.y +  " " + this.coords.z;
		$(this.id).attr('translation', this.position);
	}

}
