document.addEventListener("DOMContentLoaded", function () {

    const menuMobile = document.getElementById("menuMobile");
    const menu = document.getElementById("menu");

    // MENU MOBILE
    if (menuMobile && menu) {

        menuMobile.addEventListener("click", function () {

            menu.classList.toggle("menu-aberto");

            const aberto = menu.classList.contains("menu-aberto");

            menuMobile.setAttribute("aria-expanded", aberto);

            const icone = menuMobile.querySelector("i");

            if (icone) {
                if (aberto) {
                    icone.classList.remove("fa-bars");
                    icone.classList.add("fa-xmark");
                } else {
                    icone.classList.remove("fa-xmark");
                    icone.classList.add("fa-bars");
                }
            }

        });

        // Fecha o menu ao clicar em uma opção
        const linksMenu = menu.querySelectorAll("a");

        linksMenu.forEach(function (link) {

            link.addEventListener("click", function () {

                menu.classList.remove("menu-aberto");

                menuMobile.setAttribute("aria-expanded", "false");

                const icone = menuMobile.querySelector("i");

                if (icone) {
                    icone.classList.remove("fa-xmark");
                    icone.classList.add("fa-bars");
                }

            });

        });

    }

    // HEADER AO ROLAR
    window.addEventListener("scroll", function () {

        const header = document.querySelector(".header");

        if (header) {
            if (window.scrollY > 30) {
                header.classList.add("header-scrolled");
            } else {
                header.classList.remove("header-scrolled");
            }
        }

    });

    // ANIMAÇÕES
    const elementos = document.querySelectorAll(".elemento-animar");

    const observer = new IntersectionObserver(function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {
                entry.target.classList.add("elemento-visivel");
            }

        });

    }, {
        threshold: 0.15
    });

    elementos.forEach(function (elemento) {
        observer.observe(elemento);
    });

    // FECHA MENU AO AUMENTAR A TELA
    window.addEventListener("resize", function () {

        if (window.innerWidth > 800) {

            if (menu) {
                menu.classList.remove("menu-aberto");
            }

            if (menuMobile) {

                menuMobile.setAttribute("aria-expanded", "false");

                const icone = menuMobile.querySelector("i");

                if (icone) {
                    icone.classList.remove("fa-xmark");
                    icone.classList.add("fa-bars");
                }

            }

        }

    });

    // ANO AUTOMÁTICO DO FOOTER
    const ano = document.querySelector(".ano-atual");

    if (ano) {
        ano.textContent = new Date().getFullYear();
    }

});