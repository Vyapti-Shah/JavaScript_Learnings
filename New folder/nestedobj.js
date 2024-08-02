//nested objects - Objects inside of other Objects
//               - Allows you to represent more complex data structures
//               - Child object is enclosed by a Parent object
//               - Person{Person{Address}, ContactInfo{}}
//               - ShoppinCart{Keyboard{}, Mouse{}, Monitor{}}

const person = {
    fullname: "Vyapti Shah",
    age: 19,
    isStudent: true,
    hobbies: ["coding", "dancing", "cooking"],
    address: {
        street: "C/401 Jai SiddhiVinayak CHS",
        city: "Mumbai",
        country: "Maharashtra"
    }
}
console.log(person.fullname);
console.log(person.age);
console.log(person.isStudent);
console.log(person.hobbies);
console.log(person.hobbies[1]);
console.log(person.address.city);
console.log(person.address.country);

for(const property in person.address){
    console.log(person.address[property]);
}

class Person{
    constructor(name1, age1, ...address1){
        this.name1 = name1;
        this.age1 = age1;
        this.address1 = new Address(...address1);
    }
}

class Address{
    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person1 = new Person("Vyapti", 19, "C/401 Jai SiddhiVinayak CHS", "Mumbai", "Maharashtra");
const person2 = new Person("Sachi", 16, "B/1101 Neel Tower", "Mumbai", "Maharashtra");
const person3 = new Person("Krisha", 19, "A/101 Ashiyana Tower", "Mumbai", "Maharashtra");
console.log(person1);
console.log(person2);
console.log(person3);