"use client"

import { useState } from "react";

export default function Contador() {
  
    const [ contador, setContador] = useState(0);
  
    function addUmContador() {
        setContador(contador + 1);
    }

    function exclUmContador() {
        setContador(contador - 1);
    }

    const limiteMax = 100;
    const limiteMin = -5;

    if (contador <= limiteMin) {
        alert("Limite minímo atingido");
        setContador(0);
    } else if (contador >= limiteMax) {
        alert("Limite máximo atingido")
        setContador(0);
    }

    return (
    <>
      <h1>Desenvolvendo um Contador</h1>
      <p>
        Valor: <b>{contador}</b>
      </p>
      <div>
        <button type="button" onClick={addUmContador}> + </button>
        <button type="button" onClick={exclUmContador}> - </button>
      </div>
    </>
  );
}
