import React from "react";
import Logo from "../Logo";
import "./styles.css";
const index = ({ date }) => {
  return (
    <div className="header">
      <Logo></Logo>
      <div>
        <h2>{date}</h2>
        <p>Dados de câmbio disponibilizados pela Morningstar.</p>
      </div>
    </div>
  );
};

export default index;
