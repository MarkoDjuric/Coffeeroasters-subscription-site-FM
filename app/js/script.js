



let iconClose = "assets/shared/mobile/icon-close.svg";
let iconOpen = "assets/shared/mobile/icon-hamburger.svg";

const hamburger = document.getElementById("closed");
const minmenu = document.getElementById("minmenu");

let logo = document.getElementById("logo");




document.getElementById('closed').addEventListener('click', () => {

	if(hamburger.src.endsWith('icon-hamburger.svg') == true) {
		
		hamburger.src = iconClose;
		hamburger.classList.add("shadow-text");
		logo.classList.add("shadow-text");
		minmenu.style.display = 'block';

	}else {

		hamburger.src= iconOpen;
		hamburger.classList.remove("shadow-text");
		logo.classList.remove("shadow-text");
		minmenu.style.display = 'none';
	}
    
});