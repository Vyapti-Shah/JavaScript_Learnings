//super - keyword is used in class to call the constructor or access the properties and methods of a parent class(superclass)
//      - this = the object
//      - super = the parent

//ex1
class Animal{
    constructor(){

    }
}

class Rabbit extends Animal{
    constructor(name, age, runSpeed){//if we don't put super leyword it will show error as Uncaught Reference Error saying to call super before accessing this
        super();
        this.name = name;
        this.age = age;
        this.runSpeed = runSpeed;
    }
}

class Fish extends Animal{
    constructor(name, age, swimSpeed){ 
        super();
        this.name = name;
        this.age = age;
        this.swimSpeed = swimSpeed;
    }
}

class Hawk extends Animal{
    constructor(name, age, flySpeed){
        super();
        this.name = name;
        this.age = age;
        this.flySpeed = flySpeed;
    }
}

const rabbit = new Rabbit("rabbit", 1, 25+"km/s");
const fish =new Fish("fish", 2, 12+"km/s");
const hawk = new Hawk("hawk", 3, 50+"km/s");

console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.runSpeed);

console.log(fish.name);
console.log(fish.age);
console.log(fish.swimSpeed);

console.log(hawk.name);
console.log(hawk.age);
console.log(hawk.flySpeed);


//ex2
class Animal1{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    move(speed){
        console.log(`This ${this.name} moves at a speed of ${speed} km/h`);
    }
}

class Rabbit1 extends Animal1{
    constructor(name, age, runSpeed){//if we don't put super leyword it will show error as Uncaught Reference Error saying to call super before accessing this
        super(name, age);
        this.runSpeed = runSpeed;
    }
    run(){
        console.log(`This ${this.name} can run`);
        super.move(this.runSpeed);
    }
}

class Fish1 extends Animal1{
    constructor(name, age, swimSpeed){ 
        super(name, age);
        this.swimSpeed = swimSpeed;
    }

    swim(){
        console.log(`This ${this.name} can swim`);
        super.move(this.swimSpeed);
    }
}

class Hawk1 extends Animal1{
    constructor(name, age, flySpeed){
        super(name, age);
        this.flySpeed = flySpeed;
    }
    
    fly(){
        console.log(`This ${this.name} can fly`);
        super.move(this.flySpeed);
    }
}

const rabbit1 = new Rabbit1("Rabby", 11, 30+"km/s");
const fish1 =new Fish1("fishy", 12, 10+"km/s");
const hawk1 = new Hawk1("hawkyy", 13, 60+"km/s");

console.log(rabbit1.name);
console.log(rabbit1.age);
console.log(rabbit1.runSpeed);
rabbit1.run();

console.log(fish1.name);
console.log(fish1.age);
console.log(fish1.swimSpeed);
fish1.swim();

console.log(hawk1.name);
console.log(hawk1.age);
console.log(hawk1.flySpeed);
hawk1.fly();