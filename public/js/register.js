const messageContainer = document.querySelector("#message-container");

const registerForm = document.querySelector("#registerForm");
if (registerForm) {
    registerForm.onsubmit = async function (event) {
        event.preventDefault();

        const formData = new FormData(this)
        const data = {}
        formData.forEach((value, key) => {
            data[key] = value;
        })

        try {
            const response = await fetch("/user/register", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            })
            const result = await response.json()

            if (result.success) {
                messageContainer.classList.add("success-message")
                messageContainer.innerHTML = result.message;

                setTimeout(() => {
                    window.location.href = "/user/login";

                }, 1000)

            } else {
                messageContainer.classList.add("error-message")
                messageContainer.innerHTML = result.message;

            }

        } catch (error) {
            console.log(error)
        }


    }
}

