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
	

    

    // hamburger icon

	$("#hamburger").click(function() {
		$("#hamburger").toggleClass("hamburger-active");
	});


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





});
