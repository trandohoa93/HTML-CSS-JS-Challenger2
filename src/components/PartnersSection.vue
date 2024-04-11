<template>
  <div class="partners">
    <div class="partners__wrapper grid">
      <div class="partners__title">
        <p>Trusted by our awesome partners</p>
        <div class="partners__btn">
          <button class="prevBtn">
            <font-awesome-icon :icon="['fas', 'fa-arrow-left']" />
          </button>
          <button class="nextBtn">
            <font-awesome-icon :icon="['fas', 'fa-arrow-right']" />
          </button>
        </div>
      </div>
      <div class="partners__carousel">
        <swiper
          class="mySwiper partners__logo"
          :navigation="navigationOptions"
          :modules="modules"
          :loop="true"
          :breakpoints="{
            375: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            480: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            768: {
              slidesPerView: 6,
              spaceBetween: 50,
            },
          }"
          @slideChange="handleSlideChange"
        >
          <swiper-slide>
            <img
              class="partner-image"
              src="@/assets/images/partner-envato.svg"
              alt="Envato image"
          /></swiper-slide>
          <swiper-slide>
            <img
              class="partner-image"
              src="@/assets/images/partner-dribbble.svg"
              alt="Dribble image"
          /></swiper-slide>
          <swiper-slide>
            <img
              class="partner-image"
              src="@/assets/images/partner-behance.svg"
              alt="Behance image"
          /></swiper-slide>
          <swiper-slide>
            <img
              class="partner-image"
              src="@/assets/images/partner-slack.svg"
              alt="Slack image"
          /></swiper-slide>
          <swiper-slide>
            <img
              class="partner-image"
              src="@/assets/images/partner-udemy.svg"
              alt="Udemy image"
          /></swiper-slide>
          <swiper-slide>
            <img
              class="partner-image"
              src="@/assets/images/partner-google.svg"
              alt="Google image"
          /></swiper-slide>
          <swiper-slide>
            <img
              class="partner-image"
              src="@/assets/images/partner-envato.svg"
              alt="Envato image"
          /></swiper-slide>
          <swiper-slide>
            <img
              class="partner-image"
              src="@/assets/images/partner-dribbble.svg"
              alt="Dribble image"
          /></swiper-slide>
          <swiper-slide>
            <img
              class="partner-image"
              src="@/assets/images/partner-behance.svg"
              alt="Behance image"
          /></swiper-slide>
          <swiper-slide>
            <img
              class="partner-image"
              src="@/assets/images/partner-slack.svg"
              alt="Slack image"
          /></swiper-slide>
          <swiper-slide>
            <img
              class="partner-image"
              src="@/assets/images/partner-udemy.svg"
              alt="Udemy image"
          /></swiper-slide>
          <swiper-slide>
            <img
              class="partner-image"
              src="@/assets/images/partner-google.svg"
              alt="Google image"
          /></swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import { Navigation } from "swiper/modules";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation],
      navigationOptions: {
        prevEl: ".partners__btn .prevBtn",
        nextEl: ".partners__btn .nextBtn",
      },
      handleSlideChange: function () {},
    };
  },
};
</script>
