<template>
  <section class="flex flex-col mb-56">
    <header class="font-bold text-3xl text-brand-text mb-6">Products</header>
    <div class="flex flex-col gap-14">
      <p>
        Please see below products that are ready for use today. We are cost
        effective and reliable. Thank you in advance for your interest.
      </p>
      <div class="flex flex-col gap-32 mb-16">
        <products-card
          v-for="(product, idx) in products"
          :key="idx"
          :item="product"
        />
      </div>
    </div>
  </section>
</template>

<script>
import ProductsCard from '~/components/portfolio/ProductsCard.vue'
export default {
  name: 'ProductsPage',

  components: { ProductsCard },

  layout: 'portfolio_layout',

  data() {
    return {
      products: [
        {
          title: 'Greencheddar',
          description:
            'GreenCheddar is a sustainable climate-tech app that provides employees incentives to turn up to the office while also helping them in lowering their energy bills. Employees receive tailored energy infographics while enhancing their engagement levels at work.',
          link: 'greencheddar.earth/business',
          linkText: 'Greencheddar',
          imageFront: 'products_image_1.png',
          imageBehind: 'products_image_2.png',
        },
        {
          title: 'Carbon Miner',
          description:
            'You can do these calculations yourself but why bother when you have it all in one place. This website is for people who want to understand the environmental impact of buying large quantities of commodities.',
          link: 'greencheddar.earth/business',
          linkText: 'Carbon Miner',
          imageFront: 'products_image_3.png',
          imageBehind: 'products_image_4.png',
        },
        {
          title: 'Green Menu',
          description:
            "If you're a restaurants looking to understand the Carbon footprint of your menu, please check out our free calculator. We also offer design services if you're looking to revamp your Menu with our designs. Communicating the Carbon footprint to your customers might help them manage their life's easier for example if they have had one of your tasty burgers, maybe they can offset that my buying credits or taking public transportation instead of an Uber ride back home.",
          link: 'greencheddar.earth/business',
          linkText: 'Green Menu',
          imageFront: 'products_image_5.png',
          imageBehind: 'products_image_6.png',
        },
      ],
    }
  },
}
</script>
