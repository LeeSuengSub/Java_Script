//JSON(Java Script Object Notaion)
//Java에서는 Json을 Map이라고 함.
var information = {
    //key: value
    'name' : 'Lee Sueng Sub',
    'age' : 25,
    'address' : '대전 충정로 136',
    'ismarry' : false
} //json = key와 value로 구성.
//주의점!
//1. key는 중복 불가능. value는 중복 가능.
//2. value에 정수형(int, double), 문자형(String), boolean형, 배열형(array), null
//3. 중괄호로 감싼다.

console.log(information)
console.log(information.age)

if (information.age >=30){
    console.log('이상입니다')
}else{
    console.log('이하입니다.')
}
//Java에서 final이 JavaScript에서는 const이다.
//상수
const PI = 3.14
var array = [1,3,4,5,10]
console.log(array[0])//배열 0번째 값 호출
var len = array.length
const EVEN = 2;
for(var i=0; i<len; i++){
    var value = array[i]
    if(array[i]%EVEN==0){
        console.log(value)
    }
}
//최댓값 구하기
var max = 0;
for(var i=0; i<len; i++){
    if(max < array[i]){
        max = array[i];
    }
}
console.log('최댓값은 ===>'+max)

//평균구하기
var sum = 0;
var avg = 0;
var array = [5,5]
var len = array.length
for(var i=0; i<len; i++){
    sum +=array[i];
}
avg = sum/len;
console.log(avg)