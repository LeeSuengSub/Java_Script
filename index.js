// JAVA print
// FileSystem.out.println("Hello World");
// 자바스크립트 print
console.log("Hello World")
// 세미콜론 권장사항이지 필수사항은 아니다.
var x=10;
var y='안녕하세요';
console.log('x의 값은? '+x)
console.log('y의 값은? '+y)

var num = 10;
var num2 = 20;
var result = num+num2
console.log(result)
if(result==30){
    console.log('30 입니다.')
}
//숫자 0~9까지 나열하기
for(var i=0; i<10; i++){
    console.log(i)
}
//짝수 출력하기
for(var i=0; i<=10; i++){
    if((i%2)==0){
        console.log(i+'은 짝수 입니다.')
    }
}
//별 찍기
for(var i=0; i<6; i++){
    console.log('*'.repeat(i+1))
}
//갯수 구하는 방법.
var count=0; 
for(var i=0; i<10; i++){
    if(i%2==0){
        count++
    }
}console.log(count)