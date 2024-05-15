export type SwiperOptions = {
  centeredSlides: boolean
  slidesPerView: number
  spaceBetween: number
  navigation: boolean
  loop: boolean
  scrollbar: { draggable: boolean }
  speed: number
  lazy: boolean
  autoplay: {
    delay: number
    disableOnInteraction: boolean
  }
}
