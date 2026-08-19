import "./header.css";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="topo-esquerdo">
        <Link href="/">
          <img src="/imagens/logo.png" alt="logo" />
        </Link>
      </div>
      <nav>
        <div className="topo-direito">
          <ul className="menu">
            <li className="dropdown">
              <a href="#">
                WHAT WE DO <span className="arrow"></span>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link href="/sobre">Sobre</Link>
                </li>
                <li>
                  <Link href="/sobre/empresa">Empresa</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link href="/sobre/contato">CONTATO</Link>
            </li>
            <li>
              <Link href="/">HOME</Link>
            </li>
            <li>
              <a href="#">CAREERS</a>
            </li>
          </ul>
          <Link href="/sobre/login" className="btn">
            LOGIN
          </Link>
        </div>
      </nav>
    </header>
  );
}
