import React, { useState } from "react";
import { Button } from "reactstrap";

const UseStateSample = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <div className="font-50 mb-15">{counter}</div>
      <Button
        color="success"
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Increment
      </Button>
    </div>
  );
};

export default UseStateSample;
