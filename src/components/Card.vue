<template>
  <a
    class="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mt-3"
  >
    <h5
      class="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white"
    >
      {{ question }}
    </h5>

    <template v-for="(answer, index) in arrAnswers" :key="answer.id">
      <radio-input
        :answer="answer.text"
        :is-enable="isDisabaled"
        :true-answer="correctAnswer === index"
      ></radio-input>
    </template>
  </a>
</template>

<script setup lang="ts">
import Answer from "../types/Answer";
import RadioInput from "../utils/RadioInput.vue";

interface Props {
  arrAnswers: Answer[];
  question: string;
  isDisabaled: boolean;
  correctAnswer: number;
}
const props = defineProps<Props>();

console.log(props.correctAnswer);
</script>
