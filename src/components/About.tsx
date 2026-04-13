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
  "idade": 23,
  "formacao": "Ciência da Computação",
  "escola": "Infinity School",
  "especialidade": "Full Stack Development",
  "foco": "IA, Web, WordPress",
  "linguagens": "Python, Java, C++",
  "cyberseguranca": true,
  "localizacao": "Recife, PE",
  "github": "github.com/Anadevfs",
  "linkedin": "ana-beatriz777",
  "email": "Analimabea09@gmail.com"
}`}
              </pre>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Estudante de Ciência da Computação em formação na Infinity School, com foco em 
              desenvolvimento Full Stack. Especializo-me em Inteligência Artificial, 
              Desenvolvimento Web e WordPress, trabalhando com tecnologias como Python, Java e C++.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Além do desenvolvimento, tenho interesse em Cybersegurança e sempre busco 
              criar soluções inovadoras que combinem tecnologia e impacto social.
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
                <p className="text-muted-foreground">23 anos</p>
              </CardContent>
            </Card>
            
            <Card className="glass-card hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <MapPin className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">Localização</h3>
                <p className="text-muted-foreground">Recife, PE</p>
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