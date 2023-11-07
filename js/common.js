document.addEventListener("DOMContentLoaded", () => {

	const mover = document.querySelector(".mover");
	const buttons = document.querySelectorAll(".button, input, textarea, button, a, .social li, label, .main--directions__item");
	
	function addActiveClass() {
		mover.classList.add("active");
	}

	function removeActiveClass() {
		mover.classList.remove("active");
	}

	buttons.forEach(function(button){
		button.addEventListener("mouseenter", addActiveClass);
		button.addEventListener("mouseleave", removeActiveClass);
	})

	const circle = document.querySelector('#circle');
	const mouse = {
		x: 0,
		y: 0
	};
	let y = 0;
	let x = 0;
	
	function moveFunc(event) {
		const clientX = event.changedTouches ? event.changedTouches[0].clientX : event.clientX;
		const clientY = event.changedTouches ? event.changedTouches[0].clientY : event.clientY;
		mouse.x = clientX - circle.offsetWidth / 2;
		mouse.y = clientY - circle.offsetHeight / 2;

		parallax();
	}
	
	document.body.style.cursor = "none";

	window.addEventListener('mousemove', moveFunc);
	window.addEventListener('touchmove', moveFunc);
	
	function parallax() {
		const speed = 100; // чем меньше, тем быстрее
		const nextX = (mouse.x - x) / speed;
		const nextY = (mouse.y - y) / speed;
		if (Math.abs(nextX) > 0.05 || Math.abs(nextY) > 0.05) {
			requestAnimationFrame(parallax);
		}
		// console.log(1); // Раскомментируй для проверки, что цикл не бесконечный
	
		x += nextX;
		y += nextY;
	
		circle.style.transform = `translate(${x}px, ${y}px)`;
	}
	
	parallax();

});

// $(function() {

// 	// Custom JS

// });
