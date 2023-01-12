var nom = document.getElementById('nom');
var prenom = document.getElementById('prenom');
var email = document.getElementById('email');
var password1 = document.getElementById('password1');
var password2 = document.getElementById('password2');
var validation = document.getElementById('btn');
validation.addEventListener('click', register);
function register() {
  var validForm = true
  if (prenom.value == "") {
    prenom.classList.add('is-invalid')
    prenom.classList.remove('is-valid')
    validForm = false
  } else {
    prenom.classList.remove('is-invalid')
    prenom.classList.add('is-valid')
  }
  if (nom.value == "") {
    nom.classList.add('is-invalid')
    nom.classList.remove('is-valid')
    validForm = false
  } else {
    nom.classList.remove('is-invalid')
    nom.classList.add('is-valid')
  }
  if (email.value == "") {
    email.classList.add('is-invalid')
    email.classList.remove('is-valid')
    validForm = false
  } else {
    email.classList.remove('is-invalid')
    email.classList.add('is-valid')
  }
  if (password1.value == "") {
    password1.classList.add('is-invalid')
    password1.classList.remove('is-valid')
    validForm = false
  } else {
    password1.classList.remove('is-invalid')
    password1.classList.add('is-valid')
  }
  if (password2.value == "" || !(password2.value == password1.value)) {
    password2.classList.add('is-invalid')
    password2.classList.remove('is-valid')
    validForm = false
  } else {
    password2.classList.remove('is-invalid')
    password2.classList.add('is-valid')
  }

  if (validForm == true) {
    var users = JSON.parse(localStorage.getItem('users')) || []
    var found = users.find(element => element.email == email.value)
    console.log(found);
    if (found != undefined) {
      alert('user already exist')
    } else {
      var data = {
        nom: nom.value,
        prenom: prenom.value,
        email: email.value,
        password: password1.value,
      }
      users.push(data)
      localStorage.setItem('users', JSON.stringify(users));
    }
  }
}