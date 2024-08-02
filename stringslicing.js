//string slicing - creating a substring from a portion of another string
const fullname="Vyapti Shah";
const firstname=fullname.slice(0,6);
console.log(firstname);
const lastname=fullname.slice(7,11);
console.log(lastname);
const firstchar=fullname.slice(0,1);
console.log(firstchar);
const secondlastname=fullname.slice(-2);
console.log(secondlastname);

const full="Sejal Shah";
const first=full.slice(0,full.indexOf(" "));
console.log(first);
const last=full.slice(full.indexOf(" ")+1);
console.log(last);

const email="vyaptishah134@gmail.com";
let user=email.slice(0, email.indexOf("@"));
console.log(user);
let extension=email.slice(email.indexOf("@")+1);
console.log(extension);