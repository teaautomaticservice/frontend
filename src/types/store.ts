import { Store } from 'effector';

export type CustomStoreMethod<State> = {
  name: string;
  handler: <Params, Done>(params: Params) => Promise<Done> | Done;
  reducer: <Payload>(state: State, payload: Payload) => State | void;
};

export type CustomStore<
  State,
  Methods extends Record<string, CustomStoreMethod<State>>
> = {
  store: Store<State>;
  methods: Methods;
};
