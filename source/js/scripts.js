var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
// var popupError = document.querySelector(".modal-review__error"");
// var popupSuccess = document.querySelector(".modal-review__success"");

    navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('main-nav--closed')) {
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
    } else {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
    }
  });
