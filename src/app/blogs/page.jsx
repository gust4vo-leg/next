import CardBlog from "@/components/blogs";
import "./blog.css";

export default function Blog() {
  const listaBlog = [
    {
      id: 1,
      titulo: "IA avança na medicina diagnóstica",
      categoria: "Tecnologia",
      imagem: "medicina.jpg",
      data: "2026-08-25",
      resumo:
        "Uma nova geração de algoritmos baseados em aprendizado profundo conseguiu superar a precisão de especialistas na detecção precoce de patologias complexas e raras. Treinada com milhões de exames globais ao longo de cinco anos, a inteligência artificial analisa tomografias, ressonâncias magnéticas e exames de sangue em tempo recorde. O sistema é capaz de cruzar dados genéticos do paciente com histórico médico familiar para apontar vulnerabilidades ocultas, identificando anomalias celulares imperceptíveis ao olho humano e sugerindo linhas de tratamento personalizadas em poucos segundos. Hospitais que participaram dos testes relataram uma redução drástica no tempo de espera por diagnósticos críticos, o que promete salvar milhares de vidas ao permitir intervenções médicas imediatas e muito mais assertivas.",
    },
    {
      id: 2,
      titulo: "Fusão nuclear atinge recorde de energia",
      categoria: "Ciência",
      imagem: "nuclear.jpg",
      data: "2026-08-24",
      resumo:
        "Cientistas de um consórcio internacional anunciaram um marco histórico para o futuro da matriz energética global ao sustentar uma reação de fusão nuclear estável por mais de cinco minutos, gerando um saldo líquido positivo de energia limpa nunca antes visto. O experimento, realizado em um reator do tipo Tokamak de última geração, utilizou campos magnéticos ultra-potentes para confinar o plasma a temperaturas superiores às do núcleo do Sol. Essa conquista aproxima a humanidade de uma fonte de eletricidade comercial virtualmente infinita, segura e totalmente livre de emissões de gases do efeito estufa. Ao contrário da fissão tradicional, o processo não gera resíduos radioativos de longa duração e elimina qualquer risco de acidentes catastróficos, posicionando a fusão como a solução definitiva para a crise climática.",
    },
    {
      id: 3,
      titulo: "Bolsas globais disparam com novos acordos",
      categoria: "Economia",
      imagem: "bolsas.jpg",
      data: "2026-08-22",
      resumo:
        "Os principais índices financeiros da Ásia, Europa e Américas fecharam em forte alta após a assinatura inesperada de um amplo tratado de livre comércio entre os maiores blocos econômicos do planeta. O acordo foca na eliminação progressiva de tarifas alfandegárias para o setor de alta tecnologia, semicondutores e bens de consumo sustentáveis, injetando uma onda de otimismo nos investidores globais que preveem forte expansão econômica já para o próximo trimestre. Analistas apontam que a desregulamentação deve baratear cadeias de suprimentos inteiras, reduzindo a inflação estrutural em países em desenvolvimento. Além disso, o tratado estabelece salvaguardas cambiais rígidas que devem estabilizar moedas voláteis, atraindo aportes massivos de capital estrangeiro para mercados que antes eram considerados de alto risco.",
    },
    {
      id: 4,
      titulo: "Descoberta nova espécie na Amazônia",
      categoria: "Meio Ambiente",
      imagem: "especie.jpg",
      data: "2026-08-20",
      resumo:
        "Durante uma expedição científica de mapeamento biológico em uma área remota e densamente preservada da floresta amazônica, pesquisadores de um instituto nacional catalogaram uma nova variedade de planta com características moleculares surpreendentes. Testes preliminares de laboratório revelaram que os compostos orgânicos extraídos de suas folhas possuem propriedades analgésicas e anti-inflamatórias altamente eficazes, com potencial para substituir princípios ativos sintéticos atuais sem causar efeitos colaterais significativos. A descoberta reforça a urgência na conservação da biodiversidade da região e abre caminho para novas parcerias entre laboratórios farmacêuticos e comunidades tradicionais para o manejo sustentável da flora local, garantindo que o conhecimento ancestral seja valorizado e financeiramente recompensado.",
    },
    {
      id: 5,
      titulo: "Final do campeonato quebra recorde de público",
      categoria: "Esportes",
      imagem: "campeonato.jpg",
      data: "2026-08-19",
      resumo:
        "A grande decisão do torneio nacional entrou permanentemente para a história do esporte com um público pagante que superou a impressionante marca de 100 mil espectadores na arena multiuso mais moderna do país. Além de um espetáculo tecnológico na cerimônia de abertura — que contou com projeções holográficas 3D e shows de drones coordenados por IA —, a partida em si entregou um nível técnico espetacular. O confronto foi definido nos acréscimos do segundo tempo da prorrogação com um gol antológico de bicicleta de fora da área, consagrando o clube azarão como o novo campeão da temporada. A vitória inesperada quebrou um jejum de títulos de três décadas e gerou comemorações massivas que tomaram as ruas das principais capitais do país.",
    },
    {
      id: 6,
      titulo: "Telescópio espacial capta galáxia inédita",
      categoria: "Ciência",
      imagem: "galaxia.jpg",
      data: "2026-08-17",
      resumo:
        "Utilizando sensores infravermelhos de última geração e lentes criogênicas, um telescópio orbital registrou imagens inéditas em altíssima resolução de uma galáxia espiral localizada a bilhões de anos-luz da Terra. Os dados coletados revelam berçários de estrelas massivos formados logo nos primeiros primórdios do universo, logo após o Big Bang. Astrônomos afirmam que a composição química e a densidade de poeira cósmica observadas nessa estrutura desafiam as teorias astrofísicas vigentes sobre a velocidade de evolução cósmica. O mapeamento térmico do núcleo dessa galáxia sugere a presença de um buraco negro supermassivo em estágio inicial de alimentação rápida, fornecendo pistas valiosas sobre como a matéria se organizou para dar origem aos primeiros sistemas solares.",
    },
    {
      id: 7,
      titulo: "Carros autônomos chegam ao transporte público",
      categoria: "Tecnologia",
      imagem: "carros.jpg",
      data: "2026-08-15",
      resumo:
        "Uma metrópole de vanguarda iniciou oficialmente a operação experimental da primeira frota de ônibus urbanos e vans 100% elétricos e totalmente desprovidos de motoristas humanos. Equipados com sensores LiDAR de alta definição, câmeras térmicas periféricas e sistemas integrados de navegação por satélite com latência zero, os veículos demonstraram segurança cirúrgica durante os testes iniciais. O sistema central de inteligência artificial é capaz de prever os movimentos de pedestres, ciclistas e outros carros no trânsito caótico das vias principais, recalculando rotas em milissegundos para evitar congestionamentos. A prefeitura estima que a automação reduzirá os custos operacionais do transporte público em 40%, permitindo repassar a economia na forma de tarifas reduzidas para os cidadãos.",
    },
    {
      id: 8,
      titulo: "Festival de cinema premia produção independente",
      categoria: "Cultura",
      imagem: "festival.jpg",
      data: "2026-08-12",
      resumo:
        "O júri técnico do prestigiado festival internacional de cinema chocou a indústria cinematográfica ao conceder o prêmio máximo de melhor filme a um longa-metragem gravado inteiramente com smartphones comerciais de alta definição. Produzido com um orçamento baixíssimo por um coletivo de jovens cineastas independentes, a obra conquistou a crítica especializada pela narrativa crua, profundidade psicológica dos personagens e uso inovador de iluminação natural e técnicas experimentais de edição de áudio. O sucesso do filme reacendeu um debate global sobre a democratização do acesso às ferramentas de criação audiovisual, provando que a criatividade humana e um roteiro bem estruturado têm muito mais peso artístico do que produções milionárias cheias de efeitos digitais vazios.",
    },
    {
      id: 9,
      titulo: "Nova York adota calçadas ecológicas",
      categoria: "Urbanismo",
      imagem: "calcadas.jpg",
      data: "2026-08-10",
      resumo:
        "Como parte de um ousado e abrangente plano de reformulação da infraestrutura urbana contra as mudanças climáticas, a administração municipal começou a substituir o asfalto tradicional de várias avenidas por blocos modulares sustentáveis. Esse novo composto poroso é capaz de drenar instantaneamente milhares de litros de água da chuva diretamente para o lençol freático, mitigando as enchentes repentinas causadas por tempestades extremas. Além do benefício hídrico, as calçadas foram equipadas com placas piezoelétricas subterrâneas que captam a energia mecânica gerada pelos passos dos milhares de pedestres diários, convertendo o impacto físico em eletricidade limpa utilizada para alimentar os postes de iluminação pública e sensores de tráfego locais.",
    },
    {
      id: 10,
      titulo: "Startup lança carne cultivada em laboratório",
      categoria: "Alimentação",
      imagem: "startup.jpg",
      data: "2026-08-08",
      resumo:
        "Uma startup pioneira de biotecnologia alimentar recebeu aprovação regulatória definitiva para iniciar a comercialização em larga escala de seus produtos cárneos criados a partir do cultivo in vitro de células animais em biorreatores avançados. O método inovador replica com precisão milimétrica o tecido muscular, entregando o mesmo sabor, textura e propriedades nutricionais da carne bovina convencional, mas eliminando por completo o abate de animais. Relatórios de impacto ambiental atestam que o processo de cultivo consome até 90% menos água potável e utiliza apenas uma fração das terras necessárias para a pecuária tradicional, além de neutralizar as emissões de metano, oferecendo uma alternativa ética e ecológica para a crescente demanda proteica global.",
    },
  ];

  return (
    <>
      <div className="titleBlog">
        <h1>Página de notícias!</h1>
      </div>

      <div className="cardContainer">
        {listaBlog.map((blog, idx) => {
          return (
            <CardBlog
              //key={produto.id}
              key={idx}
              titulo={blog.titulo}
              categoria={blog.categoria}
              imagem={blog.imagem}
              resumo={blog.resumo}
              data={blog.data}
            />
          );
        })}
      </div>
    </>
  );
}
