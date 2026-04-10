import { motion, useInView } from "framer-motion";
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
              className="relative flex-1 group"
            >
              {/* Photo */}
              <div className="relative h-[500px] md:h-[600px] overflow-hidden">
                <img
                  src={person.photo}
                  alt={person.name}
                  loading="lazy"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient overlay from bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />

                {/* Content pinned to bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                  <div className="flex items-end justify-between">
                    <div>
                      <h3 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">
                        {person.name}
                      </h3>
                      <div className="w-10 h-px bg-primary mb-4" />
                    </div>
                    <a
                      href={person.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/20 px-5 py-3 text-sm text-primary hover:bg-primary/20 transition-colors mb-1"
                    >
                      <MessageCircle size={16} />
                      <span className="hidden sm:inline">WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Vertical divider between cards */}
              {i === 0 && (
                <div className="hidden md:block absolute right-0 top-[10%] bottom-[10%] w-px bg-border z-10" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
