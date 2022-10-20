// WORK FLOW
// 1.MAIN Prendo il bottone Start 
btnStart = document.getElementById("start");
// 2.MAIN Prendo l'elemento container
container = document.querySelector(".container");
// 3.MAIN Sul bottone start faccio un evento che al click avvia la funzione init e prende i valori che servono per la funzione, inoltre resetto il contenuto del container sempre al cick
btnStart.addEventListener ("click", function() {
  const elemPerRow = document.getElementById("level-game").value;
  container.innerHTML = "";
  init(elemPerRow);
})

// FUNZIONE INIT
// 1. Assegno a totalBox l'elevazione al quadrato di elemperRow.
// 2. Faccio un ciclo for dove i parte da zero ed arriva a totalBox. Nel ciclo metto la funzione che crea gli elementi Box inserendo i parametri che le servono
function init(elNumb) {
  const totalBox = Math.pow(elNumb, 2);
  for (i = 0; i < totalBox; i++) {
    createBox(i, elNumb)
  }
}

// FUNZIONE CREATEBOX
//  1. Creo l' elemento div 
//  2. Assegno all'elemento la classe .box con className
//  3. Assegno le dimensioni con la funzione calc che dipende dal numero di
//     elementi per riga
//  4. Creo una proprietà customizzata dell'elemento a cui 
//      assegno il valore che scrivo dentro
//  5.  Scrivo dentro all'elemento il numero che corrisponde al valore della
//     proprietà customizzata con box.innertext = box.idElement
//  7. Appendo al container l'elemento
//  8. Aggiungo all'evento click sull'elemento la funzione ClickBox
function createBox (indexLoop, elNumb) {
  elBox = document.createElement("div");
  elBox.className = "box";
  elBox.style.width = dimensionCalc(elNumb);
  elBox.style.height = dimensionCalc(elNumb);
  elBox.idElement = indexLoop + 1;
  elBox.innerText = elBox.idElement;
  container.append(elBox);
  elBox.addEventListener("click", clickBox);
}

function dimensionCalc(elNumb) {
  return `calc(100% / ${elNumb})`;
}

  
// FUNZIONE CLICKBOX
// 1. Stampo in console il valore di idElement dello specifico elemento cliccato tramite this che restituisce l'elemento che ha scatenato l'evento
// 2 Aggiungo all'elemento la classe .change che mi colora i quadrati al click
function clickBox(event){
  console.log(this.idElement); 
  this.classList.add("change");
}
