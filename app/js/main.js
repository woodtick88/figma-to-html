$(function() {

	// Sliders

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


		// fixed form scroll

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


	// hamburger icon

	$("#hamburger").click(function() {
		$("#hamburger").toggleClass("hamburger-active");
	});


	// scroll from #buy-link to section #purchase

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
	

	// scroll from #arrow-link to section #product-2

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



	// customize dropbox(select) in section .purchase

	$('#parameter-colors-select').selectric({
		disableOnMobile: false,
		nativeOnMobile: false
	  });



	// смена изображения при смене селекта


	$("#parameter-colors-select").change(function(){ //При изменении модели
		var img_id = $("#parameter-colors-select").children("option:selected").attr("data"); // Получаем значение атрибута блока с изображением которое нужно показать на изображении
		$(".modelImg").hide(); // прячем все блоки с изображением 
		$(img_id).show(); // показываем нужный блок с изображением
	});

	

	// высчитывает итоговую суму оплаты по списку чекбоксов, сума высчитываеться с поля input[ckeckbox]="value" 

	let productPriceFirstPart = parseInt( $('#purchase .buy-form #product-price .product-price-first-part').text() );
	let productPriceSecondPart = parseInt( $('#purchase .buy-form #product-price .product-price-second-part').text() );
	let productPrice = parseInt( productPriceFirstPart.toString() + productPriceSecondPart.toString() );


	$('#accessories-select-list').click(function() {

		let totalPriceChecked = 0;


		$('#accessories-select-list input[type=checkbox]').each(function () {
	
			if ( $(this).is(':checked') ) {
				totalPriceChecked = totalPriceChecked + parseInt($(this).val());				
			}			
	
		});


		let totalPrice = totalPriceChecked + productPrice;

		let firstPricePart = totalPrice.toString().slice(0, -3);
		let secondPricePart = totalPrice.toString().slice(-3);

	
		$('#purchase .buy-form #product-price .product-price-first-part').text(firstPricePart);
		$('#purchase .buy-form #product-price .product-price-second-part').text(secondPricePart);
		


	});

	

	// WOW animation

	new WOW().init();
	


});
