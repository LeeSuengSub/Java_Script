// json

var name = "홍길동";
var age = 23;
//json
var information = {
    name : '홍길동',
    age : 23
};
//json 출력
console.log(information.age)
//json 포멧
//key : 중복X, value : 값 (중복 가능, 데이터 타입)
var dwAcademy = {
    students : ['오승택', '류근환', '강인석', '김보겸', '이인서',
     '나정수', '정지유', '김민영', '이규성',
      '이승섭', '이상협', '홍준호', '유영준'],
    student_count : 15,
    teacher : '현상원',
    today : '2022-03-08',
    subject : ('SQL', 'JAVA', 'HTML')
}
//json을 호출할 때는 key값을 사용해야 한다.
console.log(dwAcademy.student_count)
// json 배열 호출
console.log(dwAcademy.students)

//문제1. student_count가 15이하면 학생수 부족, 15초과면 학생수 정상
var count = dwAcademy.student_count
if(count<15) {
    console.log('학생수 부족')
}else{
    console.log('학생수 정상')
}

//문제2. 이씨가 몇명인가?
var count = 0;
var searchWord = '이';
for(var i=0; i<dwAcademy.students.length; i++){
    var firstName = dwAcademy.students[i].substring(0,1);
    if(firstName == searchWord){
        ++count;
    }
}
console.log(count)

//json 설명
var 영화 ={
    배급사 : 'CJ Entertament',
    // 영화이름 : ['스파이더맨','이미테이션게임']
    영화이름 : [{
        name : '스파이더맨 노 웨이 홈',
        actor : ['톰홀랜드', '젠데이아'],
        time : 148
    },{
        name : '인터스텔라',
        actor : ['앤 헤서웨이','메슈 메커너히'],
        time : 169
    }]
}
console.log(영화.영화이름)

var company={
    사원ID : 3450,
    사원이름 : 'SMITH',
    급여 : 3400,
    부서 : [{
        name : '개발팀',
        count : 5
    },{
        name : '영업팀',
        count : 13
    },{
        name : '디자인팀',
        count : 4
    }],
    입사날찌 : '2021-12-31',
    상사이름 : ['BRIAN','KING']
}
console.log(company)