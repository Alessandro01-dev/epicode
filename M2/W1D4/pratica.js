/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* I principali datatype in JavaScript sono:
- numeri
- stringhe
- booleani

Questo è un esempio di variabile che contiene un numero:

let numberVariable = 34;

Questo è un esempio di variabile che contiene una stringa:

let stringVariable = "this is a string";

Questo è un esempio di variabile che contiene un boolean:

let booleanVariable = true;

Il datatype numero è un valore che può essere scritto soltanto con caratteri numerici e rappresenta un vero e proprio numero matematico. Insieme agli operatori aritmetici (+, -, *, /, %) ci permette di fare delle operazioni matematiche.

Il datatype stringa è una sequenza di caratteri alfanumerici e di simboli racchiusi all'interno di doppi o singoli apici (o backtick).

I datatype booleani sono dei valori logici (sono solo due: true e false). Ci permettono di verificare se un'operazione matematica o logica è vera o è falsa.
*/

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

/*
Un oggetto è un tipo strutturale di JavaScript. A differenza dei datatype numero, stringa e boolean, un oggetto ha un contenuto più articolato. Esso è infatti una raccolta di parole-chiave e valori. Con un oggetto, in JavaScript, si può rappresentare un oggetto reale in forma di dati. 

Un esempio potrebbe essere un qualsiasi articolo commerciale con parole-chiave come modello, prezzo, colore, dimensione, etc. e i suoi rispettivi valori.
*/

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/*
Creo due variabili che contengono un valore numerico:

const firstNumber = 45;
const secondNumber = 55;

Faccio la somma delle variabili:

const sum = firstNumber + secondNumber;
*/

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/*
let x = 12; 
*/

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/*
const name = 'Alessandro';
*/

/* ESERCIZIO 6
 Crea un oggetto di Javascript che ti rappresenti (come proprietà usa nome, cognome e hobby)
*/

/*
const myObject = {
  name: 'Alessandro',
  surname: 'Aronica',
  age: 34,
  nationality: 'italian',
  hobby: 'coocking'
};
*/

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

/*
Creo le variabili e assegno loro le stringhe:

const name1 = "john";
const name2 = "John";

Verifico che sono diverse (l'operazione risulta false):

console.log(name1 === name2);

Associo il metodo .toLowerCase a entrambe le variabili per verificare che sono uguali quando le stringhe al loro interno vengono trasformate in lowercase (il risultato è true):

console.log(name1.toLowerCase() === name2.toLowerCase());
*/