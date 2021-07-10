<template>
  <footer class="bg-gray-800 text-gray-200 flex flex-col">
    <div class="container mx-auto py-2 flex justify-around">
      <a
        v-for="link in links"
        :key="link.anchor"
        class="block"
        :href="link.anchor"
        >{{ link.title }}</a
      >
    </div>
    <div class="container mx-auto mt-2 py-2 border-t flex justify-between">
      <div>Copyright</div>
      <div>Social</div>
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
}
</script>
