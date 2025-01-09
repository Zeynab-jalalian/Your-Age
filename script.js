let input=document.querySelector('#birthdate');
let button=document.querySelector('#calculate');

let TodayDate=new Date();
button.addEventListener('click',function(){
   let birthDate=new Date(input.value);
})