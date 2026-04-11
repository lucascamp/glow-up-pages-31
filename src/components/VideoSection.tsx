import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const videos = [
  { src: "/videos/cafe-video-1.mp4", title: "O Café Donquintal" },
  { src: "/videos/cafe-video-2.mp4", title: "Da Fazenda à Xícara" },
  { src: "/videos/cafe-video-3.mp4", title: "Nosso Processo" },
];

const VideoSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="videos" ref={ref} className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium">
            Café Donquintal
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Conheça Nossa História
          </h2>
          <div className="w-16 h-px bg-primary/40 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videos.map((video, i) => (
            <motion.div
              key={video.src}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="flex flex-col gap-3"
            >
              <div className="relative overflow-hidden bg-card aspect-[9/16] rounded">
                <video
                  src={video.src}
                  controls
                  preload="metadata"
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm text-muted-foreground text-center font-medium">
                {video.title}
              </p>
            </motion.div>
          ))}
        </div>

        <p className="text-xs text-muted-foreground/60 text-center mt-8">
          * Caso algum vídeo não carregue, ele será adicionado em breve.
        </p>
      </div>
    </section>
  );
};

export default VideoSection;
