const routes = {
    "/": "pages/home.html",
    "/login": "pages/login.html"
}

export default async function router () {
    const path = window.location.pathname;

    const page = routes[path];

    const html = await fetch(page).then(res=>res.text());
    document.getElementById("app").innerHTML = html;
}