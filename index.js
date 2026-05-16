const nom= document.getElementById("nom");
const email= document.getElementById("email");
const password= document.getElementById("password");
const button= document.getElementById("btn");

button.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("button clicked");
    console.log(nom.value);
    console.log(email.value);
    console.log(password.value);
    alert("Nom: " + nom.value + "\nEmail: " + email.value + "\nPassword: " + password.value);
});