;(function () {
  if (typeof window === "undefined") return
  if (typeof Swiper === "undefined") {
    // Swiper non chargé, on ne fait rien pour éviter les erreurs
    return
  }

  var galleries = document.querySelectorAll("[data-ep-gallery]")
  if (!galleries.length) return

  galleries.forEach(function (gallery) {
    var swiperElement = gallery.querySelector(".ep-gallery-swiper")
    if (!swiperElement) return

    var nextBtn = gallery.querySelector(".ep-gallery-nav-next")
    var prevBtn = gallery.querySelector(".ep-gallery-nav-prev")
    var paginationEl = gallery.querySelector(".ep-gallery-pagination")

    new Swiper(swiperElement, {
      slidesPerView: 1.05,
      spaceBetween: 14,
      loop: true,
      speed: 650,
      autoplay: {
        delay: 4500,
        disableOnInteraction: true,
        pauseOnMouseEnter: true
      },
      grabCursor: true,
      breakpoints: {
        640: {
          slidesPerView: 1.3,
          spaceBetween: 18
        },
        900: {
          slidesPerView: 2.1,
          spaceBetween: 20
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 22
        }
      },
      navigation:
        nextBtn && prevBtn
          ? {
              nextEl: nextBtn,
              prevEl: prevBtn
            }
          : undefined,
      pagination: paginationEl
        ? {
            el: paginationEl,
            clickable: true
          }
        : undefined
    })
  })
})()

