<template>
  <div class="slider slide">
    <div class="slider__content">
      <div class="slider__content-title">
        <span>Learn new skills</span>
        <span>online with</span>
        <span>top educators</span>
      </div>
      <div class="slider__content-subtitle">
        <span>Choose from over 100,000 online video</span>
        <span>courses with new additions published every month.</span>
      </div>
      <form class="slider__search" action="">
        <label for="course_search" class="sr-only"
          >Search your favorite course</label
        >
        <input
          type="text"
          id="course_search"
          placeholder="Search your favorite course"
          name="search"
        />
        <button type="submit">
          <font-awesome-icon :icon="['fas', 'fa-magnifying-glass']" />
        </button>
      </form>
    </div>
    <div class="slider__image">
      <img src="@/assets/images/slider-girl.png" alt="Slide" />
    </div>
  </div>
</template>

<script>
export default {};
</script>
