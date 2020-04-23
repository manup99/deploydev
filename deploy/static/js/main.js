const date = new Date();
document.querySelector('.year').innerHTML = date.getFullYear();
//message=document.getElementById('message');
setTimeout(function(){
    $('#message').fadeOut('slow');
},3000);
  document.addEventListener("DOMContentLoaded", function(e) {
    document.body.classList.remove('fade');
  });