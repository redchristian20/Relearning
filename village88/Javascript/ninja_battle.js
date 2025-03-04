//Ninja 1 attribs
var ninja1 = 
{
    hp : 100,
    strength : 15,
    attack: function() 
    {
        return Math.floor(Math.random() * (15 - 0) + 0);
    }
}

//Ninja 2 attribs
var ninja2 = 
{
    hp : 150,
    strength : 10,
    attack: function() 
    {
        return Math.floor(Math.random() * (10 - 0) + 0);
    }
}

//Battle
for (let i =  1; i <= 10; i++) 
{
    console.log("=== Round "+ i +" ===");
    let damage1 = ninja1.attack(), damage2 = ninja2.attack();
    ninja2.hp = ninja2.hp-damage1;
    console.log("Ninja1 attacks Ninja2 and does a damage of "+ damage1+"!", "Ninja1 health: "+ninja1.hp+ ".", "Ninja2 health: "+ninja2.hp);
    ninja1.hp = ninja1.hp-damage2;
    console.log("Ninja2 attacks Ninja1 and does a damage of "+damage2+"!", "Ninja1 health: "+ninja1.hp+ ".", "Ninja2 health: "+ninja2.hp);
}

var result = ninja1.hp > ninja2.hp ? "Ninja1 wins!" 
            :ninja1.hp<ninja2.hp ? "Ninja2 wins!"
            : "Draw!!";
console.log(result);