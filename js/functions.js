$(function(){
	// Проверка браузера
	if ( !supportsCssVars() ) {
		$('body').addClass('lock')
		$('.supports_error').addClass('show')
	}


	// Ленивая загрузка
	setTimeout(function(){
		observer = lozad('.lozad', {
			rootMargin: '800px 0px',
			threshold: 0,
			loaded: function(el) {
				el.classList.add('loaded')
			}
		})

		observer.observe()
	}, 200)


	// Установка ширины стандартного скроллбара
	$(':root').css('--scroll_width', widthScroll() +'px')


	// Аккордион
	$('body').on('click', '.accordion .item .open_btn', function(e) {
		e.preventDefault()

		let parent = $(this).closest('.item')
		let accordion = $(this).closest('.accordion')

		if( parent.hasClass('active') ) {
			parent.removeClass('active')
			parent.find('.data').slideUp(300)
		} else {
			accordion.find('.item').removeClass('active')
			accordion.find('.data').slideUp(300)

			parent.addClass('active')
			parent.find('.data').slideDown(300)
		}
	})


	// Всплывающие окна
	$('.modal_link').click(function(e){
		e.preventDefault()

		let thisEl = $(this)

		$.fancybox.close()

		$.fancybox.open({
			src  : $(this).data('content'),
			type : 'inline',
			opts : {
				touch : false,
				speed : 300,
				backFocus : false,
				trapFocus : false,
				autoFocus : false,
				mobile : {
				    clickSlide: "close"
				},
				afterShow : function() {
					if ($('.info_slider').length) {
						new Swiper('.info_slider', {
							spaceBetween: 24,
							slidesPerView: 3,
							loop: true,
							watchOverflow: true,
							watchSlidesVisibility: true,
							direction: "vertical",
							navigation: {
								nextEl: '.slider-button-next',
								prevEl: '.slider-button-prev'
							}
						})
					}
				},
				beforeShow : function() {
					if (thisEl.hasClass('review_btn')) {
						let elHref = thisEl.closest('.review').find('.thumb').html()
						let elName = thisEl.closest('.review').find('.name').text()
						let elText = thisEl.closest('.review').find('.text').html()

						$( thisEl.data('content') ).find('.thumb').html(elHref)
						$( thisEl.data('content') ).find('.name').text(elName)
						$( thisEl.data('content') ).find('.text').html(elText)
					}
				},
				afterClose : function() {
					if (thisEl.hasClass('review_btn')) {
						$( thisEl.data('content') ).find('.thumb').html('')
						$( thisEl.data('content') ).find('.name').text('')
						$( thisEl.data('content') ).find('.text').html('')
					}
				}
			}
		})
	})

	$('body').on('click', '.success_wrap [data-modal-close], .close_bg', function(e) {
		e.preventDefault()

        $('.success_wrap').removeClass('visible');
        $('.overlay').fadeOut(300);

        setTimeout(function() {
        	$('body').removeClass('lock');
        }, 300)
	})


	// Увеличение картинки
	$('.fancy_img').fancybox({
		backFocus : false,
		mobile : {
		    clickSlide: "close"
		},
	})

	// Увеличение картинки в слайдере
	$('.swiper-slide:not(.swiper-slide-duplicate) .fancy_slider').fancybox({
		backFocus : false,
		mobile : {
		    clickSlide: "close"
		},
	})


	// Моб. меню
	$('body').on('click', '.mob_menu_link', function(e) {
    	e.preventDefault()

		if( $(this).hasClass('active') ) {
			$(this).removeClass('active')

			$('header').removeClass('active_menu')
			$('body').removeClass('lock')
			$('header .wrap_menu').removeClass('visible')
		} else {
			$(this).addClass('active')

			$('header').addClass('active_menu')
			$('body').addClass('lock')
			$('header .wrap_menu').addClass('visible')

			if (!$('header').hasClass('fixed')) {
				$('html, body').stop().animate({
				   	scrollTop: 0
				}, 0)
			}
		}
    })


	// Маска ввода
	$('input[type=tel]').inputmask('+7 (999) 999-99-99')


	// Изменение количества товара
	$('.amount .minus').click(function(e){
	    e.preventDefault()

		const parent   = $(this).closest('.amount')
		const input    = parent.find('.input')
		const inputVal = parseFloat(input.val())
		const minimum  = parseFloat(input.data('minimum'))
		const step     = parseFloat(input.data('step'))

		if (inputVal > minimum) {
			input.val(inputVal - step)
		}
	})

	$('.amount .plus').click(function(e){
	    e.preventDefault()

		const parent   = $(this).closest('.amount')
		const input    = parent.find('.input')
		const inputVal = parseFloat(input.val())
		const maximum  = parseFloat(input.data('maximum'))
		const step     = parseFloat(input.data('step'))

		if (inputVal < maximum) {
			input.val(inputVal + step)
		}
	})


    // Плавная прокрутка к якорю
	$('body').on('click', '.scroll_link', function(e) {
		e.preventDefault()

		let href = $(this).data('anchor')
		let offsetEl = $(this).data('offset')

		if (offsetEl) {
			offsetEl = offsetEl
		} else {
			offsetEl = 0
		}

		let padHeight = 0;

		if($(this).is("[data-padding]")){
			padHeight = parseInt( $('.sect_questions').css('padding-top') ) - 60;
		}

		$('html, body').stop().animate({
		   	scrollTop: $(href).offset().top - offsetEl + padHeight
		}, 1000)


		if ( $(window).width() < 1025 ) {
			$('.mob_menu_link').removeClass('active')
			$('header').removeClass('active_menu')
			$('body').removeClass('lock')
			$('header .wrap_menu').removeClass('visible')
		}
	})
})


// Вспомогательные функции
function widthScroll() {
    let div = document.createElement('div')
    div.style.overflowY = 'scroll'
    div.style.width = '50px'
    div.style.height = '50px'
    div.style.visibility = 'hidden'
    document.body.appendChild(div)

    let scrollWidth = div.offsetWidth - div.clientWidth
    document.body.removeChild(div)

    return scrollWidth
}


var supportsCssVars = function() {
    var s = document.createElement('style'),
        support

    s.innerHTML = ":root { --tmp-var: bold; }"
    document.head.appendChild(s)
    support = !!(window.CSS && window.CSS.supports && window.CSS.supports('font-weight', 'var(--tmp-var)'))
    s.parentNode.removeChild(s)

    return support
}


function setHeight(className){
    let maxheight = 0

    className.each(function() {
    	let elHeight = $(this).outerHeight()

        if( elHeight > maxheight ) {
        	maxheight = elHeight
        }
    })

    className.outerHeight( maxheight )
}