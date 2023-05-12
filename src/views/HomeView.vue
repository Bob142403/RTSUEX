<template>
  <Card
    :arr-answers="[{ id: 1, text: 'Hello', isTrue: true }]"
    :is-disabaled="true"
    :question="'Примерно в __________________ население земледельческих областей Бактрии и Согда объединилось с кочевыми племенами да-юэчжи и окончательно низвергло греко-македонское владычество в Средней Азии. '"
  ></Card>
  <Card
    :arr-answers="[{ id: 1, text: 'Hello', isTrue: true }]"
    :is-disabaled="true"
    :question="'Примерно в __________________ население земледельческих областей Бактрии и Согда объединилось с кочевыми племенами да-юэчжи и окончательно низвергло греко-македонское владычество в Средней Азии. '"
  ></Card>
</template>

<script setup lang="ts">
import { computed } from "vue";
import Card from "../components/Card.vue";
import { useStore } from "../store";

const store = useStore();

console.log(store);

const tests = computed(() => store.state.testsModule.tests);
</script>
