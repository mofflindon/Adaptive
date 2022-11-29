const toggleBtn = document.querySelector('.button-list');
const table = document.querySelector('.review__list');

toggleBtn.addEventListener('click', function(){
    if(table.classList.contains('toggle-table')){
        table.classList.remove('toggle-table');
    } else{
        table.classList.toggle('toggle-table');
    }
} )