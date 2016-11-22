$(function() {
  'use strict'

  var slider = $('.slider'),
    sliderContent = slider.html(),
    slideWidth = $('.container').outerWidth(),
    slideCount = $('.slider img').length,
    back = $('.container .slider__back'),
    next = $('.container .slider__next'),
    course = 1,
    margin = -slideWidth,
    interval;

  $('.slider img:last').clone().prependTo('.slider');
  $('.slider img').eq(1).clone().appendTo('.slider');
  $('.slider').css('margin-left', -slideWidth);

  function nextSlide() {
    interval = setInterval(animateSlider, 3000);
  }

  function animateSlider() {
    if (margin === -slideCount * slideWidth - slideWidth) {
      slider.css({
        'marginLeft': -slideWidth
      });
      margin = -slideWidth * 2;
    } else if (margin === 0 && course === -1) {
      slider.css({
        'marginLeft': -slideWidth * slideCount
      });
      margin = -slideWidth * slideCount + slideWidth;
    } else {
      margin = margin - slideWidth * (course);
    }
    slider.animate({'marginLeft': margin}, 800);
  }

  function sliderStop(){                                  
    clearInterval(interval);
  }


  back.click(function() {                               
    var course2 = course;                               
    course = -1;                                       
    animateSlider();                                          
    course = course2 ;                                  
  });

  next.click(function() {                               
    var course2 = course;                               
    course = 1;                                         
    animateSlider();                                          
    course = course2 ;                                  
  });

  slider.add(next).add(back).hover(sliderStop, nextSlide);
 
  nextSlide();

}());


$(function() {

   'use strict'
   var width = 910;
   var $slider = $('.box-slider');
   var $sliderList = $('.box-slider__list');
   var $sliderImg = $('.box-slider__img');
   var currentSlide = 1;

setInterval(function() {
  $sliderList.animate({'margin-left': '-='+width}, 1000, function () {
    currentSlide++;
    if (currentSlide === $sliderImg.length) {
      currentSlide = 1;
      $sliderList.css('margin-left', 0);
    }

  });
}, 3000);


}());