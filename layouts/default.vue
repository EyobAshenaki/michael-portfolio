<template>
  <div>
    <nav-bar />
    <main class="px-4 lg:px-28">
      <nuxt v-if="!$slots.default" />
      <slot />
    </main>
    <footer-section />
  </div>
</template>

<script>
import NavBar from '~/components/layout/NavBar.vue'
import FooterSection from '~/components/layout/FooterSection.vue'
export default {
  components: {
    NavBar,
    FooterSection,
  },
}
</script>
