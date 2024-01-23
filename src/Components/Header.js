import { useState, useEffect } from "react";

export default function Header({ display, delay, repeat }) {
  const [text, setText] = useState("");
  const [cursor, setCursor] = useState(" ");
  //const display = "Welcome to my portfolio!";
  let intervalId;

  const print = () => {
    let index = text.length;
    if (index >= display.length) {
      if (repeat === true) {
        setText("");
      }
    } else {
      const updatedtext = text.concat(display.charAt(index));
      setText(updatedtext);
    }

    if (cursor === " ") {
      setCursor("_");
    } else {
      setCursor(" ");
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    intervalId = setInterval(print, delay);

    return () => {
      clearInterval(intervalId);
    };
  }, [text]);

  return (
    <div>
      <h1>
        {text}
        {cursor}
      </h1>
    </div>
  );
}
