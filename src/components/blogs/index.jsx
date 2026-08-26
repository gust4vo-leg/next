import "./cardBlog.css";

export default function CardBlog({ titulo, categoria, imagem, resumo, data }) {
  return (
    <div className="card-wrapper">
      <h2>{titulo}</h2>
      <img src={"/img-blogs/" + imagem} alt="" />
      <div className="details">
        <span>{categoria}</span>
        <span>{data}</span>
      </div>
      <p>{resumo}</p>
    </div>
  );
}
