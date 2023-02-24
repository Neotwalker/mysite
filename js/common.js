$(function() {

	let rellax = new Rellax('.rellax');

	const observer = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('fade-in-up-1');
			}
		});
	});

	const arr = document.querySelectorAll('.projects--item');
	arr.forEach(i => {
		observer.observe(i);
	});

	const projects_more_image = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('fade-in-right-1');
			}
		});
	});

	projects_more_image.observe(document.querySelector('.projects--more .image'));

	const projects_more_link = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('fade-in-left-2');
			}
		});
	});

	projects_more_link.observe(document.querySelector('.projects--more .link'));

	const advantages = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('fade-in-down-1');
			}
		});
	});

	const arr1 = document.querySelectorAll('.main--advantages .item');
	arr1.forEach(i => {
		observer.observe(i);
	});

	$('.reviews--carousel').owlCarousel({
		items: 1,
		navContainer: $('.reviews--arrows'),
		navText: [
			'<div class="arrows--prev"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.1199 1.1199L3.03119 7.2086L15.2082 7.20823L16 8L15.2083 8.79166L3.03165 8.79168L9.11998 14.88L8 16L1.11989 9.11989L0.791769 8.79177L-8.01043e-07 8L1.11999 6.88001L8 9.48178e-07L9.1199 1.1199Z"/></svg></div>',
			'<div class="arrows--next"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.8801 1.1199L12.9688 7.2086L0.791771 7.20823L0 8L0.791659 8.79166L12.9683 8.79168L6.88002 14.88L8 16L14.8801 9.11989L15.2082 8.79177L16 8L14.88 6.88001L8 9.48178e-07L6.8801 1.1199Z"/></svg></div>'
		],
		mouseDrag: false,
		smartSpeed: 750,
		autoHeight: true,
		loop: true
	});

	$('.faq--item').click(function(){
		let $a = $(this).find(".faq--item__text");
		$(".faq--item__text").not($a).slideUp();
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
			$('.faq--item').not($a).removeClass('active');
		} else {
			$('.faq--item').removeClass('active');
			$(this).addClass('active');
		}
		$a.slideToggle();
	});

});
