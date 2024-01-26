/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ["dog", "cat", "hamster", "redfish"];
console.log("Esercizio 1: ");
for (let i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
console.log("Elementi non ordinati", pets);
pets.sort();
console.log("Esercizio 2:", pets);
/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
pets.reverse();
//stampa dell'intero array invertito
console.log("Esercizio 3:", pets);

//stampa di ogni elemento
for (let i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}
/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
let scambio = pets[0];
pets[0] = pets[pets.length - 1];
pets[pets.length - 1] = scambio;
console.log("Esercizio 4:", pets);
/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];

//metodo manuale
cars[0].licensePlate = "dx841zn";
cars[1].licensePlate = "bx266xh";
cars[2].licensePlate = "bj963ns";

//metodo dinamico
let targhe = ["dx841zn", "bx266xh", "bj963ns"];
for (let i = 0; i < cars.length; i++) {
  cars[i].licensePlate = targhe[i];
}

console.log("Esercizio 5:", cars);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
//creato nuovo oggetto
const cars2 = {
  brand: "Fiat",
  model: "Punto",
  color: "grey",
  trims: ["titanium", "st", "active"],
  licensePlate: "gh222nb",
};
//lo inserisco nell'array cars
cars.push(cars2);

//manuale
// cars[0].trims.pop();
// cars[1].trims.pop();
// cars[2].trims.pop();
// cars[3].trims.pop();

// dinamico;
for (let i = 0; i < cars.length; i++) {
  cars[i].trims.pop();
}

console.log("Esercizio 6:", cars);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = [];

//manuale
// justTrims.push(cars[0].trims[0]);
// justTrims.push(cars[1].trims[0]);
// justTrims.push(cars[2].trims[0]);
// justTrims.push(cars[3].trims[0]);

//dinamico
for (let i = 0; i < cars.length; i++) {
  justTrims.push(cars[i].trims[0]);
}

console.log("Esercizio 7:", justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
    */

//prova di charAt
// let ciao = "ciao";
// console.log(ciao.charAt(0), "poi", ciao);

console.log(`Esercizio 8:`);
for (let i = 0; i < cars.length; i++) {
  if (cars[i].color.charAt(0) === "b") {
    console.log(`La ${cars[i].model} è di colore ${cars[i].color} inizia per b quindi: Fizz`);
  } else {
    console.log(`La ${cars[i].model} è di colore ${cars[i].color} non inizia per b quindi: Buzz`);
  }
}
console.log(cars);

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105];

let i = 0;
console.log("Esercizio 9:");
while (numericArray[i] !== 32) {
  console.log(numericArray[i]);
  i++;
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"];
//prova con altri caratteri, usare uno alla volta per provare
//const charactersArray = ["g", "n", "u", "z", "d", "+", "-"];
const posizioni = [];
for (let i = 0; i < charactersArray.length; i++) {
  switch (charactersArray[i]) {
    case "a":
      posizioni.push("1");
      break;
    case "b":
      posizioni.push("2");
      break;
    case "c":
      posizioni.push("3");
      break;
    case "d":
      posizioni.push("4");
      break;
    case "d":
      posizioni.push("5");
      break;
    case "f":
      posizioni.push("6");
      break;
    case "g":
      posizioni.push("7");
      break;
    case "h":
      posizioni.push("8");
      break;
    case "i":
      posizioni.push("9");
      break;
    case "l":
      posizioni.push("10");
      break;
    case "m":
      posizioni.push("11");
      break;
    case "n":
      posizioni.push("12");
      break;
    case "o":
      posizioni.push("13");
      break;
    case "p":
      posizioni.push("14");
      break;
    case "q":
      posizioni.push("15");
      break;
    case "r":
      posizioni.push("16");
      break;
    case "s":
      posizioni.push("17");
      break;
    case "t":
      posizioni.push("18");
      break;
    case "u":
      posizioni.push("19");
      break;
    case "v":
      posizioni.push("20");
      break;
    case "z":
      posizioni.push("21");
      break;
    default:
      posizioni.push("non valido: " + charactersArray[i]);
  }
}
console.log("Esercizio 10:", posizioni);
