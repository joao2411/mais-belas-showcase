import { MapPin, Phone, Clock, Mail, MessageCircle, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-widest">
            Contato
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mt-4 mb-6">
            Agende sua <span className="text-primary">consulta</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Entre em contato conosco e comece sua jornada de transformação.
            Estamos aqui para ajudar você.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8 animate-fade-up">
            <div className="text-center">
              <h3 className="font-serif text-2xl font-medium text-foreground mb-6">
                Informações de contato
              </h3>
              <p className="text-muted-foreground mb-8">
                Visite nossa clínica ou entre em contato pelos canais abaixo.
                Teremos prazer em atendê-la.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-4 p-6 bg-secondary/50 rounded-xl">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">Endereço</h4>
                  <p className="text-muted-foreground text-sm">
                    DF Plaza – Torre A, Sala 2411
                    <br />
                    Águas Claras, Brasília/DF
                    <br />
                    CEP: 71919-540
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-secondary/50 rounded-xl">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">Telefone / WhatsApp</h4>
                  <p className="text-muted-foreground text-sm">
                    (61) 99674-8565
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-secondary/50 rounded-xl">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">E-mail</h4>
                  <p className="text-muted-foreground text-sm">
                    jessicagillianyestetica@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-secondary/50 rounded-xl">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">Horário</h4>
                  <p className="text-muted-foreground text-sm">
                    Segunda a Sexta: 9h às 18h
                  </p>
                </div>
              </div>

              <a
                href="https://www.instagram.com/oficialbembelas/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-6 bg-secondary/50 rounded-xl hover:bg-secondary/70 transition-colors"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <Instagram className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">Instagram</h4>
                  <p className="text-muted-foreground text-sm">
                    @oficialbembelas
                  </p>
                </div>
              </a>
            </div>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/5561996748565"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 p-6 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-xl transition-all duration-300 hover:scale-[1.02]"
            >
              <MessageCircle className="w-6 h-6" />
              <span className="font-medium text-lg">Fale conosco pelo WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
