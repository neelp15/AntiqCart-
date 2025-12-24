function validateLogin() {
    const emailInput = document.getElementById('email').value.trim();
    const passwordInput = document.getElementById('password').value.trim();
    const errorMessage = document.getElementById('errorMessage');

    // Clear previous errors
    errorMessage.textContent = "";

    // Get registered user from localStorage
    const registeredUser = JSON.parse(localStorage.getItem('registeredUser'));

    if (registeredUser) {
        const { email, password } = registeredUser;

        if (emailInput === email && passwordInput === password) {
            alert("Login successful!");
            window.location.href = "go1.html"; // Redirect to the seller's dashboard
        } else {
            errorMessage.textContent = "Invalid email or password.";
            errorMessage.style.color = "red";
        }
    } else {
        errorMessage.textContent = "No account found. Please register first.";
        errorMessage.style.color = "red";
    }
}