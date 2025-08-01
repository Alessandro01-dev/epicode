/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

/*
function crazySum (a, b) {
    if (a === b) {
      return (a + b) * 3
    } else {
      return a + b
    }
}

console.log(crazySum(8, 8));
console.log(crazySum(3, 6));
*/

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

/*
function boundary (a) {
  if (a >= 20 && a <= 100 || a === 400) {
    return true
  } else {
    return false
  }
};

console.log(boundary(14));
console.log(boundary(65));
console.log(boundary(400));
*/

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

/*
function reverseString(string) {
  return string
    .split('')
    .reverse()
    .join('')
};

console.log(reverseString("EPICODE"));
console.log(reverseString("JavaScript"));
*/

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

/*
function upperFirst (string) {
  return string
    .charAt()
    .toUpperCase()
  + string.slice(1)
}

console.log(upperFirst("samuele"));
console.log(upperFirst("rossi"));
*/

/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

/*
function giveMeRandom() {
  return Math.floor(Math.random() * 10) // 0 incluso e 10 escluso
}
console.log(giveMeRandom())
*/
/*
function giveMeRandom() {
  return Math.floor(Math.random() * 11) // 0 e 10 inclusi
}
console.log(giveMeRandom());
*/
/*
function giveMeRandom() {
  return Math.ceil(Math.random() * 10) // 0 escluso e 10 incluso
}
console.log(giveMeRandom());
*/
/*
function giveMeRandom() {
  return Math.ceil(Math.random() * 9) // 0 e 10 esclusi
}
console.log(giveMeRandom());
*/

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/*
function area(l1, l2) {
  return l1 * l2
}
console.log(area(2, 3));
*/

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

/*
function crazyDiff (a) {
    let result = Math.abs(a - 19);
    if (result > 19) {
      result = Math.abs(a - 19) * 3;
    }
    return result
  }

console.log(crazyDiff(25));
console.log(crazyDiff(12));
console.log(crazyDiff(45));
*/

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/*
function codify(string) {
  let result = string + 'code';
  if (string === 'code') {
    result = 'code'
  }
  return result
}

console.log(codify('test'));
console.log(codify('code'));
*/

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/*
function check3and7(num) {
  if (num % 3 === 0 || num % 7 === 0) {
    return true
  } else {
    return false
  }
}
console.log(check3and7(21));
console.log(check3and7(15));
console.log(check3and7(22));
*/

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/*
function cutString(string) {
  return string
    .slice(1, string.length -1)
}

console.log(cutString("ciao"));
console.log(cutString("precipitevolissimevolmente"));
*/