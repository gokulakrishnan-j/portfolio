const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_jdqjno4';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      Swal.fire('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});

const fullstack = document.getElementById('fullstack')
const offName = document.getElementById('offName')

const array = ['F','u','l','l','s','t','a','c','k',' ','D','e','v','e','l','o','p','e','r']
var i = 0   

var stop =   setInterval(()=>{
  if(i< 10){
  fullstack.innerHTML += array[i] 
  i ++
  }else{
    offName.innerHTML += array[i]
    offName.style.color= 'red'
    i++
  }
  
  if(array.length === i){
   
gokul()
  }
},200)

function gokul (){
clearInterval(stop)
}
