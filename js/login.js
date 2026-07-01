export function initLogin() {
    const adminBtn = document.getElementById("adminBtn");
    const userBtn = document.getElementById("userBtn");
    const fullnameInput = document.getElementById("fullnameInput");

    adminBtn.addEventListener("click", () => {
        adminBtn.classList.add("active_mode")
        userBtn.classList.remove("active_mode")

        fullnameInput.classList.add("hidden");
    })

    userBtn.addEventListener("click", () => {
        adminBtn.classList.remove("active_mode")
        userBtn.classList.add("active_mode")

        fullnameInput.classList.remove("hidden");
    })
}