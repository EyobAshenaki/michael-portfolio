<template>
  <section class="flex flex-col items-center sm:items-start mb-80">
    <header class="font-bold text-3xl text-brand-text mb-6">
      Venture Building
    </header>
    <p class="text-center sm:text-center mb-20">
      Please see below the journey of my Venture Building Activity. All of this
      was done without raising any capital. All of this was done with a very
      limited budget that I managed to gather from almost a decade of savings
      from various employments.
    </p>
    <div class="flex flex-col gap-5">
      <venture-building-card
        v-for="ventureBuildingItem in ventureBuildingItems"
        :key="ventureBuildingItem.id"
        :item="ventureBuildingItem"
      />
    </div>
  </section>
</template>

<script>
import VentureBuildingCard from '~/components/portfolio/VentureBuildingCard.vue'
export default {
  name: 'VentureBuildingPage',
  components: { VentureBuildingCard },
  layout: 'portfolio_layout',

  data() {
    return {
      ventureBuildingItems: [
        {
          id: 1,
          title: 'Research Phase 1',
          date: 'March 2020',
          description:
            'Lockdown began and I suddenly found myself with a lot of extra time. There were no more gym sessions, no more after work socials, life was very Hobbsian. So with all this time, I started to do research on what extra jobs I could do during this spare time. I initially thought I should buy and sell sunflower oil.',
          image: 'venture_building/venture_building_1.png',
        },
        {
          id: 2,
          title: 'Operations Phase 1',
          date: 'October 2020',
          description:
            'Due to operational issues, I decided not to pursue sunflower trading opting instead for building an MVP with a friend I met at Google Campus.',
          image: 'venture_building/venture_building_2.png',
        },
        {
          id: 3,
          title: 'Opened Zeraf Technologies',
          date: 'March 2021',
          description:
            "My friend and Co founder had a child and drops out. At this point, our MVP wasn't great and so I decided to open a small office with 3 Software Engineers in Addis Ababa, Ethiopia.",
          image: 'venture_building/venture_building_3.png',
        },
        {
          id: 4,
          title: 'Venture Builder',
          date: 'July 2020',
          description:
            'Without realizing, I had created a Venture Builder. I had created 3 prototypes and started to gather feedback from potential customers. At this point, I narrowed down the list to 3 prototypes. Medusa, GiraffeNotes and GreenCheddar',
          image: 'venture_building/venture_building_4.png',
        },
        {
          id: 5,
          title: 'MVP Generation 1',
          date: 'January 2022',
          description:
            "Released the first version of GreenCheddar and GiraffeNotes and collected feedback from all walks of life. There was a clear signal. We should pursue GreenCheddar despite it's many flaws.",
          image: 'venture_building/venture_building_5.png',
        },
        {
          id: 6,
          title: 'MVP Generation 2',
          date: 'May 2022',
          description:
            "Released Medusa and Third Version of GreenCheddar. Collected feedback. It seemed that achieving sales was difficult. We didn't manage to hit product market fit. However there was a stronger signal for GreenCheddar. So we dropped Medusa and went full steam on GreenCheddar.",
          image: 'venture_building/venture_building_6.png',
        },
        {
          id: 7,
          title: 'The Pivot',
          date: 'September 2022',
          description:
            'Released the 4th version of GreenCheddar. The feedback was much better, however the legacy was clunky and therefore we decided to build a smaller mobile version taking lessons from the past iterations.',
          image: 'venture_building/venture_building_7.png',
        },
        {
          id: 8,
          title: 'MVP Generation 3',
          date: 'March 2023',
          description:
            'Released 5th MVP of GreenCheddar. We believe this is the final stage and are in the process of onboarding clients.',
          image: 'venture_building/venture_building_8.png',
        },
      ],
    }
  },
}
</script>
