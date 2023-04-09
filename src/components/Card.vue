<template>
  <a
    href="#"
    class="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mt-2"
  >
    <h5
      class="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white"
    >
      {{ question }}
    </h5>

    <template v-for="answer in arrAnswers" :key="answer.id">
      <radio-input
        :answer="answer.text"
        :is-enable="isDisabaled"
        :true-answer="answer.isTrue"
      ></radio-input>
    </template>

    <radio-input
      :answer="'64 году до н.э.'"
      :is-enable="true"
      :true-answer="false"
    ></radio-input>
    <radio-input
      :answer="'312 году до н.э.'"
      :is-enable="true"
      :true-answer="false"
    ></radio-input>
    <radio-input
      :answer="'140 году до н.э.'"
      :is-enable="true"
      :true-answer="false"
    ></radio-input>
    <radio-input
      :answer="'323 году до н.э.'"
      :is-enable="true"
      :true-answer="false"
    ></radio-input>
  </a>
</template>

<script setup lang="ts">
import RadioInput from "../utils/RadioInput.vue";

interface Answer {
  id: number;
  text: string;
  isTrue: boolean;
}

interface Props {
  arrAnswers: Answer[];
  question: string;
  isDisabaled: boolean;
}
const props = defineProps<Props>();
</script>
