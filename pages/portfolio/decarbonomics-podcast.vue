<template>
  <section class="flex flex-col items-center lg:items-start mb-80">
    <header class="font-bold text-2xl sm:text-3xl text-brand-text mb-6">
      Decarbonomics Podcast
    </header>
    <div
      class="flex flex-col-reverse lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-0"
    >
      <div class="lg:basis-[60%] flex flex-col items-center lg:items-start">
        <p class="text-center lg:text-start mb-10">
          The Decarbonomics Explained podcast features a short-form discussion
          with friends and guests, including sustainability experts,
          enthusiasts, innovators, and anybody with an interest in carbon, the
          environment, and the future of our planet.
        </p>

        <h3 class="font-bold text-lg mb-5">Listen on:</h3>
        <div class="flex gap-5">
          <button class="bg-green-500 rounded-xl px-9 py-3">
            <spotify-text-icon />
          </button>
          <button class="bg-red-500 rounded-xl py-3 px-9">
            <youtube-text-icon />
          </button>
        </div>
      </div>
      <img
        class="lg:basis-[35%] w-fit drop-shadow-2xl rounded-xl"
        src="~/assets/images/recent_works/decarbonomics_podcast/decarbonomics_podcast_image.png"
        alt="Decarbonomics Podcast Image"
      />
    </div>
  </section>
</template>

<script>
import SpotifyTextIcon from '~/components/icons/social/SpotifyTextIcon.vue'
import YoutubeTextIcon from '~/components/icons/social/YoutubeTextIcon.vue'

export default {
  name: 'DecarbonomicsPodcastPage',

  components: {
    SpotifyTextIcon,
    YoutubeTextIcon,
  },

  layout: 'portfolio_layout',
}
</script>
