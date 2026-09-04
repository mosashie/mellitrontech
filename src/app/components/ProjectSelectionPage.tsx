import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { motion } from "motion/react";
import { 
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Clock,
  DollarSign
} from "lucide-react";

interface ProjectSelectionPageProps {
  onNavigate: (page: string) => void;
}

export function ProjectSelectionPage({ onNavigate }: ProjectSelectionPageProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            className="text-center space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Button
              variant="outline"
              onClick={() => onNavigate("get-started")}
              className="glass-morphism neon-border hover:bg-primary/10"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Services
            </Button>
            
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Project{" "}
              <span className="hacker-text bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent glow-text">
                Configuration
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              This page will contain the project selection and configuration workflow. Implementation coming soon!
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                onClick={() => onNavigate("contact")}
                className="bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:from-primary/80 hover:to-secondary/80 px-8 py-4 glow-effect"
              >
                Contact Us Instead
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}