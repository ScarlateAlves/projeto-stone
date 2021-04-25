import React, { useState } from "react";
import "./styles.css";
import Button from "../Button";
import Input from "../Input";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
const Cotacao = ({ envie }) => {
  const [valorProduto, setValorProduto] = useState();
  const [taxa, setTaxa] = useState();
  const [value, setValue] = useState("cartao");

  const converter = () => {
    envie({ valorProduto, taxa, value });
  };

  return (
    <div className="containerCotacao">
      <section className="containerArticle">
        <Input
          title="Dólar"
          placeholder="$"
          onChange={(e) => setValorProduto(e.target.value)}
        />
        <Input
          title="Taxa do Estado"
          placeholder="0%"
          onChange={(e) => setTaxa(e.target.value)}
        />
      </section>
      <RadioGroup
        aria-label="iof"
        name="iof"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        <FormControlLabel value="cartao" control={<Radio />} label="Cartão" />
        <FormControlLabel
          value="dinheiro"
          control={<Radio />}
          label="Dinheiro"
        />
      </RadioGroup>
      <Button title="Converter" funcao={converter} />
    </div>
  );
};

export default Cotacao;
