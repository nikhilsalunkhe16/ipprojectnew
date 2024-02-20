document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "your_username" && password === "your_password") {
        window.location.href = "dashboard.html";
    } else if (username === "your_username" && password === "your_password") {
        window.location.href = "main.js";
    }
    else{
        document.getElementById("popup").style.display = "Invalid Credentials";
    }
});

function closePopup() {
    document.getElementById("popup").style.display = "Invalid Credentials";
}
