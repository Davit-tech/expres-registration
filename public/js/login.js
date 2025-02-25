const loginForm = document.getElementById("loginForm")
if (loginForm) {
    loginForm.onsubmit = async function (event) {
        event.preventDefault();

        const formData = new FormData(this)
        const data = {}
        formData.forEach((value, key) => {
            data[key] = value;
        })

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
                window.location.href = "/user/user-page";
            } else {
                const messageContainer = document.querySelector("#message-container");
                messageContainer.classList.add("error-message")
                messageContainer.innerHTML = result.message;
            }
        } catch (error) {
            console.log(error)
        }


    }
}

console.log(2)