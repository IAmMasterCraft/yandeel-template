const TogglePassword = (passwordId) => {
    // select password input
    const password = document.getElementById(passwordId);
    password.type = password.type === "password" ? "text" : "password";
};

const ToggleMenu = () => {
    const sidebar = document.getElementById("sidebarLayout");
    if (sidebar.classList.contains("d-none")) {
        // opens sidebar
        sidebar.classList.remove("d-none");
        sidebar.classList.add("d-block");
    } else {
        // closes sidebar
        sidebar.classList.remove("d-block");
        sidebar.classList.add("d-none");
    }
};