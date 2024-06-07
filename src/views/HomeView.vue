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

const qwe = "";

const text = ref("");
// (async () => {
//   await fetch("../../ВССТ.txt")
//     .then((res) => res.text())
//     .then((res) => {
//       const qweqeqw = [];
//       const qwe = (res as string).split("\n");
//       for (let i = 0; i < qwe.length; i += 7) {
//         const ans = {};
//         if (qwe[i] === "") break;
//         ans.answers = [
//           {
//             text: qwe[i + 1].slice(2),
//           },
//           {
//             text: qwe[i + 2].slice(2),
//           },
//           {
//             text: qwe[i + 3].slice(2),
//           },
//           {
//             text: qwe[i + 4].slice(2),
//           },
//           {
//             text: qwe[i + 5].slice(2),
//           },
//         ];
//         ans.question = qwe[i];
//         let r = 0;

//         if (qwe[i + 1][0] === "+") r = 0;
//         if (qwe[i + 2][0] === "+") r = 1;
//         if (qwe[i + 3][0] === "+") r = 2;
//         if (qwe[i + 4][0] === "+") r = 3;
//         if (qwe[i + 5][0] === "+") r = 4;
//         ans.currentAnswer = r;
//         ans.id = i / 7 + 1;
//         qweqeqw.push(ans);
//       }
//       console.log("ans: ", qweqeqw);
//     });
// })();

const tests = computed(() =>
  Tests.filter((test) =>
    test.question.toLowerCase().includes(text.value.trim().toLowerCase())
  )
);
</script>
