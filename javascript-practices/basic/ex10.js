/*
배열
*/

// 1. 내장객체(생성자 함수)
console.log("=========생성 1: 내장객체(생성자 함수)=========");

var a1 = new Array();
console.log(typeof(a1), a1 instanceof Array, a1.length);

// 배열을 정의할때 크기 지정은 큰 의미가 없다.
// 동적으로 배열은 늘어난다.
var a2 = new Array(10);
a2[0] = 0;
a2[5] = 5;
a2[10] = 10;
a2[30] = 30;

console.log(a2, a2[2], a2.length); // 배열 요소에 값을 지정하지 않으면 undefined

// 초기값을 지정할 수 있다.
var a3 = new Array(0,2,4,6,8);

console.log(a3, a3.length);

// 2. 리터럴
console.log("=========생성 2: 리터럴=========");

var a4 = [function() {
    console.log("hello");
}, 20 , "JavaScript", true, {
    name : "마이콜",
    email : "mycall@gamil.com"
}];

console.log(a4.length);
for(var i =0; i<a4.length; i++) {
    console.log(a4[i]);
}

a4[0]();

// Array vs Object
console.log("=========Array vs Object=========");

a5 = [];
a5[0] = 0;
a5["1"] = 1;
a5["name"] = "둘리";

console.log(a5.length);

for(prop in a5) {
    console.log(prop);
}

console.log("==============");

o5 = {};
o5.length = 0;
o5[0] = 0;
o5["1"] = 1;
o5["name"] = "둘리";

console.log(o5.length);

for(prop in o5) {
    console.log(prop);
}

console.log("==============");

a5.forEach(function(e, index) {
    console.log(index + ":" + e);
});