function iof(value) {
  if (value === "cartao") {
    return parseFloat(6.38);
  }
  if (value === "dinheiro") {
    return parseFloat(1.1);
  } else {
    return "erro";
  }
}

function realComImposto(value, valorProduto, taxa, dolar, iof) {
  let imposto = (valorProduto * taxa) / 100;
  iof = parseFloat(iof);
  valorProduto = parseFloat(valorProduto);
  dolar = parseFloat(dolar);

  if (value === "cartao") {
    let valor = (valorProduto + imposto) * dolar;
    let iofC = (valor * iof) / 100;
    return (valor + iofC).toFixed(2);
  }
  if (value === "dinheiro") {
    return ((valorProduto + imposto) * (dolar + (dolar * iof) / 100)).toFixed(
      2
    );
  } else {
    return "erro";
  }
}

function realSemImposto(valorProduto, taxa, dolar) {
  let imposto = (valorProduto * taxa) / 100;
  valorProduto = parseFloat(valorProduto);
  dolar = parseFloat(dolar);
  return ((valorProduto + imposto) * dolar).toFixed(2);
}

function dolarComImposto(valorProduto, taxa) {
  let imposto = (valorProduto * taxa) / 100;
  valorProduto = parseFloat(valorProduto);
  return valorProduto + imposto;
}

export { iof, realComImposto, realSemImposto, dolarComImposto };
