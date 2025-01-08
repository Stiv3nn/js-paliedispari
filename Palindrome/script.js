//PALINDROMA
//Chiedere all’utente di inserire una parola
//Creare una funzione per capire se la parola inserita è palindroma


//LISTA DELLE PAROLE PALINDROME
//-RADAR
//-ANNA
//-OTTO
//ANGOLO BAR A BOLOGNA etc.....

//Chiedere all’utente di inserire una parola
let userWordPali = prompt("Inserisci una parola per controllare se è palindroma");


// Funzione per verificare se una parola è palindroma
function èPalindroma(word) {
    let reversed = word.split('').reverse().join('');
    return word === reversed;
}


// Controllare e mostrare il risultato
if (èPalindroma(userWordPali)) {
    alert("La parola è palindroma.");
} else {
    alert("La parola non è palindroma.");
}
