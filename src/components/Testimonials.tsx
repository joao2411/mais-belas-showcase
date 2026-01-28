import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Carolina Mendes",
    role: "Empresária",
    content:
      "A Mais Belas superou todas as minhas expectativas! O tratamento facial que fiz rejuvenesceu minha pele de uma forma incrível. Equipe maravilhosa e ambiente impecável.",
    rating: 5,
  },
  {
    id: 2,
    name: "Fernanda Costa",
    role: "Advogada",
    content:
      "Faço depilação a laser há 6 meses e os resultados são impressionantes. Profissionais extremamente qualificados e atenciosos. Recomendo de olhos fechados!",
    rating: 5,
  },
  {
    id: 3,
    name: "Juliana Santos",
    role: "Médica",
    content:
      "Ambiente acolhedor, equipamentos modernos e resultados reais. A harmonização facial ficou natural e elegante, exatamente como eu queria. Parabéns à equipe!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-widest">
            Depoimentos
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mt-4 mb-6">
            O que nossas clientes dizem
          </h2>
          <p className="text-muted-foreground text-lg">
            A satisfação de nossas clientes é nossa maior recompensa.
            Confira algumas experiências reais.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <article
              key={testimonial.id}
              className="bg-card p-8 rounded-2xl shadow-card hover:shadow-elevated transition-all duration-500 relative animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-accent text-accent"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground/80 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-serif text-lg font-semibold">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
