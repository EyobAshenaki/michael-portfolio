<template>
  <section>
    <background-circles class="absolute top-10 right-24 z-[-1]" />
    <!-- Upper section -->
    <div
      class="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-80"
    >
      <div
        class="md:basis-1/2 flex flex-col items-center md:items-start mt-7 md:mt-0"
      >
        <h1 class="font-bold text-xl md:text-2xl text-brand-text">
          Micheal Testa,
        </h1>
        <h2 class="font-medium text-lg text-gray-500">
          CEO & Founder of GreenCheddar
        </h2>
        <p class="text-center md:text-start mt-4">
          <span class="font-semibold text-xl text-brand-text">
            Lorem ipsum
          </span>
          dolor sit amet consectetur. Cursus elit sit adipiscing aliquam neque
          ut massa etiam vitae. Sed risus et tristique in suspendisse ipsum.
          Elementum viverra neque in vehicula rutrum congue ultrices diam
          volutpat. Imperdiet congue dui ullamcorper elit enim nibh.
        </p>
      </div>
      <!-- Company icons -->
      <div class="md:basis-1/2 flex md:flex-col justify-evenly gap-3 md:gap-7">
        <div class="icon-container md:ml-[15%]">
          <goldman-sachs-icon class="icon basis-1/2" />
          <h3 class="icon-text">
            Executive Director - Head of Carbon and Environmental Product
            Strategy
          </h3>
        </div>
        <div class="icon-container order-3 md:order-2 md:ml-[0%]">
          <entrepreneur-icon class="icon" />
          <h3 class="icon-text">Entrepreneur</h3>
        </div>
        <div class="icon-container order-2 md:order-3 md:ml-[30%] md:-mt-7">
          <green-cheddar-icon class="icon" />
          <h3 class="icon-text">CEO & Founder</h3>
        </div>
      </div>
    </div>

    <!-- Lower section -->
    <div
      class="md:flex md:justify-evenly md:items-end translate-x-[10%] md:translate-x-0 mt-10 md:mt-0"
    >
      <!-- Desktop contact us card -->
      <contact-us-card class="hidden md:flex ml-5" />

      <!-- Portrait photo -->
      <div class="md:basis-1/3 relative md:translate-x-16 md:-mt-20">
        <img
          src="~/assets/images/portrait_photo.png"
          alt="Portrait Photo"
          class="portrait"
          @mouseenter="handlePortraitHover"
          @mouseleave="handlePortraitHover"
        />
        <portrait-photo-shadow class="portrait-shadow" />
      </div>

      <p class="basis-1/3 hidden md:block">
        Lorem ipsum dolor sit amet consectetur. Integer felis sapien velit arcu
        nisi ac eu. Donec sem felis magna egestas diam urna fusce. Sem eget
        ultrices in ac sit dictum euismod sollicitudin adipiscing. Dignissim
        orci fermentum ipsum turpis hac purus amet gravida. Cursus scelerisque
        gravida mi nec consectetur ut. Aliquet ullamcorper nisl natoque id non
        feugiat in.
      </p>
    </div>
  </section>
</template>

<script>
import BackgroundCircles from '~/components/icons/home/BackgroundCircles.vue'
import GoldmanSachsIcon from '~/components/icons/home/GoldmanSachsIcon.vue'
import EntrepreneurIcon from '~/components/icons/home/EntrepreneurIcon.vue'
import GreenCheddarIcon from '~/components/icons/home/GreenCheddarIcon.vue'
import PortraitPhotoShadow from '~/components/icons/home/PortraitPhotoShadow.vue'
import ContactUsCard from '~/components/global/ContactUsCard.vue'

export default {
  name: 'IndexPage',
  components: {
    BackgroundCircles,
    GoldmanSachsIcon,
    EntrepreneurIcon,
    GreenCheddarIcon,
    PortraitPhotoShadow,
    ContactUsCard,
  },

  methods: {
    handlePortraitHover() {
      const portrait = document.querySelector('.portrait')
      const portraitShadow = document.querySelector('.portrait-shadow')
      portrait.classList.toggle('-translate-x-3')
      portrait.classList.toggle('-translate-y-3')
      portraitShadow.classList.toggle('scale-[90%]')
    },
  },
}
</script>

<style scoped>
section {
  @apply flex flex-col-reverse md:flex-col justify-center items-start mobile-home overflow-hidden;
}

@media (min-width: 768px) {
  .mobile-home {
    height: calc(100vh - 5rem - 6rem);
  }
}

.icon-container {
  @apply md:flex md:gap-3 items-center;
}

.icon {
  @apply h-16 md:h-fit;
}

.icon-text {
  @apply hidden md:block font-semibold;
}

.portrait {
  @apply w-[90%] md:w-auto relative z-10 transition-all duration-300;
}

.portrait-shadow {
  @apply w-[70%] md:w-auto absolute top-1/2 left-1/2 -translate-x-[56%] md:-translate-x-[65%] -translate-y-1/2 transition-all duration-300;
}
</style>
