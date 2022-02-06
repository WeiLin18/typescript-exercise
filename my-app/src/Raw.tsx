import { useEffect, useState } from "react";

const EffectExample: React.VFC = () => {
  const [count, setCount] = useState(0);
  const [tick, setTick] = useState(10);
  useEffect(() => {
    setTimeout(() => {
      console.log("A", { count }); //A
    }, 0);
  });
  useEffect(() => {
    console.log("B", { count }); // B
  }, [tick]);
  useEffect(() => {
    setTimeout(() => {
      console.log("C", { count }); //C
      setTick((tick) => tick + 1);
    }, 20);
  }, []);
  useEffect(() => {
    console.log("D", { tick }); // D
  }, [count, tick]);
  useEffect(() => {
    console.log("E", { count }); // E
  }, [count]);
  return (
    <button
      onClick={() => {
        setCount((count) => count + 1);
      }}
    >
      Component
    </button>
  );
};

export default EffectExample;
