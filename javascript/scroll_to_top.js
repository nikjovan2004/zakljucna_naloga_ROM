document.addEventListener("DOMContentLoaded", function () {
    const scrollToTopButton = document.getElementById("scroll-to-top");

    // Prikaži gumb, ko uporabnik drsi navzdol
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) { // Gumb se prikaže po 300px drsenja
            scrollToTopButton.classList.add("visible");
        } else {
            scrollToTopButton.classList.remove("visible");
        }
    });

    // Funkcija za "Scroll to Top"
    scrollToTopButton.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    })
});
