// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
function giveName(name){
    for(let i = 0; i<array.length ; i++){
        if(array[i].nome == ""){
            array[i].nome = name;
            return 
        }
    }
}
function randomIntBetween(numOne, numTwo){
    const flagUno = isNaN(numOne);
    const flagDue = isNaN(numTwo);
    let max, min;
    if(!flagUno && !flagDue){
         if(numOne>=numTwo){
            max= numOne;
            min = numTwo;
         }else{
            max = numTwo;
            min = numOne;
         }
         const random = Math.floor(Math.random()*(max-min+1) +min);
         return random
    }else{
         return("non un numero")
    }
}

function giveFouls(){
    for(let i = 0; i<array.length ; i++){     
        if(array[i].falliSubiti == 0){
            array[i].falliSubiti = randomIntBetween(1, 400);
            return 
        }
    }
}
function givePoints(){
    for(let i = 0; i<array.length ; i++){
        if(array[i].puntiFatti == ""){
            array[i].puntiFatti = randomIntBetween(0, 114);
            return 
        }
    }
}
const array = [
    squadOne={
      nome : "",
      puntiFatti : 0, 
      falliSubiti : 0
    },
    squadTwo={
        nome : "",
        puntiFatti : 0, 
        falliSubiti : 0
    },
    squadThree={
        nome : "",
        puntiFatti : 0, 
        falliSubiti : 0
    },
    squadFour={
        nome : "",
        puntiFatti : 0, 
        falliSubiti : 0
    }
]

const form = document.getElementById("form");


form.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("squad-name").value;
    document.getElementById("squad-name").value = "";
    giveName(name);
    giveFouls();
    givePoints();
    console.log(array);
});