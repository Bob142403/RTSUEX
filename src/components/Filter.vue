<template>
  <label
    for="search"
    class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
    >Search</label
  >
  <div class="relative mx-2 mt-2">
    <div
      class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
    >
      <svg
        aria-hidden="true"
        class="w-5 h-5 text-gray-500 dark:text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        ></path>
      </svg>
    </div>
    <input
      type="search"
      id="search"
      class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-black-500 focus:border-black-500 dark:bg-gray-700 dark:border-gray-600"
      placeholder="Search"
      :value="modelValue"
      @input="updateValue"
      required
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps(["modelValue"]);
const emits = defineEmits(["update:modelValue"]);

const updateValue = (e: Event) => {
  emits("update:modelValue", (e.target as HTMLInputElement).value);
};
</script>
