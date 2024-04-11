<template>
  <header class="header">
    <div class="grid">
      <nav class="header__navbar">
        <a class="header__navbar-logo" href="/">
          <img src="@/assets/images/logo.png" alt="Logo" />
        </a>
        <div id="mobile-menu" class="mobile-menu" @click="toggleClass">
          <font-awesome-icon
            :icon="['fas', 'bars']"
            :class="{ 'ti-menu': true, 'btn--hide': isOpen }"
          />
          <font-awesome-icon
            :icon="['fas', 'x']"
            :class="{ 'ti-menu-close': true, 'btn--hide': !isOpen }"
          />
        </div>
        <div
          class="header__navbar-wrapper"
          id="nav"
          :class="{ 'nav--open': isOpen }"
        >
          <ul class="header__navbar-list">
            <li class="header__navbar-item">
              <a class="header__navbar-link" href="/home">
                Home
                <font-awesome-icon :icon="['fas', 'fa-chevron-down']" />
              </a>
            </li>
            <li class="header__navbar-item">
              <a class="header__navbar-link" href="/page">
                Page
                <font-awesome-icon :icon="['fas', 'fa-chevron-down']" />
              </a>
            </li>
            <li class="header__navbar-item">
              <a class="header__navbar-link" href="/course">
                Course
                <font-awesome-icon :icon="['fas', 'fa-chevron-down']" />
              </a>
            </li>
            <li class="header__navbar-item">
              <a class="header__navbar-link" href="/feature">
                Feature
                <font-awesome-icon :icon="['fas', 'fa-chevron-down']" />
              </a>
            </li>
            <li class="header__navbar-item">
              <a class="header__navbar-link" href="/blog">
                Blog
                <font-awesome-icon :icon="['fas', 'fa-chevron-down']" />
              </a>
            </li>
            <li class="header__navbar-item">
              <a class="header__navbar-link" href="/shop">
                Shop
                <font-awesome-icon :icon="['fas', 'fa-chevron-down']" />
              </a>
            </li>
          </ul>
          <ul class="header__navbar-list">
            <li class="header__navbar-item">
              <a class="header__navbar-button-link" href="/search">
                <font-awesome-icon :icon="['fas', 'fa-magnifying-glass']" />
              </a>
            </li>
            <li class="header__navbar-item">
              <a class="header__navbar-button-link" href="/cart">
                <font-awesome-icon :icon="['fas', 'fa-cart-shopping']" />
              </a>
            </li>
            <li class="header__navbar-item">
              <a class="btn" href="/register"> Register </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleClass() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>
