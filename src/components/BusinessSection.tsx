import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import miningImg from "@/assets/mining-equipment.jpg";
import coffeeImg from "@/assets/coffee.jpg";
import realestateImg from "@/assets/realestate.jpg";

const businesses = [
  {
    title: "Grupo Tellar",
    subtitle: "25 anos",
    description:
      "Empresa consolidada no core industrial brasileiro, com atuação estratégica em minerações, pedreiras e siderúrgicas. Especialista no fornecimento de materiais de desgaste — correias transportadoras, componentes para britadores e peneiras vibratórias.",
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
    title: "Imobiliário",
    subtitle: "Investimento estratégico",
    description:
      "Trabalhamos com imóveis de lançamento e na planta — o ponto de entrada mais inteligente para quem quer investir com previsibilidade e evoluir para um patrimônio de maior valor.",
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
                  className="w-full h-80 object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="md:w-1/2">
                <p className="text-primary text-xs tracking-[0.2em] uppercase mb-3 font-medium">
                  {biz.subtitle}
                </p>
                <h3 className="font-heading text-3xl font-bold mb-4">{biz.title}</h3>
                <div className="w-10 h-px bg-primary/30 mb-6" />
                <p className="text-muted-foreground leading-relaxed">{biz.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessSection;
