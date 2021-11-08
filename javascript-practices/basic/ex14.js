/**
 *  URL 다루기
 * 
 */

var url1 = "http://www.mysite.com/user?name=둘리&no=10";

// 1. escape" URL 전부 encoding(X) deprecated
var url2 = escape(url1);

console.log(url1);
console.log(url2);

// 2. encodeURI : parameter만 encoding
var url3 = encodeURI(url1);

console.log(url3);

// 3. encodeURIComponent : 값만 엔코딩 해야하는 경우
var url4 = encodeURIComponent(url1); // 좋지않은 사용 예

console.log(url4);

// 만들어야 할 URL
// http://mysite.com/user?no=10&name=둘리&email=kickscar@gmail.com

var toQueryString = function(param) {
    var qs = [];
    for(prop in param) {
        qs.push(prop + "=" + encodeURIComponent(param[prop]));
    }
    return qs.join("&");
}

var url = "http://mysite.com/user";

var param = {
    name : '둘리',
    no : 10,
    email : 'kickscar@gamil.com'
}

var url5 = url + "?" + toQueryString(param);
console.log(url5);

// $.ajax({
//     url: url,
//     type: 'post',
//     dataType: 'application/json',
//     data: toQueryString(param)
// })