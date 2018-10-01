idbase = "overlay"

function on(index){
	document.getElementById(idbase.concat(index)).style.display = "block";
	//to slip in the snackbar
	var x = document.getElementById("snackbar");
	x.className = "show";
	setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

function off(index){
	document.getElementById(idbase.concat(index)).style.display = "none";
}
