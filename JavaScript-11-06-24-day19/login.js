
import {person} from './export.js'; //one way to imprt 
import { person as myname } from './export.js'; //second way to import 
let {name,age,schoolname}=person;
console.log(person);
// console.log(person.name);
console.log(myname);

import array from './export.js';
console.log(array);


