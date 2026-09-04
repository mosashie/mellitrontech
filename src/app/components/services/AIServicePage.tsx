import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { motion } from "motion/react";
import { Brain, ArrowRight, Cpu, Zap, Network } from "lucide-react";

interface AIServicePageProps {
  onNavigate: (page: string) => void;
}

export function AIServicePage({ onNavigate }: AIServicePageProps) {
  return (
    <div className="min-h-screen">
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center space-y-8">
          <Badge className="w-fit mx-auto glass-morphism neon-border px-4 py-2">
            <Brain className="w-4 h-4 mr-2 text-primary" />
            AI Development
          </Badge>
          
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
            🤖 Intelligent{" "}
            <span className="hacker-text bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent glow-text">
              AI Solutions
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Harness the power of artificial intelligence to automate processes, gain insights, and create intelligent applications.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              { icon: Brain, title: "Machine Learning", desc: "Custom ML models and algorithms" },
              { icon: Zap, title: "AI Integration", desc: "Seamless AI-powered features" },
              { icon: Cpu, title: "Deep Learning", desc: "Neural networks and advanced AI" }
            ].map((item, index) => (
              <Card key={index} className="glass-morphism border-white/60 shadow-[0_0_20px_rgba(255,255,255,0.3)] p-6">
                <CardContent className="text-center space-y-4">
                  <item.icon className="w-12 h-12 mx-auto text-white" />
                  <h3 className="font-bold text-white">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              onClick={() => onNavigate("service-ai-request")}
              className="bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:from-primary/80 hover:to-secondary/80 px-8 py-4 glow-effect mt-8"
            >
              Build AI Solution
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}