
// localStorage.clear()

var fname=document.getElementById("fname");
var lname=document.getElementById("lname");
var emailAddress=document.getElementById("Email-address");
var phoneNumber=document.getElementById("number");
var passWord=document.getElementById("pass");
var confPass=document.getElementById("conf-pass");




function SignUp(){

localStorage.setItem("fname",fname.value);
localStorage.setItem("lname",lname.value);
localStorage.setItem("Email-address",emailAddress.value);
localStorage.setItem("number",phoneNumber.value);
localStorage.setItem("password",passWord.value);
localStorage.setItem("conf-password",confPass.value);




}


fname.value=localStorage.getItem("fname");

lname.value=localStorage.getItem("lname");

emailAddress.value=localStorage.getItem("Email-address")

phoneNumber.value=localStorage.getItem("number")

passWord.value=localStorage.getItem("password")

confPass.value=localStorage.getItem("conf-password")






