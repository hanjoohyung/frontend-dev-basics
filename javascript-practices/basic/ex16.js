/* 
    function 타입의 객체(함수)
*/

// 함수를 생성하는 방법 ① : 함수 리터럴
function f1(a,b) {
    return a+b;
}

console.log(typeof(f1), f1(10,20));

// 함수를 생성하는 방법 ② : 함수 리터럴
var f2 = function(a,b) {
    return a+b;
}

console.log(typeof(f2), f2(20,30));

// 함수를 생성하는 방법 ③ : new 연산자와 함께 Function() 생성자 함수를 사용하는 방법
var f3 = new Function('a', 'b', 'return a+b');
console.log(typeof(f3), f3(30,40));

// 함수를 생성하는 방법 ④ : 익명(anonymous) 함수
// callback
setTimeout(function() {
    console.log("time out");
}, 2000);

// 즉시 실행하는 함수

var s = (function(a,b) {
    var m = 10;
    return a/m + b/m;
})(10,20);

console.log(typeof(s), s);

var f4 = (function(a,b) {
    return a+b;
})(40,50);

console.log(typeof(f4), f4);

// 가변 파라미터 함수
var sum = function() {
    console.log(arguments instanceof Array); // Array가 아닌 유사 배열

    var sum = 0;
    // 구현 ①
    // for(var i = 0; i < arguments.length; i++) {
    //     sum += arguments[i];
    // }

    // 구현 ②
    Array.prototype.forEach.call(arguments, function(e) {
        sum += e;
    }) 
    
    return sum;
}

console.log(sum(10,20));
console.log(sum(10,20,30));
console.log(sum(10,20,30,40));
console.log(sum(10,20,30,40,50));
