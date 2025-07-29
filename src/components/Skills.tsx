import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const frontendSkills = [
    { name: "React", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "JavaScript", level: 90 },
    { name: "HTML/CSS", level: 95 },
    { name: "Tailwind CSS", level: 85 }
  ];

  const backendSkills = [
    { name: "Node.js", level: 75 },
    { name: "Python", level: 80 },
    { name: "Java", level: 70 },
    { name: "SQL", level: 85 },
    { name: "MongoDB", level: 75 }
  ];

  const tools = [
    "Git", "GitHub", "VS Code", "Figma", "Docker", "Linux", 
    "AWS", "Firebase", "Postman", "Jest", "Webpack", "Vite"
  ];

  return (
    <section id="habilidades" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Habilidades Técnicas</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Minhas competências técnicas em desenvolvimento full stack
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Frontend */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <span className="text-2xl mr-3">🎨</span>
                Frontend Development
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {frontendSkills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Backend */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <span className="text-2xl mr-3">⚙️</span>
                Backend Development
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {backendSkills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Tools */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <span className="text-2xl mr-3">🛠️</span>
                Ferramentas & Tecnologias
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <Badge 
                    key={tool} 
                    variant="secondary" 
                    className="text-sm py-1 px-3 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {tool}
                  </Badge>
                ))}
              </div>
              
              <div className="mt-6 code-block p-4 rounded-lg">
                <div className="text-sm">
                  <span className="text-gray-400">// Sempre aprendendo</span>
                  <br />
                  <span className="text-blue-400">const</span>{" "}
                  <span className="text-white">mindset</span>{" "}
                  <span className="text-gray-400">=</span>{" "}
                  <span className="text-green-400">"growth"</span>
                  <span className="text-gray-400">;</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;