import router from "./router.js";

// application configs
const appData = {
    "user": {},
    "isAuth": false,
}

document.addEventListener("click", (e)=> {
    const link = e.target.closest("[data-link]");
    if(!link) return;
    e.preventDefault();
    history.pushState({}, link.href);
    router(appData.isAuth);
})

window.addEventListener("popstate", router);

// login at first
router("/login")

// HOME JS ----------------------------------------------