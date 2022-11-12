

 

var emailSignin =document.getElementById("email-sign-in");

var signinpass =document.getElementById("sign-in-password");



function SignIn(){

   sessionStorage.setItem("Email",emailSignin.value);
   sessionStorage.setItem("Password",signinpass.value);

console.log(123)


}

emailSignin.value=sessionStorage.getItem("Email");
signinpass.value=sessionStorage.getItem("Password");


