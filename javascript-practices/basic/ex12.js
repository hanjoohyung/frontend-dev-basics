/**
 *  Array 확장(prototype 기반의 확장) : List 메소드 추가 
 */

Array.prototype.insert = function(index, value) {
    if(value instanceof Array) {
        // for(var i =0; i < value.length; i++) {
        //     this.splice(index++, 0, value[i]);      
        // }

        // var _this = this;
        // value.forEach(function(e) {
        //     _this.splice(index++, 0, e); 
        // });

        value.forEach(function(e) {
            this.splice(index++, 0, e); 
        }.bind(this));
    } else {
    this.splice(index, 0 ,value);
    }
}

Array.prototype.remove = function(index) {
    this.splice(index, 1);
}

// List로 사용
var a = [1,2,4];

console.log(a);

a.insert(2, 3);
console.log(a);

a.remove(3);
console.log(a);

a.insert(2, ['a', 'b', 'c'] ); // [1, 2, 'a','b','c', 3] <- 원하는 기대값
console.log(a); // [1, 2, Array(3) = ['a','b','c'], 3]으로 나옴

var f = function(param) {
    console.log(this.name + ":" + param);
}

f();

var o = {name : "kickscar"};
f.call(o, "kickscar@gmail.com");

f.apply(o);