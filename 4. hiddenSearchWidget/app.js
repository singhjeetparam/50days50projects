// fetching all elements using classes 
const search = document.querySelector('.search-container');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');

// creating function to add active class 
btn.addEventListener('click', ()=>{
    search.classList.toggle('active');
    input.focus();
})