import { Store, is, createEffect, createEvent, Event } from 'effector';
import { useStore } from 'effector-react';

interface CustomStore<Item> {
  store: Store<Item[] | Item>;
  methods: {
    name: string;
    handler: (...args: any) => any | any[];
    reducer: (state: Item[] | Item, payload: Item | Item[]) => Item | Item[];
  }[];
}

type Props<Item> = {
  currentStore: Item | Item[];
  clearStore: Event<void>;
  [fx: string]: any;
};

export const useCustomStore = <Item>(
  customStore: CustomStore<Item>
): Props<Item> => {
  const { store, methods } = customStore;

  if (!is.store(store)) {
    throw Error('argument should be a store');
  }

  const effects = methods.reduce((obj, method) => {
    const { name, handler, reducer } = method;
    const fx = createEffect<string, Item[] | Item>();
    fx.use(handler);
    store.on(fx.doneData, reducer);

    return {
      ...obj,
      [`${name}fx`]: fx,
    };
  }, {});

  const currentStore = useStore(store);
  const clearStore = createEvent();

  store.on(clearStore, (state) => {
    if (Array.isArray(state)) {
      return state.slice(state.length);
    }
    return [];
  });

  return { currentStore, clearStore, ...effects };
};
