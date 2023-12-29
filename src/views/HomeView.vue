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
import { tests as Tests } from "../tests";

import Card from "../components/Card.vue";
import Filter from "../components/Filter.vue";

const text = ref("");

const tests = computed(() =>
  Tests.filter((test) =>
    test.question.toLowerCase().includes(text.value.trim().toLowerCase())
  )
);
</script>
