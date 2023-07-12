import React, { useLayoutEffect, useEffect, useRef } from "react";
import { Input } from "reactstrap";

const LayoutEffectSample = () => {
  const inputRef = useRef(null);

  useLayoutEffect(() => {
    console.log("Layout Effect Loaded");
    inputRef.current.value = "Layout Effect Loaded";
  }, []);

  useEffect(() => {
    console.log("Use Effect Loaded");
    inputRef.current.value = "Use Effect Loaded";
  }, []);

  return (
    <div className="container">
      <Input className="mb-15" innerRef={inputRef} />
      <div>
        <p>
          <b>UseEffect()</b> is asynchronous by nature: it will not delay
          painting the DOM to the browser, but on the other hand, the{" "}
          <b>useLayoutEffect()</b> hook is synchronous, and it will delay
          painting the DOM to the browser. It runs its code before painting to
          the browser.
        </p>
        <p>
          In short, <b>useLayoutEffect</b> triggers first before then screen
          loading and <b>UseEffect</b> triggers after the screen loading
          completely
        </p>
        <p>
          <b>
            Reload the window and you will get to see that the input field is
            updating after the screen load
          </b>
        </p>
      </div>
    </div>
  );
};

export default LayoutEffectSample;
