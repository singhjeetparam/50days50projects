// We have fetch all panels using class
const panels = document.querySelectorAll('.panel');


// In this we will add active class to all the clicked panels as well ass we will remove the active class also
panels.forEach(panel =>{
    panel.addEventListener('click', ()=>{
        removeActiveClass()
        panel.classList.add('active')
    })
})

// Function to remove active class
function removeActiveClass(){
    panels.forEach(panel =>{
        panel.classList.remove('active')
    })
}