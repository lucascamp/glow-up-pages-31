import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle } from "lucide-react";

const team = [
  {
    name: "Leila Rolindo",
    photo: "https://orm-grupo-tellar.vercel.app/assets/leila-DPR0Hm4I.jpg",
    whatsapp: "https://wa.me/55031987059881",
  },
  {
    name: "Beto Paiva",
    photo: "https://orm-grupo-tellar.vercel.app/assets/beto-CYCLO1Y4.jpg",
    whatsapp: "https://wa.me/55031988149574",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="quem-somos" ref={ref} className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium">Nossa Equipe</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">Quem Somos</h2>
          <div className="w-16 h-px bg-primary/40 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {team.map((person, i) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-card border border-border p-8 text-center group hover:border-primary/30 transition-colors"
            >
              <div className="w-28 h-28 rounded-full overflow-hidden mx-auto mb-6 border-2 border-primary/20">
                <img
                  src={person.photo}
                  alt={person.name}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-4">{person.name}</h3>
              <a
                href={person.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-primary hover:opacity-80 transition-opacity"
              >
                <MessageCircle size={16} />
                WhatsApp
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
