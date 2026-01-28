import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Mail, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-card p-8 md:p-10 rounded-2xl shadow-card animate-fade-up">
            <h3 className="font-serif text-2xl font-medium text-foreground mb-6">
              Envie sua mensagem
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Nome completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="Seu nome"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="(11) 99999-9999"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                  placeholder="Conte-nos como podemos ajudar..."
                />
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full">
                <Send className="w-4 h-4 mr-2" />
                Enviar Mensagem
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <div>
              <h3 className="font-serif text-2xl font-medium text-foreground mb-6">
                Informações de contato
              </h3>
              <p className="text-muted-foreground mb-8">
                Visite nossa clínica ou entre em contato pelos canais abaixo.
                Teremos prazer em atendê-la.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-6 bg-secondary/50 rounded-xl">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">Endereço</h4>
                  <p className="text-muted-foreground text-sm">
                    Av. Paulista, 1234 - Sala 501
                    <br />
                    Bela Vista, São Paulo - SP
                    <br />
                    CEP: 01310-100
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-secondary/50 rounded-xl">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">Telefone</h4>
                  <p className="text-muted-foreground text-sm">
                    (11) 3456-7890
                    <br />
                    (11) 99999-9999 (WhatsApp)
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
                    contato@maisbelas.com.br
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
                    Segunda a Sexta: 9h às 20h
                    <br />
                    Sábado: 9h às 16h
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
