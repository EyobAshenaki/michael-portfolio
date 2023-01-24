<template>
  <div class="flex flex-col lg:flex-row justify-between gap-4 lg:gap-0">
    <div class="basis-[60%] flex flex-col gap-7">
      <h3 class="font-bold">{{ item.title }}</h3>
      <p>
        {{ item.description }}
      </p>

      <div class="flex items-center gap-1">
        <a
          class="font-semibold text-lg text-green-600"
          :href="item.link"
          target="”_blank”"
        >
          {{ item.linkText }}
        </a>
        <link-arrow-icon />
      </div>
    </div>
    <div class="basis-[30%] relative flex justify-end">
      <img
        class="absolute top-24 right-20 md:right-36 rounded-2xl"
        :src="getImageFront"
        alt="Products Front Image"
      />
      <img
        class="rounded-2xl"
        :src="getImageBehind"
        alt="Products Behind Image"
      />
    </div>
  </div>
</template>

<script>
import LinkArrowIcon from '~/components/icons/LinkArrowIcon.vue'

export default {
  name: 'ProductsCard',

  components: {
    LinkArrowIcon,
  },

  props: {
    item: {
      type: Object,
      required: true,
    },
  },

  computed: {
    getImageFront() {
      return require(`~/assets/images/recent_works/products/${this.item.imageFront}`)
    },
    getImageBehind() {
      return require(`~/assets/images/recent_works/products/${this.item.imageBehind}`)
    },
  },
}
</script>
