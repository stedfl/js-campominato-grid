// WORK FLOW
// 1.MAIN Prendo il bottone Start 
btnStart = document.getElementById("start");
// 2.MAIN Prendo l'elemento container
container = document.querySelector(".container");
// 3 MAIN .Sul bottone start Faccio un evento che al click avvia la funzione init e prende i valori che servono per la funzione, inoltre resetto il contenuto sempre al cick
btnStart.addEventListener ("click", function() {
  const elemPerRow = document.getElementById("level-game").value;
  container.innerHTML = "";
  init(elemPerRow);
})

// FUNZIONE INIT
// 1. assegno a totalBox l'elevazione al quadrato di elemperRow.
// 2. Faccio un ciclo for dove i parte da zero ed arriva a totalBox. Nel ciclo metto la funzione che crea gli elementi Box
function init(elNumb) {
  const totalBox = Math.pow(elNumb, 2);
  for (i = 0; i < totalBox; i++) {
    createBox(i, elNumb)
  }
}

// FUNZIONE CREATEBOX
//  1. creo elemento div 
//  2. assegno classe .box con classe name all'elemento
//  3.  assegno dimensioni con la funzione calc
//  4.  creo una proprietà customizzata dell'elemento a cui 
//      assegno il valore che scrivo dentro: box.idElement = i+1
//  5.  scrivo dentro all'elemento il numero che corrisponde al valore della
//  6.   proprietà customizzata con box.innertext = box.idElement
//  7.  appendo al container l'elemento
function createBox (indexLoop, elNumb) {
  elBox = document.createElement("div");
  elBox.className = "box";
  elBox.style.width = dimensionCalc(elNumb);
  elBox.style.height = dimensionCalc(elNumb);
  elBox.idElement = indexLoop + 1;
  elBox.innerText = indexLoop + 1;
  container.append(elBox);
}

function dimensionCalc(elNumb) {
  return `calc(100% / ${elNumb})`;
}

// 4.MAIN faccio un event listner sullo square che al click richiama la funzione click box
  
// FUNZIONE CLICKBOX
//     aggiunge classe .change all'elemento
//     stampa in console il valore di idElement con console.log(this.idElement)

