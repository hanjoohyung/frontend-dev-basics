// 1. unnamed export 모듈에서 대상을 하나 import할 때에는 이름을 지정해주어야 한다.
import myFunction from './ex08.01.mjs';
import myObject from './ex08.02.mjs';

console.log(myFunction(10, 20));
console.log(myObject.add(10, 20));
console.log(myObject.substract(10, 20));

// 2. named export는 import 대상이 다수가 될 수 있기 때문에 하나의 특정 이름으로 받을 수가 없다.
// import m from './ex08.03.mjs'; <-- 이렇게는 사용하면 안된다. 이거 대신 * as ~ 를 사용
import * as m from './ex08.03.mjs';

console.log(m.add(10, 20));
console.log(m.substract(10, 20));

// 3.
import {add, substract} from './ex08.04.mjs';

console.log(add(20, 60));
console.log(substract(20, 60));

// 4.
import math, {add, substract} from './ex08.05.mjs';

console.log(math.add(20, 10), math.substract(10, 20));
console.log(add(30,20), substract(50, 30));
