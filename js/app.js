import router from "./router.js";

document.addEventListener("click", (e)=> {
    const link = e.target.closest("[data-link]");

    if(!link) return;

    e.preventDefault();

    history.pushState({}, link.href);

    router();
})

window.addEventListener("popstate", router);

router();