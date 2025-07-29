import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="hero-section min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-gray-200 to-gray-400 flex items-center justify-center text-4xl font-bold text-gray-800">
              AB
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-hero-text mb-6">
            Ana Beatriz
          </h1>
          
          <div className="code-block inline-block px-6 py-3 rounded-lg mb-6 animate-slide-in">
            <span className="text-gray-400">const</span>{" "}
            <span className="text-white">developer</span>{" "}
            <span className="text-gray-400">=</span>{" "}
            <span className="text-green-400">"Full Stack"</span>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Estudante de Ciência da Computação, 22 anos
            <br />
            Apaixonada por tecnologia e criando soluções inovadoras
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-white text-black hover:bg-gray-100 transition-all duration-300">
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black transition-all duration-300">
              Ver Projetos
            </Button>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a href="#" className="p-3 rounded-full border border-gray-600 hover:border-white hover:bg-white hover:text-black transition-all duration-300 group">
              <Github className="h-6 w-6" />
            </a>
            <a href="#" className="p-3 rounded-full border border-gray-600 hover:border-white hover:bg-white hover:text-black transition-all duration-300 group">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="#" className="p-3 rounded-full border border-gray-600 hover:border-white hover:bg-white hover:text-black transition-all duration-300 group">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;