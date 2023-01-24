<template>
  <div
    class="w-fit h-fit relative flex flex-col gap-2.5 rounded-3xl bg-accent drop-shadow-[0_8px_18px_#a5733847] px-8 md:px-11 py-6"
  >
    <falling-star-icon class="absolute top-0 right-0" />
    <header class="font-bold text-lg text-center pb-1">Contact me</header>
    <div>
      <h3 class="font-semibold">Business enquires</h3>
      <div class="flex items-center gap-1 font-semibold">
        <email-icon class="mt-1" />
        <span class="text-[#B97E36]">michael.testa@zeraftech.com</span>
      </div>
    </div>
    <div class="flex flex-col gap-2">
      <h3 class="font-semibold">Social Medias</h3>
      <div class="flex gap-5">
        <linkedin-icon />
      </div>
    </div>
  </div>
</template>

<script>
import EmailIcon from '~/components/icons/social/EmailIcon.vue'
import LinkedinIcon from '~/components/icons/social/LinkedinIcon.vue'
import FallingStarIcon from '~/components/icons/FallingStarIcon.vue'
export default {
  name: 'ContactUsCard',
  components: {
    EmailIcon,
    LinkedinIcon,
    FallingStarIcon,
  },
}
</script>
