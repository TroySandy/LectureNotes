class Cupcake {
    constructor(batter, icing, cost){
        this.batter = batter;
        this.icing = icing;
        this.cost = cost;
    }

    getDiscription(){
        return `A ${this.cost} ${this.batter} cupcake with ${this.icing} on top`;        
    }
}

class CupcakeShop {
    constructor(location){
        this.location = location;
        this.inventory = [];
        this.cash = 0;
    }
    getStatus(){
        return `The shop currently has $${this.cash} and ${this.inventory.length} cupcakes!`
    }

    bakeBatch(numberOfCupcakes, batter, icing, pricePerCupcake){
        for(let i = 0; i < numberOfCupcakes; i++){
            let newCupCake = new Cupcake(batter, icing, pricePerCupcake);
            this.addToInventory(newCupCake);
        }
    }

    addToInventory(cupcake) {
        this.inventory.push(cupcake);

    }

    sellCupCake(){
        if (this.inventory.length > 0){
            let toSell = this.inventory.pop();
            this.cash = this.cash + toSell.cost;
            return toSell;
        }else{
            return "No Cupcakes for you..."
        }
    }
}

let bakedBakery = new CupcakeShop('Lafayette');
bakedBakery.bakeBatch(13, "Chocolate", "Vanilla", 2.75)
bakedBakery.sellCupCake();
bakedBakery.sellCupCake();
bakedBakery.sellCupCake();
bakedBakery.sellCupCake();
bakedBakery.sellCupCake();
bakedBakery.sellCupCake();
bakedBakery.sellCupCake();
bakedBakery.sellCupCake();
bakedBakery.sellCupCake();
bakedBakery.sellCupCake();
bakedBakery.sellCupCake();
bakedBakery.sellCupCake();
let soldCupcake = bakedBakery.sellCupCake();
console.log(soldCupcake);



let bakedBakeryStatus = bakedBakery.getStatus();


console.log(bakedBakeryStatus);