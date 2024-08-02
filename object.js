// object - a collection of related properties and/or methods
//        - can represent real world objects (people, products, places)
//formula - {key:value,
//          function()}

//people object
const person1={
    firstname:"Vyapti",
    middlename:"Sanjay",
    lastname:"Shah",
    age: 19,
    hasJARVIS:false,
    sayhello: function(){
        console.log(`I am ${this.firstname} ✌🏻`)
    },
    eat: () => {console.log(`${person1.firstname} likes eating her mumma's homemade burger`)}
}

const person2={
    firstname:"Tony",
    middlename:"Howard",
    lastname:"Stark",
    age: 59,
    hasJARVIS:true,
    sayhello: () => console.log(`I am Iron Man 🫰🏻`),
    eat: () => console.log(`Iron Man likes eating cheese burger`)
}

person1.sayhello();
person1.eat();
person2.sayhello();
person2.eat();