<template>
  <div class="flex items-center mt-2">
    <input
      :checked="trueAnswer"
      :disabled="isEnable"
      id="green-radio"
      type="checkbox"
      value=""
      class="w-4 h-4 mr-2 text-gray-600 bg-gray-100 border-gray-300 focus:ring-violet-500 focus:ring-2"
    />
    <label
      for="green-radio"
      class="ml-2 text-base font-medium text-gray-900 dark:text-gray-300"
      >{{ answer }}</label
    >
  </div>
</template>

<script setup lang="ts">
interface RadioProps {
  answer: string;
  isEnable: boolean;
  trueAnswer: boolean;
}

defineProps<RadioProps>();
</script>
