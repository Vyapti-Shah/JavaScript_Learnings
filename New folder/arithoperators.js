//arithmatic operators= operands(values,variables,etc)
//                      operators(+,-,*,/,%,etc)
//                      eg: 11 = x + 5; (where 11 and 5 are values, x is a variable and + and = are operators)

let students=30;
console.log(students);
let students1=30;
students1=students1-1;
console.log(students1);
let students2=30;
student2= students2*1;
console.log(students2);
let students3=40;
student3= students3/1
console.log(students3);

//for modulus operator we have to make a new variable 
let students4=31; //variable1--students4
let exstudent4= students4%7;//variable--exstudent4
console.log(exstudent4);

let students5=30;
students5= students5+1;//or students5+=1; or students5++;
console.log(students5);
let student6=20;
student6=student6**2;//square 
console.log(student6);
let student7=20;
student7=student7**3;//cube
console.log(student7);

/*operator precedence
  1.perinthesis ()
  2.exponents
  3.multiplication, division, modulo
  4.addition, subtraction 
*/
let result= 1 + 2 * 3 + 4 ** 2;
console.log(result);
let res= 12 % 5 + 8 / 2;
console.log(res);
let r= 6 / 2 ** (2 + 5);
console.log(r);