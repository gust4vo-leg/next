"use client";

import { useState } from "react";
import "./ordens.css";

export default function Ordens() {
  const [ordens, setOrdens] = useState([]);

  //VAMOS AOS CAMPOS DO FORMULÁRIO
  const [cliente, setCliente] = useState("");
  const [equipamento, setEquipamento] = useState("");
  const [descricao, setDescricao] = useState("");
  const [status, setStatus] = useState("");

  //VAMOS CRIAR UMA VARIAVEL PARA EXIBIR OS ERROS DE PREENCHIMENTO
  const [erro, setErro] = useState("");

  //CONTAGEM DE CARACTERES
  const limiteMaxCaracter = 100;
  const limiteMinCaracter = 15;
  function cadastrarOrdem(event) {
    event.preventDefault(); //ISSO PREVINE RECARREGAR A PAG

    //VALIDAR AS ENTRADAS
    if (
      cliente.trim() == "" ||
      equipamento.trim() == "" ||
      descricao.trim() == ""
    ) {
      setErro("Preencha todos os campos!");
      return; //ISSO FAZ COM QUE A FUNÇÃO PARE
    }

    // UNIÃO DE CAMPOS
    const novaOrdem = {
      id: Date.now(),
      cliente: cliente.trim(),
      equipamento: equipamento.trim(),
      descricao: descricao.trim(),
      status: status,
    };
    //ADD NA LISTA DE ORDENS
    setOrdens([...ordens, novaOrdem]);

    //LIMPAR CAMPOS
    setCliente("");
    setEquipamento("");
    setDescricao("");
    setErro("");

    const contarLetras = descricao.trim().length;

    if (contarLetras < limiteMinCaracter) {
      setErro(
        `A descrição deve ter no minímo ${limiteMinCaracter} de caracter`,
      );
      return;
    }
    if (contarLetras > limiteMaxCaracter) {
      setErro(
        `A descrição deve ter no máximo ${limiteMaxCaracter} de caracter`,
      );
    }
  }

  return (
    <main>
      <h1>Ordens de Serviço</h1>

      <form onSubmit={cadastrarOrdem}>
        <div>
          <label htmlFor="cliente">Cliente: </label>
          <input
            type="text"
            name="cliente"
            id="cliente"
            value={cliente}
            placeholder="Nome do cliente"
            onChange={(event) => setCliente(event.target.value)}
          />
        </div>

        <div>
          <label htmlFor="equipamento">Equipamento: </label>
          <input
            type="text"
            name="equipamento"
            id="equipamento"
            value={equipamento}
            placeholder="Ex.: Notebook"
            onChange={(event) => setEquipamento(event.target.value)}
          />
        </div>

        <div>
          <label htmlFor="descricao">Descrição: </label>
          <textarea
            id="descricao"
            value={descricao}
            maxLength={limiteMaxCaracter}
            placeholder="Descreva o problema"
            onChange={(event) => setDescricao(event.target.value)}
          />
          <span>{descricao.length}/{limiteMaxCaracter}</span>
        </div>

        <div>
          <label htmlFor="status">Status: </label>
          <select name="options" id="option">
            <option value="aberta">Aberta</option>
            <option value="fechada">Fechada</option>
          </select>
        </div>

        {erro != "" && <p>{erro}</p>}
        <button type="submit">Cadastrar</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Cliente</th>
            <th>Equipamento</th>
            <th>Descrição</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}
