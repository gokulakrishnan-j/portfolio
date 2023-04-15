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
},100)

function gokul (){
clearInterval(stop)
}

function mySkills(){
  var html = document.getElementById("html")
  html.style.position= "relative"
  html.animate([
    // key frames
    { top: '0px' },
    { top: '80px' }
  ], {
    // sync options
    direction:"alternate",
    timing:"linear",
    duration: 1000,
    iterations: 2,
  });

  var css = document.getElementById("css")
  css.style.position= "relative"
  css.animate([
    // key frames
    { left: '0px' },
    { left: '80px' }
  ], {
    // sync options
    direction:"alternate",
    timing:"linear",
    duration: 1000,
    iterations: 2,
  });

  var bootstrap = document.getElementById("bootstrap")
  bootstrap.style.position= "relative"
  bootstrap.animate([
    // key frames
    { right: '0px' },
    { right: '80px' }
  ], {
    // sync options
    direction:"alternate",
    timing:"linear",
    duration: 1000,
    iterations: 2,
  });

  var javascript = document.getElementById("javascript")
  javascript.style.position= "relative"
  javascript.animate([
    // key frames
    { bottom: '0px' },
    { bottom: '80px' }
  ], {
    // sync options
    direction:"alternate",
    timing:"linear",
    duration: 1000,
    iterations: 2,
  });

  var node = document.getElementById("node")
  node.style.position= "relative"
  node.animate([
    // key frames
    { left: '0px' },
    { left: '80px' }
  ], {
    // sync options
    direction:"alternate",
    timing:"linear",
    duration: 1000,
    iterations: 2,
  });

  var mongo = document.getElementById("mongo")
  mongo.style.position= "relative"
  mongo.animate([
    // key frames
    { right: '0px' },
    { right: '80px' }
  ], {
    // sync options
    direction:"alternate",
    timing:"linear",
    duration: 1000,
    iterations: 2,
  });

  var react = document.getElementById("react")
  react.style.position= "relative"
  react.animate([
    // key frames
    { top: '0px' },
    { top: '80px' }
  ], {
    // sync options
    direction:"alternate",
    timing:"linear",
    duration: 1000,
    iterations: 2,
  });

  var redux = document.getElementById("redux")
  redux.style.position= "relative"
  redux.animate([
    // key frames
    { bottom: '0px' },
    { bottom: '80px' }
  ], {
    // sync options
    direction:"alternate",
    timing:"linear",
    duration: 1000,
    iterations: 2,
  });
  
  var sql = document.getElementById("sql")
  sql.style.position= "relative"
  sql.animate([
    // key frames
    { right: '0px' },
    { right: '80px' }
  ], {
    // sync options
    direction:"alternate",
    timing:"linear",
    duration: 1000,
    iterations: 2,
    

  });
}
