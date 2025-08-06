// Il tuo compito è creare un sito e-commerce per Smartphones. 
// L'homepage che stai per creare sarà la vetrina dei prodotti disponibili, con qualche informazione per ciascun prodotto. 
// Non sono richieste funzionalità di carrello/cassa.
// - Completa gli esercizi dall'1 al 6 SOLAMENTE con HTML
// - Completa gli altri esercizi con JS

//ESERCIZI IN HTML

// ESERCIZIO 1: Inserisci un tag h1 con il nome del tuo negozio
// ESERCIZIO 2: Aggiungi una tabella con i 5 prodotti più in vista del tuo negozio
// ESERCIZIO 3: Aggiungi per ogni prodotto un'immagine, un titolo, una descrizione e un prezzo
// ESERCIZIO 4: Per ogni elemento della tabella aggiungi un link di Amazon al prodotto esistente
// ESERCIZIO 5: Aggiungi un footer con il nome e l'indirizzo del tuo negozio
// ESERCIZIO 6: Aggiungi un campo testuale in cui l'utente può lasciare un commento su un prodotto (al momento non serve inserire nessuna "vera" funzionalità di POST/salvataggio!)

//ESERCIZI IN JS
// ESERCIZIO 7: Scrivi una funzione per cambiare il contenuto del tag h1 in qualcos'altro
// ESERCIZIO 8: Scrivi una funzione per cambiare il colore di background della pagina
// ESERCIZIO 9: Scrivi una funzione per cambiare l'indirizzo presente nel footer in un altro, fittizio
// ESERCIZIO 10: Scrivi una funzione per aggiungere una classe CSS ad ogni link Amazon della tabella
// ESERCIZIO 11: Scrivi una funzione per aggiungere/togliere una classe CSS a tutte le immagini della tabella; questa classe deve modificare la visibilità/invisibilità dell'immagine
// ESERCIZIO 12: Scrivi una funzione per cambiare il colore del prezzo di ogni prodotto in uno differente, ogni volta che viene invocata

const title = document.querySelector("h1")
const productsCardContainer = document.querySelector(".products-card-container")
const body = document.querySelector("body")
const address = document.querySelector("footer div")
const footerButton = document.querySelector("footer button")
const cardLinks = document.querySelectorAll(".products-card a")
const buyItButtons = document.querySelectorAll(".products-card button")
const cardImgs = document.querySelectorAll(".products-card img")
const hideImagesButton = document.querySelector(".hide-images-button")
const cardPrices = document.querySelectorAll(".products-card-price")


// ESERCIZIO 7

function changeTitle() {
  title.innerText = "Prezzi super scontati!"
}

title.addEventListener("mouseenter", () => {
  changeTitle();
})

function restoreTitle() {
  title.innerText = "ClickPhone"
}

title.addEventListener("mouseleave", () => {
  restoreTitle();
})

// ESERCIZIO 8

function changeBackgoundColor() {
  document.body.classList.add("js-bg-color");
}

productsCardContainer.addEventListener("click", () => {
  changeBackgoundColor();
})

// ESERCIZIO 9

function changeAddress() {
  address.innerText = "via Napoli 121 - Torino"
}

footerButton.addEventListener("click", () => {
  changeAddress();
})

// ESERCIZIO 10

function addClassToLinks() {
  cardLinks.forEach(cardLink => {
    cardLink.classList.toggle("js-products-card-link")
  })
}

buyItButtons.forEach(button => {
  button.addEventListener("click", addClassToLinks)
})

// ESERCIZIO 11

function hideImages() {
  cardImgs.forEach(cardImg => {
    cardImg.classList.toggle("js-products-card-img")
  })
}

hideImagesButton.addEventListener("click", hideImages)

// ESERCIZIO 12

function changePricesColor() {
  cardPrices.forEach(cardPrice => {
    cardPrice.style.color = ('#' + Math.floor(Math.random() * 16777215).toString(16))
  })
}

cardPrices.forEach(cardPrice => {
  cardPrice.addEventListener("click", changePricesColor)
})