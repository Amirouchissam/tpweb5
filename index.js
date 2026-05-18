const email = document.getElementById("email");
const password = document.getElementById("password");
const button = document.getElementById("btn");

button.addEventListener("click", function(event) {

    event.preventDefault();

    // user li msjel f localStorage
    const savedUser = JSON.parse(localStorage.getItem("username"));

    // ila ma kayn ta compte
    if (!savedUser) {
        alert("You need to create an account first");
        window.location.href = "signup.html";
        return;
    }

    // verification
    if (
        email.value === savedUser.email &&
        password.value === savedUser.password
    ) {
        alert("Login successful");
    } else {
        alert("Incorrect email or password");
    }

});