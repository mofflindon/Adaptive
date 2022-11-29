const menuBtn = document.querySelector('.burger-menu');
const menu = document.querySelector('.navbar__list');

menuBtn.addEventListener('click', function(){
    if(menu.classList.contains('active')){
        menu.classList.remove('active');
    } else{
        menu.classList.toggle('active');
    }
} )