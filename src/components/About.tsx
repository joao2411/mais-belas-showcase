import { Award, Heart, Shield, Users } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Profissionais Certificados",
    description: "Equipe com formação especializada e constante atualização.",
  },
  {
    icon: Shield,
    title: "Segurança Total",
    description: "Protocolos rigorosos de higiene e procedimentos seguros.",
  },
  {
    icon: Heart,
    title: "Atendimento Humanizado",
    description: "Cuidado personalizado focado no seu bem-estar.",
  },
  {
    icon: Users,
    title: "Experiência Comprovada",
    description: "Mais de 10 anos transformando vidas através da estética.",
  },
];

const About = () => {
  return (
    <section id="sobre" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-primary text-sm font-medium uppercase tracking-widest">
              Sobre Nós
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mt-4 mb-6">
              Sua beleza é nossa <span className="text-primary">inspiração</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              A Mais Belas nasceu do sonho de proporcionar tratamentos estéticos
              de excelência em um ambiente acolhedor e sofisticado. Acreditamos
              que cada pessoa é única e merece um cuidado personalizado.
            </p>
            <p className="text-muted-foreground text-lg mb-8">
              Nossa missão é realçar sua beleza natural, utilizando as mais
              avançadas tecnologias e técnicas do mercado, sempre com segurança
              e resultados comprovados.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-secondary/50 rounded-xl p-6 text-center">
                <p className="text-4xl font-serif font-semibold text-primary">98%</p>
                <p className="text-sm text-muted-foreground mt-1">Satisfação</p>
              </div>
              <div className="bg-secondary/50 rounded-xl p-6 text-center">
                <p className="text-4xl font-serif font-semibold text-primary">15k+</p>
                <p className="text-sm text-muted-foreground mt-1">Procedimentos</p>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="bg-card p-6 rounded-2xl shadow-soft hover:shadow-card transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-medium text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
