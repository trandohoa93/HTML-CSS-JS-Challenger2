<template>
  <div class="quotes">
    <div class="quotes__wrapper grid">
      <div class="quotes__title">
        <p>What our students have to say</p>
        <div class="quotes__btn">
          <button class="prevBtn">
            <font-awesome-icon :icon="['fas', 'fa-arrow-left']" class="icon" />
          </button>
          <button class="nextBtn">
            <font-awesome-icon :icon="['fas', 'fa-arrow-right']" class="icon" />
          </button>
        </div>
      </div>
      <swiper
        class="mySwiper quotes__item"
        :navigation="navigationOptions"
        :modules="modules"
        :loop="true"
        :breakpoints="{
          375: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }"
      >
        <swiper-slide>
          <div class="quotes__card">
            <div class="card__title">
              <img
                src="@/assets/images/quotes-student.jpg"
                alt="Student image"
              />
              <p>Rebecca Moore</p>
            </div>
            <div class="card__des">
              <p>
                Skillfy is a life saver. I don't have the time money for ra
                college education. My goal is to become a freelance web designer
                and thanks to Skillfy
              </p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="quotes__card">
            <div class="card__title">
              <img
                src="@/assets/images/quotes-student.jpg"
                alt="Student image"
              />
              <p>Rebecca Moore</p>
            </div>
            <div class="card__des">
              <p>
                Skillfy is a life saver. I don't have the time money for ra
                college education. My goal is to become a freelance web designer
                and thanks to Skillfy
              </p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="quotes__card">
            <div class="card__title">
              <img
                src="@/assets/images/quotes-student.jpg"
                alt="Student image"
              />
              <p>Rebecca Moore</p>
            </div>
            <div class="card__des">
              <p>
                Skillfy is a life saver. I don't have the time money for ra
                college education. My goal is to become a freelance web designer
                and thanks to Skillfy
              </p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="quotes__card">
            <div class="card__title">
              <img
                src="@/assets/images/quotes-student.jpg"
                alt="Student image"
              />
              <p>Rebecca Moore</p>
            </div>
            <div class="card__des">
              <p>
                Skillfy is a life saver. I don't have the time money for ra
                college education. My goal is to become a freelance web designer
                and thanks to Skillfy
              </p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="quotes__card">
            <div class="card__title">
              <img
                src="@/assets/images/quotes-student.jpg"
                alt="Student image"
              />
              <p>Rebecca Moore</p>
            </div>
            <div class="card__des">
              <p>
                Skillfy is a life saver. I don't have the time money for ra
                college education. My goal is to become a freelance web designer
                and thanks to Skillfy
              </p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="quotes__card">
            <div class="card__title">
              <img
                src="@/assets/images/quotes-student.jpg"
                alt="Student image"
              />
              <p>Rebecca Moore</p>
            </div>
            <div class="card__des">
              <p>
                Skillfy is a life saver. I don't have the time money for ra
                college education. My goal is to become a freelance web designer
                and thanks to Skillfy
              </p>
            </div>
          </div>
        </swiper-slide>
      </swiper>
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
        prevEl: ".quotes__btn .prevBtn",
        nextEl: ".quotes__btn .nextBtn",
      },
    };
  },
};
</script>
