import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle } from "lucide-react";

const team = [
  { name: "Leila Rolindo", whatsapp: "https://wa.me/55031987059881" },
  { name: "Beto Paiva", whatsapp: "https://wa.me/55031988149574" },
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
              <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center mx-auto mb-6">
                <span className="font-heading text-2xl text-primary font-bold">
                  {person.name.charAt(0)}
                </span>
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
