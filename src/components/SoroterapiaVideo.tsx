import { useState, useRef } from "react";
import { Play, MessageCircle } from "lucide-react";
import soroterapiaVideo from "@/assets/soroterapia.mp4";

const SoroterapiaVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video */}
          <div className="relative rounded-2xl overflow-hidden shadow-elevated aspect-[9/16] max-h-[70vh] mx-auto bg-muted">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              controls={isPlaying}
              playsInline
              onPlay={() => setIsPlaying(true)}
              preload="metadata"
            >
              <source src={soroterapiaVideo} type="video/mp4" />
              Seu navegador não suporta vídeos.
            </video>
            
            {/* Play Button Overlay */}
            {!isPlaying && (
              <button
                onClick={handlePlay}
                className="absolute inset-0 flex items-center justify-center bg-foreground/20 hover:bg-foreground/30 transition-colors cursor-pointer group"
                aria-label="Reproduzir vídeo"
              >
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                  <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
                </div>
              </button>
            )}
          </div>

          {/* Content */}
          <div className="space-y-6">
            <span className="text-primary text-sm font-medium uppercase tracking-widest">
              Soroterapia
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground">
              Revitalize seu corpo de <span className="text-primary">dentro para fora</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              A soroterapia é uma estratégia de cuidado integrativo que promove suporte nutricional direto ao organismo, por infusão intravenosa e/ou intramuscular, auxiliando na reposição de nutrientes essenciais, no equilíbrio dos sistemas do corpo e na recuperação da vitalidade.
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-primary rounded-full" />
                Suporte nutricional rápido e eficiente
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-primary rounded-full" />
                Melhora do bem-estar físico e mental
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-primary rounded-full" />
                Contribui para equilíbrio imunológico e metabólico
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-primary rounded-full" />
                Protocolos personalizados para diversos objetivos
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-primary rounded-full" />
                Resultados visíveis em poucas sessões
              </li>
            </ul>
            <a
              href="https://wa.me/5561996748565"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Agendar pelo WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoroterapiaVideo;
