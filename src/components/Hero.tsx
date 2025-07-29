import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="hero-section min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <div className="mb-8">
            <div className="w-40 h-40 mx-auto mb-8 rounded-full overflow-hidden shadow-2xl accent-glow border-4 border-white/20">
              <img 
                src="/lovable-uploads/8b527852-4a72-4fde-afe7-4ac8dcfe9710.png" 
                alt="Ana Beatriz" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black text-hero-text mb-8 tracking-tight">
            Ana Beatriz
          </h1>
          
          <div className="code-block inline-block px-8 py-4 rounded-xl mb-8 animate-slide-in font-mono text-lg">
            <span className="text-blue-400">const</span>{" "}
            <span className="text-white">developer</span>{" "}
            <span className="text-gray-400">=</span>{" "}
            <span className="text-green-400">"Full Stack"</span><span className="text-gray-400">;</span>
          </div>
          
          <div className="gradient-text text-2xl md:text-3xl font-bold mb-4">
            Desenvolvedora Full Stack
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Estudante de Ciência da Computação, 22 anos
            <br />
            Transformando ideias em código e criando experiências digitais únicas
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button size="lg" className="modern-gradient text-white hover:scale-105 transition-all duration-300 shadow-2xl px-8 py-4 text-lg font-semibold">
              <Download className="mr-3 h-6 w-6" />
              Download CV
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 px-8 py-4 text-lg font-semibold">
              Ver Projetos
            </Button>
          </div>
          
          <div className="flex justify-center space-x-8">
            <a 
              href="https://github.com/AnaBeatriz-devfs" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 rounded-xl border-2 border-gray-600 hover:border-white hover:bg-white hover:text-black transition-all duration-300 group hover:scale-110 hover:shadow-xl"
            >
              <Github className="h-7 w-7" />
            </a>
            <a 
              href="https://www.linkedin.com/in/ana-beatriz777/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 rounded-xl border-2 border-gray-600 hover:border-white hover:bg-white hover:text-black transition-all duration-300 group hover:scale-110 hover:shadow-xl"
            >
              <Linkedin className="h-7 w-7" />
            </a>
            <a 
              href="mailto:anyysaitou24@gmail.com"
              className="p-4 rounded-xl border-2 border-gray-600 hover:border-white hover:bg-white hover:text-black transition-all duration-300 group hover:scale-110 hover:shadow-xl"
            >
              <Mail className="h-7 w-7" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-8 h-12 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1.5 h-4 bg-gray-400 rounded-full mt-3 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;