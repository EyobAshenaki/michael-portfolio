<template>
  <div
    class="w-[34rem] flex justify-between items-center -translate-y-1/2 shadow-lg rounded-2xl border border-brand-text px-12 py-10"
    :class="{
      '-translate-x-full': isIdEven,
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
