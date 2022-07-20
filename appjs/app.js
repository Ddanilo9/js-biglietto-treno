//chiedo quanti chilometri vuole percorrere
let chilometri = parseInt(prompt('Quanti km vuoi percorrere?'));

//chiedo quanti anni ha
let eta = parseInt(prompt('Quanti anni hai?'));

//prezzo in base ai chilometri da fare
let prezzo = chilometri * 0.21

console.log (chilometri,prezzo,eta);

//sconto <18 20%
let scontoMinorenne = 80

//sconto over 65 40%
let scontoSenior = 60

//prezzo biglietto finale
let prezzoFinale

//calcolo finale
if (eta >= 18 && eta <= 65) {
    prezzoFinale = prezzo   
} if (eta<18) {
    prezzoFinale = (prezzo * scontoMinorenne) /100;   
} if (eta>65) {
    prezzoFinale = (prezzo * scontoSenior) /100;
}

let boh = document.getElementById(ticket);

ticket.innerHTML = prezzoFinale.toFixed(2) + "€";
    
