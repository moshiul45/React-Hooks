import React, { useReducer } from "react";
import { Button } from "reactstrap";

const reducerFunction = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1, showText: state.showText };
    case "toggleShowText":
      return { count: state.count, showText: !state.showText };
    default:
      return state;
  }
};

const ReducerSample = () => {
  const [state, dispatch] = useReducer(reducerFunction, {
    count: 0,
    showText: true,
  });

  return (
    <div>
      <div className="font-50 mb-15">{state.count}</div>
      <Button
        className=" mb-15"
        color="success"
        onClick={() => {
          dispatch({ type: "INCREMENT" });
          dispatch({ type: "toggleShowText" });
        }}
      >
        Click Here
      </Button>
      <div>
        {state.showText && (
          <p className="font-50 font-color-red">This is a text</p>
        )}
      </div>
    </div>
  );
};

export default ReducerSample;
