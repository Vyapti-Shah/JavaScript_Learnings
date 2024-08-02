//class - (ES6 feature) provides a more structured and cleaner way to work with objects compared to constructor functions
//  egs - static, keyword, encapsulation, inheritance

class Product{ //class is reuseable
    constructor(name, price){
        this.name= name;
        this.price= price;
    }

    dispProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: ${this.price.toFixed(2)}`);
    }

    calcTot(salesTax){
        return this.price + (this.price * salesTax);
    }
}

const salesTax = 0.05;

const product1 = new Product ("Top", 19.99);
const product2 = new Product ("Dress", 50.50);
const product3 = new Product ("Jumpsuit", 100);

product1.dispProduct();
const tot1= product1.calcTot(salesTax);
console.log(`Total Price (exclusive 5% tax) : ${tot1.toFixed(2)}`);

product2.dispProduct();
const tot2= product2.calcTot(salesTax);
console.log(`Total Price (exclusive 5% tax) : ${tot2.toFixed(2)}`);

product3.dispProduct();
const tot3= product3.calcTot(salesTax);
console.log(`Total Price (exclusive 5% tax) : ${tot3.toFixed(2)}`);
