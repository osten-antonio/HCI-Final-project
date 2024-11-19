const signUpButton=document.getElementById('signUpButton');
const signInButton=document.getElementById('signInButton');
const signInForm=document.getElementById('signIn');
const signUpForm=document.getElementById('signup');

signUpButton.addEventListener('click',function(){
    signIn.style.display="none";
    signUp.style.display="block";
})
signInButton.addEventListener('click', function(){
    signIn.style.display="block";
    signUp.style.display="none";
})