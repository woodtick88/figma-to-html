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
    


    // customize dropbox(select) in section .purchase

	$('.parameter-colors-select').selectric({
		disableOnMobile: false,
		nativeOnMobile: false
	  });



	// смена изображения при смене селекта


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


	


	// удалить единицу товара

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


	// удалить параметр товара

	$(".parameter .accessories-select li label .item-price .basket-trash-icon").click(function() {
		
		$(this).parents('.parameter .accessories-select li').remove();

		basketTotalPrice();
		

	});


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

	basketTotalPrice();



	// счетчик аксесуаров


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



	// валидация полей формы


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

	// customize dropbox(select) in block .basket-form

	$('.basket-form .option-input-select').selectric({
		disableOnMobile: false,
		nativeOnMobile: false
	  });


	// decription delivery

	$('.input-list-item .option-input .delivery-terms').click(function() {

		$(this).toggleClass('delivery-terms-active');

		$('.input-list-item .option-input .delivery-terms .description').slideToggle(300);

	});
		




});
