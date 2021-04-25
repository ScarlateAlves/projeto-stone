import React, { useState, useEffect } from "react";
import "./styles.css";
import { busca } from "../../api/api";
import Button from "../Button";
import Input from "../Input";
import RadioButton from "../RadioButton";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
const Cotacao = ({ envie }) => {
  const [valores, setValor] = useState([]);
  // const [moedaB, setMoedaB] = useState(0);
  const [dolar, setdolar] = useState();
  const [taxa, setTaxa] = useState();
  const [value, setValue] = useState("cartao");
  useEffect(() => {
    busca(setValor);
  }, []);

  const converter = () => {
    envie();
    // valores.map((item) => {
    //   let cotacao = item.high;
    //   let dola = parseFloat(dolar);
    //   let taxas = parseFloat(taxa);
    //   let porcent = (dola * taxas) / 100;
    //   let soma = (porcent + dola) * cotacao;
    //   setMoedaB(soma);
    // });
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className="containerCotacao">
      <section className="containerArticle">
        <Input
          title="Dólar"
          placeholder="$"
          onChange={(e) => setdolar(e.target.value)}
          type="number"
          value={dolar}
        />
        <Input
          title="Taxa do Estado"
          placeholder="0%"
          onChange={(e) => setTaxa(e.target.value)}
          type="number"
          value={taxa}
        />
      </section>
      <RadioButton
        title="Cartao"
        // changed={(e) => setRadio(e.target.value)}
        id="1"
        value="5.5"
      />
      <RadioButton
        title="Dinheiro"
        //  changed={(e) => setRadio(e.target.value)}
        id="2"
        value="1.1"
      />
      <RadioGroup
        aria-label="gender"
        name="gender1"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value="cartao" control={<Radio />} label="Cartão" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
        <FormControlLabel
          value="disabled"
          disabled
          control={<Radio />}
          label="(Disabled option)"
        />
      </RadioGroup>

      <Button title="Converter" funcao={converter} />
      {/* <div>
         cotacao dolar 
        {valores.map((item) => (
          <article key={item.id}>
            <p>Cotação do dólar: $1,00 = R${item.high}</p>
          </article>
        ))}

         IOF *
        {radio == "5.5" ? (
          <span>Compra no Cartão e taxa de: </span>
        ) : (
          <span>Compra no Dinheiro e taxa de: </span>
        )}
        <span>{radio}%</span>

         Total em real com imposto 
        <p>Total em real R$ {moedaB}</p>
      </div> */}
    </div>
  );
};

export default Cotacao;
