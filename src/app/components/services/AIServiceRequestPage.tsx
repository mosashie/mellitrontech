import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Checkbox } from "../ui/checkbox";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { motion } from "motion/react";
import { 
  Brain, 
  ArrowRight, 
  Users,
  Target,
  Settings,
  Database,
  FileText,
  Clock,
  Cpu,
  Zap,
  Shield,
  BarChart3
} from "lucide-react";

interface AIServiceRequestPageProps {
  onNavigate: (page: string) => void;
}

export function AIServiceRequestPage({ onNavigate }: AIServiceRequestPageProps) {
  const [formData, setFormData] = useState({
    // Contact Information
    name: "",
    email: "",
    company: "",
    phone: "",
    
    // Project Details
    projectName: "",
    projectDescription: "",
    aiType: "",
    industry: "",
    
    // AI Requirements
    aiSolutions: [] as string[],
    dataTypes: [] as string[],
    integrationNeeds: "",
    
    // Technical Requirements
    platformPreference: "",
    scalabilityNeeds: "",
    performanceRequirements: "",
    
    // Data & Privacy
    dataAvailability: "",
    privacyRequirements: "",
    complianceNeeds: "",
    
    // Project Scope
    timeline: "",
    budget: "",
    teamSize: "",
    
    // Additional Information
    additionalNotes: "",
    priorities: [] as string[],
    hearAboutUs: ""
  });

  const handleInputChange = (field: string, value: string | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleCheckboxChange = (field: string, value: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: checked 
        ? [...(prev[field as keyof typeof prev] as string[]), value]
        : (prev[field as keyof typeof prev] as string[]).filter(item => item !== value)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("AI Service Request:", formData);
    alert("Thank you! Your AI development request has been submitted. We'll contact you within 24 hours.");
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center space-y-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Badge variant="secondary" className="w-fit mx-auto glass-morphism neon-border px-4 py-2">
            <Brain className="w-4 h-4 mr-2 text-primary" />
            AI Development Request
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold hacker-text">
            🤖 Let's Build Your{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent glow-text">
              AI Solution
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Share your AI vision and requirements. Our machine learning experts will create a comprehensive proposal for your intelligent solution.
          </p>
        </motion.div>

        <form onSubmit={handleSubmit} className="space-y-8">
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
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="projectName">Project Name *</Label>
                    <Input
                      id="projectName"
                      value={formData.projectName}
                      onChange={(e) => handleInputChange("projectName", e.target.value)}
                      placeholder="Your AI project name"
                      required
                      className="glass-morphism"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="aiType">AI Solution Type *</Label>
                    <Select onValueChange={(value) => handleInputChange("aiType", value)}>
                      <SelectTrigger className="glass-morphism">
                        <SelectValue placeholder="Select AI type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="machine-learning">Machine Learning Model</SelectItem>
                        <SelectItem value="nlp">Natural Language Processing</SelectItem>
                        <SelectItem value="computer-vision">Computer Vision</SelectItem>
                        <SelectItem value="chatbot">AI Chatbot</SelectItem>
                        <SelectItem value="recommendation">Recommendation Engine</SelectItem>
                        <SelectItem value="predictive">Predictive Analytics</SelectItem>
                        <SelectItem value="automation">Process Automation</SelectItem>
                        <SelectItem value="custom">Custom AI Solution</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="industry">Industry/Sector *</Label>
                    <Select onValueChange={(value) => handleInputChange("industry", value)}>
                      <SelectTrigger className="glass-morphism">
                        <SelectValue placeholder="Select industry" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="healthcare">Healthcare</SelectItem>
                        <SelectItem value="finance">Finance/Banking</SelectItem>
                        <SelectItem value="retail">Retail/E-commerce</SelectItem>
                        <SelectItem value="manufacturing">Manufacturing</SelectItem>
                        <SelectItem value="education">Education</SelectItem>
                        <SelectItem value="technology">Technology</SelectItem>
                        <SelectItem value="automotive">Automotive</SelectItem>
                        <SelectItem value="real-estate">Real Estate</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="projectDescription">Project Description *</Label>
                  <Textarea
                    id="projectDescription"
                    value={formData.projectDescription}
                    onChange={(e) => handleInputChange("projectDescription", e.target.value)}
                    placeholder="Describe your AI project goals, current challenges, and what you want to achieve..."
                    required
                    className="glass-morphism min-h-[120px]"
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* AI Solutions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="glass-morphism neon-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary hacker-text">
                  <Cpu className="w-5 h-5" />
                  AI Solutions Needed
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <Label>AI Capabilities Required (Select all that apply)</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      "Data Analysis & Insights",
                      "Predictive Modeling",
                      "Natural Language Understanding",
                      "Image/Video Recognition",
                      "Speech Recognition",
                      "Recommendation Systems",
                      "Anomaly Detection",
                      "Classification",
                      "Clustering",
                      "Time Series Forecasting",
                      "Sentiment Analysis",
                      "Automated Decision Making",
                      "Pattern Recognition",
                      "Optimization",
                      "Conversational AI",
                      "Content Generation"
                    ].map((solution) => (
                      <div key={solution} className="flex items-center space-x-2">
                        <Checkbox
                          id={solution}
                          checked={formData.aiSolutions.includes(solution)}
                          onCheckedChange={(checked) => 
                            handleCheckboxChange("aiSolutions", solution, checked as boolean)
                          }
                        />
                        <Label htmlFor={solution} className="text-sm">{solution}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <Label>Data Types You Have</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      "Structured Data (CSV, Database)",
                      "Text Data",
                      "Images",
                      "Videos",
                      "Audio",
                      "Time Series Data",
                      "Sensor Data",
                      "Log Files",
                      "Social Media Data",
                      "Financial Data",
                      "Customer Data",
                      "No existing data"
                    ].map((dataType) => (
                      <div key={dataType} className="flex items-center space-x-2">
                        <Checkbox
                          id={dataType}
                          checked={formData.dataTypes.includes(dataType)}
                          onCheckedChange={(checked) => 
                            handleCheckboxChange("dataTypes", dataType, checked as boolean)
                          }
                        />
                        <Label htmlFor={dataType} className="text-sm">{dataType}</Label>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Technical Requirements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="glass-morphism neon-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary hacker-text">
                  <Settings className="w-5 h-5" />
                  Technical Requirements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Label>Platform Preference</Label>
                    <RadioGroup 
                      value={formData.platformPreference} 
                      onValueChange={(value) => handleInputChange("platformPreference", value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="cloud" id="platform-cloud" />
                        <Label htmlFor="platform-cloud">Cloud-based solution</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="on-premise" id="platform-premise" />
                        <Label htmlFor="platform-premise">On-premise deployment</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="hybrid" id="platform-hybrid" />
                        <Label htmlFor="platform-hybrid">Hybrid solution</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="recommend" id="platform-recommend" />
                        <Label htmlFor="platform-recommend">Need recommendation</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-3">
                    <Label>Scalability Needs</Label>
                    <RadioGroup 
                      value={formData.scalabilityNeeds} 
                      onValueChange={(value) => handleInputChange("scalabilityNeeds", value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="small" id="scale-small" />
                        <Label htmlFor="scale-small">Small scale (prototype)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="medium" id="scale-medium" />
                        <Label htmlFor="scale-medium">Medium scale (production)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="enterprise" id="scale-enterprise" />
                        <Label htmlFor="scale-enterprise">Enterprise scale</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="integrationNeeds">Integration Requirements</Label>
                  <Textarea
                    id="integrationNeeds"
                    value={formData.integrationNeeds}
                    onChange={(e) => handleInputChange("integrationNeeds", e.target.value)}
                    placeholder="Describe any existing systems, APIs, or databases you need to integrate with..."
                    className="glass-morphism"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="performanceRequirements">Performance Requirements</Label>
                  <Textarea
                    id="performanceRequirements"
                    value={formData.performanceRequirements}
                    onChange={(e) => handleInputChange("performanceRequirements", e.target.value)}
                    placeholder="Specify performance requirements (response time, accuracy, throughput, etc.)"
                    className="glass-morphism"
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Data & Privacy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Card className="glass-morphism neon-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary hacker-text">
                  <Shield className="w-5 h-5" />
                  Data & Privacy Requirements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <Label>Data Availability</Label>
                  <RadioGroup 
                    value={formData.dataAvailability} 
                    onValueChange={(value) => handleInputChange("dataAvailability", value)}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="ready" id="data-ready" />
                      <Label htmlFor="data-ready">Data is ready and accessible</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="partial" id="data-partial" />
                      <Label htmlFor="data-partial">Some data available, need more</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="collection" id="data-collection" />
                      <Label htmlFor="data-collection">Need help with data collection</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="synthetic" id="data-synthetic" />
                      <Label htmlFor="data-synthetic">Need synthetic data generation</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="privacyRequirements">Privacy & Security Requirements</Label>
                  <Textarea
                    id="privacyRequirements"
                    value={formData.privacyRequirements}
                    onChange={(e) => handleInputChange("privacyRequirements", e.target.value)}
                    placeholder="Describe any privacy, security, or data protection requirements..."
                    className="glass-morphism"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="complianceNeeds">Compliance Requirements</Label>
                  <Textarea
                    id="complianceNeeds"
                    value={formData.complianceNeeds}
                    onChange={(e) => handleInputChange("complianceNeeds", e.target.value)}
                    placeholder="Any compliance requirements (GDPR, HIPAA, SOX, etc.)"
                    className="glass-morphism"
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Project Timeline & Budget */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Card className="glass-morphism neon-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary hacker-text">
                  <Clock className="w-5 h-5" />
                  Project Timeline & Budget
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Label>Expected Timeline</Label>
                    <Select onValueChange={(value) => handleInputChange("timeline", value)}>
                      <SelectTrigger className="glass-morphism">
                        <SelectValue placeholder="Select timeline" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-3months">1-3 months (Proof of Concept)</SelectItem>
                        <SelectItem value="3-6months">3-6 months (MVP)</SelectItem>
                        <SelectItem value="6-12months">6-12 months (Full Solution)</SelectItem>
                        <SelectItem value="12+months">12+ months (Enterprise)</SelectItem>
                        <SelectItem value="flexible">Flexible timeline</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-3">
                    <Label>Budget Range</Label>
                    <Select onValueChange={(value) => handleInputChange("budget", value)}>
                      <SelectTrigger className="glass-morphism">
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-25k">Under $25,000</SelectItem>
                        <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                        <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                        <SelectItem value="100k-250k">$100,000 - $250,000</SelectItem>
                        <SelectItem value="250k+">$250,000+</SelectItem>
                        <SelectItem value="discuss">Prefer to discuss</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-3">
                  <Label>Project Priorities (Select top 3)</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      "Accuracy/Performance",
                      "Fast implementation",
                      "Scalability",
                      "Cost effectiveness",
                      "Data security",
                      "User experience",
                      "Interpretability",
                      "Maintenance ease"
                    ].map((priority) => (
                      <div key={priority} className="flex items-center space-x-2">
                        <Checkbox
                          id={priority}
                          checked={formData.priorities.includes(priority)}
                          onCheckedChange={(checked) => 
                            handleCheckboxChange("priorities", priority, checked as boolean)
                          }
                        />
                        <Label htmlFor={priority} className="text-sm">{priority}</Label>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Additional Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Card className="glass-morphism neon-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary hacker-text">
                  <FileText className="w-5 h-5" />
                  Additional Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="additionalNotes">Additional Notes & Requirements</Label>
                  <Textarea
                    id="additionalNotes"
                    value={formData.additionalNotes}
                    onChange={(e) => handleInputChange("additionalNotes", e.target.value)}
                    placeholder="Any other important details, specific AI models you're interested in, or questions about the project..."
                    className="glass-morphism min-h-[100px]"
                  />
                </div>

                <div className="space-y-3">
                  <Label>How did you hear about us?</Label>
                  <Select onValueChange={(value) => handleInputChange("hearAboutUs", value)}>
                    <SelectTrigger className="glass-morphism">
                      <SelectValue placeholder="Select source" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="google">Google Search</SelectItem>
                      <SelectItem value="social">Social Media</SelectItem>
                      <SelectItem value="referral">Referral</SelectItem>
                      <SelectItem value="conference">Conference/Event</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Submit Button */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Button
              type="submit"
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 text-primary-foreground px-12 py-4 glow-effect group"
            >
              Submit AI Development Request
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              We'll review your request and provide a detailed AI solution proposal within 24 hours.
            </p>
          </motion.div>
        </form>
      </div>
    </div>
  );
}