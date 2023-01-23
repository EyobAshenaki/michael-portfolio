<template>
  <section class="flex flex-col items-center gap-20 mb-80">
    <h1 class="font-bold text-3xl text-brand-text mt-20">Recent works</h1>
    <div class="flex flex-wrap justify-evenly gap-12">
      <nuxt-link
        v-for="(recentWork, idx) in recentWorks"
        :key="idx"
        :to="{ name: recentWork.path }"
      >
        <recent-works-card :item="recentWork" />
      </nuxt-link>
    </div>
    <news-letter-card class="my-10" />
  </section>
</template>

<script>
import RecentWorksCard from '~/components/portfolio/RecentWorksCard.vue'
import NewsLetterCard from '~/components/global/NewsLetterCard.vue'
export default {
  name: 'Portfolio',
  components: { RecentWorksCard, NewsLetterCard },
  data() {
    return {
      recentWorks: [
        {
          title: 'Venture Building',
          image: 'recent_works_1.png',
          color: 'bg-brand',
          path: 'portfolio-venture-building',
        },
        {
          title: 'Products',
          image: 'recent_works_2.png',
          color: 'bg-[#025124]',
          path: 'portfolio-products',
        },
        {
          title: 'Decarbonomics Podcast',
          image: 'recent_works_3.png',
          color: 'bg-[#46454A]',
          path: 'portfolio-decarbonomics-podcast',
        },
        {
          title: 'Speaker engagement',
          image: 'recent_works_4.png',
          color: 'bg-brand',
          path: 'portfolio-speaker-engagement',
        },
      ],
    }
  },
}
</script>
