const nom= document.getElementById("nom");
const email= document.getElementById("email");
const password= document.getElementById("password");
const button= document.getElementById("btn");

button.addEventListener("click", (event) => {
    
    if (nom.value === "" || email.value === "" || password.value === "") {
        alert("Please fill in all fields");
    }
    if (nom.value !== "" && email.value === "" && password.value !== "") {
        alert("Please fill in the email field");
    }   
    if (nom.value !== "" && email.value !== "" && password.value === "") {
        alert("Please fill in the password field");
    }   
    if (nom.value === "" && email.value !== "" && password.value !== "") {
        alert("Please fill in the nom field");
    }
    if (!email.value.includes("@")) {
        alert("Please enter a valid email address");
    }
    if (password.value.length < 8) {
        alert("Password must be at least 8 characters long");
    }   
    if(!password.value.match(/[A-Z]/) && !password.value.match(/[a-z]/) && !password.value.match(/[0-9]/)) {
        alert("Password must contain at least one uppercase letter, one lowercase letter, and one number");
    }

    event.preventDefault();
    console.log("button clicked");
    console.log(nom.value);
    console.log(email.value);
    console.log(password.value);
});
