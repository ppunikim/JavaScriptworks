const keys = ["이름", "주소", "전화번호"];

const student = { 이름: "길동", 주소: "서울시", 전화번호: "010.2323" };

console.log(student["이름"]);
console.log(student[keys[0]]);
console.log("-------------------------");
for (let i = 0; i < keys.length; i++) {
  console.log(student[keys[i]]);
}

console.log("-------------------------");
// JASON data인 student 의 이름 속성을 별도로 추출하여 개별
//                                      변수로 선언하기
const { 이름 } = student;
console.log(이름);
console.log("-------------------------");

// JASON type의 데이터를 return하는 함수
const studentFunc = () => {
  return {
    user_name: "이몽룡",
    주소: "남원시",
    나이: 20,
  };
};

const { user_name, 나이 } = studentFunc();
console.log(user_name, 나이);
