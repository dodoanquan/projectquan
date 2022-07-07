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