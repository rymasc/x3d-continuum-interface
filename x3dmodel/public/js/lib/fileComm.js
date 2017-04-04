//fileComm.js

var fileComm = {
	download : function download(strData, strFileName, strMimeType) {
		var D= document,
			A= arguments,
			a = D.createElement("a"),
			d = A[0],
			n = A[1],
			t = A[2] || "text/plain";

			a.href = "data: "+ strMimeType + "charset=utf-8, " + escape(strData);

			if(window.MSBlobBuilder){
				var bb = new MSBlobBuilder();
				bb.append(strData);
				return navigator.msSaveBlob(bb, strFileName);
			}

			if('download' in a){
				a.setAttribute("download",n);
				a.innerHTML = "downloading...";
				D.body.appendChild(a);
				setTimeout(function(){
					var e = D.createEvent("MouseEvents");
					e.initMouseEvent("click", true, false, window, 0, 0 , 0, 0, 0, false, false, false, false, 0, null);
					a.dispatchEvent(e);
					D.body.removeChild(a);

				},66);
				return true;
			}
	},

	formatData : function formatData(robot) {
		var obj = {
			"params":
			[
				{"base_s" : robot.base.length},
				{"base_k" : robot.base.k},
				{"base_phi" : robot.base.phi},
				{"mid_s" : robot.mid.length},
				{"mid_k" : robot.mid.k},
				{"mid_phi" : robot.mid.phi},
				{"tip_s" : robot.tip.length},
				{"tip_k" : robot.tip.k},
				{"tip_phi" : robot.tip.phi}
			]
		};
		return JSON.stringify(obj);
	},

	sendData : function sendData(data) {
		var socket = io ();
		socket.emit('message', data);
	}
}
