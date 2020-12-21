$(function() {


	// Scroll nav


	$(window).scroll(function(){

		// Scroll nav

		const scrollNav = $('.blog-nav-wrapper');
		const scrollTop = $(this).scrollTop();
		const scrollNavHeight = scrollNav.height();
		
        if ( scrollTop > scrollNavHeight ) {
			scrollNav.addClass('scroll-nav');
        } else if (( scrollTop < scrollNavHeight )) {
			scrollNav.removeClass('scroll-nav');
		}	
		

	});


	// Scroll nav исправление бага - добавление класа при перезагрузке страницы

	const scrollNav = $('.blog-nav-wrapper');
	const scrollTop = $(this).scrollTop();
	const scrollNavHeight = scrollNav.height();
	
	if ( scrollTop > scrollNavHeight ) {
		scrollNav.addClass('scroll-nav');
	} else if (( scrollTop < scrollNavHeight )) {
		scrollNav.removeClass('scroll-nav');
	}
	


	// scroll from #blog-arrow-link to section #blog-content

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


	// images gallery


	const gallerySlider = $('.gallery-slider');

	gallerySlider.slick({
		arrows: false
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

			console.log($(this).index())

			if ( currentSlide == $(this).index() ) {
				$(this).addClass("current-custon-dot");
			} else {
				$(this).removeClass("current-custon-dot");
			}

		});	
		
	});


	// подключение zoom к слайдеру


	$('.gallery-slider-item').zoom();













});
