<template>
  <a class="block p-6 mt-3">
    <h5
      class="mb-3 text-base lg:text-lg font-bold tracking-tight text-gray-900 dark:text-white"
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
import RadioInput from "./RadioInput.vue";

interface Props {
  arrAnswers: Answer[];
  question: string;
  isDisabaled: boolean;
  correctAnswer: number;
}
const props = defineProps<Props>();
</script>
