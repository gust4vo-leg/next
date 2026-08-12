export default function Sobre() {
  return (
    <>
      <main>
        <div className="container">
          <div className="sobre">
            <div className="texto">
              <div className="texto-top">
                <h2>Quem é a empresa</h2>

                <div className="txt-desc">
                  Somos uma agência de marketing digital focada em ajudar
                  empresas a crescer no ambiente online. Unimos estratégia,
                  criatividade e tecnologia para transformar a presença digital
                  de nossos clientes em resultados reais.
                </div>
              </div>
              <div className="sobre-img-empresa">
                <img src="/imagens/sobre.png" />
              </div>
            </div>

            <div className="texto fazemos">
              <div className="texto-top">
                <h2>O que fazemos</h2>

                <div className="txt-desc">
                  Criamos e gerenciamos estratégias de publicidade digital, com
                  foco em Facebook, Instagram e Google Ads. Desenvolvemos
                  campanhas, alcançamos o público certo e analisamos os
                  resultados para melhorar continuamente o desempenho.
                </div>
              </div>

              <div className="sobre-img-fazemos">
                <img src="/imagens/fazemos.png" alt="" />
              </div>
            </div>

            <div className="trabalho">
              <div className="texto-top">
                <h2>Para quem trabalhamos</h2>

                <div className="txt-desc">
                  Trabalhamos com empresas de diferentes tamanhos que desejam
                  aumentar sua visibilidade, conquistar novos clientes e
                  fortalecer sua presença digital. Adaptamos nossas estratégias
                  aos objetivos e necessidades de cada negócio.
                </div>
              </div>

              <div className="sobreImg">
                <img src="/imagens/trabalho.png"/>
              </div>
            </div>

            <div className="tetxo-top">
              <h2>Qual o diferencial</h2>

              <div className="txt-desc">
                Nosso diferencial está em unir criatividade e dados. Não criamos
                campanhas apenas para gerar visualizações: analisamos cada
                resultado, identificamos oportunidades e otimizamos nossas
                estratégias para transformar investimento em crescimento.
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
