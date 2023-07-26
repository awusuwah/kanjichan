<template>
  <div class="rounded-md px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-500 focus-within:ring-2 focus-within:ring-indigo-600">
    <label :for="id" class="block text-xs font-medium text-gray-200">
      {{ label }}
    </label>
    <input
      :type="type"
      :name="id"
      :id="id"
      class="block w-full border-0 p-0 bg-transparent text-white placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
      :placeholder="placeholder"
      :value="modelValue"
      @input="updateValue"
    />
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(["update:modelValue"]);
const props = defineProps({
  /**
   * The label text of the input.
   */
  label: {
    type: String,
    required: true,
  },

  /**
   * The value which is passed in using the v-model directive.
   */
  modelValue: {
    type: [String, Number],
    required: true,
  },

  /**
   * The name and ID of the input element. This is used to link the label to the input and to make sure that the
   * input needs to be unique. This also makes sure that each input can be controlled from the outside by accessing
   * it from it's ID.
   */
  id: {
    type: String,
    default: null,
  },

  /**
   * The placeholder which is shown when the input has no text inside it.
   */
  placeholder: {
    type: String,
    default: "",
  },

  /**
   * The native HTML5 type of the input element.
   */
  type: {
    type: String,
    default: "text",
  },
});

/**
 * Emit an event with the new value of the input element. This will replace the old value passed in using
 * the v-model directive.
 */
const updateValue = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit("update:modelValue", target.value);
};
</script>
