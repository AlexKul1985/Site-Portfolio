$(function(){
	$('.header__top .header__menu .button__click').on('click',function() {
			$('.header__top .header__menu .menu').slideToggle(500,function(){
				if($(this).css('display') === 'none') $(this).removeAttr('style');
			});
	
	});


	$('.my_slider').slick();
});