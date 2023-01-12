var email=document.getElementById('email');
var password=document.getElementById('password');
var validation=document.getElementById('btn');
var error_email=document.getElementById('email_error')
validation.addEventListener('click',login);
function login(){
  var validForm = true
  if(email.value == ""){
    email.classList.add('is-invalid')
    email.classList.remove('is-valid')
    error_email.innerHTML="l'adresse email est obligatoire"
    validForm=false;
  } else {
    email.classList.remove('is-invalid')
    email.classList.add('is-valid')

  }
  if(email.value.indexOf("@")==-1 && email.value !==""){
    email.classList.add('is-invalid')
    email.classList.remove('is-valid')
    error_email.innerHTML="l'adresse email est invalid"
    validForm=false;

  } 

  if(password.value == ""){
    password.classList.add('is-invalid')
    password.classList.remove('is-valid')
    validForm=false;
  } else {
    password.classList.remove('is-invalid')
    password.classList.add('is-valid')
  }
  
  if (validForm == true) {
    var users = JSON.parse(localStorage.getItem('users')) || []
    var found = users.find(element => element.email == email.value && element.password==password.value)
    console.log(found);
    if (found != undefined) {
      window.location.href="dashboard.html";
      
    } else {
      alert("Please verify your email or password")
    }
  }
}