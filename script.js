let input=document.querySelector('#birthdate');
let button=document.querySelector('#calculate');

button.addEventListener('click',function(){
   let birthDate=new Date(input.value);
   console.log(birthDate);
   
})