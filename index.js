const nom= document.getElementById("nom");
const email= document.getElementById("email");
const password= document.getElementById("password");
const button= document.getElementById("btn");

button.addEventListener("click", () => {
    const nom = nom.value;
    const email = email.value;
    const password = password.value;
    console.log("Nom: " + nom);
    console.log("Email: " + email);
    console.log("Password: " + password);

    alert("Nom: " + nom + "\nEmail: " + email + "\nPassword: " + password);
});