/*
변수의 선언 키워드 : var, const, let
var -> java에서 static 변수 선언하기와 비슷 
    -> 가급적 쓰지말자 그 이유는 전체적으로 선언돼 계속 쓸 수 있기 때문.
            -> 그리고 public static 이면서 성질이 매우 사납다. 
const -> 불변 변수(java에서 final 변수 선언과 비슷)
      -> 변수값을 이후에 변경해야하는 경우에는 사용 금지. 
let -> 일반적인 변수로, 
     java에서 int, String, double과 같은 역할이지만, 타입이 필요가 없다.
        = 변수에 대한 문제가 발생할 수 있다.
        = 동적 type 변수(자바에서는 정적 type 변수)
*/
var num = 10;
num = "대한민국";

let num1 = 10;
num1 = "우리나라";

var num = "Korea";
//let num1 = "Republic of Korea";

console.log(num1);

intNum = 100;
console.log(intNum);

for (let i = 0; i < 10; i++) {}
//let 키워드로 선언된 변수는 선언{} 을 벗어나면 소멸된다.
//console.log(i);

for (var j = 0; j < 10; j++) {}
console.log(j);

//for (const i = 0; i < 10; i++) {}
