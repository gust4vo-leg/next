"use client";

import { useState } from "react";
import "./ordens.css";

export default function Ordens() {
  const [ordens, setOrdens] = useState([]);

  //VAMOS AOS CAMPOS DO FORMULÁRIO
  const [cliente, setCliente] = useState("");
  const [equipamento, setEquipamento] = useState("");
  const [descricao, setDescricao] = useState("");
  const [status, setStatus] = useState("aberta");

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
    setStatus("aberta");
  }

  function fecharOrdem(id) {
    const ordensAtualizadas = ordens.map((ordem) => {
      if (ordem.id === id) {
        return { ...ordem, status: "fechada" };
      }

      return ordem;
    });

    setOrdens(ordensAtualizadas);
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
          <span>
            {descricao.length}/{limiteMaxCaracter}
          </span>
        </div>

        {erro != "" && <p>{erro}</p>}
        <button type="submit" className="cadastrar">
          Cadastrar
        </button>
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
          {ordens.map((ordem) => (
            <tr key={ordem.key}>
              <td>{ordem.cliente}</td>
              <td>{ordem.equipamento}</td>
              <td>{ordem.descricao}</td>
              <td>{ordem.status}</td>
              <td>
                {ordem.status === "aberta" && (
                  <button onClick={() => fecharOrdem(ordem.id)}>
                    Fechar Ordem
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
