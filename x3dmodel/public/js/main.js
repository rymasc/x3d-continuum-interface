//main.js
var timeout;
$(document).ready(function(){

	var robot = new Octarm();
	var homeposition = robot;
	transform.kinematics(robot.base, robot.mid, robot.tip);
	$("#blength").text("Length: " + robot.base.length +"m");
	$("#bcurve").text("Curvature: " + robot.base.k);
	$("#borient").text("Orientation: " + robot.base.phi*180/Math.PI +" degrees");
	$("#mlength").text("Length: " + robot.mid.length +"m");
	$("#mcurve").text("Curvature: " + robot.mid.k);
	$("#morient").text("Orientation: " + robot.mid.phi*180/Math.PI +" degrees");
	$("#tlength").text("Length: " + robot.tip.length.toFixed(3) +"m");
	$("#tcurve").text("Curvature: " + robot.tip.k);
	$("#torient").text("Orientation: " + robot.tip.phi*180/Math.PI +" degrees");

	$("#orientCCW").click(function() {
		var sec = '';

		if($("#orientBase").prop("checked")){
			sec+='b';
		}

		if($("#orientMid").prop("checked")){
			sec+='m';
		}

		if($("#orientTip").prop("checked")){
			sec+='t';
		}
		//alert(sec);
		robot.orient(sec, -1);

		$("#borient").text("Orientation: " + qwikMath.formatAngles(robot.base.phi*180/Math.PI) +" degrees");
		$("#morient").text("Orientation: " + qwikMath.formatAngles(robot.mid.phi*180/Math.PI) +" degrees");
		$("#torient").text("Orientation: " + qwikMath.formatAngles(robot.tip.phi*180/Math.PI) +" degrees");
		fileComm.sendData(fileComm.formatData(robot));
	});

	$("#orientCW").click(function() {
		var sec = '';

		if($("#orientBase").prop("checked")){
			sec+='b';
		}

		if($("#orientMid").prop("checked")){
			sec+='m';
		}

		if($("#orientTip").prop("checked")){
			sec+='t';
		}
		//alert(sec);
		robot.orient(sec, 1);

		$("#borient").text("Orientation: " + qwikMath.formatAngles(robot.base.phi*180/Math.PI) +" degrees");
		$("#morient").text("Orientation: " + qwikMath.formatAngles(robot.mid.phi*180/Math.PI) +" degrees");
		$("#torient").text("Orientation: " + qwikMath.formatAngles(robot.tip.phi*180/Math.PI) +" degrees");
		fileComm.sendData(fileComm.formatData(robot));
	});

	$("#extend").click(function() {
		var sec = '';

		if($("#extendBase").prop("checked")){
			sec+='b';
		}

		if($("#extendMid").prop("checked")){
			sec+='m';
		}

		if($("#extendTip").prop("checked")){
			sec+='t';
		}
		//alert(sec);
		robot.extend(sec, 1);
		robot.base.length = robot.base.d*robot.base.n;
		robot.mid.length = robot.mid.d*robot.mid.n;
		robot.tip.length = robot.tip.d*robot.tip.n;

		$("#blength").text("Length: " + robot.base.length.toFixed(3) +"m");
		$("#mlength").text("Length: " + robot.mid.length.toFixed(3) +"m");
		$("#tlength").text("Length: " + robot.tip.length.toFixed(3) +"m");
		fileComm.sendData(fileComm.formatData(robot));
	});

	$("#compress").click(function() {
		var sec = '';

		if($("#extendBase").prop("checked")){
			sec+='b';
		}

		if($("#extendMid").prop("checked")){
			sec+='m';
		}

		if($("#extendTip").prop("checked")){
			sec+='t';
		}
		//alert(sec);
		robot.extend(sec, -1);
		robot.base.length = robot.base.d*robot.base.n;
		robot.mid.length = robot.mid.d*robot.mid.n;
		robot.tip.length = robot.tip.d*robot.tip.n;

		$("#blength").text("Length: " + robot.base.length.toFixed(3) +"m");
		$("#mlength").text("Length: " + robot.mid.length.toFixed(3) +"m");
		$("#tlength").text("Length: " + robot.tip.length.toFixed(3) +"m");
		fileComm.sendData(fileComm.formatData(robot));
	});

	$("#curveL").click(function() {

		var sec = '';
		if($("#curveBase").prop("checked")){
			sec += 'b';
		}

		if($("#curveMid").prop("checked")){
			sec += 'm';
		}

		if($("#curveTip").prop("checked")){
			sec += 't';
		}

		robot.curve(sec, -1);
		$("#bcurve").text("Curvature: " + +robot.base.k.toFixed(4));
		$("#mcurve").text("Curvature: " + +robot.mid.k.toFixed(4));
		$("#tcurve").text("Curvature: " + +robot.tip.k.toFixed(4));
		fileComm.sendData(fileComm.formatData(robot));
	});

	$("#curveR").click(function() {

		var sec = '';
		if($("#curveBase").prop("checked")){
			sec += 'b';
		}

		if($("#curveMid").prop("checked")){
			sec += 'm';
		}

		if($("#curveTip").prop("checked")){
			sec += 't';
		}

		robot.curve(sec, 1);
		$("#bcurve").text("Curvature: " + +robot.base.k.toFixed(4));
		$("#mcurve").text("Curvature: " + +robot.mid.k.toFixed(4));
		$("#tcurve").text("Curvature: " + +robot.tip.k.toFixed(4));
		fileComm.sendData(fileComm.formatData(robot));
	});

	$("#reloadPage").click(function(){
		history.go(0);
		transform.kinematics(homeposition.base, homeposition.mid, homeposition.tip);
		fileComm.sendData(fileComm.formatData(homeposition));
	});

	$("#downloadTxt").click(function(){
		var string="Base: s="+robot.base.length+" k="+ robot.base.k+" | Mid: s="+robot.mid.length+" k="+robot.mid.k+" | Tip: s="+robot.tip.length+" k="+robot.tip.k;
		fileComm.download(string, 'skdata.txt', 'text/plain');
	});
});
