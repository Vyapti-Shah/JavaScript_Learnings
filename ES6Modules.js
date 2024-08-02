//ES6Modules - An external file that contains reusable code that an be imported into javaScript files.
//           - Write reusable code for many different apps
//           - Can contain variables, classes, functions ... and more 
//           - Introduced as part of ECMAScript  2015 update

import {PI, getCircumference, getArea, getVol} from './ES6ModulesmathUtil.js';

console.log(PI);

const circumference = getCircumference(10);
const area = getArea(10);
const volume = getVol(10);

console.log(`${circumference.toFixed(2)}cm`);
console.log(`${area.toFixed(2)}cm²`);
console.log(`${volume.toFixed(2)}cm³`);