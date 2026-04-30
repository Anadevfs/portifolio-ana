import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Code } from "lucide-react";
import evaEncomendasImg from "@/assets/eva-encomendas.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Eva Escritórios",
      description: "Plataforma completa para escritórios com React, Node.js e integração com IA. Sistema full stack com frontend moderno, backend robusto e API de inteligência artificial.",
      image: "/placeholder-project-1.jpg",
      technologies: ["React", "Node.js", "IA API", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/Anadevfs",
      live: "https://evaescritorios.com.br/",
      status: "Concluído"
    },
    {
      id: 2,
      title: "Suape Eco Flow",
      description: "Plataforma para integração no site da SUAPE para trocas de resíduos. Sistema completo com frontend, backend e integração com API do OpenAI para otimização de processos.",
      image: "/placeholder-project-2.jpg",
      technologies: ["React", "Node.js", "OpenAI API", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/Anadevfs",
      live: "https://suape-eco.netlify.app/",
      status: "Concluído"
    },
    {
      id: 3,
      title: "Portfólio Pessoal",
      description: "Site pessoal moderno e responsivo desenvolvido com React e Tailwind CSS, apresentando projetos, habilidades técnicas e informações de contato com design minimalista e elegante.",
      image: "/placeholder-project-3.jpg",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      github: "https://github.com/Anadevfs",
      live: "https://anadevfs.netlify.app/",
      status: "Concluído"
    },
    {
      id: 4,
      title: "Controle de Encomendas EVA",
      description: "Sistema interno para gerenciamento de encomendas em escritórios virtuais e caixas postais. Permite registrar, comunicar e entregar encomendas em tempo real, com rastreabilidade completa e controle de funcionários, substituindo processos manuais com mais agilidade e segurança.",
      image: evaEncomendasImg,
      technologies: ["React", "TypeScript", "Tailwind CSS", "Java Spring Boot", "PostgreSQL", "Render"],
      github: "https://github.com/Anadevfs",
      live: "https://github.com/Anadevfs",
      status: "Concluído"
    }
  ];

  return (
    <section id="projetos" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Meus Projetos</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Alguns dos projetos que desenvolvi aplicando conhecimentos full stack
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="glass-card group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center overflow-hidden">
                {project.image && !project.image.startsWith("/placeholder") ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                ) : (
                  <Code className="h-16 w-16 text-gray-400" />
                )}
              </div>
              
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <Badge 
                    variant={project.status === "Concluído" ? "default" : "secondary"}
                    className="text-xs"
                  >
                    {project.status}
                  </Badge>
                </div>
                <CardDescription className="text-base leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex-1 hover:bg-primary hover:text-primary-foreground transition-colors"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Código
                    </a>
                  </Button>
                  <Button 
                    size="sm" 
                    className="flex-1 bg-primary hover:bg-primary/90 transition-colors"
                    asChild
                  >
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg" 
            className="hover:bg-primary hover:text-primary-foreground transition-colors"
            asChild
          >
            <a href="https://github.com/Anadevfs" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 mr-2" />
              Ver Mais Projetos no GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;