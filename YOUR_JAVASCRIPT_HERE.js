// Write your JS here

// const{ expect } = chai???
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
// function rest with no paramerters takes an object ne as an argument named health


function rest() {
    function health () {
        const creature2  = {health: 2} 
        const creature4 = {health: 4}

        rest(creature2)
        rest(creature4)
   }
    
    function testC() {
        const creature = {}
        const outPut = rest(creature)
    }
}

function UIforRest() {
  function idInn() {
    cosnt innUI = document.getElementById('inn').addEventListener("...");
  }

function clickHealth(){
        hero.health = 8
        const checkRest = document.getElementsByClassName('inn').addEventListener("click"); 
    }           
}


function pickUpItem() {
    function heroPickUp(){
        const newHero = {
            const object = {}
            const hero = {
                inventory: ['weapon1','weapon2', 'weapon3', 'weapon4']
            }
            pickUpItem(hero, object)
            testHero.inventory[1]
        }    
    }
}

function uiPickUp(){
    imgDagger function(){
        const innUI = docment.getElementById('dagger')
    }
}

function weaponClicked(){
    const inventoryCount = hero.inventory.length
    const innUI = docment.getElementById('dagger').addEventListener("click");
}


function equipWeapon() {
    
        function changeWeapon() {
            function() {
            const testHero = {
                    weapon: {
                    type: 'sword',
                    deamge: 0
                }
             }
             const testWeapon = testHero.weapon
             const inventoryWeapon = testHero.inventory[0]
             equipWeapon(testHero)
        }
    
        let pickUpHero = []
    
    
function(){
    
    const testHero = { 
        weapon: { 
            type: 'sword',
            damage: 5 }, 
            inventory: [] 
    }

    const testWeapon = testHero.weapon
    equipWeapon(testHero)
    testHero.weapon = testWeapon
    }
}


function uiEquipWeapon() {
    function(){
        const bagUI = document.getElementsByClassName('bag')
    }

    function(){
        const testWeapon = {
            type: 'test',
            deamge: 0
        }
        hero.inventory[0] = testWeapon
        let bagClicked = document.getElementById('bag').addEventListener("click");
        hero.weapon = test.weapon
        if(hero){
            hero.inventory = []
        }
    }
}


