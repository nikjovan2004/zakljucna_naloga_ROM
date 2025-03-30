document.addEventListener("DOMContentLoaded", function () {
    const filtri = document.querySelectorAll(".filtri button");
    const izkusnje = document.querySelectorAll(".casovnica-item");

    // Filtriranje po letih
    filtri.forEach((gumb) => {
        gumb.addEventListener("click", function () {
            // Odstrani aktivni razred od vseh gumbov
            filtri.forEach((btn) => btn.classList.remove("active"));
            // Dodaj aktivni razred trenutnemu gumbu
            this.classList.add("active");

            const leto = this.getAttribute("data-year");

            // Prikaži/skrij izkušnje glede na izbrano leto
            izkusnje.forEach((izkusnja) => {
                if (leto === "vse" || izkusnja.getAttribute("data-year") === leto) {
                    izkusnja.style.display = "block";
                } else {
                    izkusnja.style.display = "none";
                }
            });
        });
    });

    // Animacija ob prikazu (Animate on Scroll)
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        },
        {
            threshold: 0.1, // Začni animacijo, ko je 10% elementa vidno
        }
    );

    // Opazuj vsako izkušnjo
    izkusnje.forEach((izkusnja) => {
        observer.observe(izkusnja);
    });
});