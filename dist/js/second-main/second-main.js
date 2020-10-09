$(function() {

	// Scroll nav


	$(window).scroll(function(){

		// Scroll nav

		const scrollNav = $('.main-nav-wrapper');
		const scrollTop = $(this).scrollTop();
		const scrollNavHeight = scrollNav.height();
		
        if ( scrollTop > scrollNavHeight ) {
			scrollNav.addClass('scroll-nav');
        } else if (( scrollTop < scrollNavHeight )) {
			scrollNav.removeClass('scroll-nav');
		}	
		

	});


	// Scroll nav исправление бага - добавление класа при перезагрузке страницы

	const scrollNav = $('.main-nav-wrapper');
	const scrollTop = $(this).scrollTop();
	const scrollNavHeight = scrollNav.height();
	
	if ( scrollTop > scrollNavHeight ) {
		scrollNav.addClass('scroll-nav');
	} else if (( scrollTop < scrollNavHeight )) {
		scrollNav.removeClass('scroll-nav');
	}



	// scroll from #buy-link to section #purchase

	$("#arrow-link").on("click", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top - 62;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
    });	
    
    


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



	// popup for .address section


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


	// hamburger icon

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



	}



	// WOW animation

	new WOW().init();

	


});
