import { useState } from "react";
import classes from "./Filters.module.css";

import TextField from "./UI/TextField";
import Button from "./UI/Button";

const Filters = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const nameValueHandler = (text) => {
    setName(text);
  };

  const emailValueHandler = (text) => {
    setEmail(text);
  };

  const onSubmitFilter = () => {
    props.filterValue({
      name,
      email,
    });
  };

  return (
    <div className={classes.filter}>
      <TextField label="Name" textValue={nameValueHandler} inputType="text" />
      <TextField
        label="Email"
        textValue={emailValueHandler}
        inputType="email"
      />
      <Button onClick={onSubmitFilter}>Search</Button>
    </div>
  );
};

export default Filters;
