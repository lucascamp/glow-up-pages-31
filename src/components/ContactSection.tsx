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
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          <a
            href="https://wa.me/55031987059881"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-card border border-border p-6 hover:border-primary/30 transition-colors group"
          >
            <MessageCircle size={20} className="text-primary" />
            <div className="text-left">
              <p className="text-sm text-muted-foreground">WhatsApp</p>
              <p className="font-medium text-foreground">Leila Rolindo</p>
            </div>
          </a>

          <a
            href="https://wa.me/55031988149574"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-card border border-border p-6 hover:border-primary/30 transition-colors group"
          >
            <MessageCircle size={20} className="text-primary" />
            <div className="text-left">
              <p className="text-sm text-muted-foreground">WhatsApp</p>
              <p className="font-medium text-foreground">Beto Paiva</p>
            </div>
          </a>

          <a
            href="https://www.instagram.com/grupotellar"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-card border border-border p-6 hover:border-primary/30 transition-colors group"
          >
            <Instagram size={20} className="text-primary" />
            <div className="text-left">
              <p className="text-sm text-muted-foreground">Instagram</p>
              <p className="font-medium text-foreground">@grupotellar</p>
            </div>
          </a>

          <a
            href="https://www.instagram.com/cafedonquintal"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-card border border-border p-6 hover:border-primary/30 transition-colors group"
          >
            <Instagram size={20} className="text-primary" />
            <div className="text-left">
              <p className="text-sm text-muted-foreground">Instagram</p>
              <p className="font-medium text-foreground">@cafedonquintal</p>
            </div>
          </a>

          <a
            href="https://www.instagram.com/miofascialbh"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-card border border-border p-6 hover:border-primary/30 transition-colors group"
          >
            <Instagram size={20} className="text-primary" />
            <div className="text-left">
              <p className="text-sm text-muted-foreground">Instagram</p>
              <p className="font-medium text-foreground">@miofascialbh</p>
            </div>
          </a>
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
