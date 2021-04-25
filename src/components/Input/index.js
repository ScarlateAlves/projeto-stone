import React from "react";
import TextField from "@material-ui/core/TextField";
import "./styles.css";
function Input({ title, placeholder, onChange, value }) {
  return (
    <div className="containerInput">
      <label>{title}</label>
      <TextField
        label={placeholder}
        variant="outlined"
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

export default Input;
