// gsap.to("#logo", {duration: 1, x: 100},{duration: 3, x:-100});



let iconClose = "assets/shared/mobile/icon-close.svg";
let iconOpen = "assets/shared/mobile/icon-hamburger.svg";

const hamburger = document.getElementById("closed");
const minmenu = document.getElementById("minmenu");

let 




document.getElementById('closed').addEventListener('click', () => {

	if(hamburger.src.endsWith('icon-hamburger.svg') == true) {
		
		hamburger.src = iconClose;
		minmenu.style.display = 'block';

	}else {

		hamburger.src= iconOpen;
		minmenu.style.display = 'none';
	}
    
});