let input=document.querySelector('#birthdate');
let button=document.querySelector('#calculate');
let result=document.querySelector('#result');

let TodayDate=new Date();
let TodayYear=TodayDate.getFullYear();
button.addEventListener('click',function(){
   let birthDate=new Date(input.value);
   let birthYear=birthDate.getFullYear();
   let birthMonth=birthDate.getMonth();
   let birthDay=birthDate.getDate();
   
   if(birthMonth>TodayDate.getMonth() || (birthMonth===TodayDate.getMonth() && TodayDate.getDate()<birthDay) ){
    age--;
   }
   if(input.value===''){
    result.innerHTML='لطفا تاریخ تولد خود را وارد کنید'
    return;
   }
   if(isNaN(birthDate.getTime())){
    result.innerHTML='لطفا یک تاریخ معتبر وارد کنید';
    return;
   }else{
    result.innerHTML=`سن شما: ${age} سال است`;
   }
   let ageYear=TodayDate.getFullYear()-birthYear;
   let ageMonth=TodayDate.getMonth()-birthMonth;
   let ageDay=TodayDate.getDate()-birthDay;
   
})