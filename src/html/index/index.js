require('cssDir/index/index.css')

const log = console.log.bind(console)

const swiperV = new Swiper('.swiper-container-v', {
    direction: 'vertical',
    speed: 500,
    roundLengths: true,
    keyboard: true,
    mousewheel: true,
	followFinger: false,
	resistanceRatio : 0,
	touchAngle: 30,
    longSwipesRatio: 0.3,
	pagination: {
		el: '.swiper-pagination-v',
		clickable: true,
	},
})
const swiperH = new Swiper('.swiper-container-h', {
	loop: true,
	followFinger: false,
	nested: true,
	resistanceRatio : 0,
	// autoplay: {
	// 	delay: 3000,
	// },
	touchAngle: 30,
	navigation: {
		prevEl: '.swiper-button-prev',
		nextEl: '.swiper-button-next',
	},
})
