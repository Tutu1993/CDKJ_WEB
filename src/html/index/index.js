const log = console.log.bind(console)

log('apple')

const swiperH = new Swiper('.swiper-container-h', {
    mousewheel: true,
    direction: 'vertical',
	pagination: {
		el: '.swiper-pagination-h',
		clickable: true,
	},
})
const swiperV = new Swiper('.swiper-container-v', {
	pagination: {
		el: '.swiper-pagination-v',
		clickable: true,
	},
})
