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
  })

  // ====
  // const rangeInputs = document.querySelectorAll('input[type="range"]')

  // function handleInputChange(e) {
  //   let target = e.target
  //   if (e.target.type !== 'range') {
  //     target = document.getElementById('range')
  //   } 
  //   const min = target.min
  //   const max = target.max
  //   const val = target.value
    
  //   target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
  // }

  // rangeInputs.forEach(input => {
  //   input.addEventListener('input', handleInputChange)
  // })
})