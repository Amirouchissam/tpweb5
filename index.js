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
    
    if (nom.value === "" || email.value === "" || password.value === "") {
    alert("Please fill in all fields");
}
else if (nom.value !== "" && email.value === "" && password.value !== "") {
    alert("Please fill in the email field");
}   
else if (nom.value !== "" && email.value !== "" && password.value === "") {
    alert("Please fill in the password field");
}   
else if (nom.value === "" && email.value !== "" && password.value !== "") {
    alert("Please fill in the nom field");
}
});
