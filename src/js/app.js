import * as flsFunctions from './modules/functions.js';
import * as script from './modules/script.js';

flsFunctions.isWebp();


// Initialising sliders
// ===========================================================================
import Swiper, { Navigation, Pagination } from 'swiper';

const couachesSwiper = new Swiper('.coaches-slider', {
	navigation: {
		nextEl: '.coaches-page__arrow_next',
		prevEl: '.coaches-page__arrow_prev'
	},
	watchOverflow: true,
	slidesPerGroup: 1,
	loop: false,
	observer: true,
	simulateTouch: false,
	spaceBetween: 24,
	modules: [Navigation, Pagination],
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		440: {
			slidesPerView: 2,
		},
		640: {
			slidesPerView: 3,
		},
		840: {
			slidesPerView: 4,
		},
		1050: {
			slidesPerView: 5,
		},
		1270: {
			slidesPerView: 6,
		}
	},
});

// ===========================================================================