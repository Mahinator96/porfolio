new Swiper('.portfolio__slider', {
  navigation: {
    nextEl: '.portfolio__arrow_right',
    prevEl: '.portfolio__arrow_left',
    disabledClass: 'portfolio__arrow_disabled',
  },
  effect: 'slide',
  speed: 800,
  breakpoints: {
    // when window width is >= 768
    768: {
      slidesPerView: 2,

    }
  }
});


$('.header__contacts-burger').click(() => {
  $('.header__contacts').slideToggle();
});

$('.present__order-btn').click(() => {
  $('.page__overlay_modal').fadeIn(400).css('display', 'flex');
  $('.page').addClass('block');
});

$('.modal__close').click(() => {
  $('.page__overlay_modal').fadeOut(400);
  $('.page').removeClass('block');
});

$('.page__overlay').click((event) => {
  console.log(event.target);
  if ($(event.target).hasClass('page__overlay')) {
    $('.page__overlay').fadeOut(400);
    $('.page').removeClass('block');
  };
})