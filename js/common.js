$(function() {

	$("#phone_1, #phone_2").mask("+7 (999) 999-9999");
	
	let rellax = new Rellax('.rellax');

	$('.burger').click(function(){
		$(this).toggleClass('open');
		if ($(this).hasClass('open')) {
			$('.header--menu').fadeIn().css('display', 'flex');
		} else {
			$('.header--menu').fadeOut();

		}
	});

	const about__button = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('fade-in-left-2');
			}
		});
	});

	about__button.observe(document.querySelector('.main--about .button'));

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
		loop: true,
		responsive: {
			0: {
				autoHeight: true,
				margin: 30
			},
			769: {
				autoHeight: false,
				margin: 0
			}
		},
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

	if ($(window).width() >= '995'){
		let bg = document.querySelector('.main--form .icon');
		let rotate = document.querySelector('.main--form .rotate');
		window.addEventListener('mousemove', function(e) {
			let x = e.clientX / window.innerWidth;
			let y = e.clientY / window.innerHeight;  
			bg.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
			rotate.style.transform = 'rotate('+y*x*100+'deg)';
		});
	} else {
		$('.main--form .wrapper .icon-1').addClass('watch-animation');
		$('.main--form .wrapper .icon-3').addClass('watch-animation');
		const form__cube = new IntersectionObserver(entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					entry.target.classList.add('rotate-in');
				}
			});
		});
	
		form__cube.observe(document.querySelector('.main--form .wrapper .icon-1'));
		form__cube.observe(document.querySelector('.main--form .wrapper .icon-3'));
	}

	if ($(window).width() >= '995'){
		const form__arrow = new IntersectionObserver(entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					entry.target.classList.add('fade-in-left-2');
				}
			});
		});

		form__arrow.observe(document.querySelector('.main--form .wrapper--left .text .icon'));
	} else {
		const form__arrow = new IntersectionObserver(entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					entry.target.classList.add('pulse-in-4');
				}
			});
		});

		form__arrow.observe(document.querySelector('.main--form .wrapper--left .text .icon'));
	}

	const why = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('fade-in-left-2');
			}
		});
	});

	why.observe(document.querySelector('.main--why .button'));

	const why1 = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('fade-in-right-2');
			}
		});
	});

	why1.observe(document.querySelector('.main--why .button--white'));

	const footer__logo = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('slide-from-bot');
			}
		});
	});

	footer__logo.observe(document.querySelector('.footer .logo img'));

	const footer__menu_left = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('fade-in-left-2');
			}
		});
	});

	footer__menu_left.observe(document.querySelector('.footer--menu'));

	const footer__menu_right = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('fade-in-right-2');
			}
		});
	});

	footer__menu_right.observe(document.querySelector('.footer--menu.right'));

});
