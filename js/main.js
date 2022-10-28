$(document).ready(function(){
  $('.collapse').on('show.bs.collapse', function () {
    $(this).parent('.card').addClass('card-toggle');
    $(this).parent('.card').find('.closeModal').addClass('closeModalAfter')
    $(this).parent('.card').find('.card-img img:first-child').css('display', 'none')
    $(this).parent('.card').find('.card-img img:last-child').css('display', 'block')
  })
  $('.collapse').on('hide.bs.collapse', function () {
    $(this).parent('.card').removeClass('card-toggle');
    $(this).parent('.card').find('.closeModal').removeClass('closeModalAfter')
    $(this).parent('.card').find('.card-img img:last-child').css('display', 'none')
    $(this).parent('.card').find('.card-img img:first-child').css('display', 'block')
  })

  // slider
  $('#slider').on('init reInit',function(event,slick){
    var amount = slick.slideCount;
    $('#range').attr('max',amount-1);
  })
  
  $('#slider').on('afterChange',function(e,slick,currentSlide){
    $('#range').val(currentSlide+1);
  })
  
  $('#range').on('input change',function(){
    $('#slider').slick('slickGoTo',this.value-1);
  });
  
  $('#slider').slick({
    slidesToShow: 3,
    arrows: false,
    dots: false,
    speed: 300,
    waitForAnimate: false,
    easing: 'ease',
    centerMode: true,
    variableWidth: true,
    adaptiveHeight: true,
  })

  // pass hide/show
  function showPassword(input) {
    $('body').on('click', '.password a', function(){
      const $input = $(this).parent().children(input);
      const type = $input.attr('type');
      const isPass = type == "password";
      $(this).toggleClass('view', isPass);
      isPass ? $input.attr('type', 'text') : $input.attr('type', 'password');
      return false;
   });
  }
  showPassword('.input-password');
})