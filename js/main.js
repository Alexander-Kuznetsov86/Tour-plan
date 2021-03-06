$(document).ready(function () {
  var hotelSlider = new Swiper(".hotel-slider", {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: ".hotel-slider__button--next",
      prevEl: ".hotel-slider__button--prev",
    },
    autoplay: {
      delay: 4000,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    effect: "coverflow",
  });

  var reviewsSlider = new Swiper(".reviews-slider", {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: ".reviews-slider__button--next",
      prevEl: ".reviews-slider__button--prev",
    },
    autoplay: {
      delay: 9000,
    },
  });

  var menuButton = $(".menu-button");
  menuButton.on("click", function () {
    document;
    $(".navbar-bottom").toggleClass("navbar-bottom--visible");
  });

  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);

  function openModal() {
    var targetModal = $(this).attr("data-href");
    $(targetModal).find(".modal__overlay").addClass("modal__overlay--visible");
    $(targetModal).find(".modal__dialog").addClass("modal__dialog--visible");
  }
  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }
  
    AOS.init();
});


// Обработка форм
$(".form").each(function () {
  $(this).validate({
    errorClass: "invalid",
    messages: {
    name: {
      required: "Please specify your name",
      minlength: "Name must be at least 2 letters long",
    },
    email: {
      required: "We need your email address to contact you",
      email: "Your email address must be in the format of name@domain.com",
    },
    phone: {
      required: "Please specify your phone",
    },
  }

}); 
});

// Маска для телефона
$('.phone-us').mask('+0 (000) 000 00 00');