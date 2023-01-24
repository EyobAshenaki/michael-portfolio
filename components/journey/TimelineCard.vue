<template>
  <div
    class="md:w-80 lg:w-[34rem] flex flex-col sm:flex-row md:flex-col lg:flex-row justify-between items-center -translate-y-1/2 shadow-lg rounded-2xl border border-brand-text px-6 lg:px-12 py-5 lg:py-10"
    :class="{
      'md:-translate-x-full': isIdEven,
    }"
  >
    <p>
      <span class="font-semibold text-lg text-brand-text">“</span>
      {{ item.quote }}
      <span class="font-semibold text-lg text-brand-text">”</span>
    </p>
    <img :src="getImage" alt="Timeline Image" />
  </div>
</template>

<script>
export default {
  name: 'TimelineCard',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },

  computed: {
    isIdEven() {
      return this.item.id % 2 === 0
    },

    getImage() {
      return require(`~/assets/images/timeline_images/${this.item.image}`)
    },
  },
}
</script>
