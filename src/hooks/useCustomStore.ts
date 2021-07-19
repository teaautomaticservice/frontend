import { Store, is, createEffect, createEvent } from 'effector';
import { useStore } from 'effector-react';

export const useCustomStore = <Item>(store: Store<Item[] | Item>) => {
  if (!is.store(store)) {
    throw Error('argument should be a store');
  }

  const currentStore = useStore(store);

  const fetchFx = createEffect<string, Item[] | Item>();
  const updateFx = createEffect<string, Item[] | Item>();
  const clearStore = createEvent();

  async function fetchApi(endpoint: string): Promise<Item[] | Item> {
    const response = await fetch(endpoint);
    return response.json();
  }

  fetchFx.use(fetchApi);
  updateFx.use(fetchApi);

  store
    .on(updateFx.doneData, (state, payload: Item[] | Item) => {
      if (Array.isArray(payload)) {
        if (Array.isArray(state)) {
          return [...state, ...payload];
        }
        return [state, ...payload];
      }
      if (Array.isArray(state)) {
        return [...state, payload];
      }
      return [state, payload];
    })
    .on(fetchFx.doneData, (_, payload: Item[] | Item) => {
      if (Array.isArray(payload)) {
        return [...payload];
      }
      return [payload];
    })
    .on(clearStore, (state) => {
      if (Array.isArray(state)) {
        return state.slice(state.length);
      }
      return [];
    });
  return { currentStore, fetchFx, updateFx, clearStore };
};
