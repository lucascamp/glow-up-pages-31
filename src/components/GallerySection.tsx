import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { X } from "lucide-react";

const galleryImages = [
  { src: "https://orm-grupo-tellar.vercel.app/assets/landscape-wFRQF9RU.jpg", alt: "Vista aérea da operação" },
  { src: "https://orm-grupo-tellar.vercel.app/assets/gallery-1-CqNs_hCs.jpg", alt: "Evento de café" },
  { src: "https://orm-grupo-tellar.vercel.app/assets/gallery-3-DnHQ50ng.jpg", alt: "Trabalho técnico" },
  { src: "https://orm-grupo-tellar.vercel.app/assets/gallery-4-C4Nketxt.jpg", alt: "Café Donquintal" },
  { src: "https://orm-grupo-tellar.vercel.app/assets/gallery-5-Dl2x55Mk.jpg", alt: "Equipe em ação" },
  { src: "https://orm-grupo-tellar.vercel.app/assets/gallery-6-CoUaMfa7.jpg", alt: "Produção de café" },
  { src: "https://orm-grupo-tellar.vercel.app/assets/gallery-7-tzz_AldN.jpg", alt: "Operação industrial" },
  { src: "https://orm-grupo-tellar.vercel.app/assets/gallery-8-CRXbxC7l.png", alt: "Selo de qualidade" },
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

          {/* Masonry-style grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {galleryImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="break-inside-avoid group cursor-pointer relative overflow-hidden"
                onClick={() => setLightbox(i)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-colors duration-300 flex items-end">
                  <p className="text-foreground text-sm font-medium px-4 py-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    {img.alt}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-md flex items-center justify-center p-6"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors"
          >
            <X size={28} />
          </button>

          {/* Nav arrows */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((lightbox - 1 + galleryImages.length) % galleryImages.length);
            }}
            className="absolute left-6 top-1/2 -translate-y-1/2 text-foreground hover:text-primary text-3xl font-light transition-colors"
          >
            ‹
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((lightbox + 1) % galleryImages.length);
            }}
            className="absolute right-6 top-1/2 -translate-y-1/2 text-foreground hover:text-primary text-3xl font-light transition-colors"
          >
            ›
          </button>

          <motion.img
            key={lightbox}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            src={galleryImages[lightbox].src}
            alt={galleryImages[lightbox].alt}
            className="max-w-full max-h-[85vh] object-contain"
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
