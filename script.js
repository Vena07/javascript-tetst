// Pole pro ukládání názvů zboží a jejich cen
let zbozi = [];
let ceny = [];
let zboziID = 0; // Proměnná pro generování unikátních ID pro každé zboží

// Funkce pro přidání položky do seznamu
function pridani() {
    const input = document.getElementById('app'); // Získání reference na vstupní pole
    const seznam = document.getElementById("seznam"); // Získání reference na seznam

    if (input.value.trim() === "") {
        alert("Zadejte prosím název zboží."); // Upozornění, pokud je vstupní pole prázdné
        return;
    }

    zboziID++; // Inkrementace ID pro nové zboží
    const pridani = document.createElement('li'); // Vytvoření nového seznamového prvku

    // Nastavení ID a textu prvku
    pridani.id = zboziID;
    pridani.className = 'item'; // Přidání třídy k seznamovému prvku

    // Vytvoření názvu zboží
    const nazev = document.createElement('p');
    nazev.textContent = input.value; // Nastavení textu na zadanou hodnotu

    // Vytvoření náhodné ceny
    const cena = document.createElement('p');
    const cislo = Math.floor(Math.random() * (100 - 10 + 1)) + 10; // Generování náhodné ceny mezi 10 a 100
    cena.textContent = `${cislo} Kč`; // Nastavení textu na náhodnou cenu
    ceny.push(cislo); // Přidání ceny do pole cen

    // Vytvoření tlačítka pro smazání
    const tlacitko = document.createElement('button');
    tlacitko.textContent = 'x'; // Nastavení textu tlačítka
    tlacitko.className = 'smazat'; // Přidání třídy k tlačítku

    // Přiřazení funkce na smazání
    tlacitko.onclick = function() {
        const index = ceny.indexOf(cislo); // Nalezení indexu ceny v poli cen
        if (index > -1) {
            ceny.pop(index, 1); // Odstranění ceny z pole cen
        }
        seznam.removeChild(pridani); // Odstranění seznamového prvku
        cenacelkem(); // Aktualizace celkové ceny
    }

    // Přidání prvků do seznamového prvku a následně do seznamu
    pridani.appendChild(nazev);
    pridani.appendChild(cena);
    pridani.appendChild(tlacitko);
    seznam.appendChild(pridani);

    input.value = ''; // Vymazání vstupního pole
    cenacelkem(); // Aktualizace celkové ceny
}

// Funkce pro zobrazení celkové ceny
function cenacelkem() {
    const celkem = document.getElementById("cena"); // Získání reference na element pro zobrazení celkové ceny
    const soucet = ceny.reduce((acc, current) => acc + current, 0); // Sečtení všech cen v poli cen
    celkem.innerText = `${soucet} Kč`; // Zobrazení celkové ceny
}

// Funkce pro smazání všech položek ze seznamu
function smazat(){
    zbozi = [];
    ceny = [];
    const seznam = document.getElementById("seznam"); // Získání reference na seznam
    seznam.innerHTML = ""; // Vyprázdnění seznamu
    const celkem = document.getElementById("cena"); // Získání reference na element pro zobrazení celkové ceny
    celkem.innerText = "0 Kč"; // Resetování celkové ceny
}

// Smyčka pro testovací přidání položek do seznamu
for (let index = 0; index < zbozi.length; index++) {
    pridani();
}
