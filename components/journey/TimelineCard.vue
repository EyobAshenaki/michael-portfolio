<template>
  <div
    class="md:w-80 lg:w-[34rem] h-96 sm:h-60 md:h-auto flex flex-col sm:flex-row md:flex-col lg:flex-row justify-between items-center -translate-y-1/2 shadow-lg rounded-2xl border border-brand-text px-6 lg:px-12 py-5 lg:py-10"
    :class="{
      'md:-translate-x-full': isIdEven,
    }"
  >
    <p class="basis-2/3">
      <span class="font-semibold text-lg text-brand-text">“</span>
      {{ item.quote }}
      <span class="font-semibold text-lg text-brand-text">”</span>
    </p>
    <lottie
      class="sm:basis-1/3"
      :options="lottieOptions"
      @animCreated="handleAnimation"
    />
  </div>
</template>

<script>
import Lottie from 'vue-lottie/src/lottie.vue'

export default {
  name: 'TimelineCard',

  components: {
    Lottie,
  },

  props: {
    item: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      anim: null, // for saving the reference to the animation
      lottieOptions: { animationData: this.item.animationData.default },
    }
  },

  computed: {
    isIdEven() {
      return this.item.id % 2 === 0
    },

    getImage() {
      return require(`~/assets/images/timeline_images/${this.item.image}`)
    },
  },

  methods: {
    handleAnimation: function (anim) {
      this.anim = anim
    },
  },
}
</script>
