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










	var urls = [
		"./img/product-cart-small/test/1.jpg",
		"./img/product-cart-small/test/2.jpg",
		"./img/product-cart-small/test/3.jpg",
		"./img/product-cart-small/test/4.jpg",
		"./img/product-cart-small/test/5.jpg"
	  ];
	  var options = {
		//thumbLeft:true,
		//thumbRight:true,
		//thumbHide:true,
		//width:300,
		//height:500,
	  };
	  $("#el").zoomy(urls, options);









});
