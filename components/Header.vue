<template>
  <nav
    class="
      font-sans
      flex flex-row
      text-left
      justify-between
      py-4
      px-6
      bg-white
      shadow
      items-baseline
      w-full
      xl:px-32
    "
  >
    <div>
      <span class="text-2xl no-underline text-grey-darkest hover:text-blue-dark"
        >Predominant</span
      >
    </div>
    <div class="sm:block hidden">
      <a
        href="/one"
        class="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2"
        >One</a
      >
      <a
        href="/two"
        class="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2"
        >Two</a
      >
      <a
        href="/three"
        class="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2"
        >Three</a
      >
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({});
</script>
