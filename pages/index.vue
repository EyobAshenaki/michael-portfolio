<template>
  <section>
    <background-circles class="absolute top-10 right-60 z-[-1]" />
    <!-- Left Section -->
    <div
      class="flex flex-col justify-center md:justify-start items-center md:items-start gap-10 md:gap-20"
    >
      <!-- Portrait Mobile photo -->
      <div
        class="md:hidden relative md:absolute md:-top-28 md:-left-32 translate-x-[10%] md:translate-x-0"
      >
        <img
          src="~/assets/images/portrait_photo.png"
          alt="Portrait Photo"
          class="portrait md:-translate-x-[10%] md:scale-110"
          @mouseenter="handlePortraitHover"
          @mouseleave="handlePortraitHover"
        />
        <portrait-photo-shadow class="portrait-shadow md:scale-110" />
      </div>
      <!-- Upper Right section -->
      <div class="flex flex-col items-center md:items-start">
        <h1 class="font-bold text-xl md:text-2xl text-brand-text">
          Micheal Testa,
        </h1>
        <h2 class="font-medium text-lg text-gray-500">
          CEO & Founder of GreenCheddar
        </h2>
        <p class="text-center md:text-start mt-4">
          Michael Testa is an Executive Director at Goldman Sachs, currently
          serving as The Head of Carbon and Environmental Product Strategy.
          <br />
          <br />
          He's a Senior Economist and Serial Entrepreneur. People call him "The
          Carbon Guy". He likes it.
          <br />
          <br />
          He has made significant contribution in a Government publication that
          outlines the UK's future carbon markets. He was previously appointed
          as team leader of the National Energy Efficiency Data, the largest
          energy dataset in the UK. He has previously spoken on the Future of
          Carbon as an Asset Class, in an Event ran by The Economist.
        </p>
      </div>
      <!-- Desktop contact us card -->
      <contact-us-card class="hidden md:flex ml-5" />
    </div>

    <!-- Right Section -->
    <div class="w-full md:w-auto flex flex-col gap-16">
      <!-- Company icons -->
      <div class="flex md:flex-col justify-evenly gap-3 md:gap-12">
        <div class="icon-container order-1 md:ml-[15%]">
          <goldman-sachs-icon class="icon" />
          <h3 class="icon-text">
            Executive Director - Head of Carbon and Environmental Product
            Strategy
          </h3>
        </div>
        <div class="icon-container order-3 md:order-2 md:ml-[2%]">
          <entrepreneur-icon class="icon" />
          <h3 class="icon-text">Entrepreneur</h3>
        </div>
        <div class="icon-container order-2 md:order-3 md:ml-[45%] md:-mt-[20%]">
          <green-cheddar-icon class="h-16 md:h-20 w-24 md:w-28 shadow-xl" />
          <h3 class="icon-text">CEO & Founder</h3>
        </div>
        <div class="icon-container order-4 md:ml-[30%] md:mt-[3%]">
          <beis-icon class="icon" />
          <h3 class="icon-text">
            Department for Business, Energy and Industrial Strategy (BEIS) -
            Head of Carbon Pricing Strategy Analysis
          </h3>
        </div>
      </div>
      <!-- Lower Left section -->
      <div class="relative hidden md:flex justify-center items-center">
        <!-- Portrait Desktop photo -->
        <div class="md:absolute -top-32 -left-32">
          <img
            src="~/assets/images/portrait_photo.png"
            alt="Portrait Photo"
            class="portrait -translate-x-[10%] md:scale-110"
            @mouseenter="handlePortraitHover"
            @mouseleave="handlePortraitHover"
          />
          <portrait-photo-shadow class="portrait-shadow md:scale-110" />
        </div>

        <div class="flex flex-col gap-8">
          <p class="ml-40">
            Michael is also a Entrepreneur at UCL’s Enterprise and Innovation
            currently building GreenCheddar which is a platform that helps
            households monetise their energy savings and avoided carbon
            emissions. He had previously built businesses ranging from bicycle
            rentals to second hand video games. Michael believes that Smart
            Carbon Pricing is the future of climate change mitigation.
          </p>
          <p class="hidden xl:block 2xl:ml-40">
            Michael's expertise include Carbon Markets, Energy Efficiency,
            Simulation Modelling, Software Development, Cost Benefit, Business
            Cases, Cost Modelling, Stakeholder Management, Leading in
            uncertainty, Leading teams upto 15 people with various projects and
            Machine Learning.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BackgroundCircles from '~/components/icons/home/BackgroundCircles.vue'
import GoldmanSachsIcon from '~/components/icons/home/GoldmanSachsIcon.vue'
import EntrepreneurIcon from '~/components/icons/home/EntrepreneurIcon.vue'
import GreenCheddarIcon from '~/components/icons/home/GreenCheddarIcon.vue'
import BeisIcon from '~/components/icons/home/BEISIcon.vue'
import PortraitPhotoShadow from '~/components/icons/home/PortraitPhotoShadow.vue'
import ContactUsCard from '~/components/global/ContactUsCard.vue'

export default {
  name: 'IndexPage',
  components: {
    BackgroundCircles,
    GoldmanSachsIcon,
    EntrepreneurIcon,
    GreenCheddarIcon,
    BeisIcon,
    PortraitPhotoShadow,
    ContactUsCard,
  },

  methods: {
    handlePortraitHover() {
      const portrait = document.querySelector('.portrait')
      const portraitShadow = document.querySelector('.portrait-shadow')
      portrait.classList.toggle('md:-translate-x-[10%]')
      portrait.classList.toggle('-translate-x-9')
      portrait.classList.toggle('-translate-y-5')
      portraitShadow.classList.toggle('md:scale-110')
      portraitShadow.classList.toggle('md:scale-100')
    },
  },
}
</script>

<style scoped>
section {
  @apply flex flex-col md:flex-row justify-center items-start gap-10 md:gap-40 pb-48 md:pb-20 pt-7 md:pt-10;
}

.icon-container {
  @apply md:flex md:gap-3 items-center;
}

.icon {
  @apply h-16 md:h-20 w-16 md:w-20;
}

.icon-text {
  @apply md:min-w-min md:max-w-[18rem]  hidden md:block font-semibold;
}

.portrait {
  @apply w-[90%] md:w-auto relative z-10 transition-all duration-300;
}

.portrait-shadow {
  @apply w-[70%] md:w-auto absolute top-1/2 left-1/2 -translate-x-[56%] md:-translate-x-[65%] -translate-y-1/2 transition-all duration-300;
}
</style>
