import React from "react";
import Butto from "@material-ui/core/Button";

function Button({ title, funcao }) {
  return (
    <div>
      <Butto variant="contained" color="primary" onClick={funcao}>
        {title}
      </Butto>
    </div>
  );
}

export default Button;
