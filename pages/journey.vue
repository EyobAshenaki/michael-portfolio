<template>
  <section class="flex flex-col items-center gap-7 mb-52 md:mb-44">
    <header class="flex flex-col items-center mt-14">
      <h2 class="font-medium text-lg">Journey of</h2>
      <h1 class="font-bold text-xl md:text-2xl text-brand-text">
        Micheal Testa
      </h1>
    </header>
    <div class="md:w-[75%] flex flex-col gap-5 text-center">
      <p>
        It is estimated that by the 2030s, 9 out 10 people would need to
        retrain. I've been constantly retraining over the last two decades as
        outlined below. I started my career as an entrepreneur trading second
        hand video games. I then pursued this until I got to university where I
        retrained as an Economist.
      </p>
      <p>
        On this path, I joined the Ministry of Justice writing Business Cases
        and producing Cost Benefit Models. At the Ministry of Justice, there was
        a shortage of Data Scientists and so I volunteered and started
        retraining, I managed to produce several R Shiny Dashboards, one of
        which was a tool that embedded a discrete event simulation leading to
        massive spending decisions and the creation of the Independent
        Monitoring Authority, a new organization set up to support EU Citizen’s
        Rights. With my new found love for code and data and my old age passion
        for Climate Change Mitigation, I decided to join BEIS and to led the
        largest household energy dataset in the UK, The National Energy
        Efficiency Data Framework.
      </p>
      <p>
        However, Data Science wasn't enough, I had to retrain as a Team Manager
        and as a Classical Statistician. During this time, I caught the
        Entrepreneurial bug again and decided to experiment with app building.
        So I started to retrain as an MVP builder. I fell in love with Climate
        Tech and so I then decided to retrain as an Environmental Economist by
        getting a job as the Head of Carbon Pricing Strategy.
      </p>
      <p>
        I managed to excel and got invited to speak at The Economist’s US
        Sustainability Week where I spoke about Carbon as an Asset Class.
      </p>
      <p>
        Fast forward to today, I'm retraining yet again in Capital Markets at
        Goldman Sachs.
      </p>
    </div>

    <!-- Timeline -->
    <div class="relative flex justify-center my-44 md:my-36">
      <ol
        class="timeline relative md:translate-x-1/2 border-l-2 border-brand-text z-[1]"
      >
        <li
          v-for="timelineItem in timelineItems"
          :key="timelineItem.id"
          class="mb-10"
          :class="{
            'ml-6': !isIdEven(timelineItem.id),
            'ml-6 md:-ml-6': isIdEven(timelineItem.id),
            '-mb-[24rem] sm:-mb-60 md:-mb-[24rem] lg:-mb-56':
              lastTimelineItemIndex === timelineItem.id,
          }"
        >
          <div
            class="absolute -left-[7px] w-3 h-3 bg-brand-text rounded-full"
          ></div>
          <timeline-card class="bg-white" :item="timelineItem" />
        </li>
      </ol>
    </div>
  </section>
</template>

<script>
import TimelineCard from '~/components/journey/TimelineCard.vue'
import * as timelineData1 from '~/assets/animations/timeline_data_1.json'
import * as timelineData2 from '~/assets/animations/timeline_data_2.json'
import * as timelineData3 from '~/assets/animations/timeline_data_3.json'
import * as timelineData4 from '~/assets/animations/timeline_data_4.json'
import * as timelineData5 from '~/assets/animations/timeline_data_5.json'
import * as timelineData6 from '~/assets/animations/timeline_data_6.json'
export default {
  name: 'Journey',
  components: {
    TimelineCard,
  },

  data() {
    return {
      timelineItems: [
        {
          id: 1,
          quote:
            'I began my first business at the age of eleven by renting out my bicycle and exchanging used video games.',
          animationData: timelineData1,
        },
        {
          id: 2,
          quote:
            "In a business pitch competition, I came in second place at age 17, and at age 20, I got a scholarship to study for a master's degree at UCL.",
          animationData: timelineData2,
        },
        {
          id: 3,
          quote:
            'At the age of 23, I assisted in the development of a new Quango by building a simulation model. I am appointed team leader of the National Energy Efficiency Data Team at the age of 25.',
          animationData: timelineData3,
        },
        {
          id: 4,
          quote:
            "I released Key Data and Statistics on Energy Efficiency when I was 26 years old and was a member of the Eco-Innovation Board. A year later, I made a significant strategic contribution to a report on the UK's future carbon markets.",
          animationData: timelineData4,
        },
        {
          id: 5,
          quote:
            "At the age of 27, I gave a speech at The Economist's US Sustainability Week, which attracted over 10,000 people. I also received a spot at UCL's Hatchery, a competitive incubator.",
          animationData: timelineData5,
        },
        {
          id: 6,
          quote:
            'I have began my new position at Goldman Sachs as Head of Carbon and Environmental Product Strategy just before turning 28. I would like to subscribe 2,000 households for GreenCheddar.',
          animationData: timelineData6,
        },
      ],
    }
  },

  computed: {
    lastTimelineItemIndex() {
      return this.timelineItems.length
    },
  },

  // mounted() {
  // this.$lottie.loadAnimation({
  //   container: document.getElementById('animation-lottie'),
  //   renderer: 'svg',
  //   loop: true,
  //   autoplay: true,
  //   path: '/lottie/animation.json',
  // })
  // },

  methods: {
    isIdEven(val) {
      return val % 2 === 0
    },
  },
}
</script>
