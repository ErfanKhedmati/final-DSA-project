const routes = {
    "/": "pages/home.html",
    "/login": "pages/login.html"
}

import { initLogin } from "./login.js";

export default async function router (path) {
    if(!path) path = window.location.pathname;
    
    const page = routes[path];
    
    const html = await fetch(page).then(res=>res.text());
    document.getElementById("app").innerHTML = html;

    switch (path) {
        case "/login":
            initLogin();
            break;
    }
}