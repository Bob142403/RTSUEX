<template>
  <Filter v-model="text" />
  <template v-for="test in tests" :key="test.id">
    <Card
      :arr-answers="test.answers"
      :is-disabaled="true"
      :question="test.question"
      :correct-answer="test.currentAnswer"
    />
  </template>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useStore } from "../store";

import Card from "../components/Card.vue";
import Filter from "../components/Filter.vue";

const store = useStore();
const text = ref("");

store.dispatch("fetchTests");

const tests = computed(() => store.getters.getFilteredTests(text.value));
</script>
