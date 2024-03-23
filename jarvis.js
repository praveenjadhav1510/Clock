var ct = document.getElementById('ct');
var hourbox = document.getElementById('hour');
var minutebox = document.getElementById('minute');
var secondbox = document.getElementById('second');
var theam = 'dark';
function updatetime() {
	const time = new Date();
	var h = time.getHours();
	var m = time.getMinutes();
	var s = time.getSeconds();
	if(h>12){ h = h-12; }
	var hours = Math.ceil((h/12)*360);
	var minutes = Math.ceil((m/60)*360);
	var second = Math.ceil((s/60)*360);
	ct.innerText = h+":"+m+":"+s;
	console.log("time current values: "+h+":"+m+":"+s);
	console.log("time 360deg  values: "+hours+":"+minutes+":"+second);
	hourbox.style.transform = "rotate("+hours+"deg)";
	minutebox.style.transform = "rotate("+minutes+"deg)";
	secondbox.style.transform = "rotate("+second+"deg)";
}
setInterval(updatetime,500);

function changetheam() {
	if(theam == 'dark'){
		theam = 'lite';
		light();
	} else {
		theam = 'dark';
		dark();
	}
}
function dark(){
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	linkElement.type = "text/css";
	linkElement.href = "darkclock.css";
	document.head.appendChild(linkElement);
}
function light(){
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	linkElement.type = "text/css";
	linkElement.href = "lightclock.css";
	document.head.appendChild(linkElement);
}