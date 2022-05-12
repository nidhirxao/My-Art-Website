function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "nidhirao" && password == "nidhirao@23"){
alert ("Login successfull");
window.location = "Shop.html"; 
return false;
}
else {
alert("Wrong credentials!");
return false;
}
}

