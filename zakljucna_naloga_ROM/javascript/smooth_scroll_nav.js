/* Smooth Scroll */
document.addEventListener("DOMContentLoaded", function () {
    // Povezave v navigaciji
    const navLinks = document.querySelectorAll("nav a");

    // Dodaj event listener za vsako povezavo
    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault(); // Prepreči privzeto obnašanje
            const targetId = this.getAttribute("href").substring(1); // ID ciljne sekcije
            const targetSection = document.getElementById(targetId); // Ciljna sekcija

            if (targetSection) {
                // Gladko pomakni do ciljne sekcije
                targetSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

                // Dodatno: Poudari aktivno povezavo
                navLinks.forEach(link => link.classList.remove("active"));
                this.classList.add("active");
            }
        });
    });

    // Dodatno: Poudari aktivno sekcijo med drsenjem
    window.addEventListener("scroll", function () {
        const scrollPosition = window.scrollY;

        // Preveri vsako sekcijo
        document.querySelectorAll("section").forEach(section => {
            const sectionTop = section.offsetTop - 100; // Prilagodi offset
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute("id");

            if (
                scrollPosition >= sectionTop &&
                scrollPosition < sectionTop + sectionHeight
            ) {
                // Poudari ustrezno povezavo v navigaciji
                navLinks.forEach(link => {
                    link.classList.remove("active");
                    if (link.getAttribute("href") === `#${sectionId}`) {
                        link.classList.add("active");
                    }
                });
            }
        });
    });
});


