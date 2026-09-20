// ============================================================
// ACS LTDA — SCRIPT.JS
// Funcionalidades gerais do site
// ============================================================


document.addEventListener("DOMContentLoaded", function () {

    // ========================================================
    // MENU MOBILE
    // ========================================================

    const menuMobile = document.getElementById("menuMobile");
    const menu = document.getElementById("menu");

    if (menuMobile && menu) {

        menuMobile.addEventListener("click", function () {

            menu.classList.toggle("menu-aberto");

            const aberto = menu.classList.contains("menu-aberto");

            menuMobile.setAttribute(
                "aria-expanded",
                aberto
            );

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


        // Fecha o menu ao clicar em um link

        const linksMenu = menu.querySelectorAll("a");

        linksMenu.forEach(function (link) {

            link.addEventListener("click", function () {

                menu.classList.remove("menu-aberto");

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

    }


    // ========================================================
    // FECHAR MENU AO REDIMENSIONAR A TELA
    // ========================================================

    window.addEventListener("resize", function () {

        if (
            window.innerWidth > 800 &&
            menu &&
            menuMobile
        ) {

            menu.classList.remove("menu-aberto");

            menuMobile.setAttribute(
                "aria-expanded",
                "false"
            );

            const icone = menuMobile.querySelector("i");

            if (icone) {

                icone.classList.remove("fa-xmark");
                icone.classList.add("fa-bars");

            }

        }

    });


    // ========================================================
    // HEADER AO ROLAR A PÁGINA
    // ========================================================

    const header = document.querySelector(".header");

    if (header) {

        function verificarScroll() {

            if (window.scrollY > 40) {

                header.classList.add("header-scrolled");

            } else {

                header.classList.remove("header-scrolled");

            }

        }

        verificarScroll();

        window.addEventListener(
            "scroll",
            verificarScroll
        );

    }


    // ========================================================
    // ANIMAÇÃO DOS ELEMENTOS AO ENTRAREM NA TELA
    // ========================================================

    const elementosAnimados = document.querySelectorAll(
        ".atuacao-card, " +
        ".diferencial-item, " +
        ".diferencial-card, " +
        ".servico-card, " +
        ".sobre-servico-card, " +
        ".principio-card, " +
        ".valor-card"
    );


    if (elementosAnimados.length > 0) {

        const observador = new IntersectionObserver(
            function (entradas, observer) {

                entradas.forEach(function (entrada) {

                    if (entrada.isIntersecting) {

                        entrada.target.classList.add(
                            "elemento-visivel"
                        );

                        observer.unobserve(
                            entrada.target
                        );

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


        elementosAnimados.forEach(function (elemento) {

            elemento.classList.add(
                "elemento-animar"
            );

            observador.observe(elemento);

        });

    }


    // ========================================================
    // ANIMAÇÃO SUAVE DOS LINKS COM #
    // ========================================================

    const linksInternos = document.querySelectorAll(
        'a[href^="#"]'
    );

    linksInternos.forEach(function (link) {

        link.addEventListener("click", function (evento) {

            const destino = link.getAttribute("href");

            if (
                !destino ||
                destino === "#"
            ) {
                return;
            }

            const elemento = document.querySelector(destino);

            if (!elemento) {
                return;
            }

            evento.preventDefault();

            elemento.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });


    // ========================================================
    // ANO AUTOMÁTICO NO FOOTER
    // ========================================================

    const anoAtual = new Date().getFullYear();

    const textosAno = document.querySelectorAll(
        ".footer-bottom p"
    );

    textosAno.forEach(function (texto) {

        texto.innerHTML = texto.innerHTML.replace(
            /\b20\d{2}\b/,
            anoAtual
        );

    });


});