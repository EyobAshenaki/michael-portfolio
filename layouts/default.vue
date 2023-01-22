<template>
  <div>
    <nav-bar />
    <main class="px-7 md:px-[7.5rem]">
      <nuxt />
    </main>
    <footer-section />
  </div>
</template>

<script>
import NavBar from '~/components/NavBar.vue'
import FooterSection from '~/components/FooterSection.vue'
export default {
  components: {
    NavBar,
    FooterSection,
  },
}
</script>
