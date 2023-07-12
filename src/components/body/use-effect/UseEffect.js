import { useState, useEffect } from "react";

const EffectSmaple = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
      console.log("Hello");
      setCount(count + 1);
    }, 1000);
  }, []);

  return <h1>I've rendered {count} times!</h1>;
};

export default EffectSmaple;
