const btn1 = document.querySelector(".brand-menu__button_show_all");
const btn2 = document.querySelector(".services-menu__button_show_all");
const text_show_all = document.querySelector(".brand-menu__text_show_all");
const text_show_all2 = document.querySelector(".services-menu__text_show_all");
const cards = Array.from(document.querySelectorAll(".Swiper1 .swiper-slide"));
const cards2 = Array.from(document.querySelectorAll(".Swiper2 .swiper-slide"));
const image_strelka = document.querySelector(".brand-menu__button img");
const image_strelka2 = document.querySelector(".services-menu__button img");
const burger_button = document.querySelectorAll(".header__button-burger");
const service__opacity = document.querySelector(".service__opacity");
const modal_call = document.querySelector(".modal-call");
const modal_feedback_opacity = document.querySelector(
  ".modal-feedback__opacity"
);
let flag = true;
let flag2 = true;
const modal_feedback = document.querySelector(".modal-feedback");
const button_chat = document.querySelector(".button-chat");
const button_call = document.querySelector(".button-call");
const mobile_menu = document.querySelector(".mobile-menu");
const service__container = document.querySelector(".service__container");
const modal_feedback__button_close = document.querySelector(
  ".modal-feedback__button-close"
);
const modal_call__button_close = document.querySelector(
  ".modal-call__button-close"
);

button_call.addEventListener("click", function () {
  modal_call.classList.toggle("open");
  mobile_menu.classList.remove("open");
  modal_feedback_opacity.classList.toggle("open1");
});
button_chat.addEventListener("click", function () {
  modal_feedback.classList.toggle("open");
  mobile_menu.classList.remove("open");
  modal_feedback_opacity.classList.toggle("open1");
});
modal_call__button_close.addEventListener("click", function () {
  modal_call.classList.remove("open");
  mobile_menu.classList.add("open");
  modal_feedback_opacity.classList.remove("open1");
});
modal_feedback__button_close.addEventListener("click", function () {
  modal_feedback.classList.remove("open");
  mobile_menu.classList.add("open");
  modal_feedback_opacity.classList.remove("open1");
});
btn1.addEventListener("click", openCatalog);
btn2.addEventListener("click", openCatalog2);
const body = document.querySelector("body");
for (burger of burger_button) {
  burger.addEventListener("click", function () {
    service__opacity.classList.toggle("service__opacity-active");
    this.classList.toggle("active");
    mobile_menu.classList.toggle("open");
    body.classList.toggle("body_hidden");
  });
}

function openCatalog() {
  let abs = window.innerWidth;

  if (flag) {
    cards.forEach((item) => item.classList.remove("hidden"));
    flag = false;
    text_show_all.textContent = "Скрыть";
    image_strelka.style.transform = "rotate(180deg)";
  } else {
    let Elements;
    if (abs >= 768) {
      Elements = cards.slice(6);
    }

    if (abs >= 1440) {
      Elements = cards.slice(8);
    }

    Elements.forEach((item) => item.classList.add("hidden"));
    text_show_all.textContent = "Показать все";
    image_strelka.style.transform = "rotate(0deg)";
    flag = true;
  }
}

function openCatalog2() {
  let abs = window.innerWidth;

  if (flag2) {
    cards2.forEach((item) => item.classList.remove("hidden"));
    flag2 = false;
    text_show_all2.textContent = "Скрыть";
    image_strelka2.style.transform = "rotate(180deg)";
  } else {
    let Elements2;
    if (abs >= 768) {
      Elements2 = cards2.slice(3);
    }

    if (abs >= 1440) {
      Elements2 = cards2.slice(4);
    }

    Elements2.forEach((item) => item.classList.add("hidden"));
    text_show_all2.textContent = "Показать все";
    image_strelka2.style.transform = "rotate(0deg)";
    flag2 = true;
  }
}

window.addEventListener("resize", (event) => {
  if (event.target.window.innerWidth >= 752) response1(), response2();
  if (event.target.window.innerWidth >= 1440) response2();
});
window.addEventListener("load", (event) => {
  if (event.currentTarget.window.innerWidth >= 752) response1();
  if (event.currentTarget.window.innerWidth >= 1440) response2();
});

function response1() {
  {
    if (window.innerWidth >= 769)
      cards.forEach((item, index) => {
        item.classList.add("hidden");
        if (index <= 5) {
          item.classList.remove("hidden");
        }
      });
    if (window.innerWidth >= 769)
      cards2.forEach((item, index) => {
        item.classList.add("hidden");
        if (index <= 2) {
          item.classList.remove("hidden");
        }
      });
  }
}
function response2() {
  {
    if (window.innerWidth >= 1440)
      cards.forEach((item, index) => {
        item.classList.add("hidden");
        if (index <= 7) {
          item.classList.remove("hidden");
        }
      });
    if (window.innerWidth >= 1440)
      cards2.forEach((item, index) => {
        item.classList.add("hidden");
        if (index <= 3) {
          item.classList.remove("hidden");
        }
      });
  }
}

window.addEventListener("DOMContentLoaded", () => {
  const resizableSwiper1 = (
    breakpoint,
    swiperClass,
    swiperSettings,
    callback
  ) => {
    let swiper;

    breakpoint = window.matchMedia(breakpoint);

    const enableSwiper = function (className, settings) {
      swiper = new Swiper(className, settings);

      if (callback) {
        callback(swiper);
      }
    };

    const checker = function () {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings);
      } else {
        if (swiper !== undefined) swiper.destroy(true, true);

        return;
      }
    };

    breakpoint.addEventListener("change", checker);
    checker();
  };

  const resizableSwiper2 = (
    breakpoint,
    swiperClass,
    swiperSettings,
    callback
  ) => {
    let swiper2;

    breakpoint = window.matchMedia(breakpoint);

    const enableSwiper = function (className, settings) {
      swiper2 = new Swiper(className, settings);

      if (callback) {
        callback(swiper2);
      }
    };

    const checker = function () {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings);
      } else {
        if (swiper2 !== undefined) swiper2.destroy(true, true);

        return;
      }
    };

    breakpoint.addEventListener("change", checker);
    checker();
  };

  const resizableSwiper3 = (
    breakpoint,
    swiperClass,
    swiperSettings,
    callback
  ) => {
    let swiper3;

    breakpoint = window.matchMedia(breakpoint);

    const enableSwiper = function (className, settings) {
      swiper3 = new Swiper(className, settings);

      if (callback) {
        callback(swiper3);
      }
    };

    const checker = function () {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings);
      } else {
        if (swiper3 !== undefined) swiper3.destroy(true, true);

        return;
      }
    };

    breakpoint.addEventListener("change", checker);
    checker();
  };

  resizableSwiper1("(max-width: 769px)", ".Swiper1", {
    loop: true,
    slidesPerView: "2",
    spaceBetween: 200,

    pagination: {
      el: ".swiper-pagination",
    },
  });
  resizableSwiper2("(max-width: 768px)", ".Swiper2", {
    loop: true,
    slidesPerView: "2",
    spaceBetween: 200,
    pagination: {
      el: ".swiper-pagination",
    },
  });
  resizableSwiper3("(max-width: 768px)", ".Swiper3", {
    loop: true,
    slidesPerView: "2",
    spaceBetween: 240,
    pagination: {
      el: ".swiper-pagination",
    },
  });
});
