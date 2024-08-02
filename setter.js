//getter - special method which makes a property readable
//setter - special method which makes a property writeable
//validate and modify a value whenreading/writing a property

//eg1
class Rectangle{
    constructor(width, height){
        this.width=width;
        this.height=height;
    }

    set width(newwidth){
        if(newwidth>0){
            this._width = newwidth; //_width means that it is a private property an cannot be touched at all    
        } else {
            console.error(`Width must be a positive number`);
        }
    }

    set height(newheight){
        if(newheight>0){
            this._height = newheight; //_height means that it is a private property an cannot be touched at all    
        } else {
            console.error(`Height must be a positive number`);
        }
    }
    //if only setters used then the output cannot be read so there comes the need of getters

    get width(){
        return `${this._width.toFixed(1)}cm`;
    }

    get height(){
        return `${this._height.toFixed(1)}cm`;
    }

    get area(){
        return `${(this._width * this._height).toFixed(1)}cm²`;
    }
    
}

const rect= new Rectangle(-1000000, "pizza");
console.log(rect.width);
console.log(rect.height);

const rectangle= new Rectangle(3, 4);
console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);


//eg2
class Person{
    constructor(firstname, lastname, age){
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }

    set firstname(newfirstname){
        if(typeof newfirstname === "string" && newfirstname.length>0){
            this._firstname = newfirstname;
        } else {
            console.error(`First name must be a non-empty string`);
        }
    }

    set lastname(newlastname){
        if(typeof newlastname === "string" && newlastname.length>0){
            this._lastname = newlastname;
        } else {
            console.error(`Last name must be a non-empty string`);
        }
    }

    set age(newage){
        if(typeof newage === "number" && newage>=0){
            this._age = newage;
        } else {
            console.error(`Age must not be a non-negative number`);
        }
    }

    get firstname(){
        return this._firstname;
    }

    get lastname(){
        return this._lastname;
    }

    get fullname(){
        return this._firstname + " " + this._lastname;
    }

    get age(){
        return this._age;
    }
}

const person = new Person(400, 60, "pizza");
console.log(person.firstname);
console.log(person.lastname);
console.log(person.age);

const per = new Person("Vyapti", "Shah", 19);
console.log(per.firstname);
console.log(per.lastname);
console.log(per.age); 
