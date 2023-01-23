<template>
  <div
    class="flex flex-col justify-center items-center rounded-[30px] bg-accent drop-shadow-2xl px-28 py-14"
  >
    <header class="font-bold text-2xl text-center mb-2">
      Subscribe to our newsletter
    </header>
    <p class="font-medium text-sm text-center mb-7">
      Get weekly updated by subscribing to our newsletter.
    </p>
    <form class="flex flex-col md:flex-row items-center gap-4 md:gap-2">
      <input
        type="text"
        placeholder="Email address"
        class="w-80 text-black bg-gray-100 rounded-lg px-4 py-3.5"
      />
      <button
        type="submit"
        class="w-fit text-white font-semibold text-xl rounded-lg bg-brand px-7 py-2.5"
      >
        Subscribe
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'NewsLetterCard',
}
</script>
