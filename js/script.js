// let menu = document.getElementById('menu');
// let handler = document.getElementById('handler');

// handler.addEventListener('click', function(){
//     handler.classList.toggle('icon')
//     menu.classList.toggle('show')
//     menu.style.transition = '2s'
// })

let menu = document.getElementById("menu");
let handler = document.getElementById("handler");

handler.addEventListener("click", function () {
  menu.classList.toggle("change");
  handler.classList.toggle("icon");
});
