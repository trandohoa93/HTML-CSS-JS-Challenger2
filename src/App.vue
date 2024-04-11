<template>
  <div class="app">
    <HeaderSection />
    <div class="container">
      <SlideSectionVue />
      <CategorySection />
      <CourseSection />
      <AboutSection />
      <CourseSlideSection />
      <StartSection />
      <QuoutesSection />
      <PartnersSection />
    </div>
    <FooterSection />
  </div>
</template>

<script>
import AboutSection from "./components/AboutSection.vue";
import CategorySection from "./components/CategorySection.vue";
import CourseSection from "./components/CourseSection.vue";
import CourseSlideSection from "./components/CourseSlideSection.vue";
import FooterSection from "./components/FooterSection.vue";
import HeaderSection from "./components/HeaderSection.vue";
import PartnersSection from "./components/PartnersSection.vue";
import QuoutesSection from "./components/QuotesSection.vue";
import SlideSectionVue from "./components/SlideSection.vue";
import StartSection from "./components/StartSection.vue";

export default {
  name: "App",
  components: {
    HeaderSection,
    SlideSectionVue,
    CategorySection,
    CourseSection,
    AboutSection,
    CourseSlideSection,
    StartSection,
    QuoutesSection,
    PartnersSection,
    FooterSection,
  },
};
</script>

<style lang="scss"></style>
