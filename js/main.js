//variable for addEventListener to know the element to listen to line 54 
var el = document.getElementById ("body")


function domListenerEvent() {

//defined variables for the function
var ap = document.getElementById ("amPm")
var today = new Date()
var date = today.toDateString()
var sec = today.getSeconds()
var s = seconds()
var min = today.getMinutes()
var m = minutes()
var usformat = today.getHours()
var h = hour()
	
	//what will be displayed
	document.getElementById ("date").innerHTML = date
	document.getElementById ("time").innerHTML = h + ":" + m + ":" + s

//functions to properly display time
function hour(){
	if (usformat < 12) {
		document.getElementById("amPm").innerHTML = "am"
		return usformat
	}else if (usformat > 12){
		document.getElementById("amPm").innerHTML = "pm"
		return usformat - 12 
	}
}
function minutes(){
	if (min < 10) {
		return "0" + min
	} else
		return min 
}
function seconds(){
	if (sec < 10) {
		return "0" + sec
	} else 
		return sec
	
}

//this creates the loop by essentially loading the domListenerEvent after 1 sec triggering the addEventListener
setTimeout( function(){
	domListenerEvent()
 		}, 1000);

 }
	
el.addEventListener("load", domListenerEvent(), false)

//changes css every sec; set outside of EventListener because timing would be off
var myVar = setInterval(function(){ setColor() }, 1000);
 
function setColor() {
  var x = document.body;
  x.style.backgroundColor = x.style.backgroundColor == "black" ? "white" : "black";
  
}
var digits = setInterval(function(){fontColor()}, 1000);

function fontColor(){
	var num = document.body;
	num.style.color = num.style.color == "white" ? "black" : "white";
}

