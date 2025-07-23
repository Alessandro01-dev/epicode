//ESERCIZI SUGLI IF: 

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/*
const a = 24;
const b = 13;

if (a < b) {
  console.log(`${a} is less than ${b}`);
} else if (a === b) {
  console.log(`${a} is equal to ${b}`);
} else {
  console.log(`${a} is greater than ${b}`);
};
*/

/*
ESERCIZIO 2
  Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

/*
const num = 11;

if (num < 5) {
  console.log("Tiny");
} else if (num < 10) {
  console.log("Small");
} else if (num < 15) {
  console.log("Medium");
} else if (num < 20) {
  console.log("Large");
} else if (num >= 20) {
  console.log("Huge");
};
*/

//ESERCIZI SUI CICLI: 

/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*/

/*
for (let num = 0; num <= 10; num++) {
  if(num === 3 || num === 8) {
    continue
  };
  console.log(num);
};
*/

/* ESERCIZIO 4
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

/*
for (let num = 0; num <= 15; num++) {
  if (num % 2 === 0) {
    console.log(`${num} is even`);
  } else {
    console.log(`${num} is odd`)
  }
};
*/


//ESERCIZI EXTRA NON OBBLIGATORI

/* ESERCIZIO EXTRA 1
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/*
const num1 = 7;
const num2 = 1;

if (num1 === 8 || num2 === 8 || num1 + num2 === 8 || num1 - num2 === 8) {
  console.log('passed');
};
*/

/* ESERCIZIO EXTRA 2
Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/*
const totalShoppingCart = 80;
const shippingCost = 10;

if (totalShoppingCart < 50) {
  console.log(`${totalShoppingCart + shippingCost}`);
} else {
  console.log(`${totalShoppingCart}`);
}
*/

/* ESERCIZIO EXTRA 3
  Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando, usando l'algoritmo del codice precedente, se le spedizioni siano gratuite oppure no e e calcolando il totale.
*/

/*
const totalShoppingCart = 60;
const shippingCost = 10;
const discountedCart = totalShoppingCart - (totalShoppingCart * 20 / 100);

if (discountedCart < 50) {
  console.log(`${discountedCart + shippingCost}`);
} else {
  console.log(`${discountedCart}`);
}
*/

/*  ESERCIZIO EXTRA 4
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
  Es. se isMale e' vero, il valore di gender deve essere "male"
*/

/*
const isMale = false;
let gender = "";

isMale ? gender = "male" : gender = "female";

console.log(`${gender}`);
*/

/* ESERCIZIO EXTRA 5
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3 (operatore modulo!), stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/

/*
for (let num = 0; num <= 100; num++) {
  if (num % 3 === 0 && num % 5 === 0) {
    console.log("FizzBuzz");
    continue
  } else if (num % 3 === 0) {
    console.log("Fizz");
    continue
  } else if (num % 5 === 0) {
    console.log('Buzz');
    continue
  }
  console.log(num);
};
*/