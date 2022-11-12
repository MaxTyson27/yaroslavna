$(function () {

  $(".menu a").on("click", function (event) {
    event.preventDefault();
    
    // $('body').css('overflow','visible')
    // menu.removeClass('active')
    // burger.removeClass('active')

		const id  = $(this).attr('href'),
			top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
    
    
  });

  $('.advantages__slider').slick({
    dots: false,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="13" viewBox="0 0 8 13" fill="none"> <path d="M1 1L7 6.5L1 12" stroke="#333333" stroke-width="0.5"/></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="13" viewBox="0 0 8 13" fill="none"> <path d="M1 1L7 6.5L1 12" stroke="#333333" stroke-width="0.5"/></svg></button>',
  })


  const setModalActive = () => {
    const openButtons = $('.modal-btn')
    const modal = $('.modal')
    const modalCloseBg = $('.modal-close')

    const bodyNonScroll = (modalActive) => {
      modalActive ? $('body').css('overflow', 'hidden') : $('body').css('overflow', 'visible')
    }

    const closeModal = () => {
      modalCloseBg.on('click', () => {
        modal.removeClass('active')
        modalCloseBg.removeClass('active')
        bodyNonScroll(false)
      })
    }

    openButtons.each( function () {
      $(this).on('click', (e) => {
        modal.addClass('active')
        modalCloseBg.addClass('active')
        bodyNonScroll(true)
        closeModal()
      })
    })

  }


  setModalActive()
});
