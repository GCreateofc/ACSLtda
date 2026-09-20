document.addEventListener("DOMContentLoaded", function () {

    const menuMobile = document.getElementById("menuMobile");
    const menu = document.getElementById("menu");

    if (!menuMobile || !menu) {
        return;
    }

    menuMobile.addEventListener("click", function () {

        menu.classList.toggle("aberto");

        const aberto = menu.classList.contains("aberto");

        menuMobile.setAttribute(
            "aria-expanded",
            aberto ? "true" : "false"
        );

        const icone = menuMobile.querySelector("i");

        if (icone) {
            icone.classList.toggle("fa-bars", !aberto);
            icone.classList.toggle("fa-xmark", aberto);
        }
    });

    menu.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", function () {

            menu.classList.remove("aberto");

            menuMobile.setAttribute(
                "aria-expanded",
                "false"
            );

            const icone = menuMobile.querySelector("i");

            if (icone) {
                icone.classList.remove("fa-xmark");
                icone.classList.add("fa-bars");
            }
        });

    });

});