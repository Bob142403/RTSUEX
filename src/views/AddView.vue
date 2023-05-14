<template>
  <div class="relative w-full mt-3 ml-1">
    <input
      type="text"
      id="floating_outlined"
      v-model="question"
      class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      placeholder=" "
    />
    <label
      for="floating_outlined"
      class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
      >Вопрос</label
    >
  </div>
  <div class="flex items-center mt-3 ml-1">
    <input
      id="default-radio-1"
      type="radio"
      value="0"
      v-model="correctAnswer"
      name="default-radio"
      class="w-4 h-4 mr-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
    />
    <div class="relative w-full">
      <input
        type="text"
        id="floating_outlined1"
        v-model="firstAnswer"
        class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=" "
      />
      <label
        for="floating_outlined1"
        class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
        >Первый Вариант Ответа</label
      >
    </div>
  </div>
  <div class="flex items-center mt-3 ml-1">
    <input
      id="default-radio-2"
      type="radio"
      value="1"
      v-model="correctAnswer"
      name="default-radio"
      class="w-4 h-4 mr-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
    />
    <div class="relative w-full">
      <input
        type="text"
        id="floating_outlined2"
        v-model="secondAnswer"
        class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=" "
      />
      <label
        for="floating_outlined2"
        class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
        >Второй Вариант Ответа</label
      >
    </div>
  </div>
  <div class="flex items-center mt-3 ml-1">
    <input
      id="default-radio-3"
      type="radio"
      value="2"
      v-model="correctAnswer"
      name="default-radio"
      class="w-4 h-4 mr-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
    />
    <div class="relative w-full">
      <input
        type="text"
        id="floating_outlined3"
        v-model="thirdAnswer"
        class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=" "
      />
      <label
        for="floating_outlined3"
        class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
        >Третий Вариант Ответа</label
      >
    </div>
  </div>
  <div class="flex items-center mt-3 ml-1">
    <input
      id="default-radio-4"
      type="radio"
      value="3"
      v-model="correctAnswer"
      name="default-radio"
      class="w-4 h-4 mr-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
    />
    <div class="relative w-full">
      <input
        type="text"
        id="floating_outlined4"
        v-model="fourAnswer"
        class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=" "
      />
      <label
        for="floating_outlined4"
        class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
        >Четвёртый Вариант Ответа</label
      >
    </div>
  </div>
  <div class="flex items-center mt-3 ml-1">
    <input
      id="default-radio-5"
      type="radio"
      value="4"
      name="default-radio"
      v-model="correctAnswer"
      class="w-4 h-4 mr-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
    />
    <div class="relative w-full">
      <input
        type="text"
        id="floating_outlined5"
        v-model="fiveAnswer"
        class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=" "
      />
      <label
        for="floating_outlined5"
        class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
        >Пятый Вариант Ответа</label
      >
    </div>
  </div>
  <button
    type="button"
    @click="addTest"
    class="w-full mt-3 ml-1 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
  >
    Добавить тест
  </button>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { testsApi } from "../servers/tests-api";
import { useStore } from "../store/index";
import Test from "../types/Test";

const store = useStore();
const question = ref("");
const correctAnswer = ref("");
const firstAnswer = ref("");
const secondAnswer = ref("");
const thirdAnswer = ref("");
const fourAnswer = ref("");
const fiveAnswer = ref("");

function Clean() {
  question.value = "";
  firstAnswer.value = "";
  secondAnswer.value = "";
  thirdAnswer.value = "";
  fourAnswer.value = "";
  fiveAnswer.value = "";
  correctAnswer.value = "";
}

function addTest() {
  const obj: Test = {
    answers: [
      { text: firstAnswer.value, isTrue: correctAnswer.value === "0" },
      { text: secondAnswer.value, isTrue: correctAnswer.value === "1" },
      { text: thirdAnswer.value, isTrue: correctAnswer.value === "2" },
      { text: fourAnswer.value, isTrue: correctAnswer.value === "3" },
      { text: fiveAnswer.value, isTrue: correctAnswer.value === "4" },
    ],
    question: question.value,
  };
  testsApi.addTest(obj);
  store.commit("addTest", obj);
  Clean();
}
</script>
