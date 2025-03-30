document.addEventListener("DOMContentLoaded", function () {
    const kontaktForm = document.getElementById("kontakt-form");
    const uspesnoObvestilo = document.getElementById("uspesno-obvestilo");

    // Real-time validacija
    kontaktForm.addEventListener("input", function (e) {
        const polje = e.target;
        const napakaElement = document.getElementById(`napaka-${polje.name}`);

        if (polje.validity.valid) {
            napakaElement.textContent = "";
            napakaElement.classList.remove("prikaz");
        } else {
            prikaziNapako(polje, napakaElement);
        }
    });

    // Ob oddaji obrazca
    kontaktForm.addEventListener("submit", function (e) {
        e.preventDefault();

        let jeVeljaven = true;

        // Preveri vsako polje
        kontaktForm.querySelectorAll("input, select, textarea").forEach((polje) => {
            const napakaElement = document.getElementById(`napaka-${polje.name}`);
            if (!polje.validity.valid) {
                prikaziNapako(polje, napakaElement);
                jeVeljaven = false;
            }
        });

        if (jeVeljaven) {
            // Simulacija pošiljanja (lokalno shranjevanje)
            const podatki = {
                ime: kontaktForm.ime.value,
                email: kontaktForm.email.value,
                tema: kontaktForm.tema.value,
                sporocilo: kontaktForm.sporocilo.value,
            };
            localStorage.setItem("kontaktni-podatki", JSON.stringify(podatki));

            // Prikaži obvestilo o uspešnem pošiljanju
            uspesnoObvestilo.classList.add("prikaz");
            kontaktForm.reset();
            setTimeout(() => {
                uspesnoObvestilo.classList.remove("prikaz");
            }, 5000); // Obvestilo izgine po 5 sekundah
        }
    });

    // Funkcija za prikaz napak
    function prikaziNapako(polje, napakaElement) {
        if (polje.validity.valueMissing) {
            napakaElement.textContent = "To polje je obvezno.";
        } else if (polje.validity.typeMismatch && polje.type === "email") {
            napakaElement.textContent = "Vnesite veljaven email naslov.";
        } else if (polje.validity.tooShort) {
            napakaElement.textContent = `Vnesite vsaj ${polje.minLength} znakov.`;
        }
        napakaElement.classList.add("prikaz");
    }
});