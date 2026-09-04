import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { motion } from "motion/react";
import { TrendingUp, ArrowRight, Search, BarChart, Target } from "lucide-react";

interface SEOServicePageProps {
  onNavigate: (page: string) => void;
}

export function SEOServicePage({ onNavigate }: SEOServicePageProps) {
  return (
    <div className="min-h-screen">
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center space-y-8">
          <Badge className="w-fit mx-auto glass-morphism neon-border px-4 py-2">
            <TrendingUp className="w-4 h-4 mr-2 text-primary" />
            SEO & Marketing
          </Badge>
          
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
            📈 Boost Your{" "}
            <span className="hacker-text bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent glow-text">
              Online Presence
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Drive organic traffic and increase conversions with data-driven SEO strategies and digital marketing campaigns.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              { icon: Search, title: "SEO Optimization", desc: "Rank higher in search results" },
              { icon: BarChart, title: "Analytics & Reporting", desc: "Track performance and ROI" },
              { icon: Target, title: "Targeted Campaigns", desc: "Reach your ideal audience" }
            ].map((item, index) => (
              <Card key={index} className="glass-morphism neon-border-blue p-6">
                <CardContent className="text-center space-y-4">
                  <item.icon className="w-12 h-12 mx-auto text-secondary" />
                  <h3 className="font-bold text-secondary">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              onClick={() => onNavigate("service-seo-request")}
              className="bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:from-primary/80 hover:to-secondary/80 px-8 py-4 glow-effect mt-8"
            >
              Start SEO Campaign
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}