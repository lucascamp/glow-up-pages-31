import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Play, X, Volume2, VolumeX } from "lucide-react";

const videos = [
  { src: "/videos/cafe-video-1.mp4", title: "O Café Donquintal", hasAudio: false },
  { src: "/videos/cafe-video-2.mp4", title: "Da Fazenda à Xícara", hasAudio: true },
];

const VideoSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  return (
    <>
      <section id="videos" ref={ref} className="py-32 px-6 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative">
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

          {/* Two videos centered and responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center max-w-2xl mx-auto">
            {/* Left ambient video */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col gap-3 cursor-pointer group"
              onClick={() => setActiveVideo(0)}
            >
              <div className="relative overflow-hidden bg-card aspect-[9/16] rounded">
                <video
                  src={videos[0].src}
                  muted
                  loop
                  autoPlay
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-background/20 group-hover:bg-background/40 transition-all duration-300 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-background/60 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Play size={24} className="text-primary ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-xs text-muted-foreground/80">
                  <VolumeX size={14} />
                  <span>Sem áudio</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground text-center font-medium">
                {videos[0].title}
              </p>
            </motion.div>

            {/* Center featured video (with audio) — larger */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col gap-3 cursor-pointer group md:scale-105"
              onClick={() => setActiveVideo(1)}
            >
              <div className="relative overflow-hidden bg-card aspect-[9/16] rounded border border-primary/20">
                <video
                  src={videos[1].src}
                  muted
                  loop
                  autoPlay
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-background/10 group-hover:bg-background/30 transition-all duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary/80 backdrop-blur-sm flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                    <Play size={28} className="text-primary-foreground ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-xs text-foreground/80">
                  <Volume2 size={14} />
                  <span>Com áudio</span>
                </div>
                <div className="absolute top-3 right-3 bg-primary/90 text-primary-foreground text-xs px-2.5 py-1 rounded font-medium">
                  Destaque
                </div>
              </div>
              <p className="text-sm text-primary text-center font-semibold">
                {videos[1].title}
              </p>
            </motion.div>

            {/* Right ambient video */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col gap-3 cursor-pointer group"
              onClick={() => setActiveVideo(2)}
            >
              <div className="relative overflow-hidden bg-card aspect-[9/16] rounded">
                <video
                  src={videos[2].src}
                  muted
                  loop
                  autoPlay
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-background/20 group-hover:bg-background/40 transition-all duration-300 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-background/60 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Play size={24} className="text-primary ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-xs text-muted-foreground/80">
                  <VolumeX size={14} />
                  <span>Sem áudio</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground text-center font-medium">
                {videos[2].title}
              </p>
            </motion.div>
          </div>

          <p className="text-xs text-muted-foreground/60 text-center mt-8">
            Clique em qualquer vídeo para assistir em tela cheia
          </p>
        </div>
      </section>

      {/* Video Modal */}
      {activeVideo !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
          onClick={() => setActiveVideo(null)}
        >
          <button
            onClick={() => setActiveVideo(null)}
            className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors z-10"
          >
            <X size={28} />
          </button>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-md max-h-[85vh] aspect-[9/16] rounded overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              key={activeVideo}
              src={videos[activeVideo].src}
              controls
              autoPlay
              playsInline
              muted={!videos[activeVideo].hasAudio}
              className="w-full h-full object-contain bg-black"
            />
          </motion.div>

          <p className="absolute bottom-6 text-sm text-muted-foreground">
            {videos[activeVideo].title}
            {!videos[activeVideo].hasAudio && " — sem áudio"}
          </p>
        </motion.div>
      )}
    </>
  );
};

export default VideoSection;
