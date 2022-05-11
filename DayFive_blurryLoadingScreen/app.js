const loadText = document.querySelector('.blurLoadingText');
const bg = document.querySelector('.bg')

let load = 0

let int = setInterval(bluring, 30)

function bluring(){
    load++

    if(load > 99){
         clearInterval(int)
    }
    loadText.innerHTML = `${load} %`
    loadText.style.opacity = scale(load, 0, 100, 1, 0)
    bg.style.opacity = scale(load, 0, 100, 0, 1)
    



}


const scale  = (number, inMin, inMax, outMin, outMax) => {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}