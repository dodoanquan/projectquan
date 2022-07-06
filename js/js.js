const toggle = document.getElementsByClassName('toggle')[0]
const showHide = document.getElementsByClassName('menu')[0]
toggle.addEventListener('click',function() {
	if(showHide.classList.contains("hide-menu")){
		showHide.classList.remove("hide-menu")
		showHide.classList.add("show-menu")
	}else{
		showHide.classList.remove("show-menu")
		showHide.classList.add("hide-menu")
	}
})


const sr = ScrollReveal({
    distance: '30px',
    duration: 2000,
    reset: true,
});

sr.reveal(`.slider__text, .slider__img,
           .item,
           .new__item,
           .footer__item`, {
    origin: 'top',
    interval: 200,
})

sr.reveal(`.share__img, .send__text`, {
    origin: 'left',
})

sr.reveal(`.share__text, .send__direction`, {
    origin: 'right',
})