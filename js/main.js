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
})