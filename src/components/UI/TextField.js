import { useState } from "react";
import classes from "./TextField.module.css";
// src: https://github.com/academind/react-complete-guide-code/blob/08-practice-project/code/08-finished/src/components/Users/AddUser.js

const TextField = (props) => {
  const [text, setText] = useState("");

  const textChangeHandler = (event) => {
    props.textValue(event.target.value);
    setText(event.target.value);
  };

  return (
    <div className={classes["textfield-container"]}>
      <input
        type={props.inputType}
        value={text}
        onChange={textChangeHandler}
        placeholder={props.label}
      ></input>
    </div>
  );
};

export default TextField;
