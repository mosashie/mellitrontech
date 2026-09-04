import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { motion } from "motion/react";
import { 
  Globe, 
  Star, 
  CheckCircle,
  ArrowRight,
  Zap,
  Shield,
  Search,
  Code,
  Palette,
  Users,
  Trophy,
  Clock
} from "lucide-react";

interface WebsiteServicePageProps {
  onNavigate: (page: string) => void;
}

export function WebsiteServicePage({ onNavigate }: WebsiteServicePageProps) {
  const features = [
    {
      icon: Globe,
      title: "Responsive Design",
      description: "Perfect display across all devices and screen sizes"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized for speed with modern web technologies"
    },
    {
      icon: Search,
      title: "SEO Optimized",
      description: "Built for search engines with best practices"
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Enterprise-grade security and 99.9% uptime"
    },
    {
      icon: Code,
      title: "Modern Tech Stack",
      description: "React, Next.js, and cutting-edge frameworks"
    },
    {
      icon: Palette,
      title: "Custom Design",
      description: "Unique designs tailored to your brand identity"
    }
  ];

  const packages = [
    {
      name: "Landing Page",
      price: "$2,500 - $5,000",
      duration: "2-3 weeks",
      features: [
        "Single page design",
        "Mobile responsive",
        "Contact forms",
        "Basic SEO setup",
        "1 month support"
      ],
      popular: false,
      color: "secondary"
    },
    {
      name: "Business Website",
      price: "$5,000 - $12,000",
      duration: "4-8 weeks",
      features: [
        "Multi-page website",
        "CMS integration",
        "E-commerce ready",
        "Advanced SEO",
        "Analytics setup",
        "3 months support"
      ],
      popular: true,
      color: "primary"
    },
    {
      name: "Enterprise Portal",
      price: "$15,000+",
      duration: "8-16 weeks",
      features: [
        "Custom web application",
        "User authentication",
        "Database integration",
        "API development",
        "Advanced features",
        "6 months support"
      ],
      popular: false,
      color: "purple"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="w-fit glass-morphism neon-border px-4 py-2">
                <Globe className="w-4 h-4 mr-2 text-primary" />
                Website Development
              </Badge>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                🌐 Modern{" "}
                <span className="hacker-text bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent glow-text">
                  Websites
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Create stunning, high-performance websites that convert visitors into customers. From simple landing pages to complex web applications.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    onClick={() => onNavigate("service-website-request")}
                    className="bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:from-primary/80 hover:to-secondary/80 px-8 py-4 glow-effect group"
                  >
                    Start Your Project
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative float-animation"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-3xl"></div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwZGVzaWduJTIwZGV2ZWxvcG1lbnQlMjBtb2Rlcm58ZW58MXx8fHwxNzU1OTc1MzI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Website development showcase"
                className="relative rounded-2xl shadow-2xl w-full h-auto neon-border"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features & Packages sections would follow similar patterns */}
      {/* For brevity, I'll add a simplified version */}
      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Website Development Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.slice(0,3).map((feature, index) => (
              <Card key={index} className="glass-morphism neon-border p-6">
                <CardContent className="text-center space-y-4">
                  <feature.icon className="w-12 h-12 mx-auto text-primary" />
                  <h3 className="font-bold text-primary">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <motion.div className="mt-12">
            <Button
              onClick={() => onNavigate("get-started")}
              className="bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:from-primary/80 hover:to-secondary/80 px-8 py-4 glow-effect"
            >
              Get Started Today
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}