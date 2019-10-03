function load()
{
    document.getElementById("greyCar").addEventListener("click", function(){
		document.getElementById("customcar").setAttribute("src", "images/custom/compositorGrey.png");
	});
	document.getElementById("blackCar").addEventListener("click", function(){
		document.getElementById("customcar").setAttribute("src", "images/custom/compositorBlack.png");
	});
	document.getElementById("whiteCar").addEventListener("click", function(){
		document.getElementById("customcar").setAttribute("src", "images/custom/compositorWhite.png");
	});
	document.getElementById("blueCar").addEventListener("click", function(){
		document.getElementById("customcar").setAttribute("src", "images/custom/compositorBlue.png");
	});
	document.getElementById("redCar").addEventListener("click", function(){
		document.getElementById("customcar").setAttribute("src", "images/custom/compositorRed.png");
	});
}

document.addEventListener("DOMContentLoaded", load);