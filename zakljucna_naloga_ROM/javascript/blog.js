document.addEventListener("DOMContentLoaded", function () {
    const iskanjeInput = document.getElementById("iskanje");
    const kategorijeFiltri = document.getElementById("kategorije-filtri");
    const clanki = document.querySelectorAll(".clanek");

    // Iskanje po naslovu in filtriranje po kategorijah
    function filtrirajClanke() {
        const iskaniNiz = iskanjeInput.value.toLowerCase();
        const izbranaKategorija = kategorijeFiltri.value;

        clanki.forEach((clanek) => {
            const naslov = clanek.getAttribute("data-naslov").toLowerCase();
            const kategorija = clanek.getAttribute("data-kategorija");

            const ustrezaIskanju = naslov.includes(iskaniNiz);
            const ustrezaKategoriji = izbranaKategorija === "vse" || kategorija === izbranaKategorija;

            if (ustrezaIskanju && ustrezaKategoriji) {
                clanek.style.display = "block";
            } else {
                clanek.style.display = "none";
            }
        });
    }

    // Dodaj event listener za iskanje in filtre
    iskanjeInput.addEventListener("input", filtrirajClanke);
    kategorijeFiltri.addEventListener("change", filtrirajClanke);
});