import { useState,useEffect } from "react";
function Timer() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(()=>{
        setCount((prevcount) => prevcount + 1);
    }, 1000);
  }, [count]);
  return <h1>i have counted {count} times</h1>;
}

export default Timer;