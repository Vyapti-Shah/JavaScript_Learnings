//inheritance - allows new class to inherit properties of existing class (parent → child)
//            - helps with code reusability

class Animal{
    alive = true;

    eat(){
        console.log(`This ${this.name} is eating`); 
    }

    sleep(){
        console.log(`This ${this.name} is sleeping`); 
    }
}

class Rabbit extends Animal{
    name = "rabbit";

    run(){
        console.log(`This ${this.name} is running`)
    }
}

class Fish extends Animal{
    name = "fish";

    swim(){
        console.log(`This ${this.name} is swimming`)
    }
}

class Hawk extends Animal{
    name = "hawk";

    fly(){
        console.log(`This ${this.name} is flying`)
    }
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

console.log(rabbit.alive);
console.log(fish.alive);
console.log(hawk.alive);

rabbit.eat();
rabbit.sleep();
rabbit.run();

fish.eat();
fish.sleep();
fish.swim();

hawk.eat();
hawk.sleep();
hawk.fly();
