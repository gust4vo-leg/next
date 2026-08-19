"use client";

import FigureError from "@/components/figureError";

export default function Error() {
  return (
    <div className="container-notfound">
      <div className="txt-error">
        <h1>Ops! Algo deu errado</h1>

        <p>Ocorreu um erro inesperado ao carregar esta página.</p>
        <FigureError />
        <button className="error-button">Tentar Novamente</button>
      </div>
    </div>
  );
}