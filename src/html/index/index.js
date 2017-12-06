require('cssDir/index/index.css')

const log = console.log.bind(console)

const swiperV = new Swiper('.swiper-container-v', {
	direction: 'vertical', // 竖向切换
	speed: 500, // 切换消耗时间
	roundLengths: true, // 宽高取整
	slidesPerView: 'auto', // 同屏显示 slide 的数量
	followFinger: false, // 释放时 slide 才会切换
	resistanceRatio: 0, // 边缘抵抗力
	touchAngle: 30, // 允许触发拖动的角度值
	mousewheel: true, // 开启鼠标
	pagination: {
		el: '.swiper-pagination-v',
		clickable: true,
	},
})
const swiperH = new Swiper('.swiper-container-h', {
	loop: true,
	followFinger: false,
	// autoplay: {
	// 	delay: 3000,
	// },
	touchAngle: 30,
	navigation: {
		prevEl: '.swiper-button-prev',
		nextEl: '.swiper-button-next',
	},
})
