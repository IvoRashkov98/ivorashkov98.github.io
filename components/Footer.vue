<template>
  <footer class="pd-footer bg-gray-800 text-gray-200 flex flex-col">
    <div class="container mx-auto px-16 py-2 flex justify-around">
      <a
        v-for="link in links"
        :key="link.anchor"
        class="
          pd-link
          block
          pb-1
          hover:text-blue-500
          transition-colors
          ease-in-out
          duration-300
        "
        :href="link.anchor"
        >{{ link.title }}</a
      >
    </div>
    <div
      class="
        container
        mx-auto
        mt-2
        px-16
        py-2
        border-t border-gray-200
        flex
        justify-between
      "
    >
      <div>
        <span class="pr-2">{{ copyrightMessage }}</span
        ><span
          >Developed by
          <a class="hover:text-blue-500" href="lightning00blade.github.io"
            >Nikolay Vitkov</a
          >.</span
        >
      </div>
      <div>
        <img v-svg src="bootstrap-icons/icons/facebook.svg" />
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component
export default class Footer extends Vue {
  get links() {
    return this.$accessor.links;
  }

  get copyrightMessage(): string {
    const date = new Date();
    const year = date.getUTCFullYear();

    return `Copyright ©${year}.`;
  }
}
</script>

<style lang="scss">
.pd-footer {
  .pd-link {
    background-image: linear-gradient(
      to right,
      rgb(59, 130, 246) 10%,
      rgba(255, 255, 255, 0) 0%
    );
    background-position: bottom;
    background-size: 0.5rem 1px;
    background-repeat: repeat-x;
  }
}
</style>
