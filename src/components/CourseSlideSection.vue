<template>
  <div class="course">
    <div class="course__wrapper grid">
      <div class="course__title">
        <div class="course__title-text">
          <p>The world's largest selection of courses</p>
        </div>
        <div class="course__button">
          <a class="course__button-link">
            <span>Design</span>
            <font-awesome-icon :icon="['fas', 'fa-chevron-down']" />
          </a>
          <a class="btn" href="#">
            <span>View all</span>
          </a>
        </div>
      </div>
      <div class="mySwiper">
        <swiper
          :pagination="paginationOptions"
          :navigation="navigationOptions"
          :modules="modules"
          :loop="true"
          :breakpoints="{
            375: {
              slidesPerView: 2,
              spaceBetween: 10,
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
            <div class="course__box">
              <img src="@/assets/images/course-image.png" alt="Course image" />
              <div class="course__interact">
                <div>
                  <font-awesome-icon :icon="['far', 'fa-star']" />
                  <span>4.5 (120)</span>
                </div>
                <div>
                  <font-awesome-icon :icon="['fas', 'fa-eye']" />
                  <span>28.500</span>
                </div>
                <div>
                  <font-awesome-icon :icon="['fas', 'fa-circle-play']" />
                  <span>36 Lesion</span>
                </div>
              </div>
              <hr />
              <div class="course__text">
                <div class="course__title">
                  Everything You Need to Know About Business
                </div>
                <div class="course__subtitle">
                  <div class="course__author">
                    <img src="@/assets/images/course-author.jpg" alt="" />
                    <p>Nicole Hoa</p>
                  </div>
                  <div class="course__price">
                    <p class="course__price-dis">$99.99</p>
                    <p class="course__price-normal">$49.65</p>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="course__box">
              <img src="@/assets/images/course-image.png" alt="Course image" />
              <div class="course__interact">
                <div>
                  <font-awesome-icon :icon="['far', 'fa-star']" />
                  <span>4.5 (120)</span>
                </div>
                <div>
                  <font-awesome-icon :icon="['fas', 'fa-eye']" />
                  <span>28.500</span>
                </div>
                <div>
                  <font-awesome-icon :icon="['fas', 'fa-circle-play']" />
                  <span>36 Lesion</span>
                </div>
              </div>
              <hr />
              <div class="course__text">
                <div class="course__title">
                  Everything You Need to Know About Business
                </div>
                <div class="course__subtitle">
                  <div class="course__author">
                    <img src="@/assets/images/course-author.jpg" alt="" />
                    <p>Nicole Hoa</p>
                  </div>
                  <div class="course__price">
                    <p class="course__price-dis">$99.99</p>
                    <p class="course__price-normal">$49.65</p>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="course__box">
              <img src="@/assets/images/course-image.png" alt="Course image" />
              <div class="course__interact">
                <div>
                  <font-awesome-icon :icon="['far', 'fa-star']" />
                  <span>4.5 (120)</span>
                </div>
                <div>
                  <font-awesome-icon :icon="['fas', 'fa-eye']" />
                  <span>28.500</span>
                </div>
                <div>
                  <font-awesome-icon :icon="['fas', 'fa-circle-play']" />
                  <span>36 Lesion</span>
                </div>
              </div>
              <hr />
              <div class="course__text">
                <div class="course__title">
                  Everything You Need to Know About Business
                </div>
                <div class="course__subtitle">
                  <div class="course__author">
                    <img src="@/assets/images/course-author.jpg" alt="" />
                    <p>Nicole Hoa</p>
                  </div>
                  <div class="course__price">
                    <p class="course__price-dis">$99.99</p>
                    <p class="course__price-normal">$49.65</p>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="course__box">
              <img src="@/assets/images/course-image.png" alt="Course image" />
              <div class="course__interact">
                <div>
                  <font-awesome-icon :icon="['far', 'fa-star']" />
                  <span>4.5 (120)</span>
                </div>
                <div>
                  <font-awesome-icon :icon="['fas', 'fa-eye']" />
                  <span>28.500</span>
                </div>
                <div>
                  <font-awesome-icon :icon="['fas', 'fa-circle-play']" />
                  <span>36 Lesion</span>
                </div>
              </div>
              <hr />
              <div class="course__text">
                <div class="course__title">
                  Everything You Need to Know About Business
                </div>
                <div class="course__subtitle">
                  <div class="course__author">
                    <img src="@/assets/images/course-author.jpg" alt="" />
                    <p>Nicole Hoa</p>
                  </div>
                  <div class="course__price">
                    <p class="course__price-dis">$99.99</p>
                    <p class="course__price-normal">$49.65</p>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="course__box">
              <img src="@/assets/images/course-image.png" alt="Course image" />
              <div class="course__interact">
                <div>
                  <font-awesome-icon :icon="['far', 'fa-star']" />
                  <span>4.5 (120)</span>
                </div>
                <div>
                  <font-awesome-icon :icon="['fas', 'fa-eye']" />
                  <span>28.500</span>
                </div>
                <div>
                  <font-awesome-icon :icon="['fas', 'fa-circle-play']" />
                  <span>36 Lesion</span>
                </div>
              </div>
              <hr />
              <div class="course__text">
                <div class="course__title">
                  Everything You Need to Know About Business
                </div>
                <div class="course__subtitle">
                  <div class="course__author">
                    <img src="@/assets/images/course-author.jpg" alt="" />
                    <p>Nicole Hoa</p>
                  </div>
                  <div class="course__price">
                    <p class="course__price-dis">$99.99</p>
                    <p class="course__price-normal">$49.65</p>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="course__box">
              <img src="@/assets/images/course-image.png" alt="Course image" />
              <div class="course__interact">
                <div>
                  <font-awesome-icon :icon="['far', 'fa-star']" />
                  <span>4.5 (120)</span>
                </div>
                <div>
                  <font-awesome-icon :icon="['fas', 'fa-eye']" />
                  <span>28.500</span>
                </div>
                <div>
                  <font-awesome-icon :icon="['fas', 'fa-circle-play']" />
                  <span>36 Lesion</span>
                </div>
              </div>
              <hr />
              <div class="course__text">
                <div class="course__title">
                  Everything You Need to Know About Business
                </div>
                <div class="course__subtitle">
                  <div class="course__author">
                    <img src="@/assets/images/course-author.jpg" alt="" />
                    <p>Nicole Hoa</p>
                  </div>
                  <div class="course__price">
                    <p class="course__price-dis">$99.99</p>
                    <p class="course__price-normal">$49.65</p>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <div class="course__btn">
        <button class="prevBtn">
          <font-awesome-icon :icon="['fas', 'fa-arrow-left']" />
        </button>
        <div class="swiper-pagination"></div>
        <button class="nextBtn">
          <font-awesome-icon :icon="['fas', 'fa-arrow-right']" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation, Pagination],
      navigationOptions: {
        prevEl: ".course__btn .prevBtn",
        nextEl: ".course__btn .nextBtn",
      },
      paginationOptions: {
        el: ".swiper-pagination",
        clickable: true,
      },
    };
  },
};
</script>
