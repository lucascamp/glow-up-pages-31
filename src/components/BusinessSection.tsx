import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import miningImg from "@/assets/leila-beto-mining.jpg";
import coffeeImg from "@/assets/beto-coffee.jpg";
import realestateImg from "@/assets/realestate.jpg";
import miofascialImg from "@/assets/miofascial-kit.jpg";

const businesses = [
  {
    title: "Grupo Tellar",
    subtitle: "25 anos",
    description:
      "Empresa consolidada no core industrial brasileiro, com atuação estratégica em minerações, pedreiras e siderúrgicas. Especialista no fornecimento de materiais de desgaste — correias transportadoras, componentes para britadores e peneiras vibratórias.\n\n🔺 Minas movendo a mineração.",
    image: miningImg,
  },
  {
    title: "Café Donquintal",
    subtitle: "Rubi 86 pontos — Perdões, MG",
    description:
      "Da alma mineira ao requinte de sabores de um grão sinônimo de brasilidade. Em microlotes e torras semanais, Donquintal é o café ideal para conhecer o melhor de Minas na sua essência.",
    image: coffeeImg,
  },
  {
    title: "Instrumentos Miofasciais",
    subtitle: "@miofascialbh",
    description:
      "Fabricamos instrumentos especiais para fisioterapia e liberação miofascial. Linha completa — Guiador, Girafa, Tartaruga, Murraça, Tuvira, Faca, Gancheira e Pantala — com design único, polimento impecável e bordas anatômicas. Em alumínio puro, são leves, duráveis, esterilizáveis e potencializam o resultado do profissional, com menos esforço e maior conforto.",
    image: miofascialImg,
    imageClass: "object-contain bg-card p-6",
  },
  {
    title: "Imobiliário",
    subtitle: "CRECI-MG 5",
    description:
      "Entrega do mais alto nível de serviço ao cliente, com dedicação total e inteligência de mercado, aliada a um posicionamento local preciso garantindo que cada imóvel seja vendido ou alugado com máxima eficiência e valorização.",
    image: realestateImg,
  },
];

const BusinessSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="negocios" ref={ref} className="py-32 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium">Atuação</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">Nossos Negócios</h2>
          <div className="w-16 h-px bg-primary/40 mx-auto" />
        </motion.div>

        <div className="space-y-24">
          {businesses.map((biz, i) => (
            <motion.div
              key={biz.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className={`flex flex-col ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-10 items-center`}
            >
              <div className="md:w-1/2 overflow-hidden">
                <img
                  src={biz.image}
                  alt={biz.title}
                  loading="lazy"
                  width={800}
                  height={600}
                  className={`w-full h-80 hover:scale-105 transition-transform duration-700 ${biz.imageClass ?? "object-cover"}`}
                />
              </div>
              <div className="md:w-1/2">
                <p className="text-primary text-xs tracking-[0.2em] uppercase mb-3 font-medium">
                  {biz.subtitle}
                </p>
                <h3 className="font-heading text-3xl font-bold mb-4">{biz.title}</h3>
                <div className="w-10 h-px bg-primary/30 mb-6" />
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{biz.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessSection;
