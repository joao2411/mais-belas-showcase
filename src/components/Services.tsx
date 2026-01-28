import { ArrowRight } from "lucide-react";
import serviceFacial from "@/assets/service-facial.jpg";
import serviceBody from "@/assets/service-body.jpg";
import serviceLaser from "@/assets/service-laser.jpg";

const services = [
  {
    id: 1,
    title: "Tratamentos Faciais",
    description:
      "Limpeza de pele, peelings, microagulhamento, harmonização facial e muito mais para uma pele radiante.",
    image: serviceFacial,
    treatments: ["Limpeza de Pele", "Peeling", "Microagulhamento", "Botox"],
  },
  {
    id: 2,
    title: "Tratamentos Corporais",
    description:
      "Modeladores de silhueta, drenagem linfática, massagens e procedimentos para o corpo dos seus sonhos.",
    image: serviceBody,
    treatments: ["Criolipólise", "Drenagem", "Radiofrequência", "Massagem"],
  },
  {
    id: 3,
    title: "Laser & Tecnologia",
    description:
      "Depilação a laser, rejuvenescimento, remoção de manchas e tratamentos com equipamentos de última geração.",
    image: serviceLaser,
    treatments: ["Depilação Laser", "Fototerapia", "IPL", "LED Therapy"],
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
            Tratamentos exclusivos para você
          </h2>
          <p className="text-muted-foreground text-lg">
            Oferecemos uma ampla gama de tratamentos estéticos com tecnologia
            avançada e profissionais altamente qualificados.
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
