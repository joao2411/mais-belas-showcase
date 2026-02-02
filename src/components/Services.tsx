import { ArrowRight } from "lucide-react";
import serviceCriolipolise from "@/assets/service-criolipolise.jpg";
import serviceSoroterapia from "@/assets/service-soroterapia.jpg";
import serviceHarmonizacao from "@/assets/service-harmonizacao.jpg";
import serviceEnzimas from "@/assets/service-enzimas.jpg";

const services = [
  {
    id: 1,
    title: "Soroterapia",
    description:
      "Infusão intravenosa de vitaminas, minerais e antioxidantes para revitalização do organismo, aumento de energia e fortalecimento da imunidade.",
    image: serviceSoroterapia,
    treatments: ["Vitaminas", "Minerais", "Antioxidantes", "Imunidade"],
  },
  {
    id: 2,
    title: "Criolipólise",
    description:
      "Tecnologia de congelamento de gordura localizada que elimina células de gordura de forma definitiva e não invasiva.",
    image: serviceCriolipolise,
    treatments: ["Abdômen", "Flancos", "Costas", "Braços"],
  },
  {
    id: 3,
    title: "Enzimas & Lipo Detox",
    description:
      "Enzimas para gordura localizada e Lipo Detox com injeções semanais para desinflamar o organismo e acelerar resultados.",
    image: serviceEnzimas,
    treatments: ["Enzimas Lipolíticas", "Lipo Detox", "Desintoxicação", "Anti-inflamatório"],
  },
  {
    id: 4,
    title: "Harmonização",
    description:
      "Procedimentos estéticos para realçar a beleza natural do rosto e corpo, com técnicas modernas e resultados naturais.",
    image: serviceHarmonizacao,
    treatments: ["Harmonização Facial", "Harmonização Corporal", "Bioestimuladores", "Preenchimento"],
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-widest">
            Nossos Serviços
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mt-4 mb-6">
            Tratamentos para <span className="text-primary">emagrecimento</span> e beleza
          </h2>
          <p className="text-muted-foreground text-lg">
            Especialistas em emagrecimento corporal com tecnologias avançadas
            e profissionais altamente qualificados.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <article
              key={service.id}
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-500 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-serif text-2xl font-medium text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>

                {/* Treatments List */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.treatments.map((treatment) => (
                    <span
                      key={treatment}
                      className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full"
                    >
                      {treatment}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="#contato"
                  className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all duration-300"
                >
                  Saiba mais
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
