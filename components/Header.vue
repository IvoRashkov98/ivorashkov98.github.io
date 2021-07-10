<template>
  <nav
    class="
      pd-header
      bg-gray-800
      fixed
      w-screen
      top-0
      transition-colors
      ease-in-out
      duration-500
    "
    :class="{
      'bg-opacity-0': isAtTheTop,
      'bg-opacity-100': !isAtTheTop,
    }"
  >
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <button
            type="button"
            class="
              uppercase
              inline-flex
              items-center
              justify-center
              p-2
              rounded-md
              text-gray-200
              hover:text-white hover:bg-gray-600
              focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white
            "
            aria-controls="mobile-menu"
            :aria-expanded="isMenuOpen"
          >
            <span class="sr-only">Toggle main menu</span>

            <svg
              v-show="!isMenuOpen"
              class="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              :aria-hidden="!isMenuOpen"
              @click="toggleMenu"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>

            <svg
              v-show="isMenuOpen"
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              :aria-hidden="isMenuOpen"
              @click="toggleMenu"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div
          class="
            flex-1 flex
            items-center
            justify-center
            sm:items-stretch sm:justify-between
          "
        >
          <div class="pd-header__logo flex-shrink-0 flex items-center">
            <a
              href="#home"
              class="
                logo
                relative
                text-gray-200
                uppercase
                font-header font-bold
                text-2xl
              "
              >Predominant</a
            >
          </div>
          <div class="hidden sm:block sm:ml-6">
            <div class="flex space-x-4">
              <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
              <a
                v-for="link in links"
                :key="link.anchor"
                :href="link.anchor"
                class="
                  pd-header__link
                  uppercase
                  h-16
                  flex
                  items-center
                  text-gray-200
                  hover:text-blue-500
                  bg-white bg-opacity-0
                  hover:bg-opacity-10
                  px-3
                  font-sm
                  text-sm
                  transition-all
                  ease-in-out
                  duration-500
                "
              >
                <span>{{ link.title }}</span></a
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div v-show="isMenuOpen" id="mobile-menu" class="sm:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
        <a
          v-for="link in links"
          :key="link.anchor"
          :href="link.anchor"
          class="
            block
            uppercase
            text-center text-gray-200
            hover:text-blue-500
            bg-white bg-opacity-0
            hover:bg-opacity-25
            px-3
            py-2
            rounded-md
            text-sm
            font-sm
            transition-colors
            ease-in-out
            duration-500
          "
          @click="toggleMenu"
          >{{ link.title }}</a
        >
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component
export default class Header extends Vue {
  isAtTheTop = true;
  isMenuOpen = false;

  get links() {
    return this.$accessor.links;
  }

  mounted() {
    this.handleScroll();
    window.addEventListener('scroll', this.handleScroll);
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  handleScroll() {
    const isTop = window.scrollY === 0;

    if (this.isAtTheTop !== isTop) {
      this.isAtTheTop = isTop;
    }
  }
}
</script>

<style lang="scss">
.pd-header {
  &__link {
    position: relative;
    overflow: hidden;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 0.1em;
      background-color: #3b82f6;
      transition: transform 500ms;
      transform: translate3d(-100%, 0, 0);
    }

    &:hover::after,
    &:focus::after {
      transform: translate3d(0, 0, 0);
    }
  }
}
</style>
