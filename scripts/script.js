function validate(e){

	hideErrors();

	if(formHasErrors()){
		e.preventDefault();
		return false;
	}

	return true;
}

function resetForm(e){
	if ( confirm('Clear order?')){
		hideErrors();
		return true;
	}

	e.preventDefault();
	return false;	
}

function formHasErrors(){

	let errorFlag = false;
	let cardSelected = false;

	let requiredTextFields = ["firstname", "lastname", "address", "phonenumber", "email"];
	let emailRegex = new RegExp(	
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
	let phoneRegex = new RegExp(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im);


	for(let i = 0; i < requiredTextFields.length; i++){
		var textField = document.getElementById(requiredTextFields[i]);
		if(!hasText(textField)){
			document.getElementById(requiredTextFields[i] + "_error").style.display = "block";

			if(!errorFlag){
				textField.focus();
			}

			errorFlag = true;
		}
	}
	
	var emailValue = document.getElementById("email").value;

	if(!emailRegex.test(emailValue)){
		document.getElementById("invalidEmail_error").style.display = "block";

		if(!errorFlag){
			textField.focus();
		}

		errorFlag = true;
	}

	var phoneValue = document.getElementById("phonenumber").value;

	if(!phoneRegex.test(phoneValue)){
		document.getElementById("invalidPhone_error").style.display = "block";

		if(!errorFlag){
			textField.focus();
		}

		errorFlag = true;
	}

	return errorFlag;
}


function hasText(fieldElement){
	if(fieldElement.value == null || trim(fieldElement.value) == ""){
		return false;
	}

	return true;
}

function trim(str) {
	return str.replace(/^\s+|\s+$/g,"");
}

function hideErrors(){
	let errors = document.getElementsByClassName("error");
	document.getElementById("invalidPhone_error").style.display = "none";
	document.getElementById("invalidEmail_error").style.display = "none";

	for(let i = 0; i < errors.length; i++)
	{
		errors[i].style.display = "none";
	}
}

function addcomment(){
	let comment = document.getElementById("textarea").value;
	let p = document.createElement("P");
	p.innerHTML = comment;
	
	document.getElementById("comments").appendChild(p);
}

function jsonobject(){
	var jsobject = {
		users:
		{
			name: "Elvis",
			comment: "What up"
		}
	}


	for (let index = 1; index < 10; index++) {
		let name = index;
		let comment = index;

		jsobject.users["name" + index] = name + "L";
		jsobject.users["comment" + index] = comment + "C";
	}

	var fs = require("fs");
	fs.writeFile("test.txt", jsobject, function(err){
		if (err)
		{
			console.log(err);
		}
	});

}

function load(){

	hideErrors();
	document.getElementById("submit").addEventListener("click", validate, false);
	document.getElementById("clear").addEventListener("click", hideErrors, false);
}

document.addEventListener("DOMContentLoaded", load);