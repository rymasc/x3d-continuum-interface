//Octarm.js

function Octarm() {
	this.anchor = new x3dSphere('a');
	this.base = new Section("b", this.anchor);
	this.mid = new Section("m", this.base.objs[this.base.n-1]);
	this.tip = new Section("t", this.mid.objs[this.mid.n-1]);
	this.n = this.base.n; //may need to be removed

	this.curve = function curve(section, sign){

		switch(section){

			case 'b':
				this.base.k+=sign*0.5588; //0.000588
				transform.kinematics(this.base, this.mid, this.tip);
				break;

			case 'm':
				this.mid.k+=sign*0.5588;
				transform.kinematics(this.base, this.mid, this.tip);

				break;

			case 'bm':
				this.base.k+=sign*0.5588;
				this.mid.k+=sign*0.5588;
				transform.kinematics(this.base, this.mid, this.tip);

				break;

			case 'mt':
				this.mid.k+=sign*0.5588;
				this.tip.k+=sign*0.5588;
				transform.kinematics(this.base, this.mid, this.tip);
				break;

			case 't':
				this.tip.k+=sign*0.5588;
				transform.kinematics(this.base, this.mid, this.tip);
				break;

			case 'bmt':
				this.base.k+=sign*0.5588;
				this.mid.k+=sign*0.5588;
				this.tip.k+=sign*0.5588;
				transform.kinematics(this.base, this.mid, this.tip);
				break;
			default:
				alert("Please select a section");

		}

	}

	this.extend = function(section, sign){

		switch(section){

			case 'b':
				this.base.d+=sign*0.000166;
				transform.kinematics(this.base, this.mid, this.tip);
				break;

			case 'm':
				this.mid.d+=sign*0.000166;
				transform.kinematics(this.base, this.mid, this.tip);

				break;

			case 'bm':
				this.base.d+=sign*0.000166;
				this.mid.d+=sign*0.000166;
				transform.kinematics(this.base, this.mid, this.tip);

				break;

			case 'mt':
				this.mid.d+=sign*0.000166;
				this.tip.d+=sign*0.000166;
				transform.kinematics(this.base, this.mid, this.tip);
				break;

			case 't':
				this.tip.d+=sign*0.000166;
				transform.kinematics(this.base, this.mid, this.tip);
				break;

			case 'bmt':
				this.base.d+=sign*0.000166;
				this.mid.d+=sign*0.000166;
				this.tip.d+=sign*0.000166;
				transform.kinematics(this.base, this.mid, this.tip);
				break;
			default:
				alert("Please select a section");
		}
	}

	this.orient = function(section, sign){

		switch(section){

			case 'b':
				this.base.phi+=sign*0.0872;
				transform.kinematics(this.base, this.mid, this.tip);
				break;

			case 'm':
				this.mid.phi+=sign*0.0872;
				transform.kinematics(this.base, this.mid, this.tip);

				break;

			case 'bm':
				this.base.phi+=sign*0.0872;
				this.mid.phi+=sign*0.0872;
				transform.kinematics(this.base, this.mid, this.tip);

				break;

			case 'mt':
				this.mid.phi+=sign*0.0872;
				this.tip.phi+=sign*0.0872;
				transform.kinematics(this.base, this.mid, this.tip);
				break;

			case 't':
				this.tip.phi+=sign*0.0872;
				transform.kinematics(this.base, this.mid, this.tip);
				break;

			case 'bmt':
				this.base.phi+=sign*0.0872;
				this.mid.phi+=sign*0.0872;
				this.tip.phi+=sign*0.0872;
				transform.kinematics(this.base, this.mid, this.tip);
				break;
			default:
				alert("Please select a section");
		}
	}
}
