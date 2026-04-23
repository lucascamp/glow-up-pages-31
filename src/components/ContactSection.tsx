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

        <motion.ul
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mb-16 max-w-md divide-y divide-border/60"
        >
          <li>
            <a
              href="https://wa.me/55031987059881"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-4 py-4 transition-colors hover:text-primary"
            >
              <span className="flex items-center gap-3">
                <MessageCircle size={16} className="text-primary" />
                <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">WhatsApp</span>
              </span>
              <span className="font-medium text-foreground group-hover:text-primary">Leila Rolindo</span>
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/55031988149574"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-4 py-4 transition-colors hover:text-primary"
            >
              <span className="flex items-center gap-3">
                <MessageCircle size={16} className="text-primary" />
                <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">WhatsApp</span>
              </span>
              <span className="font-medium text-foreground group-hover:text-primary">Beto Paiva</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/grupotellar"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-4 py-4 transition-colors hover:text-primary"
            >
              <span className="flex items-center gap-3">
                <Instagram size={16} className="text-primary" />
                <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Instagram</span>
              </span>
              <span className="font-medium text-foreground group-hover:text-primary">@grupotellar</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/cafedonquintal"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-4 py-4 transition-colors hover:text-primary"
            >
              <span className="flex items-center gap-3">
                <Instagram size={16} className="text-primary" />
                <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Instagram</span>
              </span>
              <span className="font-medium text-foreground group-hover:text-primary">@cafedonquintal</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/miofascialbh"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-4 py-4 transition-colors hover:text-primary"
            >
              <span className="flex items-center gap-3">
                <Instagram size={16} className="text-primary" />
                <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Instagram</span>
              </span>
              <span className="font-medium text-foreground group-hover:text-primary">@miofascialbh</span>
            </a>
          </li>
        </motion.ul>

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
