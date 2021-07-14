import { Store, is, createEffect, createEvent } from "effector";
import { useStore } from "effector-react";

export const useCustomStore = <State, Item>(store: Store<State>) => {
  if (!is.store(store)) {
    throw Error("argument should be a store");
  }

  const currentStore = useStore<State>(store);

  const fetchFx = createEffect<string, State>();
  const updateFx = createEffect<string, State>();
  const clearStore = createEvent();

  async function fetchApi(endpoint: string): Promise<State> {
    const response = await fetch(endpoint);
    return response.json();
  }

  fetchFx.use(fetchApi);
  updateFx.use(fetchApi);

  store
    .on(fetchFx.doneData, (_, payload: Item[] | Item) => {
      return [...payload];
    })
    .on(updateFx.doneData, (state, payload: Item[] | Item) => {
      return [state, ...payload];
    })
    .reset(clearStore);

  return {currentStore, fetchFx, updateFx, clearStore};
}
