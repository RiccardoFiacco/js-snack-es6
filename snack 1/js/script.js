// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.
const bikeArray = [
    bikeOne={
        nome:"draisina",
        peso:100
    },
    bikeTwo={
        nome:"velocipede",
        peso:90
    },
    bikeThree={
        nome:"biciclo ",
        peso:80
    },
    bikeFour={
        nome:"Ariel Penny-Farthing",
        peso:67
    }
]
let max = 0;
for(let i=0;i<bikeArray.length; i++){
    const app = bikeArray[i].peso; 
    console.log(app)
    if(max<app){
        max= app
    }
}

const msg = document.getElementById("print");
msg.innerText = "il peso maggiore tra le bici è "+max;
