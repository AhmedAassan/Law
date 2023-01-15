let inputName = document.getElementById("inputName");
let inputEmail = document.getElementById("inputEmail");
let inputPass = document.getElementById("inputPass");
let btnSubmit = document.getElementById("btnSubmit");

function validName() {
  let regex = /^[A-Za-z]{3,10}(\s?[A-Za-z]{3,10})?$/;
  if (regex.test(inputName.value) == true && inputName.value!="") {
    inputName.classList.add("is-valid");
    inputName.classList.remove("is-invalid");
    return true;
  }
  else {
    inputName.classList.add("is-invalid");
    inputName.classList.remove("is-valid");
    return false;
  }
}
inputName.addEventListener("keyup",validName);


function validEmail() {
  let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (regex.test(inputEmail.value) == true && inputEmail.value!="") {
    inputEmail.classList.add("is-valid");
    inputEmail.classList.remove("is-invalid");
    return true;
  }
  else {
    inputEmail.classList.add("is-invalid");
    inputEmail.classList.remove("is-valid");
    return false;
  }
}
inputEmail.addEventListener("keyup",validEmail);


function validPass() {
  let regex = /^.{5,15}$/;
  if (regex.test(inputPass.value) == true && inputPass.value!="") {
    inputPass.classList.add("is-valid");
    inputPass.classList.remove("is-invalid");
    return true;
  }
  else {
    inputPass.classList.add("is-invalid");
    inputPass.classList.remove("is-valid");
    return false;
  }
}
inputPass.addEventListener("keyup",validPass);

function validation() {
  validName();
  validEmail();
  validPass();
  if (validName() == true && validEmail() == true && validPass() == true) {
    document.getElementById("msgSuccess").classList.replace("d-none", "d-block");
    return true
  }
  else {
    document.getElementById("msgErr").classList.replace("d-none", "d-block");
    return false
  }
}
btnSubmit.addEventListener("click",validation);