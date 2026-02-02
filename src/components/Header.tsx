import { useState, useEffect } from "react";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoMonogram from "@/assets/logo-monogram.png";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navLinks = [{
    href: "inicio",
    label: "Início"
  }, {
    href: "servicos",
    label: "Serviços"
  }, {
    href: "sobre",
    label: "Sobre"
  }, {
    href: "depoimentos",
    label: "Depoimentos"
  }, {
    href: "contato",
    label: "Contato"
  }];
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
    setIsMobileMenuOpen(false);
  };
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-md shadow-soft" : "bg-transparent"}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button onClick={() => scrollToSection("inicio")} className="flex items-center gap-3 cursor-pointer">
            <img alt="Bem Belas" className="h-12 w-auto" src="/lovable-uploads/9ae25183-9568-4b35-8c0b-f982517b629b.png" />
            <span className="font-serif text-xl md:text-2xl font-semibold text-foreground tracking-wide">
              BEM<span className="text-primary">✦</span>BELAS
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map(link => <button key={link.href} onClick={() => scrollToSection(link.href)} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-200 cursor-pointer">
                {link.label}
              </button>)}
          </nav>

          {/* Phone & WhatsApp */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+5561996748565" className="flex items-center gap-2 text-sm text-foreground/70 hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              (61) 99674-8565
            </a>
            <Button variant="hero" size="lg" asChild>
              <a href="https://wa.me/5561996748565" target="_blank" rel="noopener noreferrer" className="gap-2">
                <MessageCircle className="w-4 h-4" />
                Agendar
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden p-2 text-foreground" aria-label="Toggle menu">
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && <div className="lg:hidden py-4 border-t border-border animate-fade-up">
            <nav className="flex flex-col gap-4">
              {navLinks.map(link => <button key={link.href} onClick={() => scrollToSection(link.href)} className="text-base font-medium text-foreground/80 hover:text-primary transition-colors py-2 text-left cursor-pointer">
                  {link.label}
                </button>)}
              <Button variant="hero" size="lg" className="mt-4" asChild>
                <a href="https://wa.me/5561996748565" target="_blank" rel="noopener noreferrer" className="gap-2">
                  <MessageCircle className="w-4 h-4" />
                  Agendar
                </a>
              </Button>
            </nav>
          </div>}
      </div>
    </header>;
};
export default Header;