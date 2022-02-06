import { useState } from "react";

const useArray = <T,>(initialArray: T[]) => {
  const [value, setValue] = useState(initialArray);
  return {
    value,
    setValue,
    add: (item: T) => {
      setValue([...value, item]);
    },
    clear: () => {
      setValue([]);
    },
    removeIndex: (index: number) => {
      setValue([...value].splice(index, 1));
    },
  };
};

export default useArray;
