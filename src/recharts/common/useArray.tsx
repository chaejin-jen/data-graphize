import { useState } from 'react';

import { ArraySetter } from './types';

function useArray<T extends object>(initialArray: T[]): [T[], ArraySetter<T>] {
  const [array, setArray] = useState<T[]>(initialArray);

  const getArray = (): T[] => array;

  const push = (element: T) => {
    setArray((prevArray) => [...prevArray, element]);
  };

  const pop = () => {
    if (array.length === 0) return undefined;
    const poppedElement = array[array.length - 1];
    setArray((prevArray) => prevArray.slice(0, -1));
    return poppedElement;
  };

  const shift = () => {
    if (array.length === 0) return undefined;
    const shiftedElement = array[0];
    setArray((prevArray) => prevArray.slice(1));
    return shiftedElement;
  };

  const unshift = (element: T) => {
    setArray((prevArray) => [element, ...prevArray]);
  };

  const clear = () => {
    setArray([]);
  };

  const getIndex = (index: number) => {
    if (index < 0 || index >= array.length) return;
    return array[index];
  };

  const updateElementByIndex = (index: number, element: T) => {
    if (index < 0 || index >= array.length) return;
    setArray((prevArray) => {
      const newArray = [...prevArray];
      newArray[index] = element;
      return newArray;
    });
  };

  const updateItemByIndex = (index: number, item: object) => {
    if (index < 0 || index >= array.length) return;
    setArray((prevArray) => {
      const newArray = [...prevArray];
      newArray[index] = { ...newArray[index], ...item };
      return newArray;
    });
  };

  const updateIndex = (index: number, element: T) => {
    if (index < 0 || index >= array.length) return;
    setArray((prevArray) => {
      const newArray = [...prevArray];
      newArray[index] = element;
      return newArray;
    });
  };

  const updateIndexKey = (
    index: number,
    key: keyof T,
    newValue: T[keyof T],
  ) => {
    if (index < 0 || index >= array.length) return;
    setArray((prevArray) => {
      const newArray = [...prevArray];
      newArray[index] = { ...newArray[index], [key]: newValue };
      return newArray;
    });
  };

  const removeIndex = (index: number) => {
    if (index < 0 || index >= array.length) return;
    setArray((prevArray) => {
      const newArray = [...prevArray];
      newArray.splice(index, 1);
      return newArray;
    });
  };

  const insert = (index: number, element: T) => {
    if (index < 0 || index > array.length) return;
    setArray((prevArray) => {
      const newArray = [...prevArray];
      newArray.splice(index, 0, element);
      return newArray;
    });
  };

  return [
    array,
    {
      getArray,
      push,
      pop,
      shift,
      unshift,
      clear,
      getIndex,
      updateIndex,
      updateIndexKey,
      removeIndex,
      insert,
    },
  ];
}

export default useArray;
