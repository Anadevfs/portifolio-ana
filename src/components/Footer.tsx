import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Ana Beatriz</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Desenvolvedora Full Stack apaixonada por criar soluções inovadoras 
              e experiências digitais excepcionais.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Links Rápidos</h4>
            <div className="space-y-2">
              <a 
                href="#sobre" 
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
              >
                Sobre Mim
              </a>
              <a 
                href="#habilidades" 
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
              >
                Habilidades
              </a>
              <a 
                href="#projetos" 
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
              >
                Projetos
              </a>
              <a 
                href="#contato" 
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
              >
                Contato
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contato</h4>
            <div className="space-y-2 text-sm">
              <p className="text-primary-foreground/80">
                📧 anyysaitou24@gmail.com
              </p>
              <p className="text-primary-foreground/80">
                📱 +55 (11) 99999-9999
              </p>
              <p className="text-primary-foreground/80">
                📍 São Paulo, Brasil
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4 pt-2">
              <a 
                href="https://github.com/AnaBeatriz-devfs" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/ana-beatriz777/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:anyysaitou24@gmail.com"
                className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-primary-foreground/80">
              © {currentYear} Ana Beatriz. Todos os direitos reservados.
            </div>
            
            <div className="flex items-center text-sm text-primary-foreground/80">
              <span>Feito com</span>
              <Heart className="h-4 w-4 mx-2 text-red-400 fill-current" />
              <span>e muito ☕</span>
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <div className="code-block inline-block px-4 py-2 rounded text-xs bg-primary-foreground/10">
              <span className="text-primary-foreground/60">// Obrigada pela visita!</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;