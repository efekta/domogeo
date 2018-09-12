$(document).ready(function(){
/*========================
slick
=========================*/
  $('.head-slider').slick({
  dots: false,
  arrows: true,
  cssEase: 'linear',
  prevArrow: '<svg class="svg-inline--fa fa-angle-left fa-w-6 slider-arrows slider-arrows arrow-left slick-arrow" id="arrow" viewBox="0 0 477.175 477.175"><path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z"></path></svg>',
  nextArrow: '<svg class="svg-inline--fa fa-angle-right fa-w-6 slider-arrows slider-arrows arrow-right slick-arrow" id="arrow" viewBox="0 0 477.175 477.175"><path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z"></path></svg>',
  infinite: true,
  adaptiveHeight: true,
  // autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
	});

  var sliderAdaptiveHeight = function(){
	var heights = []; 
	$('.slick-active').each(function(){
		heights.push($(this).height());
	});
	$('.slick-list').height(Math.max.apply(null, heights));
	}

	sliderAdaptiveHeight();

	$('.head-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
		sliderAdaptiveHeight();
	});
/*========================
end slick
=========================*/

/*========================
mob nav
=========================*/
$(".menu-gamburger").on("click", function() {
	$(".page-nav__list-mob").toggleClass('page-nav__list-mob_show');
});
$("#nav-icon").click(function(){
	$(this).toggleClass("open");
});
/*========================
end mob nav
=========================*/


/*========================
tabs
=========================*/
$(".tab_item").not(":first").hide();
jQuery(window).width() >= 900 && $(".tabs-box-wrapper .tab").click(function() {
  $(".tabs-box-wrapper .tab").removeClass("tab-active").eq($(this).index()).addClass("tab-active");
  $(".tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("tab-active");

/*========================
end tabs
=========================*/


/*========================
 mask input phone
 =======================*/
  $(".phone").mask("+7(999) 999-9999");

  // $('input.range-slider__range').mask('2 000 000');
/*========================
 end mask input phone
 =======================*/


/*================================
	плавный скролл до якоря jquery
=================================*/
$("body").on('click', '[href*="#"]', function(e){
	  var fixed_offset = 100;
	  $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
	  e.preventDefault();
	});
/*====================================
	end плавный скролл до якоря jquery
=====================================*/


/*========================
	valid form
=========================*/
$('.user-form').validate ({
    rules: {
        user_name: "required",
        user_name: {
            required: true,
        },
        user_phone: "required",
        user_phone: {
            required: true,
        },
        option: "required",
        option: {
            required: true,
            option: true,
            minlength: 1
        },
        
        agree: "required"
    },
    messages: {
        user_name: {
            required: "Недостаточно информации. Введите фамилию, имя и отчество через пробел (Например: Иванов Иван Алексеевич)",
        },
        user_phone: {
            required: "Необходимо указать номер телефона"
        },
        option: {
            required: "Вы должны согласиться с обработкой персональных данных",
        },
        errorClass: "error",
    }
  });
/*========================
	end valid form
=========================*/


/*========================
 fixed header
 =======================*/
$(window).scroll(function() {
	if($(this).scrollTop() >= 250) {
	$('.page-head').addClass('page-head_fixed');
}
else{
	$('.page-head').removeClass('page-head_fixed');
	}
});
/*========================
 end fixed header
 =======================*/

/*========================
 price-rang
 =======================*/

$(".price-rang").on('click', function(event) {
	$(".price-rang-circle").toggleClass('price-rang-circle-active');
	$(".form-price-rang__title").toggleClass('form-price-rang__title_active');
	// $(".form-price-rang__title-two").toggleClass('form-price-rang__title_active');
});
/*========================
end  price-rang
 =======================*/



/*========================
 range-slider
=========================*/
var rangeSlider = function(){
  var slider = $('.range-slider'),
      range = $('.range-slider__range'),
      value = $('.range-slider__value');
    
  slider.each(function(){

    value.each(function(){
      var value = $(this).prev().attr('value' + ' Р');
      $(this).html(value);
    });

    range.on('input', function(){
      $(this).next(value).html(this.value + ' Р');
    });
  });
};

rangeSlider();

var rangeSlider = function(){
  var slider = $('.range-slider_a'),
      range = $('.range-slider__range_a'),
      value = $('.range-slider__value_a');
    
  slider.each(function(){

    value.each(function(){
      var value = $(this).prev().attr('value' + ' лет');
      $(this).html(value);
    });

    range.on('input', function(){
      $(this).next(value).html(this.value + ' лет');
    });
  });
};

rangeSlider();
/*========================
end  range-slider
 =======================*/ 


/*========================
select
 =======================*/ 
 $(".svg-inline--fa.fa-w-14.select-svg-ico").on('click', function() {
 	$("this").toggleClass("select-svg-ico-active");
 });

$(function() {

  $('select').styler();

});
/*========================
end select
 =======================*/ 

 $('.partners-list').slick({
  dots: false,
  arrows: true,
  prevArrow: '<svg class="svg-inline--fa fa-angle-left fa-w-6 slider-arrows slider-arrows arrow-left slick-arrow" id="arrow" viewBox="0 0 477.175 477.175"><path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z"></path></svg>',
  nextArrow: '<svg class="svg-inline--fa fa-angle-right fa-w-6 slider-arrows slider-arrows arrow-right slick-arrow" id="arrow" viewBox="0 0 477.175 477.175"><path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z"></path></svg>',
  infinite: true,
  adaptiveHeight: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        arrows: false,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true
      }
    }
  ]
});
}); //end document ready function

