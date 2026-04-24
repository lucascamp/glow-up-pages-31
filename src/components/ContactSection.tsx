import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Instagram, MapPin } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contato" ref={ref} className="py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium">Fale Conosco</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">Entre em Contato</h2>
          <div className="w-16 h-px bg-primary/40 mx-auto mb-8" />
          <p className="text-muted-foreground text-lg mb-16 max-w-xl mx-auto">
            Estamos prontos para atender suas demandas com excelência e compromisso.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto"
        >
          {[
            { href: "https://www.instagram.com/grupotellar", Icon: Instagram, label: "@grupotellar", name: "Grupo Tellar" },
            { href: "https://www.instagram.com/cafedonquintal", Icon: Instagram, label: "@cafedonquintal", name: "Café Donquintal" },
            { href: "https://www.instagram.com/miofascialbh", Icon: Instagram, label: "@miofascialbh", name: "Miofascial BH" },
          ].map(({ href, Icon, label, name }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center justify-center gap-3 rounded-lg border border-border bg-card/40 px-6 py-8 transition-all hover:border-primary/50 hover:bg-card/70 hover:-translate-y-1"
            >
              <Icon size={22} className="text-primary transition-transform group-hover:scale-110" />
              <div className="flex flex-col items-center gap-1">
                <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{name}</span>
                <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{label}</span>
              </div>
            </a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href="https://www.google.com/maps/search/?api=1&query=Rua+Luiza+Efig%C3%AAnia+Silva+234+Camargos+Belo+Horizonte+MG+30520-460"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <MapPin size={16} />
            Rua Luiza Efigênia Silva, 234 — Camargos, Belo Horizonte – MG
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
