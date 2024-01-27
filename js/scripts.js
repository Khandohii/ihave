$(function(){
	// Главный слайдер
	if ($('.main_slider .slider').length) {
		var mainSlier = new Swiper('.main_slider .slider', {
			spaceBetween: 0,
			slidesPerView: 1,
			loop: true,
			allowTouchMove: false,
			speed: 750,
			autoplay: {
				delay: 5000,
				disableOnInteraction: false,
			},
			pagination: {
				el: ".main_slider .swiper-pagination",
				type: "fraction",
				formatFractionCurrent: function(number){
					if (number < 10) {
						number = '0' + number
					}
					return number
				},
				formatFractionTotal: function(number){
					if (number < 10) {
						number = '0' + number
					}
					return number
				},
			},
			navigation: {
				nextEl: ".main_slider .slider-button-next",
				prevEl: ".main_slider .slider-button-prev",
			},
		})
	}

	// План нашего путешествия
	if ($('.travel_plan .slider').length) {
		var sliderProgress = new Swiper('.travel_plan .slider_progress', {
			spaceBetween: 0,
			slidesPerView: 1,
	        freeMode: true,
	        watchSlidesProgress: true,
			breakpoints: {
				'320': {
					slidesPerView: 3,
				},
				'480': {
					slidesPerView: 4,
				},
				'768': {
					slidesPerView: 5,
				},
				'1025': {
					slidesPerView: 6,
				},
			},
		})

		var travelPlan = new Swiper('.travel_plan .slider', {
			spaceBetween: 80,
			slidesPerView: 1,
			autoHeight: true,
			navigation: {
				nextEl: ".slider-button-next",
				prevEl: ".slider-button-prev",
			},
			thumbs: {
				swiper: sliderProgress,
			},
			on: {
				init: function (swiper) {
					$(swiper.$el).find('.swiper-wrapper').wrap('<div class="swiper-wrap"></div>')

					let totalEls = $(swiper.slides).length
					let currentSlide = $(swiper.realIndex)[0]

					if (!currentSlide) {
						currentSlide = 0
					}

					currentSlide++

					let widthBarWrap = 0;

					for (var j = 0; j < totalEls; j++) {
						widthBarWrap += $(swiper.$el).closest('.travel_plan').find('.progress_slider .slide:eq(' + j + ')').outerWidth()
					}

					$(swiper.$el).closest('.travel_plan').find('.slider_progress .swiper-wrapper').css('--widthBarWrap', widthBarWrap + 'px');

					let widthBar = 0;

					for (var i = 0; i < totalEls; i++) {
						if (i < currentSlide) {
							$(swiper.$el).closest('.travel_plan').find('.progress_slider .slide:eq(' + i + ')').addClass('active')
							widthBar += $(swiper.$el).closest('.travel_plan').find('.progress_slider .slide:eq(' + i + ')').outerWidth()
						} else{
							$(swiper.$el).closest('.travel_plan').find('.progress_slider .slide:eq(' + i + ')').removeClass('active')
						}
					}

					$(swiper.$el).closest('.travel_plan').find('.slider_progress .swiper-wrapper').css('--bar_width', widthBar + 'px');
				},
				slideChange: function (swiper) {
					let totalEls = $(swiper.slides).length
					let currentSlide = $(swiper.realIndex)[0]

					if (!currentSlide) {
						currentSlide = 0
					}

					currentSlide++

					let widthBar = 0;

					for (var i = 0; i < totalEls; i++) {
						if (i < currentSlide) {
							$(swiper.$el).closest('.travel_plan').find('.progress_slider .slide:eq(' + i + ')').addClass('active')
							widthBar += $(swiper.$el).closest('.travel_plan').find('.progress_slider .slide:eq(' + i + ')').outerWidth()
						} else{
							$(swiper.$el).closest('.travel_plan').find('.progress_slider .slide:eq(' + i + ')').removeClass('active')
						}
					}

					$(swiper.$el).closest('.travel_plan').find('.slider_progress .swiper-wrapper').css('--bar_width', widthBar + 'px');
				},
				resize: function (swiper) {
					setTimeout(function(argument) {
						let totalEls = $(swiper.slides).length
						let currentSlide = $(swiper.realIndex)[0]

						if (!currentSlide) {
							currentSlide = 0
						}

						currentSlide++

						let widthBar = 0;

						for (var i = 0; i < totalEls; i++) {
							if (i < currentSlide) {
								$(swiper.$el).closest('.travel_plan').find('.progress_slider .slide:eq(' + i + ')').addClass('active')
								widthBar += $(swiper.$el).closest('.travel_plan').find('.progress_slider .slide:eq(' + i + ')').outerWidth()
							} else{
								$(swiper.$el).closest('.travel_plan').find('.progress_slider .slide:eq(' + i + ')').removeClass('active')
							}
						}

						$(swiper.$el).closest('.travel_plan').find('.slider_progress .swiper-wrapper').css('--bar_width', widthBar + 'px');
					}, 100)
				},
			},
		})
	}

	// Проживание
	if ($('.sect_living .slider').length) {
		var mainSlier = new Swiper('.sect_living .slider', {
			spaceBetween: 0,
			slidesPerView: 1,
			loop: true,
			pagination: {
				el: ".swiper-pagination",
				type: "fraction",
				formatFractionCurrent: function(number){
					if (number < 10) {
						number = '0' + number
					}
					return number
				},
				formatFractionTotal: function(number){
					if (number < 10) {
						number = '0' + number
					}
					return number
				},
			},
			navigation: {
				nextEl: ".slider-button-next",
				prevEl: ".slider-button-prev",
			},
			on: {
				init: function (swiper) {
					$(swiper.$el).find('.swiper-slide-duplicate a').removeAttr('data-fancybox').removeClass('fancy_slider')

					setTimeout(function(){
						observer.observe()
					}, 300)
				},
			}
		})
	}

	// Галерея путешествия
	if ($('.trip_gallery .slider').length) {
		var mainSlier = new Swiper('.trip_gallery .slider', {
			spaceBetween: 24,
			slidesPerView: 'auto',
			loop: true,
			pagination: {
				bulletActiveClass: 'slider-dot_active',
				bulletClass: 'slider-dot',
				clickableClass: 'slider-pagination-clickable',
				el: '.slider-pagination',
				clickable: true,
			},
			navigation: {
				nextEl: ".slider-button-next",
				prevEl: ".slider-button-prev",
			},
			breakpoints: {
				'320': {
					spaceBetween: 16,
				},
				'480': {
					spaceBetween: 16,
				},
				'768': {
					spaceBetween: 16,
				},
				'1025': {
					spaceBetween: 24,
				},
			},
			on: {
				init: function (swiper) {
					$(swiper.$el).find('.swiper-slide-duplicate a').removeAttr('data-fancybox')

					setTimeout(function(){
						observer.observe()
					}, 300)
				},
			}
		})
	}

	// Отзывы
	if ($('.reviews .slider').length) {
		var mainSlier = new Swiper('.reviews .slider', {
			spaceBetween: 24,
			slidesPerView: 4,
			loop: false,
			pagination: {
				bulletActiveClass: 'slider-dot_active',
				bulletClass: 'slider-dot',
				clickableClass: 'slider-pagination-clickable',
				el: '.slider-pagination',
				clickable: true,
			},
			navigation: {
				nextEl: ".slider-button-next",
				prevEl: ".slider-button-prev",
			},
			breakpoints: {
				'320': {
					slidesPerView: 1,
					spaceBetween: 16,
				},
				'480': {
					slidesPerView: 2,
					spaceBetween: 16,
				},
				'768': {
					slidesPerView: 3,
					spaceBetween: 24,
				},
				'1025': {
					slidesPerView: 4,
					spaceBetween: 24,
				},
				'1100': {
					slidesPerView: 4,
					spaceBetween: 24,
				}
			},
			on: {
				init: function (swiper) {
					$(swiper.$el).find('.name').height('auto')

					setTimeout(function(){
						setHeight( $(swiper.$el).find('.name') )
					}, 100)
				},
				resize: function (swiper) {
					$(swiper.$el).find('.name').height('auto')

					setTimeout(function(){
						setHeight( $(swiper.$el).find('.name') )
					}, 100)
				},
			}
		})
	}

	// Другие путешествия
	if ($('.other_travels .slider').length) {
		var mainSlier = new Swiper('.other_travels .slider', {
			spaceBetween: 24,
			slidesPerView: 2,
			loop: false,
			pagination: {
				bulletActiveClass: 'slider-dot_active',
				bulletClass: 'slider-dot',
				clickableClass: 'slider-pagination-clickable',
				el: '.slider-pagination',
				clickable: true,
			},
			navigation: {
				nextEl: ".slider-button-next",
				prevEl: ".slider-button-prev",
			},
			breakpoints: {
				'320': {
					slidesPerView: 1
				},
				'480': {
					slidesPerView: 1
				},
				'768': {
					slidesPerView: 1
				},
				'1025': {
					slidesPerView: 2
				}
			},
			on: {
				init: function (swiper) {
					$(swiper.$el).find('.slide').height('auto')
					$(swiper.$el).find('.inner_data').height('auto')

					setTimeout(function(){
						setHeight( $(swiper.$el).find('.slide') )
						setHeight( $(swiper.$el).find('.inner_data') )
					}, 100)
				},
				resize: function (swiper) {
					$(swiper.$el).find('.slide').height('auto')
					$(swiper.$el).find('.inner_data').height('auto')

					setTimeout(function(){
						setHeight( $(swiper.$el).find('.slide') )
						setHeight( $(swiper.$el).find('.inner_data') )
					}, 100)
				},
			}
		})
	}


	// Gallery
	if ($('.gallery .slider').length) {
		new Swiper('.gallery .slider', {
			slidesPerView: 1,
			loop: true,
			watchOverflow: true,
			navigation: {
				nextEl: '.slider-button-next',
				prevEl: '.slider-button-prev'
			},
			breakpoints: {
				'320': {
					slidesPerView: 2,
					spaceBetween: 15,
				},
				'480': {
					slidesPerView: 2,
					spaceBetween: 26,
				},
				'768': {
					slidesPerView: 3,
					spaceBetween: 26,
				},
				'1025': {
					slidesPerView: 4,
					spaceBetween: 26,
				}
			},
			on: {
				init: function (swiper) {
					$(swiper.$el).find('.swiper-wrapper').wrap('<div class="swiper-wrap"></div>')

					$(swiper.$el).find('.swiper-slide-duplicate a').removeAttr('data-fancybox')

					setTimeout(function(){
						observer.observe()
					}, 300)
				},
			}
		})
	}

	$(document).on('click', '.swiper-slide-duplicate a', function(e) {
		e.preventDefault()

		let thisSlideIndes = $(this).closest('.swiper-slide-duplicate').data('swiper-slide-index')
		let hrefTHis = $(this).attr('href')

		$(this).closest('.swiper-wrapper').find('.swiper-slide:not(.swiper-slide-duplicate)[data-swiper-slide-index="' + thisSlideIndes + '"] a[href="' + hrefTHis + '"]').trigger('click')
	});


	// Ленивая загрузка для слайдеров
	if( $('.travel_plan').length ) {
		inView('.travel_plan').on('enter', function(el){
			$('.loza:not(.loaded)').each(function(index, el) {
				let dataSrc = $(el).data('src')
				$(el).attr('src', dataSrc);
				$(el).addClass('loaded')
			});
		})
	}

	if( $('.sect_living').length ) {
		inView('.sect_living').on('enter', function(el){
			$('.loza:not(.loaded)').each(function(index, el) {
				let dataSrc = $(el).data('src')
				$(el).attr('src', dataSrc);
				$(el).addClass('loaded')
			});
		})
	}

	if( $('.trip_gallery').length ) {
		inView('.trip_gallery').on('enter', function(el){
			$('.loza:not(.loaded)').each(function(index, el) {
				let dataSrc = $(el).data('src')
				$(el).attr('src', dataSrc);
				$(el).addClass('loaded')
			});
		})
	}

	if( $('.reviews').length ) {
		inView('.reviews').on('enter', function(el){
			$('.loza:not(.loaded)').each(function(index, el) {
				let dataSrc = $(el).data('src')
				$(el).attr('src', dataSrc);
				$(el).addClass('loaded')
			});
		})
	}

	if( $('.other_travels').length ) {
		inView('.reviews').on('enter', function(el){
			$('.loza:not(.loaded)').each(function(index, el) {
				let dataSrc = $(el).data('src')
				$(el).attr('src', dataSrc);
				$(el).addClass('loaded')
			});
		})
	}

})


