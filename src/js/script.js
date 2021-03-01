window.addEventListener('DOMContentLoaded', () => {
	document.querySelector('.wrapper').classList.add('loaded');
	//console.log(document.querySelector('.wrapper'));

	const hamburger = document.querySelector('.icon-menu');
	//console.log(hamburger);
	hamburger.addEventListener('click', () => {
		console.log('clicked');
		//console.log(this);
		//console.log(hamburger);
		//document.querySelector('.icon-menu').classList.toogle('active');
		document.querySelector('.menu__body').classList.toogle('active');
		document.querySelector('.body').classList.toogle('lock');
	})

	function ibg() {
		let ibg = document.querySelectorAll(".ibg");

		for (var i = 0; i < ibg.length; i++) {
			if (ibg[i].querySelector('img')) {
				ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
			}
		}
	}

	ibg();

});