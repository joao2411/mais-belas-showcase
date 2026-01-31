const SoroterapiaVideo = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video */}
          <div className="relative rounded-2xl overflow-hidden shadow-elevated">
            <video
              className="w-full h-auto"
              controls
              poster="/videos/soroterapia-poster.jpg"
              preload="metadata"
            >
              <source src="/videos/soroterapia.mp4" type="video/mp4" />
              Seu navegador não suporta vídeos.
            </video>
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
              A soroterapia é um tratamento que consiste na infusão intravenosa de vitaminas, 
              minerais e antioxidantes diretamente na corrente sanguínea, garantindo absorção 
              máxima e resultados rápidos.
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-primary rounded-full" />
                Aumento de energia e disposição
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-primary rounded-full" />
                Fortalecimento do sistema imunológico
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-primary rounded-full" />
                Hidratação profunda e rejuvenescimento
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-primary rounded-full" />
                Resultados visíveis em poucas sessões
              </li>
            </ul>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors"
            >
              Agende sua sessão
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoroterapiaVideo;
