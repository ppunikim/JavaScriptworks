function sum() {
  let num1 = 30;
  let num2 = 50;
  return num1 + num2;
}
const add = function () {
  return 100 + 200;
};
const multi = () => {
  return 200 * 2;
};
// sum()함수를 호출하여 return 값을 sum에 저장
const sumResult = sum();
const addResult = add();
const multiResult = multi();
console.log(sumResult);
console.log(sumResult, addResult, multiResult);

const intKor = []; // Array() 대신 쓰는 것
const trees = ["redwood", "bay", "cedar", "oak", "maple"];
console.log(3 in trees);
console.log(10 in trees);

for (let i = 0; i < trees.length; i++) {
  console.log(trees[i]);
}

const student = { 이름: "길동", 나이: 33, 전화: "010.11.22" };
console.log("이름" in student);

/*
    js에서는 선언만 된 변수와 null, "", 0, NaN , undefined가 
    저장된 변수는 "논리적 false 로 인식"한다.
*/
let title1; // 변수를 선언만 한 것
const title2 = null;
const title3 = "";
const title4 = 0;
const title5 = NaN; // not a number
const title6 = undefined;

/*
    논리적 false인 변수와 OR(||) 연산자를 조합하면
    상당히 편리한 코드 구현이 가능하다.
    논리적 false인 변수가 있으면 건너뛰기를 실행하여 
    오른쪽의 값을 변수에 할당(저장,대입)한다.
*/
let bTitle =
  title1 || title2 || title3 || title4 || title5 || title6 || "우리나라";
//java스러운 코드
if (title2 != null) {
  bTitle = title2;
} else {
  bTitle = "대한민국";
}
//javaScript 스러운 코드
bTitle = title2 || "대한민국";

console.log(bTitle);

/*
    JS에서 문자열 변수는 문자열 한 개씩을 요소로 갖는 배열처럼 사용 가능하다.

    배열처럼 문자열변수[index] 와 같은 코드로 요소의 값을 읽을 수  있다.
    단, 문자열변수[index] = "한" 과 같이 요소의 값을 변경할 수 없다. 
*/
const nation = "대한민국";
for (let i = 0; i < nation.length; i++) {
  console.log(nation[i]);
}
