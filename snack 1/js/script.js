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

for(let key in bikeArray){
    const app = bikeArray[key]; 
    for(let key in app){
        console.log(key);
        console.log(app[key]);
    }
}
