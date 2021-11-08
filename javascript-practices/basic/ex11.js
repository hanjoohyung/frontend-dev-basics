/**
 * Array Method
 */

var color = ['black','white', 'yellow'];
var fruits = ['apple','mango','banana'];

// concat
var a1 = fruits.concat(color);

console.log(a1);

// pop, push : stack 지원
var colors = color.pop(); // 제일 마지막거를 추출해냄
console.log(colors);
console.log(color);

color.push('red'); // 제일 마지막으로 집어넣음
console.log(color);

// join
var str = fruits.join(":"); // 배열 칸마다 집어넣어줌
console.log(str);

// reverse
console.log(fruits); // 한칸씩 이동
fruits.reverse();
console.log(fruits);

// shift
var number = [10,30,20,50,40,60]; // 0번에 있는 것을 뽑아냄
var numbers = number.shift();
console.log(number,numbers);

// sort
number.sort(); // 숫자 크기별로 정렬
console.log(number);

// slice
var number = number.slice(1, 3); // 앞에 수에 해당하는 것과 뒤에수 만큼떨어진 것을 뽑음
console.log(number);

// splice
// index부터 count개를 삭제 후 삭제된 요소를 반환
console.log(fruits);
var fruit = fruits.splice(0/** index*/, 2/** count*/);
console.log(fruit,fruits);

var a1 = [0,1,2,3,4];
var a2 = a1.splice(1,3,10); // 1부터 3개를 잘라내고 10을 삽입
console.log(a2,a1);

// a1.removeAt(1)
var a1 = [0,1,2,3,4];
var a2 = a1.splice(1,1);
console.log(a2,a1);

// a1.insertAt(1,10)
var a1 = [0,1,2,3,4];
var a2 = a1.splice(1,0,10);
console.log(a2,a1);