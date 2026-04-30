import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone, Send, Github, Linkedin } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contato de ${formData.name}`);
    const body = encodeURIComponent(
      `Nome: ${formData.name}\nEmail: ${formData.email}\n\nMensagem:\n${formData.message}`
    );
    window.location.href = `mailto:Analimabea09@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contato" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Vamos Conversar?</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estou sempre aberta a novas oportunidades e projetos interessantes. 
            Entre em contato comigo!
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Informações de Contato</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">Analimabea09@gmail.com</p>
                  </div>
                </div>
                
                 <div className="flex items-center space-x-4">
                   <div className="p-3 bg-primary/10 rounded-lg">
                     <Phone className="h-6 w-6 text-primary" />
                   </div>
                   <div>
                     <p className="font-medium">Telefone</p>
                     <p className="text-muted-foreground">(81) 99721-4369</p>
                   </div>
                 </div>
                 
                 <div className="flex items-center space-x-4">
                   <div className="p-3 bg-primary/10 rounded-lg">
                     <MapPin className="h-6 w-6 text-primary" />
                   </div>
                   <div>
                     <p className="font-medium">Localização</p>
                     <p className="text-muted-foreground">Recife, Pernambuco</p>
                   </div>
                 </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Redes Sociais</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/Anadevfs" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 border border-border rounded-lg hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
                >
                  <Github className="h-6 w-6 group-hover:text-primary transition-colors" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/ana-beatriz777/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 border border-border rounded-lg hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
                >
                  <Linkedin className="h-6 w-6 group-hover:text-primary transition-colors" />
                </a>
                <a 
                  href="mailto:Analimabea09@gmail.com"
                  className="p-3 border border-border rounded-lg hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
                >
                  <Mail className="h-6 w-6 group-hover:text-primary transition-colors" />
                </a>
              </div>
            </div>
            
            <div className="code-block p-6 rounded-lg">
              <pre className="text-sm">
{`// Disponível para oportunidades
const developer = {
  name: "Ana Beatriz",
  available: true,
  interests: [
    "Frontend Development",
    "Backend Development", 
    "UI/UX Design",
    "Mobile Development"
  ],
  github: "Anadevfs",
  email: "Analimabea09@gmail.com"
};`}
              </pre>
            </div>
          </div>
          
          {/* Contact Form */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle>Envie uma Mensagem</CardTitle>
              <CardDescription>
                Preencha o formulário abaixo e entrarei em contato em breve
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Seu nome completo"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu.email@exemplo.com"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Mensagem</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Conte-me sobre seu projeto ou oportunidade..."
                    rows={5}
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 transition-colors">
                  <Send className="h-4 w-4 mr-2" />
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;