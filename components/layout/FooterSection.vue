<template>
  <footer class="h-24 flex justify-end bg-brand">
    <contact-us-card class="-mt-36 mr-[5%]" :class="{ 'sm:hidden': isHome }" />
  </footer>
</template>

<script>
import ContactUsCard from '~/components/global/ContactUsCard.vue'
export default {
  name: 'FooterSection',
  components: { ContactUsCard },
  computed: {
    isHome() {
      return this.$route.path === '/'
    },
  },
}
</script>
