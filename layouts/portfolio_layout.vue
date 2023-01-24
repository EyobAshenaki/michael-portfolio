<template>
  <default-layout>
    <main class="pt-4 px-4 md:px-12">
      <div
        class="flex items-center gap-2.5 cursor-pointer mb-10"
        @click="handleBackClick"
      >
        <back-icon />
        <span class="font-medium">Back</span>
      </div>
      <nuxt />
    </main>
  </default-layout>
</template>

<script>
import DefaultLayout from '~/layouts/default.vue'
import BackIcon from '~/components/icons/BackIcon.vue'

export default {
  name: 'PortfolioLayout',

  components: {
    DefaultLayout,
    BackIcon,
  },

  methods: {
    handleBackClick() {
      this.$router.go(-1)
    },
  },
}
</script>
