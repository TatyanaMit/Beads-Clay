const slider = document.querySelector('.slider_js')
const btnT = document.querySelector('.btntuda_js')
const btnS = document.querySelector('.btnsuda_js')
let offset = 0;
 
function autoMove(){
 
    offset -= 300
    console.log(offset)
    if (offset < -1500){
        setTimeout(function(){
            slider.style.left = 0
            slider.style.transition = 'none'
            offset = 0
        }, 1000)
    }
    slider.style.transition = 'all 2s ease 0s'
    slider.style.left = offset+'px'

}
btnS.addEventListener('click',function(){
    clearInterval(time)
    offset-= 300
    if (offset< -1500){
        setTimeout(function(){
            slider.style.transition = 'none'
            offset = 0
            slider.style.left=offset + 'px'
        }, 2100)
    }
    slider.style.transition = 'all 2s ease 0s'
    slider.style.left=offset + 'px'
    console.log(offset);
})
btnT.addEventListener('click', function(){
    clearInterval(time)
    offset+= 300
    if (offset>=0){
        slider.style.transition = 'none'
        offset = -1800
        slider.style.left=offset + 'px'
        setTimeout(function(){
            offset+=300
            slider.style.transition = 'all 2s ease 0s'
            slider.style.left=offset + 'px'
        }, 0)
    }

    slider.style.left=offset + 'px'
    console.log(offset);
})
let time = setInterval(autoMove, 2100)