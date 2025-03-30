/* Dark Mode */
document.addEventListener("DOMContentLoaded", function () {
    const themeSwitcher = document.getElementById("theme-switcher");
    const body = document.body;

    // Preveri, ali je uporabnik že izbral temo (shranjeno v localStorage)
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        body.classList.add("dark-mode");
        themeSwitcher.textContent = "☀️"; // Spremeni ikono v sonce
    }

    // Dodaj event listener za preklop teme
    themeSwitcher.addEventListener("click", function () {
        body.classList.toggle("dark-mode");

        // Shrani izbiro teme v localStorage
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
            themeSwitcher.textContent = "☀️"; // Spremeni ikono v sonce
        } else {
            localStorage.setItem("theme", "light");
            themeSwitcher.textContent = "🌙"; // Spremeni ikono v luno
        }
    });
});