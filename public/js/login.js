const loginForm = document.getElementById("loginForm")
if (loginForm) {
    loginForm.onsubmit = async function (event) {
        event.preventDefault();

        const formData = new FormData(this)
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch("/user/login", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            })


            const result = await response.json()

            if (result.success) {
                localStorage.setItem("username", result.username);
                localStorage.setItem("id", result.id);
                window.location.href = "/user/user-page";
            } else {
                const messageContainer = document.querySelector("#message-container");
                if (messageContainer) {
                    messageContainer.classList.add("error-message")
                    messageContainer.innerHTML = result.message;
                }

            }
        } catch (error) {
            console.log(error)
        }


    }
}

