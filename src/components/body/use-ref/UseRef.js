import React, { useState, useRef } from "react";
import { InputGroup, Button, Input } from "reactstrap";

const RefSample = () => {
  //setting initial value for inputRef is null
  const inputRef = useRef(null);
  const [name, setName] = useState("Moshiul");

  const clickFunction = () => {
    if (inputRef.current.value != "") {
      setName(inputRef.current.value);
    }
    //Setting the input value equals to null
    inputRef.current.value = "";
  };

  return (
    <div className="container">
      <div className="font-50 mb-15">{name}</div>
      <InputGroup>
        <Input innerRef={inputRef} />
        <Button onClick={clickFunction} color="success">
          Click to Change
        </Button>
      </InputGroup>
    </div>
  );
};

export default RefSample;
