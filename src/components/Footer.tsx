import { Instagram, Facebook, Phone, Mail, MapPin } from "lucide-react";
import logoMonogram from "@/assets/logo-monogram.png";

const Footer = () => {
  const instagramUrl = "https://www.instagram.com/oficialbembelas/";
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={logoMonogram} 
                alt="Bem Belas" 
                className="h-10 w-auto brightness-0 invert"
              />
              <span className="font-serif text-2xl font-semibold text-primary-foreground tracking-wide">
                BEM<span className="text-primary">✦</span>BELAS
              </span>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Sua beleza é nossa inspiração. Há mais de 10 anos transformando
              vidas através da estética avançada.
            </p>
            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  // Alguns webviews/in-app browsers normalizam o link (sem https/www).
                  // Forçamos a abertura do URL completo informado.
                  e.preventDefault();
                  window.open(instagramUrl, "_blank", "noopener,noreferrer");
                }}
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-4">Links Rápidos</h4>
            <ul className="space-y-3">
              {["Início", "Serviços", "Sobre", "Depoimentos", "Contato"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-primary-foreground/70 hover:text-primary transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-4">Serviços</h4>
            <ul className="space-y-3">
              {[
                "Criolipólise",
                "Enzimas para Gordura",
                "Lipo Detox",
                "Soroterapia",
                "Harmonização",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#servicos"
                    className="text-primary-foreground/70 hover:text-primary transition-colors text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-4">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-primary-foreground/70 text-sm">
                  DF Plaza – Torre A, Sala 2411
                  <br />
                  Águas Claras, Brasília/DF
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span className="text-primary-foreground/70 text-sm">
                  (61) 99674-8565
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span className="text-primary-foreground/70 text-sm">
                  jessicagillianyestetica@gmail.com
                </span>
              </li>
              <li>
                <a 
                  href={instagramUrl}
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(instagramUrl, "_blank", "noopener,noreferrer");
                  }}
                  className="flex items-center gap-3 hover:text-primary transition-colors"
                >
                  <Instagram className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-primary-foreground/70 text-sm">
                    @oficialbembelas
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/50 text-sm">
              © {currentYear} Bem Belas. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-primary-foreground/50 hover:text-primary-foreground text-sm transition-colors"
              >
                Política de Privacidade
              </a>
              <a
                href="#"
                className="text-primary-foreground/50 hover:text-primary-foreground text-sm transition-colors"
              >
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
