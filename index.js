const nom = document.getElementById("nom");
const email = document.getElementById("email");
const password = document.getElementById("password");
const button = document.getElementById("btn");

button.addEventListener("click", (event) => {

    event.preventDefault();

    if (nom.value === "" || email.value === "" || password.value === "") {
        alert("Please fill in all fields");
        return;
    }

    if (!email.value.includes("@")) {
        alert("Please enter a valid email address");
        return;
    }

    if (password.value.length < 8) {
        alert("Password must be at least 8 characters long");
        return;
    }

    if (!password.value.match(/[A-Z]/) ||!password.value.match(/[a-z]/) ||!password.value.match(/[0-9]/)) {
        alert("Password must contain at least one uppercase letter, one lowercase letter, and one number");
        return;
    }

    console.log("button clicked");
    console.log(nom.value);
    console.log(email.value);
    console.log(password.value);

    alert("Form submitted successfully");
});