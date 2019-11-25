console.log('testing');
var button = document.getElementById('mobile-menu');
var submenu = document.getElementsByClassName('submenu')[0];

button.addEventListener('click', function(){
    submenu.classList.toggle('submenu--visibility');
});