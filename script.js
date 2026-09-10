/* =========================================
   FRAUDSCOPE
   MAIN JAVASCRIPT
========================================= */


/* =========================================
   SCROLL ANIMATIONS
========================================= */

const animatedElements = document.querySelectorAll(
    ".feature-card, .step, .security-card, .analysis-card, .cta"
);


const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


animatedElements.forEach((element) => {

    element.classList.add("scroll-hidden");

    observer.observe(element);

});


/* =========================================
   ANALYSIS CARD DEMO
========================================= */

const analysisCard =
    document.querySelector(".analysis-card");


if (analysisCard) {

    const riskElement =
        analysisCard.querySelector(".risk");

    const riskBar =
        analysisCard.querySelector(".risk-bar div");

    const statusElement =
        analysisCard.querySelector(".danger");


    let risk = 87;


    setInterval(() => {

        const variation =
            Math.floor(
                Math.random() * 5
            ) - 2;


        risk += variation;


        if (risk < 80) {
            risk = 80;
        }

        if (risk > 94) {
            risk = 94;
        }


        if (riskElement) {

            riskElement.textContent =
                risk + "%";

        }


        if (riskBar) {

            riskBar.style.width =
                risk + "%";

        }


        if (statusElement) {

            if (risk >= 85) {

                statusElement.textContent =
                    "Подозрительно";

                statusElement.style.color =
                    "#ff6973";

            } else {

                statusElement.textContent =
                    "Требует внимания";

                statusElement.style.color =
                    "#ff985b";

            }

        }

    }, 2500);

}


/* =========================================
   NAVBAR SCROLL
========================================= */

const navbar =
    document.querySelector(".navbar");


window.addEventListener(
    "scroll",
    () => {

        if (!navbar) {
            return;
        }


        if (window.scrollY > 30) {

            navbar.classList.add(
                "navbar-scrolled"
            );

        } else {

            navbar.classList.remove(
                "navbar-scrolled"
            );

        }

    }
);


/* =========================================
   SMOOTH NAVIGATION
========================================= */

document.querySelectorAll(
    'a[href^="#"]'
).forEach((link) => {

    link.addEventListener(
        "click",
        (event) => {

            const targetId =
                link.getAttribute("href");


            if (
                !targetId ||
                targetId === "#"
            ) {
                return;
            }


            const target =
                document.querySelector(
                    targetId
                );


            if (!target) {
                return;
            }


            event.preventDefault();


            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }
    );

});


/* =========================================
   CURRENT YEAR
========================================= */

const yearElements =
    document.querySelectorAll(
        "[data-year]"
    );


yearElements.forEach(
    (element) => {

        element.textContent =
            new Date().getFullYear();

    }
);


/* =========================================
   CURSOR GLOW
========================================= */

const glow =
    document.createElement("div");


glow.className =
    "cursor-glow";


document.body.appendChild(glow);


window.addEventListener(
    "mousemove",
    (event) => {

        glow.style.left =
            event.clientX + "px";

        glow.style.top =
            event.clientY + "px";

    }
);


/* =========================================
   PAGE LOADED
========================================= */

window.addEventListener(
    "load",
    () => {

        document.body.classList.add(
            "loaded"
        );

    }
);
