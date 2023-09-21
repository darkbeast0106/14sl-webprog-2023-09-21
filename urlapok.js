const lista = [];

document.addEventListener("DOMContentLoaded", () => {
    const urlap = document.forms["regisztracios_urlap"];
    urlap.addEventListener("submit", (event) => {
        /*
            Alapértelmezetten az űrlap elküldésre kerül, a weboldal újratöltődik
            Ezt az alapértelmezett viselkedést letiltjuk, hogy javascript kóddal dolgozhassuk fel az űrlapot.
        */
        event.preventDefault();
        // Adatok lekérdezése
        const nev = urlap["nev"].value;
        const email = urlap["email"].value;
        const nem = urlap["nem"].value;
        const vegzettseg = urlap["vegzettseg"].value;
        const honnan = [];
        const honnan_checkboxok = urlap["honnan"];
        honnan_checkboxok.forEach(checkbox => {
            if (checkbox.checked) {
                honnan.push(checkbox.value);
            }
        });
        // Adatok ellenőrzése
        let mindent_kitoltott = true;
        if (nev.lenght == 0) {
            window.alert("A név megadása kötelező");
            mindent_kitoltott = false;
        }

        if (email.lenght == 0) {
            window.alert("Az email megadása kötelező");
            mindent_kitoltott = false;
        }

        if (nem.lenght == 0) {
            window.alert("A nem kiválasztása kötelező");
            mindent_kitoltott = false;
        }

        if (vegzettseg.lenght == 0) {
            window.alert("Az iskolai végzettség kiválasztása kötelező");
            mindent_kitoltott = false;
        }

        // Adatokból készített objektum hozzáadása a listához, ha minden kitöltve
        if (mindent_kitoltott) {
            const adatok = {
                nev: nev,
                email: email,
                nem: nem,
                vegzettseg: vegzettseg,
                honnan: honnan
            };
            lista.push(adatok);
            console.log(lista);
        }
    });
});