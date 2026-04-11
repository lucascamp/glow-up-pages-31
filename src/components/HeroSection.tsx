import { motion } from "framer-motion";
import heroImg from "@/assets/hero-mining.jpg";
import logoTellar from "@/assets/logo-tellar.png";
import logoDonquintal from "@/assets/logo-donquintal.png";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative h-screen w-full overflow-hidden">
      <img
        src={heroImg}
        alt="Operação de mineração"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-8 mb-10"
        >
          <img src={logoTellar} alt="Grupo Tellar" className="h-28 md:h-36 invert brightness-[1.1] sepia saturate-[3] hue-rotate-[5deg]" />
          <div className="w-px h-16 bg-foreground/30" />
          <img src={logoDonquintal} alt="Café Donquintal" className="h-28 md:h-36 invert brightness-[1.1] sepia saturate-[3] hue-rotate-[5deg]" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-6"
        >
          Mineração · Agronegócio · Imóveis
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
        >
          Grupo <span className="text-gradient-gold">Tellar</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-10 font-light"
        >
          25 anos de história consolidando presença no core industrial brasileiro
        </motion.p>

        <motion.a
          href="#negocios"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-gold text-primary-foreground px-8 py-4 text-sm font-medium tracking-widest uppercase hover:opacity-90 transition-opacity"
        >
          Conheça nossos negócios
        </motion.a>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-px h-16 bg-primary/40 mx-auto" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
