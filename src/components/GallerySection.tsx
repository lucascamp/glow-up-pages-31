import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import betoCoffee from "@/assets/beto-coffee.jpg";
import donquintalProduct from "@/assets/donquintal-product.jpg";
import betoMining from "@/assets/beto-mining.jpg";
import leilaBetoMining from "@/assets/leila-beto-mining.jpg";
import heroMining from "@/assets/hero-mining.jpg";
import miningEquipment from "@/assets/mining-equipment.jpg";
import miningConveyors from "@/assets/mining-conveyors.jpg";
import miningAerial from "@/assets/mining-aerial.jpg";

const galleryImages = [
  { src: heroMining, alt: "Vista aérea da operação" },
  { src: betoCoffee, alt: "Beto no Café Donquintal" },
  { src: donquintalProduct, alt: "Café Donquintal — Rubi 86 pontos" },
  { src: miningConveyors, alt: "Esteiras transportadoras na pedreira" },
  { src: leilaBetoMining, alt: "Leila e Beto na mineração" },
  { src: miningAerial, alt: "Vista aérea — britagem e peneiras" },
  { src: betoMining, alt: "Beto na operação portuária" },
  { src: miningEquipment, alt: "Equipamentos de mineração" },
];

const GallerySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <>
      <section id="galeria" ref={ref} className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium">Registros</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">Galeria de Trabalhos</h2>
            <div className="w-16 h-px bg-primary/40 mx-auto" />
          </motion.div>

          {/* Row 1: large left + 2 stacked right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
            <div
              className="group cursor-pointer relative overflow-hidden h-[300px] md:h-[460px]"
              onClick={() => setLightbox(0)}
            >
              <img src={galleryImages[0].src} alt={galleryImages[0].alt} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/50 transition-all duration-300 flex items-center justify-center">
                <p className="text-foreground text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4 text-center">{galleryImages[0].alt}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {galleryImages.slice(1, 5).map((img, idx) => (
                <div
                  key={idx + 1}
                  className="group cursor-pointer relative overflow-hidden h-[148px] md:h-[225px]"
                  onClick={() => setLightbox(idx + 1)}
                >
                  <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-background/0 group-hover:bg-background/50 transition-all duration-300 flex items-center justify-center">
                    <p className="text-foreground text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4 text-center">{img.alt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Row 2: full width */}
          <div className="grid grid-cols-1 gap-3">
            <div
              className="group cursor-pointer relative overflow-hidden h-[200px] md:h-[280px]"
              onClick={() => setLightbox(5)}
            >
              <img src={galleryImages[5].src} alt={galleryImages[5].alt} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/50 transition-all duration-300 flex items-center justify-center">
                <p className="text-foreground text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4 text-center">{galleryImages[5].alt}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {lightbox !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-md flex items-center justify-center p-6"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors z-10"
          >
            <X size={28} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + galleryImages.length) % galleryImages.length); }}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-foreground hover:text-primary transition-colors z-10"
          >
            <ChevronLeft size={36} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % galleryImages.length); }}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-foreground hover:text-primary transition-colors z-10"
          >
            <ChevronRight size={36} />
          </button>
          <motion.img
            key={lightbox}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            src={galleryImages[lightbox].src}
            alt={galleryImages[lightbox].alt}
            className="max-w-full max-h-[80vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="absolute bottom-6 text-sm text-muted-foreground">
            {galleryImages[lightbox].alt} — {lightbox + 1}/{galleryImages.length}
          </p>
        </motion.div>
      )}
    </>
  );
};

export default GallerySection;
