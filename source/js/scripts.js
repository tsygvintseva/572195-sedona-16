var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");
var form = document.querySelector(".review__form");
var fields = document.querySelectorAll(".review__input--required");
var popupError = document.querySelector(".modal-review--error");
var popupSuccess = document.querySelector(".modal-review--success");
var closeButtons = document.querySelectorAll(".modal-review__button");
var overlay = document.querySelector(".modal-review__overlay");

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
  }
});

form.addEventListener("submit", function (evt) {
  evt.preventDefault();
  fields.forEach(function (item) {
    if (item.value) {
      popupSuccess.classList.add("modal-review__show");
      overlay.classList.add("modal-review__overlay--show");
    } else {
      popupError.classList.add("modal-review__show");
      overlay.classList.add("modal-review__overlay--show");
    };
  });
});

closeButtons.forEach(function (item) {
  item.addEventListener("click", function (evt) {
    var target = evt.target;
    target.parentNode.classList.remove("modal-review__show");
    overlay.classList.remove("modal-review__overlay--show");
  });
});
