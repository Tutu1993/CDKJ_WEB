const log = console.log.bind(console)

log('apple')

const swiperH = new Swiper('.swiper-container-h', {
    mousewheel: true,
    direction: 'vertical',
    spaceBetween: 30,
	pagination: {
	  el: '.swiper-pagination-h',
	  clickable: true,
	},
})
const swiperV = new Swiper('.swiper-container-v', {
    spaceBetween: 30,
	pagination: {
	  el: '.swiper-pagination-v',
	  clickable: true,
	},
})
