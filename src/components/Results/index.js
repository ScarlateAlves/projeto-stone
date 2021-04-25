import React from "react";
import Button from "../Button";
const Results = ({
  compra,
  value,
  dolar,
  valorRealImposto,
  valorRealSemImposto,
  valorDolarComImposto,
  valorDolarSemImposto,
}) => {
  const converter = () => {
    window.location.reload();
  };

  return (
    <div>
      <Button title="Voltar" funcao={converter} />
      <h3>O resultado do calculo é</h3>

      <p>Total em real com imposto</p>
      <h1>R$ {valorRealImposto}</h1>

      <p>Total em real sem imposto </p>
      <h1>R$ {valorRealSemImposto}</h1>

      <p>Total em dolar com imposto $ </p>
      <h1>$ {valorDolarComImposto}</h1>

      <p>Total em dolar sem imposto $ </p>
      <h1>$ {valorDolarSemImposto}</h1>

      {/* iof */}
      <span>
        Compra no {compra} e taxa de: {value}%
      </span>

      {/* contacao */}
      <p>Cotação do dólar: $1,00 = R$ {dolar}</p>
    </div>
  );
};

export default Results;
