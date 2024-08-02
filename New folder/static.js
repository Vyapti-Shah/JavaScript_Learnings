//static - keyword that defines properties or methods that belong to a class itself rather than the object created from the class (class owns anything static, not the objects)


//eg1
class MathUtil{
    static PI = 3.14159;

    static getDiameter(radius){
        return radius * 2;
    }

    static getCircum(radius){
        return 2 * this.PI *radius;
    }

    static getArea(radius){
        return this.PI * radius * radius;
    }

}
//const mathUtil1= new MathUtil() → object
console.log(MathUtil.PI); //as static is used we can directly use class name to execute the PI an no object is need for it
console.log(MathUtil.getDiameter(10));
console.log(MathUtil.getCircum(10));
console.log(MathUtil.getArea(10));


//eg2
class User{
    static userCount = 0;

    constructor(username){
        this.username = username;
        User.userCount++;
    }
    
    sayhello(){
        console.log(`Hello! username is ${this.username}`);
    }

    static getUserCount(){
        console.log(`There are ${User.userCount} users online`);
    }
}

const user1 = new User("Vyapti");
const user2 = new User("Sejal");
const user3 = new User("Sanjay");

console.log(user1.username);
console.log(user2.username);
console.log(user3.username);

user1.sayhello();
user2.sayhello();
user3.sayhello();

console.log(user1.userCount); //output undefined becoz User does not have userCount as a property it(userCount) is static so it can only be operated by class (User) and not any object (user1)
console.log(User.userCount);
User.getUserCount();