$(window).load(function (){
	// Шапка
	if( $(window).scrollTop() > $(window).height() ) {
		$('header').addClass('fixed')
	} else{
		$('header').removeClass('fixed')
	}

	$(window).scroll(function(){
		if( $(window).scrollTop() > $(window).height() ) {
			$('header').addClass('fixed')
		} else{
			$('header').removeClass('fixed')
		}
	})

	// Слайдер "Для кого"
	if ($('.for_whom .slider').length) {
		var mainSlier = new Swiper('.for_whom .slider', {
			spaceBetween: 0,
			slidesPerView: 1,
			loop: true,
			fadeEffect: {
				crossFade: true
			},
			virtualTranslate: true,
			slidersPerView: 1,
			effect: "fade",
			autoplay: {
				delay: 5000,
				disableOnInteraction: true,
			},
			pagination: {
				bulletActiveClass: 'slider-dot_active',
				bulletClass: 'slider-dot',
				clickableClass: 'slider-pagination-clickable',
				el: '.slider-pagination',
				clickable: true,
			},
			navigation: {
				nextEl: ".for_whom .slider-button-next",
				prevEl: ".for_whom .slider-button-prev",
			},
			on: {
				init: function (swiper) {
					let totalEls = $(swiper.slides).length - 2

					if (totalEls < 10) {
						totalEls = '0' + totalEls
					}

					$(swiper.$el).closest('.for_whom').find('.pagination .total').text(totalEls)
				},
				slideChange: function (swiper) {
					let currentSlide = $(swiper.realIndex)[0]

					if (!currentSlide) {
						currentSlide = 0
					}

					currentSlide++

					if (currentSlide < 10) {
						currentSlide = '0' + currentSlide
					}

					$(swiper.$el).closest('.for_whom').find('.pagination .current').text(currentSlide)
				},
			}
		})
	}


	// Выравнивание элементов в сетке
	alignmentElements()
})


$(window).resize(function () {
	// Выравнивание элементов в сетке
	setTimeout(function() {
		alignmentElements()
	}, 300)
})

function alignmentElements() {
	$('.prices .grid').each(function() {
		pricesHeight($(this), parseInt($(this).css('--items')))
	})
}


// Выравнивание
function pricesHeight(context, step) {
	let start    = 0
	let finish   = step
	let products = context.find('.item')

	products.find('.price').height('auto')
	products.find('.name').height('auto')

	for (let i = 0; i < products.length; i++) {
		setHeight(products.slice(start, finish).find('.price'))
		setHeight(products.slice(start, finish).find('.name'))

		start  = start + step
		finish = finish + step
	}
}