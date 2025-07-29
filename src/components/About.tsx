import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Calendar, MapPin, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Sobre Mim</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="code-block p-6 rounded-lg">
              <pre className="text-sm leading-relaxed">
{`{
  "nome": "Ana Beatriz",
  "idade": 22,
  "formacao": "Ciência da Computação",
  "status": "Formanda",
  "especialidade": "Full Stack Development",
  "paixao": "Criar soluções inovadoras",
  "github": "github.com/darussiak",
  "linkedin": "ana-beatriz777",
  "email": "anyysaitou24@gmail.com"
}`}
              </pre>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Sou uma desenvolvedora em formação apaixonada por tecnologia e inovação. 
              Atualmente cursando Ciência da Computação, dedico meu tempo a aprender 
              e aplicar conhecimentos tanto no frontend quanto no backend, sempre 
              buscando criar experiências digitais excepcionais.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Minha jornada na programação começou com curiosidade e se transformou 
              em paixão. Cada linha de código é uma oportunidade de resolver problemas 
              e criar algo impactante.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="glass-card hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <GraduationCap className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">Formação</h3>
                <p className="text-muted-foreground">Ciência da Computação</p>
              </CardContent>
            </Card>
            
            <Card className="glass-card hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Calendar className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">Idade</h3>
                <p className="text-muted-foreground">22 anos</p>
              </CardContent>
            </Card>
            
            <Card className="glass-card hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <MapPin className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">Localização</h3>
                <p className="text-muted-foreground">Brasil</p>
              </CardContent>
            </Card>
            
            <Card className="glass-card hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Heart className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">Paixão</h3>
                <p className="text-muted-foreground">Full Stack</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;