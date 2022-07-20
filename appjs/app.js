//chiedo quanti chilometri vuole percorrere
let chilometri = parseInt(prompt('Quanti km vuoi percorrere?'));
console.log (chilometri);

//chiedo quanti anni ha
let eta = parseInt(prompt('Quanti anni hai?'));
console.log (eta);

//prezzo in base ai chilometri da fare
let prezzo = chilometri * 0.21
console.log (prezzo);

//sconto <18
let scontoMinorenne = 0.2

//sconto over 65
let scontoSenior = 0.4

//prezzo biglietto finale

let prezzoFinale