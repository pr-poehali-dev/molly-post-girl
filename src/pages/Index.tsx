import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

const skills = [
  { name: "React", level: 90, icon: "Code", color: "text-primary" },
  { name: "TypeScript", level: 85, icon: "FileCode", color: "text-secondary" },
  { name: "UI/UX Design", level: 80, icon: "Palette", color: "text-accent" },
  { name: "Node.js", level: 75, icon: "Server", color: "text-primary" },
  { name: "Tailwind CSS", level: 95, icon: "Sparkles", color: "text-secondary" },
  { name: "Git", level: 88, icon: "GitBranch", color: "text-accent" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      <div 
        className="absolute inset-0 opacity-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('https://cdn.poehali.dev/projects/21ad6ca0-0626-4f91-b91a-93d5bd3c7e4d/files/13ae14e3-2b0c-4cf4-a2ae-4aabc9ff952b.jpg')` }}
      />
      
      <div className="relative z-10">
        <section className="container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="inline-block mb-6">
              <Badge 
                variant="outline" 
                className="px-6 py-2 text-sm border-primary/50 bg-primary/10 text-primary animate-glow"
              >
                ✨ Открыт к новым проектам
              </Badge>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight">
              Разработчик
              <br />
              Полного Цикла
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-slide-up">
              Создаю современные веб-приложения с фокусом на UI/UX и производительность
            </p>
            
            <div className="flex gap-4 justify-center flex-wrap">
              <button className="group px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-full font-semibold text-lg transition-all hover:scale-105 hover:shadow-2xl hover:shadow-primary/50">
                Связаться
                <Icon name="ArrowRight" className="inline-block ml-2 transition-transform group-hover:translate-x-1" size={20} />
              </button>
              <button className="px-8 py-4 bg-card border border-border rounded-full font-semibold text-lg transition-all hover:scale-105 hover:border-primary">
                Посмотреть работы
              </button>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                Навыки
              </h2>
              <p className="text-muted-foreground text-lg">
                Технологии, с которыми я работаю
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <Card 
                  key={skill.name}
                  className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/20 animate-scale-in group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 ${skill.color} transition-transform group-hover:rotate-6`}>
                      <Icon name={skill.icon} size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{skill.name}</h3>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                  </div>
                  
                  <Progress 
                    value={skill.level} 
                    className="h-2 bg-muted"
                  />
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <Card className="p-12 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border-primary/20 backdrop-blur-sm">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Готов к сотрудничеству?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Свяжитесь со мной для обсуждения вашего проекта
              </p>
              <button className="group px-10 py-5 bg-gradient-to-r from-primary to-secondary rounded-full font-bold text-xl transition-all hover:scale-105 hover:shadow-2xl hover:shadow-primary/50">
                Написать мне
                <Icon name="Send" className="inline-block ml-2 transition-transform group-hover:translate-x-1" size={22} />
              </button>
            </Card>
          </div>
        </section>

        <footer className="container mx-auto px-4 py-8 text-center text-muted-foreground">
          <p>© 2024 Портфолио. Сделано с ❤️</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
