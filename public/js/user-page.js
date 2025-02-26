const username = localStorage.getItem("username") ;
document.getElementById("welcome-message").innerText = `Welcome, ${username}!`;
const link = document.querySelector(".link");
link.onclick = function (event) {
    event.preventDefault();
    localStorage.removeItem("username");
    localStorage.removeItem("id");
    window.location.replace("/user/login");

    window.location.href = "/user/login";
}