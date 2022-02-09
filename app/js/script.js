console.log('HELLO cofeeeeee');

const test = () => {
	console.log('this is a test');
};

let iconClose = "assets/shared/mobile/icon-close.svg";
let iconOpen = "assets/shared/mobile/icon-hamburger.svg";

const hamburger = document.getElementById("closed");




document.addEventListener('click', () => {

	if(hamburger.src.endsWith('icon-hamburger.svg') == true) {
		
		hamburger.src = iconClose;

	}else {

		hamburger.src= iconOpen;
	}
    console.log(hamburger.src)
});