document.addEventListener("DOMContentLoaded", function () {
    const vescine = document.querySelectorAll(".vescina");

    // Opazuj vsako veščino
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const progressBar = entry.target.querySelector(".progress");
                    const width = progressBar.style.width;
                    progressBar.style.width = "0"; // Začni z 0
                    setTimeout(() => {
                        progressBar.style.width = width; // Animiraj do končne širine
                    }, 100);
                }
            });
        },
        {
            threshold: 0.5, // Začni animacijo, ko je 50% elementa vidno
        }
    );

    vescine.forEach((vescina) => {
        observer.observe(vescina);
    });
});