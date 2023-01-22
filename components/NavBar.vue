<template>
  <nav class="nav-bar">
    <micheal-testa-icon class="logo" />
    <ul class="flex items-center gap-16 text-lg">
      <li
        v-for="(navLink, idx) in navLinks"
        :key="idx"
        :class="{ active: activeNav === navLink.path }"
      >
        <nuxt-link :to="navLink.path">{{ navLink.name }}</nuxt-link>
      </li>
    </ul>
    <div></div>
  </nav>
</template>

<script>
import MichealTestaIcon from '~/components/icons/MichealTestaIcon.vue'
export default {
  components: {
    MichealTestaIcon,
  },
  data() {
    return {
      navLinks: [
        {
          name: 'Home',
          path: '/',
        },
        {
          name: 'Journey',
          path: '/journey',
        },
        {
          name: 'Portfolio',
          path: '/portfolio',
        },
      ],
    }
  },
  computed: {
    activeNav() {
      return this.$route.path
    },
  },
}
</script>

<style scoped>
.nav-bar {
  @apply h-20 relative flex justify-center items-center border-b border-brand mx-7 md:mx-[7.5rem];
}

.logo {
  @apply absolute top-1/2 left-0 -translate-y-1/2;
}

.active {
  @apply relative font-bold text-brand-text;
}

.active::after {
  content: '';
  @apply absolute left-1/2 -translate-x-1/2 block w-1/2 h-1 rounded-xl bg-brand-text;
}
</style>
