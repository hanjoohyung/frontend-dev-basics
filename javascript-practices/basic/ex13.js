/**
 * string
 */

// 1. 배열처럼 index접근이 가능하다.
var str1 = "Hello World";
for(var i=0; i<str1.length; i++) {
    console.log(str1[i]);
}

// 2. 문자열 합치기
var str2 = 'Hello';
var str3 = 'World';
var str4 = str2 + ',' + str3;
console.log(str2, str3, str4);

// 3. 캐스팅
var str5 = 5 + "5";
console.log(str5);

var str6 = "boolean : " + true;
console.log(str6);

// 4. 메소드
var str7 = "string1 string2 string3";

var index = str7.indexOf("string2"); // 처음시작하는 방의 수를 반환
console.log(index);

var index = str7.indexOf("string4"); // 찾지못하면 -1 반환
console.log(index);

var str8 = str7.substr(10);
console.log(str8);

var str9 = str7.substr(10, 3 /* count */); // 10번 방부터 3개의 방의 값을 반환
console.log(str9);

var str10 = str7.substr(10, 13 /*last index - 1*/);
console.log(str10);

var a = str7.split(" "); // 공백별로 따로 나누어줌
console.log(a);

var str11 = 'abcdef'; // 공백이 없어 나눠지지 않으면 하나의 배열로 반환
var a = str11.split(" ");
console.log(a);