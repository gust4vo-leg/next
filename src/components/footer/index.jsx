import "./footer.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <ul className="menuFooter">
        <li className="top servicos">
          <div className="title-footer">
            <h3>Serviços</h3>
          </div>
          <ul className="options-footer servicos">
            <li>Facebook & Instagram Ads</li>
            <li>Social Media Marketing</li>
            <li>Digital Advertising</li>
            <li>Performance Marketing</li>
            <li>Lead Generation</li>
          </ul>
        </li>

        <li className="top redes">
          <div className="title-footer">
            <h3>Redes Sociais</h3>
          </div>
          <ul className="options-footer redes">
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Linkedin</li>
          </ul>
        </li>

        <li className="top contato">
          <div className="title-footer">
            <h3>Contato</h3>
          </div>
          <ul className="options-footer contato">
            <li>E-mail</li>
            <li>Telefone</li>
            <li>
              <Link href="#" className="btn-footer">
                WORK WITH US
              </Link>
            </li>
          </ul>
        </li>
      </ul>

      <div className="legend">
        <p>© 2026 Tier Up Privacy Policy Terms Instagram </p>
      </div>
    </footer>
  );
}
