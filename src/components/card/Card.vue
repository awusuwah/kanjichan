<template>
  <div
    class="w-full px-8 py-6 bg-gray-800 border border-gray-700 rounded-lg shadow-lg space-y-4"
  >
    <h3
      v-if="heading"
      class="text-center text-2xl font-semibold leading-6 text-gray-100"
    >
      {{ heading }}
    </h3>
    <slot />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  /**
   * The heading of the card. It's being displayed at the very top, above all content.
   */
  heading: {
    type: String,
    default: null,
  },
});
</script>
