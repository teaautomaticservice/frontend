import { is, createEffect, Effect } from 'effector';
import { useStore } from 'effector-react';

import { CustomStore } from '~/types/store';

interface AbstractStorage<State, Methods> {
  state: State;
  methods: Methods;
}

export const useCustomStore = <State, Methods>(
  customStore: CustomStore<State>
): AbstractStorage<State> => {
  const { store, methods } = customStore;

  if (!is.store(store)) {
    throw Error('argument should be a store');
  }

  const effects = methods.reduce((obj, method) => {
    const { name, handler, reducer } = method;
    const effect = createEffect<unknown, State>();
    effect.use(handler);
    store.on(effect.doneData, reducer);

    return {
      ...obj,
      [name]: effect,
    };
  }, {});

  const state = useStore(store);

  return { state, methods };
};
