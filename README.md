# Interaktivni Digitalni Portfolio

## Opis projekta
Interaktivni digitalni portfolio je spletna stran, ki omogoča predstavitev osebnih projektov, izkušenj in veščin. Stran vključuje različne interaktivne funkcionalnosti za izboljšano uporabniško izkušnjo.

## Implementirane funkcionalnosti
- **Navigacija:** Gladka navigacija med sekcijami s smooth scroll funkcionalnostjo.
- **Tema:** Možnost preklopa med temno in svetlo temo (theme switcher).
- **Časovnica izkušenj:** Interaktivna časovnica z možnostjo filtriranja po letih in animacijami ob prikazu.
- **Kontaktni obrazec:** Validiran obrazec s sprotno validacijo in simulacijo pošiljanja podatkov (shranjevanje v localStorage).
- **Veščine:** Animirani prikaz veščin s progresnimi vrsticami.
- **Blog:** Iskanje in filtriranje člankov po naslovu in kategoriji.
- **Deli na družbenih omrežjih:** Gumbi za deljenje strani na Facebook, Twitter in LinkedIn.
- **Gumb za vrnitev na vrh:** Prikaz gumba po določenem skrolanju in gladko pomikanje na vrh.
- **Preloader:** Animacija ob nalaganju strani.
- **Animacije ob skrolanju:** Uporaba Intersection Observer API za prikaz vsebine ob vstopu v vidno polje uporabnika.

## Tehnične zahteve
### HTML
- Semantična uporaba HTML5 elementov
- Struktura z razdeljenimi sekcijami

### CSS
- Uporaba CSS Grid in Flexbox za postavitev
- Media queries za prilagoditev različnim zaslonom
- Animacije in prehodi (preloader, progresne vrstice, animacije ob skrolanju)

### JavaScript
- **Event listeners** za interaktivnost
- **Manipulacija DOM-a** za dinamične spremembe
- **Lokalno shranjevanje podatkov** (kontaktni obrazec)
- **Validacija obrazcev** s sprotnim preverjanjem
- **Intersection Observer API** za animacije ob skrolanju

## Navodila za lokalni razvoj
1. Kloniraj projekt:
   ```sh
   git clone https://github.com/nikjovan2004/zakljucna_naloga_ROM.git
   ```
2. Odpri projekt v urejevalniku kode.
3. Zaženi **takljucna_naloga.html** v brskalniku.

## Uporabljene knjižnice
- **Intersection Observer API** (za animacije ob skrolanju)
- **LocalStorage** (za shranjevanje kontaktnih podatkov)

## Možne izboljšave
- Implementacija CSS spremenljivk za barve in velikosti.
- Dodajanje večjezične podpore.
- Izvoz CV-ja v PDF.
- Asinhrono nalaganje vsebine za boljšo zmogljivost.

---



