require('cssDir/index/index.css')

const swiperV = new Swiper('.swiper-container-v', {
    mousewheel: true,
    direction: 'vertical',
	pagination: {
		el: '.swiper-pagination-v',
		clickable: true,
	},
})
const swiperH = new Swiper('.swiper-container-h', {
	loop: true,
	navigation: {
		prevEl: '.swiper-button-prev',
		nextEl: '.swiper-button-next',
	},
})
