import { testsModule, TestsState } from "./modules/tests";
import { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";

export interface State {
  testsModule: TestsState;
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  modules: {
    testsModule,
  },
});

export function useStore() {
  return baseUseStore(key);
}
