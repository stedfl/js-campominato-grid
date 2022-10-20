// WORK FLOW

// 1.Prendo il bottone Start 
// 2.Sul bottone start Faccio un evento che al click avvia la funzione init
// 3. faccio un event listner sullo square che al click chiama la funzione click square
  
  
//   funzioni da fare 
//   1 init
//     1. Prendo la value del bottone select con id level game 
//     e la assegno a elemPerRow
//     2. assegno a totalSquare l'elevazione al quadrato di elemperRow.
//     3 Faccio un ciclo for dove i parte da zero ed arriva a totalsquare. Nel ciclo metto la funzione che crea gli elementi create square

//   1 create square 
//     crea elemento div 
//     assegno classe .square con classe name 
//     assegno dimensioni con la funzione calc
//     square.idElement = i+1
//     square.innertext = square.idElement
//     scrivo dentro il div con innertext l'elemento i+1
//     appendo al container l'elemento


//   2 generalcalc
//     assegna alla width ed heigh 100% / element per row

//   3 click square
//     aggiunge classe .change all'elemento square
//     stampo in console il valore del numero interno ovvero console.log(this.idElement)

