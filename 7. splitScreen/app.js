const Splits = document.querySelectorAll('.split')

Splits.forEach(split =>{
    split.addEventListener('mouseover', () =>{
        removeActiveClass()
        split.classList.add('grow')
    })
})

function removeActiveClass(){
    Splits.forEach(split =>{
        split.classList.remove('grow')
    })
}