$(document).ready(function() {
	$(".wrapper").css('margin-left', '13%');
	//Scrolling
	window.addEventListener('scroll', function() {
		//Check for navbar outside of view.
		var elementNav = document.querySelector('#mainNav');
		var positionNav = elementNav.getBoundingClientRect();
		if(positionNav.bottom < 0) {
			console.log('out');
			$('#hiddenNav').css('margin-top', '0');
		}
		else {
			console.log('in');
			$('#hiddenNav').css('margin-top', '-5%');
		};
		//Home
		var home = document.querySelector('#home');
		var position = home.getBoundingClientRect();
		// checking for partial visibility (home)
		if(position.top < window.innerHeight && position.bottom >= 0) {
			//Channging highlight
			current('homeLi');
		};
		//About
		var about = document.querySelector('#card1');
		var position = about.getBoundingClientRect();
		// checking for partial visibility (about)
		if(position.top < window.innerHeight && position.bottom >= 0) {
			$("#card1").css('margin-top', '0');
			$("#card1").css('opacity', '1');
			//Channging highlight
			current('aboutLi');
			setTimeout(()=>{
				$("#card2").css('margin-top', '0');
				$("#card2").css('opacity', '1');
			}, 500);
		};
	});

	function current(classId) {
		//Removing
		$(".homeLi").removeClass('currentPage');
		$(".aboutLi").removeClass('currentPage');
		$(".projectsLi").removeClass('currentPage');
		$(".contactLi").removeClass('currentPage');
		//Adding
		$(`.${classId}`).addClass('currentPage');
	}
});