import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
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
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://functions.poehali.dev/7649237f-ccb6-4270-a57c-531148191d89", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast({
          title: "Сообщение отправлено!",
          description: data.message,
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast({
          title: "Ошибка",
          description: data.error || "Проверьте правильность заполнения формы",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Не удалось отправить сообщение. Попробуйте позже.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
          <div className="max-w-2xl mx-auto">
            <Card className="p-8 md:p-12 bg-card/50 backdrop-blur-sm border-border">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Свяжитесь со мной
                </h2>
                <p className="text-muted-foreground text-lg">
                  Готов обсудить ваш проект
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Имя</label>
                  <Input
                    type="text"
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    minLength={2}
                    className="bg-background border-border focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input
                    type="email"
                    placeholder="ваш@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-background border-border focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Сообщение</label>
                  <Textarea
                    placeholder="Расскажите о вашем проекте..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    minLength={10}
                    rows={5}
                    className="bg-background border-border focus:border-primary resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group w-full px-10 py-5 bg-gradient-to-r from-primary to-secondary rounded-full font-bold text-xl transition-all hover:scale-105 hover:shadow-2xl hover:shadow-primary/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <>
                      Отправка...
                      <Icon name="Loader2" className="inline-block ml-2 animate-spin" size={22} />
                    </>
                  ) : (
                    <>
                      Отправить
                      <Icon name="Send" className="inline-block ml-2 transition-transform group-hover:translate-x-1" size={22} />
                    </>
                  )}
                </button>
              </form>
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