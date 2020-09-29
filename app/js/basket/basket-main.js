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

	$('.parameter-colors-select').selectric({
		disableOnMobile: false,
		nativeOnMobile: false
	  });



	// смена изображения при смене селекта


	$("#parameter-colors-select-1").change(function(){ //При изменении модели
		var img_id = $("#parameter-colors-select-1").children("option:selected").attr("data"); // Получаем значение атрибута блока с изображением которое нужно показать на изображении
		$(".colors-select-image-1 .modelImg").hide(); // прячем все блоки с изображением 
		$(img_id).show(); // показываем нужный блок с изображением
	});


	$("#parameter-colors-select-2").change(function(){ //При изменении модели
		var img_id = $("#parameter-colors-select-2").children("option:selected").attr("data"); // Получаем значение атрибута блока с изображением которое нужно показать на изображении
		$(".colors-select-image-2 .modelImg").hide(); // прячем все блоки с изображением 
		$(img_id).show(); // показываем нужный блок с изображением
	});

	$("#parameter-colors-select-3").change(function(){ //При изменении модели
		var img_id = $("#parameter-colors-select-3").children("option:selected").attr("data"); // Получаем значение атрибута блока с изображением которое нужно показать на изображении
		$(".colors-select-image-3 .modelImg").hide(); // прячем все блоки с изображением 
		$(img_id).show(); // показываем нужный блок с изображением
	});

	$("#parameter-colors-select-4").change(function(){ //При изменении модели
		var img_id = $("#parameter-colors-select-4").children("option:selected").attr("data"); // Получаем значение атрибута блока с изображением которое нужно показать на изображении
		$(".colors-select-image-4 .modelImg").hide(); // прячем все блоки с изображением 
		$(img_id).show(); // показываем нужный блок с изображением
	});

	$("#parameter-colors-select-5").change(function(){ //При изменении модели
		var img_id = $("#parameter-colors-select-5").children("option:selected").attr("data"); // Получаем значение атрибута блока с изображением которое нужно показать на изображении
		$(".colors-select-image-5 .modelImg").hide(); // прячем все блоки с изображением 
		$(img_id).show(); // показываем нужный блок с изображением
	});

	$("#parameter-colors-select-6").change(function(){ //При изменении модели
		var img_id = $("#parameter-colors-select-6").children("option:selected").attr("data"); // Получаем значение атрибута блока с изображением которое нужно показать на изображении
		$(".colors-select-image-6 .modelImg").hide(); // прячем все блоки с изображением 
		$(img_id).show(); // показываем нужный блок с изображением
	});

	$("#parameter-colors-select-7").change(function(){ //При изменении модели
		var img_id = $("#parameter-colors-select-7").children("option:selected").attr("data"); // Получаем значение атрибута блока с изображением которое нужно показать на изображении
		$(".colors-select-image-7 .modelImg").hide(); // прячем все блоки с изображением 
		$(img_id).show(); // показываем нужный блок с изображением
	});

	$("#parameter-colors-select-8").change(function(){ //При изменении модели
		var img_id = $("#parameter-colors-select-8").children("option:selected").attr("data"); // Получаем значение атрибута блока с изображением которое нужно показать на изображении
		$(".colors-select-image-8 .modelImg").hide(); // прячем все блоки с изображением 
		$(img_id).show(); // показываем нужный блок с изображением
	});

	$("#parameter-colors-select-9").change(function(){ //При изменении модели
		var img_id = $("#parameter-colors-select-9").children("option:selected").attr("data"); // Получаем значение атрибута блока с изображением которое нужно показать на изображении
		$(".colors-select-image-9 .modelImg").hide(); // прячем все блоки с изображением 
		$(img_id).show(); // показываем нужный блок с изображением
	});

	$("#parameter-colors-select-10").change(function(){ //При изменении модели
		var img_id = $("#parameter-colors-select-10").children("option:selected").attr("data"); // Получаем значение атрибута блока с изображением которое нужно показать на изображении
		$(".colors-select-image-10 .modelImg").hide(); // прячем все блоки с изображением 
		$(img_id).show(); // показываем нужный блок с изображением
	});




});
