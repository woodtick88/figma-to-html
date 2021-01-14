$(function() {

	// Sliders


	if ( $('.accessories-slider').length ) {

		$('.accessories-slider').slick({
			dots: false,
			infinite: true,
			speed: 300,
			slidesToShow: 1,
			variableWidth: true,
			prevArrow: $('.custom-slick-prev'),
			nextArrow: $('.custom-slick-next')
		  });
	
		$('.about-application-slider').slick({
			dots: true,
			prevArrow: $('.about-application-custom-slick-prev'),
			nextArrow: $('.about-application-custom-slick-next')
		}); 

	};

	 

	// Scroll nav


	$(window).scroll(function(){

		// Scroll nav

		if ( $('.main-nav-wrapper').length ) {

			const scrollNav = $('.main-nav-wrapper');
			const scrollTop = $(this).scrollTop();
			const scrollNavHeight = scrollNav.height();
			
			if ( scrollTop > scrollNavHeight ) {
				scrollNav.addClass('scroll-nav');
			} else if (( scrollTop < scrollNavHeight )) {
				scrollNav.removeClass('scroll-nav');
			}

		};


		// Scroll nav blog-wrapper

		if ( $('.blog-nav-wrapper').length ) {

			const scrollNav = $('.blog-nav-wrapper');
			const scrollTop = $(this).scrollTop();
			const scrollNavHeight = scrollNav.height();
			
			if ( scrollTop > scrollNavHeight ) {
				scrollNav.addClass('scroll-nav');
			} else if (( scrollTop < scrollNavHeight )) {
				scrollNav.removeClass('scroll-nav');
			}

		};
		


		// fixed form scroll

		if ( $('.purchase').length ) {

			const scrollTop = $(this).scrollTop();

			const widthToForm = $(".purchase").offset().top;
			const bottomWidthForForm = $(".purchase").height() - $(".purchase .buy-form").height()
			const res = (scrollTop - widthToForm) + 120;

			if ( $(window).width() >= '1400' ) {

				if ( scrollTop > $(".purchase").offset().top )  {
					if ( res < bottomWidthForForm ) {
						$(".purchase .buy-form").css({"top" : res});
					}			
				}

			}	

		};	


	});


	// Scroll nav исправление бага - добавление класа при перезагрузке страницы


	if ( $('.main-nav-wrapper').length ) {

		const scrollNav = $('.main-nav-wrapper');
		const scrollTop = $(this).scrollTop();
		const scrollNavHeight = scrollNav.height();
		
		if ( scrollTop > scrollNavHeight ) {
			scrollNav.addClass('scroll-nav');
		} else if (( scrollTop < scrollNavHeight )) {
			scrollNav.removeClass('scroll-nav');
		}

	};	


	// Scroll nav исправление бага - добавление класа при перезагрузке страницы - blog-wrapper

	if ( $('.blog-nav-wrapper').length ) {

		const scrollNav = $('.blog-nav-wrapper');
		const scrollTop = $(this).scrollTop();
		const scrollNavHeight = scrollNav.height();
		
		if ( scrollTop > scrollNavHeight ) {
			scrollNav.addClass('scroll-nav');
		} else if (( scrollTop < scrollNavHeight )) {
			scrollNav.removeClass('scroll-nav');
		}

	};

	
	


	// scroll from #buy-link to section #purchase


	if ( $('#buy-link').length ) {

		$("#buy-link").on("click", function (event) {
			//отменяем стандартную обработку нажатия по ссылке
			event.preventDefault();
	
			//забираем идентификатор бока с атрибута href
			var id  = $(this).attr('href'),
	
			//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top - 62;
			
			//анимируем переход на расстояние - top за 1500 мс
			$('body,html').animate({scrollTop: top}, 1500);
		});

	};

	

	// scroll from #arrow-link to section #product-2

	if ( $('#arrow-link').length ) {

		$("#arrow-link").on("click", function (event) {
			//отменяем стандартную обработку нажатия по ссылке
			event.preventDefault();
	
			//забираем идентификатор бока с атрибута href
			var id  = $(this).attr('href'),
	
			//узнаем высоту от начала страницы до блока на который ссылается якорь
				top = $(id).offset().top - 62;
			
			//анимируем переход на расстояние - top за 1500 мс
			$('body,html').animate({scrollTop: top}, 1000);
		});

	};


	// scroll from #blog-arrow-link to section #blog-content

	if ( $('#blog-arrow-link').length ) {

		$("#blog-arrow-link").on("click", function (event) {

	
			//отменяем стандартную обработку нажатия по ссылке
			event.preventDefault();
	
			//забираем идентификатор бока с атрибута href
			var id  = $(this).attr('href'),
	
			//узнаем высоту от начала страницы до блока на который ссылается якорь
				top = $(id).offset().top - 62;
			
			//анимируем переход на расстояние - top за 1500 мс
			$('body,html').animate({scrollTop: top}, 1000);
		});

	};

	

	

	// customize dropbox(select) in section .purchase

	if ( $('#parameter-colors-select').length ) {

		$('#parameter-colors-select').selectric({
			disableOnMobile: false,
			nativeOnMobile: false
		});

	};


	// customize dropbox(select) on page basket

	if ( $('.parameter-colors-select').length ) {

		$('.parameter-colors-select').selectric({
			disableOnMobile: false,
			nativeOnMobile: false
		});

	};
	



	// смена изображения при смене селекта

	if ( $('#parameter-colors-select').length ) {

		$("#parameter-colors-select").change(function(){ //При изменении модели
			var img_id = $("#parameter-colors-select").children("option:selected").attr("data"); // Получаем значение атрибута блока с изображением которое нужно показать на изображении
			$(".modelImg").hide(); // прячем все блоки с изображением 
			$(img_id).show(); // показываем нужный блок с изображением
		});


	};

	

	// высчитывает итоговую суму оплаты по списку чекбоксов, сума высчитываеться с поля input[ckeckbox]="value" 

	if ( $('#purchase .buy-form').length ) {

		let productPrice = $('#purchase .buy-form #product-price').data('price');

		$('#accessories-select-list').click(function() {

			let totalPriceChecked = 0;
	
	
			$('#accessories-select-list input[type=checkbox]').each(function () {
		
				if ( $(this).is(':checked') ) {
					totalPriceChecked = totalPriceChecked + parseInt($(this).data('price'));				
				}			
		
			});
	
			let totalPrice = totalPriceChecked + productPrice;
	
			let firstPricePart = totalPrice.toString().slice(0, -3);
			let secondPricePart = totalPrice.toString().slice(-3);
	
		
			$('#purchase .buy-form #product-price').text(firstPricePart + ' ' + secondPricePart);			
	
	
		});
		

	};	
	

	// WOW animation

	if ( $('.wow').length ) {

		new WOW().init();

	};


	// сетка masonry

	if ( $('.grid').length ) {

		$(document).ready(function(){ 
			$('.grid').masonry({
		// указываем элемент-контейнер в котором расположены блоки для динамической верстки
			  itemSelector: '.grid-item',
		// указываем класс элемента являющегося блоком в нашей сетке
				  singleMode: true,
		// true - если у вас все блоки одинаковой ширины
			  isResizable: true,
		// перестраивает блоки при изменении размеров окна
			  isAnimated: true,
		// анимируем перестроение блоков
				  animationOptions: { 
				  queue: false, 
				  duration: 500 
			  },
		// опции анимации - очередь и продолжительность анимации
			gutter: 32
		// Adds horizontal space between item elements	
			}); 
		});

	};


	// tabs on page gallery

	if ( $('.tab_item').length ) {

		$(".tab_item").not(":first").fadeOut();
		$(".gallery-tabs-buttons .tab").click(function() {
			$(".gallery-tabs-buttons .tab").removeClass("active").eq($(this).index()).addClass("active");
			$(".tab_item").fadeOut(200).eq($(this).index()).fadeIn()
		}).eq(0).addClass("active"); 

	};



	// popup for .address section

	if ( $('.open-address-map-popup').length ) {

		$('.open-address-map-popup').click(function(event) { // Вызываем функцию по нажатию на кнопку
			event.preventDefault();
			$('.address-popup').show(300); // Открываем окно
			$('.address-overlay-popup').show(300); // Открываем блок заднего фона
		})
		$('.address-overlay-popup').click(function() { // Обрабатываем клик по заднему фону
			$('.address-popup').hide(300); // Скрываем затемнённый задний фон и основное всплывающее окно
			$('.address-overlay-popup').hide(300); 
		})
	
		$('.address-popup .popup-close').click(function() { 
			$('.address-popup').hide(300); 
			$('.address-overlay-popup').hide(300); 
		})

	};	


	// hamburger icon


	if ( $('#hamburger').length ) {

		$("#hamburger").click(function() {

			if ( $("#mobile-nav").length ) {
				$('body,html').animate({scrollTop: 0}, 0);
				$("#mobile-nav").show();
				$(".mobile-nav-hide").hide(300);
			}
	
		});
	
		$("#mobile-nav .mobile-nav-head .mobile-nav-close").click(function() {
	
			if ( $("#mobile-nav").length ) {
				$("#mobile-nav").hide();
				$(".mobile-nav-hide").show(300);
			}
	
		});

	};


	// mobile nav 

	if ( $("#mobile-nav").length ) {


		$("#mobile-nav .mobile-nav-main .links-main .item-main .item-main-link .title").each(function() {


			$(this).click(function() {

				let subMenu = $(this).parents(".item-main-link").children(".sub-menu");
				let mobileNavMain = $(this).parents(".mobile-nav-main");


				
				mobileNavMain.height( subMenu.height() );
				
				$(this).parents(".item-main-link").children(".sub-menu").show(100);				

			});

		});	


		$("#mobile-nav .sub-menu .back").click(function() {
			$("#mobile-nav .sub-menu").hide(300);
			$("#mobile-nav .mobile-nav-main").css({"height" : "auto"});

		});



		// active menu - catalog


		if ( $("header.main-header .main-nav .links-nav li.active-inner-menu").length ) {


			$('header.main-header .main-nav .links-nav li.active-inner-menu').mouseover(function() {

				$('header.main-header .main-nav-wrapper').addClass('active-menu');
	
				// active menu - height block
	
				let blockHeight1 = $('header.main-header .main-nav-wrapper').innerHeight();
				let blockHeight2 = $('header.main-header .main-nav .links-nav li .inner-nav').innerHeight();
		
				$('header.main-header .main-nav-wrapper').innerHeight(blockHeight1 + blockHeight2);
			});
	
			$('header.main-header .main-nav .links-nav li.active-inner-menu').mouseout(function() {
	
				$('header.main-header .main-nav-wrapper').removeClass('active-menu');
	
				$('header.main-header .main-nav-wrapper').css({'height' : 'auto'})
	
			});
	
	
			$('header.main-header .main-nav .links-nav li .inner-nav').mouseover(function() {
	
				$('header.main-header .main-nav-wrapper').addClass('active-menu');
	
			});


		};
		


		// active menu - catalog


		if ( $("header.blog-header .main-nav .links-nav li.active-inner-menu").length ) {


			$('header.blog-header .main-nav .links-nav li.active-inner-menu').mouseover(function() {

				$('header.blog-header .blog-nav-wrapper').addClass('active-menu');
	
				// active menu - height block
	
				let blockHeight1 = $('header.blog-header .blog-nav-wrapper').innerHeight();
				let blockHeight2 = $('header.blog-header .main-nav .links-nav li .inner-nav').innerHeight();
	
				$('header.blog-header .blog-nav-wrapper').innerHeight(blockHeight1 + blockHeight2);
			});
	
			$('header.blog-header .main-nav .links-nav li.active-inner-menu').mouseout(function() {
	
				$('header.blog-header .blog-nav-wrapper').removeClass('active-menu');
	
				$('header.blog-header .blog-nav-wrapper').css({'height' : 'auto'})
	
			});
	
	
			$('header.blog-header .main-nav .links-nav li .inner-nav').mouseover(function() {
	
				$('header.blog-header .mblog-nav-wrapper').addClass('active-menu');
	
			});


		};
		



	};



	// удалить единицу товара

	if ( $(".main-product-information .price .delete-item").length ) {


		$(".main-product-information .price .delete-item").click(function() {
		
			$(this).parents('.product-item-wrapper').remove();
	
	
			// если нету выбраного товара - показ блока - Ваша корзина пуста
	
			if ($(".product-item-wrapper").length){			
			  
			} else {
				$('.purchase-wrapper.basket .purchase').hide();
				$('.purchase-wrapper.basket .basket-empty').show();
			}
	
			basketTotalPrice();
	
	
		});


	};
	


	// удалить параметр товара

	if ( $(".parameter .accessories-select li label .item-price .basket-trash-icon").length ) {

		$(".parameter .accessories-select li label .item-price .basket-trash-icon").click(function() {
		
			$(this).parents('.parameter .accessories-select li').remove();
	
			basketTotalPrice();
			
	
		});

	};


	// подсчет итоговой сумы

	let basketTotalPrice = function() {

		let totalPrice = 0;

		$('.product-item-wrapper input[type=checkbox]').each(function () {
		
			
			let currenPrice = parseInt($(this).data('price')) * parseInt($(this).data('amount'));
			totalPrice += parseInt($(this).data('price')) * parseInt($(this).data('amount'));

			let firstPricePart = totalPrice.toString().slice(0, -3);
			let secondPricePart = totalPrice.toString().slice(-3);

		
			$('.purchase-wrapper.basket .purchase .total-price .total').text(firstPricePart + ' ' + secondPricePart);


		});


	};


	if ( $(".purchase-wrapper.basket .purchase .total-price .total").length ) {		
	
		basketTotalPrice();

	};


	// счетчик аксесуаров

	if ( $(".parameter .accessories-select li label .price-select").length ) {


		$('.parameter .accessories-select li label .price-select').each(function () {		
		
	
			$(this).children('.minus').click(function() {
	
				let currentNumber  =  parseInt( $(this).parents('.price-select').children('.curren-number').text() );
				let currntDataAmount = $(this).parents(' li ').children('.accessories-checbox').data('amount');
	
				if ( currentNumber <= 1 ) {
					return
				} else {
					currentNumber = currentNumber - 1;				
				}
	
				$(this).parents('.price-select').children('.curren-number').text(currentNumber)
				$(this).parents(' li ').children('.accessories-checbox').data('amount', currentNumber);
	
				basketTotalPrice();
				
			});	
			
	
			$(this).children('.plus').click(function() {
	
				let currentNumber  =  parseInt( $(this).parents('.price-select').children('.curren-number').text() );
				
				
				currentNumber = currentNumber + 1;		
	
				$(this).parents('.price-select').children('.curren-number').text(currentNumber)	
				$(this).parents(' li ').children('.accessories-checbox').data('amount', currentNumber);
	
				basketTotalPrice();
	
			});		
	
		});


	};


	// валидация полей формы

	if ( $(".purchase-wrapper.basket .purchase .basket-form").length ) {

		$('.purchase-wrapper.basket .purchase .basket-form').submit(function(e) {		

			let name = $('.basket-form-input.name').val();
			let email = $('.basket-form-input.email').val();
			let telefone = $('.basket-form-input.telefone').val();
	
			$('.basket-form-input').removeClass('error');
		 
			if (name.length < 6) {
				$('.basket-form-input.name').addClass('error');
			}
	
			let regExEmail = /^[a-z]+@[a-z]+\.[a-z]{2,6}$/i;
			let validEmail = regExEmail.test(email);
			let regExTelefone = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
			let validTelefone = regExTelefone.test(telefone);
	
			if ( !validEmail && !validTelefone ) {
			
					$('.basket-form-input.email').addClass('error');
				
					$('.basket-form-input.telefone').addClass('error');
	
			}
	
			if (  ( !validEmail && !validTelefone ) || name.length < 6 ) {	
	
				e.preventDefault();	
				
			} else {
				
			}
	
	
		});


	};


	// customize dropbox(select) in block .basket-form

	if ( $(".basket-form .option-input-select").length ) {

		$('.basket-form .option-input-select').selectric({
			disableOnMobile: false,
			nativeOnMobile: false
		});

	};


	// decription delivery

	if ( $(".input-list-item .option-input .delivery-terms").length ) {

		$('.input-list-item .option-input .delivery-terms').click(function() {

			$(this).toggleClass('delivery-terms-active');
	
			$('.input-list-item .option-input .delivery-terms .description').slideToggle(300);
	
		});

	};


	// смена изображения при смене селекта basket-page


	if ( $(".parameter-colors-select").length ) {

		$(".parameter-colors-select").each(function() {

			$(this).change(function(){ //При изменении модели
				let selectData = $(this).children("option:selected").attr("data"); // Получаем значение атрибута блока с изображением которое нужно показать на изображении
				
	
				$(this).parents('.parameter-colors').children('.select-image').children('.modelImg').each(function() {
	
					if ( $(this).data('image') == selectData ) {
						$(this).show()
					} else {
						$(this).hide();
					}
	
	
				})
			});
			
	
		});


	};


	// slider on page main-3

	if ( $(".tab-slider").length ) { 

		let slickMain3 = $('.tab-slider').slick({
			dots: true,
			infinite: true,
			speed: 300,
			slidesToShow: 1,		
			responsive: [
				{
				  breakpoint: 993,
				  settings: {
					dots: false
				  }
				}
			]
		});

	};


	// images gallery on page product-car-small


	if ( $(".gallery-slider-cart").length ) {

		
		const gallerySlider = $('.gallery-slider');

		gallerySlider.slick({
			arrows: true
		});

		// изменение высоты слайдера в зависимости от высоты текущего изображения
		
		gallerySlider.on('setPosition', function (event, slick) {

			const currentSlideHeight = $('.gallery-slider .gallery-slider-item.slick-current img').height();
			$('.gallery-slider .slick-list.draggable').animate({ 'height': currentSlideHeight + 'px' }, 400);
			//$('.gallery-slider .slick-list.draggable').css({ 'height': currentSlideHeight + 'px' })


		});;

		$(".gallery-slider-custom-dots .custom-dots-item").click(function(e){		
					
			$(".gallery-slider-custom-dots .custom-dots-item").each(function() {

				$(this).removeClass("current-custon-dot");

			});

			$(this).addClass("current-custon-dot");		

			e.preventDefault();
			slideIndex = $(this).index();
			gallerySlider.slick( 'slickGoTo', parseInt(slideIndex) );

		});
		

		// привязка dots к слайдеру

		gallerySlider.on('afterChange', function(event, slick, currentSlide, nextSlide){

			$(".gallery-slider-custom-dots .custom-dots-item").each(function() {

				if ( currentSlide == $(this).index() ) {
					$(this).addClass("current-custon-dot");
				} else {
					$(this).removeClass("current-custon-dot");
				}

			});	
			
		});


		// подключение zoom к слайдеру


		$('.gallery-slider-item').zoom({
			magnify: 0.75
		});


	 };


	

	


	

	

	


	


	


	

	












	


});
