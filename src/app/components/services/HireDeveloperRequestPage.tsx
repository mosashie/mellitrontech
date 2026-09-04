import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { motion } from "motion/react";
import { 
  UserPlus, 
  ArrowRight, 
  Users,
  Target,
  Clock,
  DollarSign
} from "lucide-react";

interface HireDeveloperRequestPageProps {
  onNavigate: (page: string) => void;
}

export function HireDeveloperRequestPage({ onNavigate }: HireDeveloperRequestPageProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    developerType: "",
    skillsRequired: "",
    projectDescription: "",
    duration: "",
    budget: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Hire Developer Request:", formData);
    alert("Thank you! Your developer hiring request has been submitted. We'll contact you within 24 hours.");
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center space-y-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Badge variant="secondary" className="w-fit mx-auto glass-morphism neon-border px-4 py-2">
            <UserPlus className="w-4 h-4 mr-2 text-primary" />
            Hire Developer Request
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold hacker-text">
            👨‍💻 Hire Expert{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent glow-text">
              Developers
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find skilled developers for your project. We'll match you with the perfect talent for your specific needs.
          </p>
        </motion.div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className="glass-morphism neon-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary hacker-text">
                  <Users className="w-5 h-5" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Your full name"
                      required
                      className="glass-morphism"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="your@email.com"
                      required
                      className="glass-morphism"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company/Organization *</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      placeholder="Your company name"
                      required
                      className="glass-morphism"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="+1 (555) 123-4567"
                      className="glass-morphism"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Developer Requirements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="glass-morphism neon-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary hacker-text">
                  <Target className="w-5 h-5" />
                  Developer Requirements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="developerType">Developer Type *</Label>
                  <Select onValueChange={(value) => handleInputChange("developerType", value)}>
                    <SelectTrigger className="glass-morphism">
                      <SelectValue placeholder="Select developer type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="frontend">Frontend Developer</SelectItem>
                      <SelectItem value="backend">Backend Developer</SelectItem>
                      <SelectItem value="fullstack">Full-Stack Developer</SelectItem>
                      <SelectItem value="mobile">Mobile App Developer</SelectItem>
                      <SelectItem value="react">React Developer</SelectItem>
                      <SelectItem value="nodejs">Node.js Developer</SelectItem>
                      <SelectItem value="python">Python Developer</SelectItem>
                      <SelectItem value="php">PHP Developer</SelectItem>
                      <SelectItem value="wordpress">WordPress Developer</SelectItem>
                      <SelectItem value="shopify">Shopify Developer</SelectItem>
                      <SelectItem value="blockchain">Blockchain Developer</SelectItem>
                      <SelectItem value="ai-ml">AI/ML Developer</SelectItem>
                      <SelectItem value="devops">DevOps Engineer</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="skillsRequired">Required Skills & Technologies *</Label>
                  <Textarea
                    id="skillsRequired"
                    value={formData.skillsRequired}
                    onChange={(e) => handleInputChange("skillsRequired", e.target.value)}
                    placeholder="List the specific skills, technologies, frameworks, and tools required for your project..."
                    required
                    className="glass-morphism min-h-[80px]"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="projectDescription">Project Description *</Label>
                  <Textarea
                    id="projectDescription"
                    value={formData.projectDescription}
                    onChange={(e) => handleInputChange("projectDescription", e.target.value)}
                    placeholder="Describe your project, what the developer will be working on, and any specific requirements..."
                    required
                    className="glass-morphism min-h-[100px]"
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Duration & Budget */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="glass-morphism neon-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary hacker-text">
                  <Clock className="w-5 h-5" />
                  Duration & Budget
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="duration">Project Duration</Label>
                    <Select onValueChange={(value) => handleInputChange("duration", value)}>
                      <SelectTrigger className="glass-morphism">
                        <SelectValue placeholder="Select duration" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1week">1 week</SelectItem>
                        <SelectItem value="2-4weeks">2-4 weeks</SelectItem>
                        <SelectItem value="1-2months">1-2 months</SelectItem>
                        <SelectItem value="3-6months">3-6 months</SelectItem>
                        <SelectItem value="6+months">6+ months</SelectItem>
                        <SelectItem value="ongoing">Ongoing/Long-term</SelectItem>
                        <SelectItem value="flexible">Flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="budget">Budget Range</Label>
                    <Select onValueChange={(value) => handleInputChange("budget", value)}>
                      <SelectTrigger className="glass-morphism">
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-2k">Under $2,000</SelectItem>
                        <SelectItem value="2k-5k">$2,000 - $5,000</SelectItem>
                        <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                        <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                        <SelectItem value="25k+">$25,000+</SelectItem>
                        <SelectItem value="hourly-25-50">$25-50/hour</SelectItem>
                        <SelectItem value="hourly-50-100">$50-100/hour</SelectItem>
                        <SelectItem value="hourly-100+">$100+/hour</SelectItem>
                        <SelectItem value="discuss">Prefer to discuss</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Submit Button */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button
              type="submit"
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 text-primary-foreground px-12 py-4 glow-effect group"
            >
              Find My Developer
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              We'll review your requirements and get back to you within 24 hours with qualified developer profiles.
            </p>
          </motion.div>
        </form>
      </div>
    </div>
  );
}