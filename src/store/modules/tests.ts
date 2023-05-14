import { Module } from "vuex";
import { State } from "../index";
import Test from "../../types/Test";
import { testsApi } from "../../servers/tests-api";

export interface TestsState {
  tests: Test[];
}

export const testsModule: Module<TestsState, State> = {
  actions: {
    async fetchTests(ctx) {
      await testsApi.getTests().then((res) => ctx.commit("setTests", res));
    },
  },
  state: () => ({ tests: [] }),
  getters: {
    getFilteredTests: (state) => (text: string) =>
      state.tests.filter((test) => test.question.includes(text)),
  },
  mutations: {
    addTest: (state, newTest: Test) => {
      state.tests.push(newTest);
    },
    setTests: (state, tests: Test[]) => {
      state.tests = tests;
    },
  },
};
