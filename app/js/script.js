// Button accordion



	// Removing video background
	
	let iconClose = "assets/shared/mobile/icon-close.svg";
    let iconOpen = "assets/shared/mobile/icon-hamburger.svg";

	const hamburger = document.getElementById("closed");
	const minmenu = document.getElementById("minmenu");
	let logo = document.getElementById("logo");
	let video = document.getElementsByTagName('video')[0];
	


	
	if (video === undefined) {
		
		let heroDiv = document.getElementsByClassName('pos')[0];
	    heroDiv.style.position = "unset";

    document.getElementById('closed').addEventListener('click', () => {

		if (hamburger.src.endsWith('icon-hamburger.svg') == true) {
	
			hamburger.src = iconClose;
			hamburger.classList.add("shadow-text");
			logo.classList.add("shadow-text");
			minmenu.style.display = 'block';
		
	
		} else {
			console.log(false);
			hamburger.src = iconOpen;
			hamburger.classList.remove("shadow-text");
			logo.classList.remove("shadow-text");
			minmenu.style.display = 'none';
			
		}
	
	});

} else {
	
	video.onended = function (e) {
		let heroDiv = document.getElementsByClassName('pos')[0];
		video.style.display = "none";
		heroDiv.style.position = "unset";

        document.getElementById('closed').addEventListener('click', () => {

			if (hamburger.src.endsWith('icon-hamburger.svg') == true) {

			    hamburger.src = iconClose;
				hamburger.classList.add("shadow-text");
				logo.classList.add("shadow-text");
				minmenu.style.display = 'block';
				document.body.style.overflow = "hidden";

			} else {
				hamburger.src = iconOpen;
				hamburger.classList.remove("shadow-text");
				logo.classList.remove("shadow-text");
				minmenu.style.display = 'none';
				document.body.style.overflow = "unset";
			}

        });
	};
}	
				
let btnAccordion = document.querySelectorAll('.js-accordion-toggle');
let dropField = document.getElementsByClassName('hidden');

btnAccordion.forEach((el)=>{
	el.addEventListener('click', function() {
	let state = this.nextElementSibling;
	// this.classList.toggle("vissible");
	
	if(state.style.display === "grid"){
		state.style.display='none';
		console.log(this.firstChild.nextElementSibling.nextElementSibling.firstChild.classList.remove("rotate"))
		
	}else {
		state.style.display='grid';
		console.log(this.firstChild.nextElementSibling.nextElementSibling.firstChild.classList.add("rotate"))
		
	}
	});
});











































	// Removeing video background
	// let heroDiv = document.getElementsByClassName('header__hero')[0];
	// let video = document.getElementsByTagName('video')[0];

	// video.onended = function (e) {
	// 	video.style.display = "none";
	// 	heroDiv.style.position = "unset";

		
// let iconClose = "assets/shared/mobile/icon-close.svg";
// let iconOpen = "assets/shared/mobile/icon-hamburger.svg";

// const hamburger = document.getElementById("closed");
// const minmenu = document.getElementById("minmenu");

// let logo = document.getElementById("logo");




// document.getElementById('closed').addEventListener('click', () => {

// 	if (hamburger.src.endsWith('icon-hamburger.svg') == true) {

// 		hamburger.src = iconClose;
// 		hamburger.classList.add("shadow-text");
// 		logo.classList.add("shadow-text");
// 		minmenu.style.display = 'block';

// 	} else {

// 		hamburger.src = iconOpen;
// 		hamburger.classList.remove("shadow-text");
// 		logo.classList.remove("shadow-text");
// 		minmenu.style.display = 'none';
// 	}

// });
// 	};




