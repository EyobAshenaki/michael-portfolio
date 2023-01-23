<template>
  <div class="flex items-center gap-12" :class="{ 'flex-row-reverse': isEven }">
    <img
      class="basis-1/3 rounded-full"
      :src="getImage"
      alt="Venture Building Image"
    />
    <div class="flex flex-col gap-2.5">
      <div class="flex justify-between">
        <h3 class="font-bold text-xl">{{ item.title }}</h3>
        <h3 class="font-bold text-xl">{{ item.date }}</h3>
      </div>
      <p>{{ item.description }}</p>
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
