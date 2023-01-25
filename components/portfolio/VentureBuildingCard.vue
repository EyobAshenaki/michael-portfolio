<template>
  <div
    class="flex items-center gap-12 mb-10 md:mb-0"
    :class="{
      'flex-col sm:flex-row-reverse': isEven,
      'flex-col sm:flex-row': !isEven,
    }"
  >
    <img
      class="basis-1/3 max-w-[13rem] rounded-full"
      :src="getImage"
      alt="Venture Building Image"
    />
    <div class="flex flex-col gap-2.5">
      <div
        class="flex flex-col md:flex-row justify-between"
        :class="{
          'items-center sm:items-end': isEven,
          'items-center sm:items-start': !isEven,
        }"
      >
        <h3 class="font-bold text-xl">{{ item.title }}</h3>
        <h3 class="font-bold text-xl">{{ item.date }}</h3>
      </div>
      <p
        :class="{
          'text-center sm:text-left': !isEven,
          'text-center sm:text-right': isEven,
        }"
      >
        {{ item.description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VentureBuildingCard',

  props: {
    item: {
      type: Object,
      required: true,
    },
  },

  computed: {
    getImage() {
      return require(`~/assets/images/recent_works/${this.item.image}`)
    },

    isEven() {
      return this.item.id % 2 === 0
    },
  },
}
</script>
