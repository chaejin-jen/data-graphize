export const filterObjectByFlags = <T extends object>(
  flags: Partial<Record<keyof T, boolean>>,
  target: Partial<T>,
): Partial<T> => {
  const filteredEntries = Object.fromEntries(
    Object.entries(flags)
      .filter(([_, value]) => value)
      .map(([key]) => [key, target[key as keyof T] as T[keyof T]]),
  );
  return filteredEntries as Partial<T>;
};
