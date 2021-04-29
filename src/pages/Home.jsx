import React, { useState, useEffect } from "react";
import Cotacao from "../components/Cotacao";
import Header from "../components/Header"
import Results from "../components/Results";
import { busca } from "../api/api";
import "./styles.css";
import { iof, realComImposto, realSemImposto,dolarComImposto } from "../models/conversao";
const Home = () => {
  const [etapa, setEtapa] = useState(0);
  const [coletadosDados, setDados] =useState({})
  const [valores, setValor] = useState([]);
  const event = [<Cotacao envie={colecaoDados} />,<Results 
    value={iof(coletadosDados.value)} 
    compra={coletadosDados.value} 
    dolar={coletadosDados.a} 
    valorRealImposto={coletadosDados.d}
    valorRealSemImposto={coletadosDados.e}
    valorDolarComImposto={coletadosDados.f}
    valorDolarSemImposto={coletadosDados.valorProduto}
      /> ]
  
  useEffect(() => {
    busca(setValor);
  }, []);

  function colecaoDados(dados) {
     const a=  valores.map((item) => {
     return  item.high;;
    });
    const d =realComImposto(dados.value, dados.valorProduto, dados.taxa, a[0], iof(dados.value))
    const e = realSemImposto(dados.valorProduto, dados.taxa, a[0])
    const f = dolarComImposto(dados.valorProduto, dados.taxa,)
    console.log(d)
    setDados({f, e, d, a, ...dados})
    proximo();
  }
 
  function proximo() {
    setEtapa(etapa+1)
  }

  return <div>

   {valores.map((item) => (
          <article key={item.id}>
            <Header date={item.create_date}></Header>
          </article>
        ))}

  {event[etapa]}
  
  </div>;
};
export default Home;
