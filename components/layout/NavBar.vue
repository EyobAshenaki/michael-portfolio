<template>
  <nav class="nav-bar">
    <nuxt-link :to="{ name: 'index' }">
      <micheal-testa-icon class="logo" />
    </nuxt-link>
    <ul class="link-list" :class="{ invisible: isMenuClosed }">
      <li
        v-for="(navLink, idx) in navLinks"
        :key="idx"
        class="nav-link"
        :class="{ active: activePath(navLink.path) }"
      >
        <nuxt-link :to="{ name: navLink.path }">{{ navLink.name }}</nuxt-link>
      </li>
    </ul>

    <!-- Mobile menu icon -->
    <div class="lg:hidden flex" @click="toggleMenu">
      <svg
        width="34"
        height="34"
        viewBox="0 0 24 24"
        class="menu-right-alt transition-all duration-200 ease-out"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <!-- Line - 1 -->
        <path
          d="M4 6C4 5.44772 4.44772 5 5 5H19C19.5523 5 20 5.44772 20 6C20 6.55228 19.5523 7 19 7H5C4.44772 7 4 6.55228 4 6Z"
          fill="currentColor"
          class="top-line origin-top-left transition-all duration-200 ease-out"
        />

        <!-- Line - 3 -->
        <path
          d="M4 18C4 17.4477 4.44772 17 5 17H19C19.5523 17 20 17.4477 20 18C20 18.5523 19.5523 19 19 19H5C4.44772 19 4 18.5523 4 18Z"
          fill="currentColor"
          class="bottom-line origin-bottom-left transition-all duration-200 ease-out"
        />
        <!-- Line - 2 -->
        <path
          d="M11 11C10.4477 11 10 11.4477 10 12C10 12.5523 10.4477 13 11 13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H11Z"
          fill="currentColor"
          class="middle-line"
        />
      </svg>
    </div>
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
          path: 'index',
        },
        {
          name: 'Journey',
          path: 'journey',
        },
        {
          name: 'Portfolio',
          path: 'portfolio',
        },
      ],
      isMenuClosed: true,
    }
  },

  computed: {
    activeNav() {
      return this.$route.name
    },
  },

  watch: {
    $route() {
      if (!this.isMenuClosed) {
        this.isMenuClosed = true
        this.changeMenuIcon()
      }
    },
  },

  methods: {
    toggleMenu() {
      this.isMenuClosed = !this.isMenuClosed
      this.$nextTick(() => {
        this.changeMenuIcon()
      })
    },

    changeMenuIcon() {
      const topLine = document.querySelector('.top-line')
      const middleLine = document.querySelector('.middle-line')
      const bottomLine = document.querySelector('.bottom-line')

      topLine.classList.toggle('rotate-45')
      topLine.classList.toggle('translate-x-1')

      middleLine.classList.toggle('hidden')

      bottomLine.classList.toggle('-rotate-45')
      bottomLine.classList.toggle('translate-x-1')
      bottomLine.classList.toggle('translate-y-[1px]')
    },

    activePath(path) {
      return this.$route.name.includes(path)
    },
  },
}
</script>

<style scoped>
.nav-bar {
  @apply h-20 relative flex justify-end lg:justify-center items-center mx-7 md:mx-16 lg:mx-[7.5rem];
}

.logo {
  @apply absolute top-1/2 left-0 -translate-y-1/2;
}

.link-list {
  @apply h-screen md:h-auto w-[90%] md:w-auto absolute md:static top-20 -right-7 lg:visible flex flex-col md:flex-row items-center gap-6 md:gap-16 text-lg bg-slate-100 md:bg-transparent z-20 pt-56 md:pt-0 transition-all duration-300;
}

.nav-link {
  @apply relative text-2xl md:text-lg;
}

.nav-link::after {
  content: '';
  @apply w-0 h-1 absolute left-1/2 -translate-x-1/2 block rounded-xl bg-brand-text transition-all duration-300;
}

.active {
  @apply font-bold text-brand-text;
}

.active::after {
  @apply w-1/2;
}
</style>
