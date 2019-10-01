class Ninja{
    constructor(name){
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }

    sayName(){
        console.log("Hi my name is "+this.name+"!");
    }
    showStats(){
        console.log("Name: "+this.name+", Health: "+this.health+", Speed: "+this.speed+", Strength: "+this.strength)
    }
    drinkSake(){
        this.health = this.health + 10;
    }
}