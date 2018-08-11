// Write your JS here

// An object called hero with 5 keys 
//with various datat-types(string, bolean, array, number) 
//and the last one equals a nested array

let hero = {
    name: 'Sil',
    heroic: true,
    inventory: [],
    health: 10,
    weapon: {
        type: '',
        damage: 2
    }
};


// Defined the funtions rest, pickUpItem, equipWeapon
// function rest with no paramerters takes an object ne as an argument named 
// numberHealth in the numberHealth object the hero value of health will
// be reassinged to 2. 
// I was trying to reassign the health hero of the previous object in the object of 
// function rest but it is not working. 


function rest() {
// rest takes an object as an argument so made an new object 
// and then tryed to reassign the value of hero health from the previous global object(hero)
   let numberHealth = {
    health2: hero.health = 2 
    }
 
//   let numberHealth = {
//   newhealth = hero.health[2] 
//   hero.health = 2 
//   }

    return numberHealth // here I return the object numberHealth<-(wich is not working) 
    const checkRest = document.getElementsByClassName('inn').addEventListener("click"); //calling the  
}



function pickUpItem() {

    let pickUpHero = {
     weapon: ['name', 'heroic', 'inventory', 'health', 'weapon']; // array stored in object called 
    }

    let seccondObject = {

    }
    
    const chekDagger = document.getElementsByClassName('dagger')

}

function equipWeapon() {
    let pickUpHero = []

    if (pickUpHero = 0){
        console.log()
    }
}



