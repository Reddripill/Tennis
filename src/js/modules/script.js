'use strict';

window.addEventListener('load', function (event) {
	const body = document.querySelector('body');

	// Burger
	// ===========================================================================
	const menuBurger = document.querySelector('.menu__burger');
	const menuBody = document.querySelector('.menu__body');
	const headerContainer = document.querySelector('.header__container')

	menuBurger.addEventListener('click', function (event) {
		if (!menuBurger.classList.contains('_active')) {
			openBurger()
		} else {
			closeBurger();
		}
		event.preventDefault();
	})

	function openBurger() {
		menuBurger.classList.add('_active');
		menuBody.classList.add('_active');
		headerContainer.classList.add('_active');
		bodyLock();
	}

	function closeBurger() {
		menuBurger.classList.remove('_active');
		menuBody.classList.remove('_active');
		headerContainer.classList.remove('_active');
		bodyUnlock();
	}

	function bodyLock() {
		const paddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth;
		body.classList.add('_lock');
		body.paddingRight = paddingValue + 'px';
	}

	function bodyUnlock() {
		body.classList.remove('_lock');
		body.paddingRight = '';
	}
	// ===========================================================================


	// Header Observer
	// ===========================================================================

	const headerElement = document.querySelector('.header');

	function headerObserverHandler(entries) {
		if (entries[0].isIntersecting) {
			headerElement.classList.remove('_scroll');
		} else {
			headerElement.classList.add('_scroll');
		}
	}

	let headerObserver = new IntersectionObserver(headerObserverHandler);
	headerObserver.observe(headerElement);

	// ===========================================================================



	// All clicks
	// ===========================================================================

	document.addEventListener('click', function (event) {
		let el = event.target;
	})

	// ===========================================================================
})