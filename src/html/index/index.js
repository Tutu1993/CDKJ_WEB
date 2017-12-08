require('fontsDir/iconfont.css')
require('cssDir/index/index.css')
require('cssDir/index/part-2.css')
require('cssDir/index/part-3.css')
require('cssDir/index/part-4.css')
require('cssDir/index/part-5.css')
require('cssDir/index/part-6.css')

const log = console.log.bind(console)

const navArr = ['首页', '产品介绍', '关于承点', '渠道合作', '新闻资讯', '联系我们']

const swiperV = new Swiper('.swiper-container-v', {
	initialSlide: 0,
	direction: 'vertical', // 竖向切换
	speed: 500, // 切换消耗时间
	roundLengths: true, // 宽高取整
	slidesPerView: 'auto', // 同屏显示 slide 的数量
	// followFinger: false, // 释放时 slide 才会切换
	resistanceRatio: 0, // 边缘抵抗力
	touchAngle: 15, // 允许触发拖动的角度值
	mousewheel: true, // 开启鼠标
	threshold: 20, // 至少拖动的距离 px
	pagination: {
		el: '.gh-nav',
		bulletClass : 'nav-list',
		bulletActiveClass: 'nav-list-active',
		clickable: true,
		renderBullet: (index, className) => {
			if (index === navArr.length) {
				return '<span class="nav-line"></span>'
			} else {
				return '<span class="' + className + '">' + navArr[index] + '</span>'
			}
		},
	},
	hashNavigation: {
		watchState: true,
	},
	on: {
		slideChangeTransitionStart: function() {
			const header = document.querySelector('.global-header')
			const nav = document.querySelector('.gh-nav')

			if (this.activeIndex === 0) {
				header.style.background = 'rgba(153, 153, 153, 0)'
				nav.style.transform = 'translate(-50%, -50%) scale(1)'
			} else {
				header.style.background = 'rgba(153, 153, 153, .3)'
				nav.style.transform = 'translate(-50%, -50%) scale(.95)'
			}

			if (this.activeIndex === 5) {
				const addressIcon = document.querySelector('.BMap_noprint')
				if (addressIcon !== null) {
					addressIcon.className = 'iconStyle'
				}
				const hiddenIcon = document.querySelector('.BMap_Marker')
				if (hiddenIcon !== null) {
					hiddenIcon.className = 'iconHidden'
					hiddenIcon.style.display = 'none'
				}
			}
		},
	},
})

const swiperH = new Swiper('.swiper-container-h', {
	loop: true, // 开启循环
	speed: 500, // 切换消耗时间
	touchAngle: 15, // 允许触发拖动的角度值
	threshold: 20, // 至少拖动的距离 px
	// followFinger: false, // 释放时 slide 才会切换
	autoplay: {
		delay: 3000,
	},
	navigation: {
		prevEl: '.swiper-button-prev',
		nextEl: '.swiper-button-next',
	},
})

const nextPage = document.querySelector('.down-arrow')

nextPage.addEventListener('click', () => {
	swiperV.slideNext()
})

const map = new BMap.Map('map');
const point =new BMap.Point(116.662645, 39.913248)
const marker = new BMap.Marker(point)

map.centerAndZoom(point, 20)
map.addOverlay(marker)
