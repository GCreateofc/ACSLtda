document.addEventListener("DOMContentLoaded", function () {

    const menuMobile = document.getElementById("menuMobile");
    const menu = document.getElementById("menu");

    if (!menuMobile || !menu) {
        return;
    }

    menuMobile.addEventListener("click", function () {

        menu.classList.toggle("aberto");

        const menuAberto = menu.classList.contains("aberto");

        menuMobile.setAttribute(
            "aria-expanded",
            menuAberto ? "true" : "false"
        );

        const icone = menuMobile.querySelector("i");

        if (icone) {
            if (menuAberto) {
                icone.classList.remove("fa-bars");
                icone.classList.add("fa-xmark");
            } else {
                icone.classList.remove("fa-xmark");
                icone.classList.add("fa-bars");
            }
        }

    });

    // Fecha o menu ao clicar em algum link
    const links = menu.querySelectorAll("a");

    links.forEach(function (link) {

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

    // ANO AUTOMÁTICO DO FOOTER
    const ano = document.querySelector(".ano-atual");

    if (ano) {
        ano.textContent = new Date().getFullYear();
    }