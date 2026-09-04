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
  Palette, 
  ArrowRight, 
  Users,
  Target,
  Clock,
  DollarSign
} from "lucide-react";

interface UIUXServiceRequestPageProps {
  onNavigate: (page: string) => void;
}

export function UIUXServiceRequestPage({ onNavigate }: UIUXServiceRequestPageProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    projectType: "",
    projectDescription: "",
    timeline: "",
    budget: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("UI/UX Service Request:", formData);
    alert("Thank you! Your UI/UX design request has been submitted. We'll contact you within 24 hours.");
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
            <Palette className="w-4 h-4 mr-2 text-primary" />
            UI/UX Design Request
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold hacker-text">
            🎨 Start Your{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent glow-text">
              Design Project
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tell us about your design needs. We'll create stunning user experiences that convert and delight your users.
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
                    <Label htmlFor="company">Company/Organization</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      placeholder="Your company name"
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

          {/* Project Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="glass-morphism neon-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary hacker-text">
                  <Target className="w-5 h-5" />
                  Project Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="projectType">Design Service Type *</Label>
                  <Select onValueChange={(value) => handleInputChange("projectType", value)}>
                    <SelectTrigger className="glass-morphism">
                      <SelectValue placeholder="Select your design service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="website-design">Website Design</SelectItem>
                      <SelectItem value="app-design">Mobile App Design</SelectItem>
                      <SelectItem value="dashboard-design">Dashboard/Admin Panel Design</SelectItem>
                      <SelectItem value="landing-page">Landing Page Design</SelectItem>
                      <SelectItem value="brand-identity">Brand Identity & Logo</SelectItem>
                      <SelectItem value="ui-redesign">UI/UX Redesign</SelectItem>
                      <SelectItem value="prototyping">Prototyping & Wireframing</SelectItem>
                      <SelectItem value="user-research">User Research & Testing</SelectItem>
                      <SelectItem value="design-system">Design System Creation</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="projectDescription">Project Description *</Label>
                  <Textarea
                    id="projectDescription"
                    value={formData.projectDescription}
                    onChange={(e) => handleInputChange("projectDescription", e.target.value)}
                    placeholder="Describe your design project, target audience, style preferences, and goals..."
                    required
                    className="glass-morphism min-h-[100px]"
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Timeline & Budget */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="glass-morphism neon-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary hacker-text">
                  <Clock className="w-5 h-5" />
                  Timeline & Budget
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="timeline">Expected Timeline</Label>
                    <Select onValueChange={(value) => handleInputChange("timeline", value)}>
                      <SelectTrigger className="glass-morphism">
                        <SelectValue placeholder="Select timeline" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="asap">ASAP (Rush project)</SelectItem>
                        <SelectItem value="1-2weeks">1-2 weeks</SelectItem>
                        <SelectItem value="3-4weeks">3-4 weeks</SelectItem>
                        <SelectItem value="1-2months">1-2 months</SelectItem>
                        <SelectItem value="2+months">2+ months</SelectItem>
                        <SelectItem value="flexible">Flexible timeline</SelectItem>
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
                        <SelectItem value="10k-20k">$10,000 - $20,000</SelectItem>
                        <SelectItem value="20k+">$20,000+</SelectItem>
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
              Submit Design Request
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              We'll review your request and get back to you within 24 hours with a detailed proposal.
            </p>
          </motion.div>
        </form>
      </div>
    </div>
  );
}