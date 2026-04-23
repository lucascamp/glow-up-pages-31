import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, Instagram, MapPin } from "lucide-react";

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
          className="mb-16 flex flex-wrap items-center justify-center gap-x-10 gap-y-6"
        >
          {[
            { href: "https://wa.me/55031987059881", Icon: MessageCircle, label: "Leila Rolindo" },
            { href: "https://wa.me/55031988149574", Icon: MessageCircle, label: "Beto Paiva" },
            { href: "https://www.instagram.com/grupotellar", Icon: Instagram, label: "@grupotellar" },
            { href: "https://www.instagram.com/cafedonquintal", Icon: Instagram, label: "@cafedonquintal" },
            { href: "https://www.instagram.com/miofascialbh", Icon: Instagram, label: "@miofascialbh" },
          ].map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <Icon size={16} className="text-primary transition-transform group-hover:scale-110" />
              <span className="font-medium text-foreground group-hover:text-primary">{label}</span>
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
