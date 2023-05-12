import { Module } from "vuex";
import { State } from "../index";
import Test from "../../types/Test";
import { testsApi } from "../../servers/tests-api";

export interface TestsState {
  tests: Test[];
}

export const testsModule: Module<TestsState, State> = {
  actions: {},
  state: () => ({ tests: [] }),
  getters: {},
  mutations: {
    addTest: (state, obj) => {
      console.log(obj);
      state.tests.push(obj);
    },
  },
};
