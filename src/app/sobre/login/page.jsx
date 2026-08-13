export default function Login() {
  return (
    <>
      <main>
        <div className="container">
          <div className="hero-login">
            <div className="info-left">
              <div className="top-login">
                <img src="/imagens/update.png" />
                <h2>Bem-vindo de volta!</h2>
                <p>
                  Faça login para acessar sua conta e gerenciar suas campanhas
                </p>
              </div>
              <div className="img-meio">
                <img src="/imagens/computer.png" />
              </div>
              <div className="details-login">
                <div className="fileira-login">
                  <div className="img-details-fileira">
                    <img src="/imagens/escudo.png" />
                  </div>
                  <div className="txt-details-fileira">
                    <h3>Segurança</h3>
                    <p>Seus dados protegidos com segurança avançada</p>
                  </div>
                </div>
                <div className="fileira-login">
                  <div className="img-details-fileira">
                    <img src="/imagens/resultado.png" />
                  </div>
                  <div className="txt-details-fileira">
                    <h3>Resultados</h3>
                    <p>Acompanhe o desempenho das suas campanhas</p>
                  </div>
                </div>
                <div className="fileira-login">
                  <div className="img-details-fileira">
                    <img src="/imagens/rocket.png" />
                  </div>
                  <div className="txt-details-fileira">
                    <h3>Crescimento</h3>
                    <p>
                      Estratégias inteligentes para fazer seu negócio crescer
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-login">
              <div className="top">
                <h1>Login</h1>
                <p>Acesse sua conta para continuar</p>
              </div>

              <div className="campo">
                <label>E-mail</label>
                <input type="email" placeholder="seu@gmail.com" />
              </div>

              <div className="campo">
                <label>Senha</label>
                <input type="password" placeholder="Sua senha" />
              </div>

              <div className="login-options">
                <label className="remember-me">
                  <input type="checkbox" id="remember" name="remember" />
                  <span>Lembrar de mim</span>
                </label>
                <a href="#" className="forgot-password">
                  Esqueceu sua senha?
                </a>
              </div>

              <div className="btn-login">
                <button type="submit">Entrar</button>
              </div>

              <div className="divider">
                <span>ou</span>
              </div>

              <button type="button" className="btn-cadastrar">
                <i className="bi bi-person"></i>
                Criar nova conta
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
