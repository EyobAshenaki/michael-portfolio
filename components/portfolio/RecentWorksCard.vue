<template>
  <div class="w-72 lg:w-[22rem] xl:w-[27rem] shadow-md rounded-3xl p-4">
    <div class="relative rounded-3xl">
      <img class="rounded-3xl" :src="getImage" alt="Recent Work Image" />
      <div
        class="w-full h-12 md:h-16 lg:h-[4.5rem] absolute bottom-0 left-0 flex justify-center items-center rounded-3xl text-white"
        :class="[item.color]"
      >
        <h1 class="font-bold text-xl lg:text-2xl">{{ item.title }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecentWorksCard',
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
  },
}
</script>
