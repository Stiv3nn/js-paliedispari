//Pari e Dispari
//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
//Sommiamo i due numeri
//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
//Dichiariamo chi ha vinto.

let sceltaUseers = prompt("scegli tra pari o dispari");
const numeroUser  = parseInt(prompt("scegli un numero tra 1 e 5"));

//console.log("Hai scelto:",sceltaUseers, numeroUser);  //DEBUG

function pcNumRandom1To5() {
    const numeroGenerato = Math.floor(Math.random() * 5) + 1;
    return numeroGenerato;
}

let sommaTotale = numeroUser + pcNumRandom1To5();
console.log("Somma dei due numeri:", sommaTotale);

function pariODispari(sommaTotale) {

    if(sommaTotale % 2 === 0) {
        sommaTotale = "pari";
    }   else {
        sommaTotale = "dispari";
    }   

    return sommaTotale;
    
}

console.log("La somma è:", pariODispari(sommaTotale));
