let input=document.querySelector('#birthdate');
let button=document.querySelector('#calculate');

let TodayDate=new Date();
let TodayYear=TodayDate.getFullYear();
button.addEventListener('click',function(){
   let birthDate=new Date(input.value);
   let birthYear=birthDate.getFullYear();
   let birthMonth=birthDate.getMonth();
   let birthDay=birthDate.getDay();
   let age=TodayYear-birthYear;
   console.log(age);
   
})