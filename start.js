//validetion
const form = document.querySelector("#form");
const names = document.querySelector("#names");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const btn = document.querySelector("#btn");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (names.value.trim() === "" || !isNaN(names.value)) {
    names.focus();
    alert("Enter the user correctly.");
    return;
  }

  if (email.value.trim() === "" || !email.value.includes("@")) {
    email.focus();
    alert("Enter the email email correctly.");
    return;
  }

  if (password.value.length < 6) {
    password.focus();
    alert("Password must be at least 6 characters.");
    return;
  }
  form.reset();
});


//password
const toggleBtn =document.getElementById("toggle-password");
toggleBtn.addEventListener("click" , function(){
if(password.type === "password"){
    password.type = "text"
}else{
    password.type ="password"
}
});