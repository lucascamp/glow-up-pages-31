import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MessageCircle, X } from "lucide-react";
import leilaBetoMining from "@/assets/leila-beto-mining.jpg";
import betoCoffee from "@/assets/beto-coffee.jpg";

const team = [
  {
    name: "Leila Rolindo",
    photo: leilaBetoMining,
    whatsapp: "https://wa.me/55031987059881",
    bio: `Empresária, administradora e atleta, 51 anos, construiu uma trajetória sólida equilibrando alta performance nos negócios e na vida pessoal. Casada há 28 anos e mãe da Júlia, carrega na essência valores como disciplina, consistência e responsabilidade, pilares que também sustentam sua atuação profissional.

À frente do Grupo Tellar, transforma experiência em estratégia e rotina em resultado. Especialista em vida financeira, atua com foco em organização, controle e inteligência na gestão, direcionando empresas para crescimento estruturado e geração real de lucro.

Com 32 anos de experiência na gestão do ramo industrial e usinagem, atuando administrativamente, desenvolveu uma visão prática e estratégica do funcionamento real de um negócio, da operação ao resultado. Essa vivência consolidou sua capacidade de tomada de decisão, controle financeiro e construção de processos eficientes.

Acredita que a saúde financeira de um negócio não depende apenas de números, mas de comportamento. Em um cenário acelerado e dinâmico, onde decisões são tomadas no curto prazo, defende que disciplina e organização precisam ser práticas diárias, não conceitos esquecidos na operação.

Atuante na construção de métodos práticos, adaptáveis à realidade de cada pessoa na realização de seus objetivos ou empresa, respeitando as habilidades individuais, de cada colaborador e potencializando a execução coletiva. Mais do que organizar finanças, estrutura cultura, performance e visão de longo prazo.

Resultado: empresas mais conscientes, organizadas, lucrativas e pessoas comuns realizando sonhos através de educação financeira.`,
  },
  {
    name: "Beto Paiva",
    photo: betoCoffee,
    whatsapp: "https://wa.me/55031988149574",
    bio: `Casado com a Leila há 28 anos e pai da Júlia. 48 anos, empresário e atleta. Comunicador por essência, vendedor por vocação e educador por missão.

Construí minha trajetória com base em rotina, constância e unidade. Trabalho pela minha família e, nos negócios, atuo com foco em resultados sustentáveis, performance e responsabilidade.

Há mais de três décadas no front do mercado, com experiência em comércio, representação comercial, construção de marcas e formação de profissionais de vendas orientados por propósito, margem e entrega real.

Proprietário do Grupo Tellar (25 anos), do Café Donquintal. Idealizador do Café Vitrine, onde leva-se a Mineiridade como ferramenta para empresas de forma potencializada e estratégica, desenvolvedor de instrumentos para liberação miofascial e modelo ator da Bloom The Modelling Agency.

Minha abordagem combina estratégia aplicada, cultura organizacional viva e execução consistente no dia a dia. Acredito na comunicação como ferramenta de aproximação, nas relações humanas como ativo estratégico e na simplicidade como vantagem competitiva.

Carrego a mineiridade como identidade no jeito de liderar, nos produtos que entrego e no cuidado genuíno.`,
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedPerson, setSelectedPerson] = useState<number | null>(null);

  return (
    <>
      <section id="quem-somos" ref={ref} className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-24"
          >
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium">Nossa Equipe</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">Quem Somos</h2>
            <div className="w-16 h-px bg-primary/40 mx-auto" />
          </motion.div>

          <div className="flex flex-col md:flex-row items-stretch gap-0">
            {team.map((person, i) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, x: i === 0 ? -40 : 40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className="relative flex-1 group cursor-pointer"
                onClick={() => setSelectedPerson(i)}
              >
                <div className="relative h-[500px] md:h-[600px] overflow-hidden">
                  <img
                    src={person.photo}
                    alt={person.name}
                    loading="lazy"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                    <div className="flex items-end justify-between">
                      <div>
                        <h3 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">
                          {person.name}
                        </h3>
                        <div className="w-10 h-px bg-primary mb-4" />
                        <p className="text-sm text-muted-foreground">Clique para saber mais</p>
                      </div>
                      <a
                        href={person.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/20 px-5 py-3 text-sm text-primary hover:bg-primary/20 transition-colors mb-1"
                      >
                        <MessageCircle size={16} />
                        <span className="hidden sm:inline">WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>

                {i === 0 && (
                  <div className="hidden md:block absolute right-0 top-[10%] bottom-[10%] w-px bg-border z-10" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bio Modal */}
      {selectedPerson !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
          onClick={() => setSelectedPerson(null)}
        >
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="relative bg-card border border-border max-w-3xl w-full max-h-[85vh] overflow-y-auto p-8 md:p-12"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPerson(null)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X size={24} />
            </button>

            <div className="flex items-center gap-6 mb-8">
              <img
                src={team[selectedPerson].photo}
                alt={team[selectedPerson].name}
                className="w-20 h-20 rounded-full object-cover object-top border-2 border-primary/20"
              />
              <div>
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                  {team[selectedPerson].name}
                </h3>
                <div className="w-10 h-px bg-primary mt-2" />
              </div>
            </div>

            <div className="space-y-4">
              {team[selectedPerson].bio.split("\n\n").map((paragraph, idx) => (
                <p key={idx} className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-border">
              <a
                href={team[selectedPerson].whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-6 py-3 text-sm text-primary hover:bg-primary/20 transition-colors"
              >
                <MessageCircle size={16} />
                Falar com {team[selectedPerson].name.split(" ")[0]}
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default AboutSection;
