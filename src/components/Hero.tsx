import { Button } from "@/components/ui/button";
import { Sparkles, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-body.jpg";
import logo from "@/assets/logo-bem-belas.png";
const Hero = () => {
  return <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Tratamento de estética" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 animate-fade-up">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">
              Excelência em estética
            </span>
          </div>

          {/* Logo */}
          <div className="mb-8 animate-fade-up" style={{
          animationDelay: "0.05s"
        }}>
            <img alt="Bem Belas" className="h-24 md:h-32 w-auto" src="/lovable-uploads/4f7d3bc5-dc00-440e-a441-7d9478f19cad.png" />
          </div>

          {/* Headline */}
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium text-foreground leading-tight mb-6 animate-fade-up" style={{
          animationDelay: "0.1s"
        }}>
            Conquiste o{" "}
            <span className="text-primary">corpo dos seus sonhos</span>{" "}
            com tecnologia avançada
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl animate-fade-up" style={{
          animationDelay: "0.2s"
        }}>
            Especialistas em emagrecimento corporal e estética facial. 
            Tratamentos personalizados com resultados comprovados.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{
          animationDelay: "0.3s"
        }}>
            <Button variant="hero" size="xl" asChild>
              <a href="https://wa.me/5561996748565" target="_blank" rel="noopener noreferrer" className="gap-2">
                <MessageCircle className="w-5 h-5" />
                Agendar pelo WhatsApp
              </a>
            </Button>
            <Button variant="hero-outline" size="xl" onClick={() => {
            const element = document.getElementById("servicos");
            if (element) {
              element.scrollIntoView({
                behavior: "smooth"
              });
            }
          }}>
              Nossos Serviços
            </Button>
          </div>

          {/* Trust badges */}
          <div className="mt-12 flex flex-wrap gap-8 items-center animate-fade-up" style={{
          animationDelay: "0.4s"
        }}>
            <div className="text-center">
              <p className="text-3xl font-serif font-semibold text-primary">+5000</p>
              <p className="text-sm text-muted-foreground">Clientes satisfeitas</p>
            </div>
            <div className="w-px h-12 bg-border hidden sm:block" />
            <div className="text-center">
              <p className="text-3xl font-serif font-semibold text-primary">+10</p>
              <p className="text-sm text-muted-foreground">Anos de experiência</p>
            </div>
            <div className="w-px h-12 bg-border hidden sm:block" />
            <div className="text-center">
              <p className="text-3xl font-serif font-semibold text-primary">+50</p>
              <p className="text-sm text-muted-foreground">Tratamentos</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>;
};
export default Hero;