export type UseCustomStore<T> = (
  custom: T
) => {
  store: T;
};
