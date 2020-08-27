const video = document.getElementById('main-video')

addEventListener('scroll', ()=>{
    if(pageYOffset>video.offsetTop){
        video.classList.add('fixed')
    } else {
        video.classList.remove('fixed')
    }
})

