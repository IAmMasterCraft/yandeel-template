const TogglePassword = (passwordId) => {
    // select password input
    const password = document.getElementById(passwordId);
    password.type = (password.type === "password") ? "text" : "password";
}