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
   
  
   if(input.value===''){
    result.innerHTML='لطفا تاریخ تولد خود را وارد کنید'
    return;
   }
   if(isNaN(birthDate.getTime())){
    result.innerHTML='لطفا یک تاریخ معتبر وارد کنید';
    return;
   }
   let ageYear=TodayDate.getFullYear()-birthYear;
   let ageMonth=TodayDate.getMonth()-birthMonth;
   let ageDay=TodayDate.getDate()-birthDay;
   if(ageMonth<0){
    ageYear--;
    ageMonth+=12;
   }
   if (ageDay < 0) {
    ageMonth--;  
    let lastMonth = new Date(TodayDate.getFullYear(), TodayDate.getMonth(), 0);  
    ageDay += lastMonth.getDate();  
    if (ageMonth < 0) {
        ageYear--;  
        ageMonth += 12; 
    }
}

result.innerHTML =` سن شما: ${ageYear} سال و ${ageMonth} ماه و ${ageDay} روز است`;
})