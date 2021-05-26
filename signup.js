// JavaScript Document
function signupvalid()
{
	var fullname = document.getElementById("fname");
	var password = document.getElementById("pass");
	var cpassword = document.getElementById("cpass");
	var email = document.getElementById("email");
	if(fullname.value.trim() ==" " || cpassword.value.trim() ==" " || password.value.trim() == " " || email.value.trim() == " "){
		alert("Black space are not allowed");
		return false;
	}
	
}