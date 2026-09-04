import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Checkbox } from "./ui/checkbox";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Separator } from "./ui/separator";
import { motion } from "motion/react";
import { 
  UserPlus, 
  ArrowRight, 
  Users,
  Target,
  Settings,
  DollarSign,
  Clock,
  FileText,
  Terminal,
  Brain,
  Code,
  Network,
  Shield,
  Binary
} from "lucide-react";

interface RecruitmentPageProps {
  onNavigate: (page: string) => void;
}

export function RecruitmentPage({ onNavigate }: RecruitmentPageProps) {
  const [formData, setFormData] = useState({
    // Client Information
    name: "",
    email: "",
    company: "",
    phone: "",
    position: "",
    
    // Project Details
    projectName: "",
    projectDescription: "",
    projectType: "",
    industry: "",
    
    // Team Requirements
    roleType: "",
    skillsRequired: [] as string[],
    experienceLevel: "",
    teamSize: "",
    
    // Technical Requirements
    technologies: [] as string[],
    projectDuration: "",
    workLocation: "",
    workingHours: "",
    
    // Budget & Compensation
    budget: "",
    budgetType: "",
    urgency: "",
    
    // Additional Requirements
    additionalRequirements: "",
    interviewProcess: "",
    startDate: "",
    
    // Preferences
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
    console.log("Recruitment Request:", formData);
    alert("Thank you! Your recruitment request has been submitted. Our talent acquisition team will contact you within 24 hours.");
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
            <UserPlus className="w-4 h-4 mr-2 text-primary" />
            Elite Talent Recruitment
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold hacker-text">
            👨‍💻 Recruit Our{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent glow-text">
              Tech Experts
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connect with our elite team of developers, architects, and tech specialists. Tell us about your project needs and we'll match you with the perfect talent.
          </p>
          
          {/* Cyber Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            {[
              { icon: Brain, label: "AI Experts", value: "15+" },
              { icon: Network, label: "Blockchain Devs", value: "8+" },
              { icon: Code, label: "Full-Stack", value: "20+" },
              { icon: Shield, label: "DevOps", value: "12+" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="glass-morphism neon-border p-4 rounded-lg text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <stat.icon className="w-6 h-6 mx-auto text-primary mb-2" />
                <div className="text-2xl font-bold text-primary hacker-text">{stat.value}</div>
                <div className="text-xs text-muted-foreground font-mono">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Client Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className="glass-morphism neon-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary hacker-text">
                  <Terminal className="w-5 h-5" />
                  CLIENT.INITIALIZE()
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="font-mono">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Your full name"
                      required
                      className="glass-morphism font-mono"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-mono">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="your@company.com"
                      required
                      className="glass-morphism font-mono"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company" className="font-mono">Company/Organization *</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      placeholder="Your company name"
                      required
                      className="glass-morphism font-mono"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="position" className="font-mono">Your Position *</Label>
                    <Input
                      id="position"
                      value={formData.position}
                      onChange={(e) => handleInputChange("position", e.target.value)}
                      placeholder="e.g., CTO, Project Manager, etc."
                      required
                      className="glass-morphism font-mono"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="font-mono">Phone Number</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="+1 (555) 123-4567"
                      className="glass-morphism font-mono"
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
                  PROJECT.CONFIGURE()
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="projectName" className="font-mono">Project Name *</Label>
                    <Input
                      id="projectName"
                      value={formData.projectName}
                      onChange={(e) => handleInputChange("projectName", e.target.value)}
                      placeholder="Your project name"
                      required
                      className="glass-morphism font-mono"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="projectType" className="font-mono">Project Type *</Label>
                    <Select onValueChange={(value) => handleInputChange("projectType", value)}>
                      <SelectTrigger className="glass-morphism font-mono">
                        <SelectValue placeholder="Select project type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="web-app">Web Application</SelectItem>
                        <SelectItem value="mobile-app">Mobile Application</SelectItem>
                        <SelectItem value="blockchain">Blockchain Solution</SelectItem>
                        <SelectItem value="ai-ml">AI/ML Project</SelectItem>
                        <SelectItem value="ecommerce">E-commerce Platform</SelectItem>
                        <SelectItem value="enterprise">Enterprise Software</SelectItem>
                        <SelectItem value="saas">SaaS Product</SelectItem>
                        <SelectItem value="api">API Development</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="industry" className="font-mono">Industry Sector</Label>
                    <Select onValueChange={(value) => handleInputChange("industry", value)}>
                      <SelectTrigger className="glass-morphism font-mono">
                        <SelectValue placeholder="Select industry" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="fintech">FinTech</SelectItem>
                        <SelectItem value="healthcare">Healthcare</SelectItem>
                        <SelectItem value="ecommerce">E-commerce</SelectItem>
                        <SelectItem value="education">Education</SelectItem>
                        <SelectItem value="gaming">Gaming</SelectItem>
                        <SelectItem value="real-estate">Real Estate</SelectItem>
                        <SelectItem value="logistics">Logistics</SelectItem>
                        <SelectItem value="media">Media & Entertainment</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="projectDescription" className="font-mono">Project Description *</Label>
                  <Textarea
                    id="projectDescription"
                    value={formData.projectDescription}
                    onChange={(e) => handleInputChange("projectDescription", e.target.value)}
                    placeholder="Describe your project, objectives, current challenges, and what you want to achieve..."
                    required
                    className="glass-morphism min-h-[120px] font-mono"
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Team Requirements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="glass-morphism neon-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary hacker-text">
                  <Users className="w-5 h-5" />
                  TEAM.REQUIREMENTS()
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Label className="font-mono">Role Type *</Label>
                    <RadioGroup 
                      value={formData.roleType} 
                      onValueChange={(value) => handleInputChange("roleType", value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="individual" id="individual" />
                        <Label htmlFor="individual" className="font-mono">Individual Developer</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="team-lead" id="team-lead" />
                        <Label htmlFor="team-lead" className="font-mono">Team Lead</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="full-team" id="full-team" />
                        <Label htmlFor="full-team" className="font-mono">Full Development Team</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="consultant" id="consultant" />
                        <Label htmlFor="consultant" className="font-mono">Technical Consultant</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-3">
                    <Label className="font-mono">Experience Level *</Label>
                    <RadioGroup 
                      value={formData.experienceLevel} 
                      onValueChange={(value) => handleInputChange("experienceLevel", value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="junior" id="junior" />
                        <Label htmlFor="junior" className="font-mono">Junior (1-3 years)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="mid" id="mid" />
                        <Label htmlFor="mid" className="font-mono">Mid-level (3-6 years)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="senior" id="senior" />
                        <Label htmlFor="senior" className="font-mono">Senior (6+ years)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="expert" id="expert" />
                        <Label htmlFor="expert" className="font-mono">Expert/Architect (10+ years)</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>

                <div className="space-y-3">
                  <Label className="font-mono">Required Skills (Select all that apply)</Label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {[
                      "React/Next.js",
                      "Vue.js/Nuxt.js",
                      "Angular",
                      "Node.js",
                      "Python",
                      "Java",
                      "C#/.NET",
                      "PHP",
                      "Go",
                      "Rust",
                      "Flutter/Dart",
                      "React Native",
                      "iOS (Swift)",
                      "Android (Kotlin)",
                      "Solidity",
                      "Web3.js",
                      "TensorFlow",
                      "PyTorch",
                      "AWS",
                      "Azure",
                      "Google Cloud",
                      "Docker",
                      "Kubernetes",
                      "DevOps"
                    ].map((skill) => (
                      <div key={skill} className="flex items-center space-x-2">
                        <Checkbox
                          id={skill}
                          checked={formData.skillsRequired.includes(skill)}
                          onCheckedChange={(checked) => 
                            handleCheckboxChange("skillsRequired", skill, checked as boolean)
                          }
                        />
                        <Label htmlFor={skill} className="text-sm font-mono">{skill}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="teamSize" className="font-mono">Team Size Needed</Label>
                    <Select onValueChange={(value) => handleInputChange("teamSize", value)}>
                      <SelectTrigger className="glass-morphism font-mono">
                        <SelectValue placeholder="Select team size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 Developer</SelectItem>
                        <SelectItem value="2-3">2-3 Developers</SelectItem>
                        <SelectItem value="4-6">4-6 Developers</SelectItem>
                        <SelectItem value="7-10">7-10 Developers</SelectItem>
                        <SelectItem value="10+">10+ Developers</SelectItem>
                        <SelectItem value="flexible">Flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="projectDuration" className="font-mono">Project Duration</Label>
                    <Select onValueChange={(value) => handleInputChange("projectDuration", value)}>
                      <SelectTrigger className="glass-morphism font-mono">
                        <SelectValue placeholder="Select duration" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-4weeks">1-4 weeks</SelectItem>
                        <SelectItem value="1-3months">1-3 months</SelectItem>
                        <SelectItem value="3-6months">3-6 months</SelectItem>
                        <SelectItem value="6-12months">6-12 months</SelectItem>
                        <SelectItem value="12+months">12+ months</SelectItem>
                        <SelectItem value="ongoing">Ongoing</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Work Arrangement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="glass-morphism neon-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary hacker-text">
                  <Settings className="w-5 h-5" />
                  WORK.CONFIGURATION()
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Label className="font-mono">Work Location</Label>
                    <RadioGroup 
                      value={formData.workLocation} 
                      onValueChange={(value) => handleInputChange("workLocation", value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="remote" id="remote" />
                        <Label htmlFor="remote" className="font-mono">Remote</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="hybrid" id="hybrid" />
                        <Label htmlFor="hybrid" className="font-mono">Hybrid</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="onsite" id="onsite" />
                        <Label htmlFor="onsite" className="font-mono">On-site</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="flexible" id="flexible" />
                        <Label htmlFor="flexible" className="font-mono">Flexible</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-3">
                    <Label className="font-mono">Working Hours</Label>
                    <RadioGroup 
                      value={formData.workingHours} 
                      onValueChange={(value) => handleInputChange("workingHours", value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="full-time" id="full-time" />
                        <Label htmlFor="full-time" className="font-mono">Full-time (40+ hrs/week)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="part-time" id="part-time" />
                        <Label htmlFor="part-time" className="font-mono">Part-time (20-30 hrs/week)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="contract" id="contract" />
                        <Label htmlFor="contract" className="font-mono">Contract/Project-based</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="hourly" id="hourly" />
                        <Label htmlFor="hourly" className="font-mono">Hourly consultation</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="startDate" className="font-mono">Preferred Start Date</Label>
                  <Select onValueChange={(value) => handleInputChange("startDate", value)}>
                    <SelectTrigger className="glass-morphism font-mono">
                      <SelectValue placeholder="Select start date" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="immediate">Immediately</SelectItem>
                      <SelectItem value="1week">Within 1 week</SelectItem>
                      <SelectItem value="2weeks">Within 2 weeks</SelectItem>
                      <SelectItem value="1month">Within 1 month</SelectItem>
                      <SelectItem value="flexible">Flexible</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Budget & Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Card className="glass-morphism neon-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary hacker-text">
                  <DollarSign className="w-5 h-5" />
                  BUDGET.ALLOCATE()
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Label className="font-mono">Budget Type</Label>
                    <RadioGroup 
                      value={formData.budgetType} 
                      onValueChange={(value) => handleInputChange("budgetType", value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="hourly" id="budget-hourly" />
                        <Label htmlFor="budget-hourly" className="font-mono">Hourly Rate</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="monthly" id="budget-monthly" />
                        <Label htmlFor="budget-monthly" className="font-mono">Monthly Budget</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="project" id="budget-project" />
                        <Label htmlFor="budget-project" className="font-mono">Fixed Project Cost</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="budget" className="font-mono">Budget Range</Label>
                    <Select onValueChange={(value) => handleInputChange("budget", value)}>
                      <SelectTrigger className="glass-morphism font-mono">
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-5k">Under $5,000</SelectItem>
                        <SelectItem value="5k-15k">$5,000 - $15,000</SelectItem>
                        <SelectItem value="15k-35k">$15,000 - $35,000</SelectItem>
                        <SelectItem value="35k-75k">$35,000 - $75,000</SelectItem>
                        <SelectItem value="75k-150k">$75,000 - $150,000</SelectItem>
                        <SelectItem value="150k+">$150,000+</SelectItem>
                        <SelectItem value="hourly-50-100">$50-100/hour</SelectItem>
                        <SelectItem value="hourly-100-200">$100-200/hour</SelectItem>
                        <SelectItem value="hourly-200+">$200+/hour</SelectItem>
                        <SelectItem value="discuss">Prefer to discuss</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="urgency" className="font-mono">Project Urgency</Label>
                  <Select onValueChange={(value) => handleInputChange("urgency", value)}>
                    <SelectTrigger className="glass-morphism font-mono">
                      <SelectValue placeholder="Select urgency level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="critical">Critical - Need ASAP</SelectItem>
                      <SelectItem value="high">High - Within 1 week</SelectItem>
                      <SelectItem value="medium">Medium - Within 2-4 weeks</SelectItem>
                      <SelectItem value="low">Low - Flexible timeline</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Additional Requirements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Card className="glass-morphism neon-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary hacker-text">
                  <FileText className="w-5 h-5" />
                  ADDITIONAL.REQUIREMENTS()
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="additionalRequirements" className="font-mono">Special Requirements & Notes</Label>
                  <Textarea
                    id="additionalRequirements"
                    value={formData.additionalRequirements}
                    onChange={(e) => handleInputChange("additionalRequirements", e.target.value)}
                    placeholder="Any specific requirements, technologies, certifications, or important details about the project..."
                    className="glass-morphism min-h-[100px] font-mono"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="interviewProcess" className="font-mono">Interview & Selection Preferences</Label>
                  <Textarea
                    id="interviewProcess"
                    value={formData.interviewProcess}
                    onChange={(e) => handleInputChange("interviewProcess", e.target.value)}
                    placeholder="Describe your preferred interview process, technical assessments, or evaluation criteria..."
                    className="glass-morphism font-mono"
                  />
                </div>

                <div className="space-y-3">
                  <Label className="font-mono">Project Priorities (Select top 3)</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      "Fast delivery",
                      "High quality code",
                      "Cost effectiveness",
                      "Technical expertise",
                      "Communication skills",
                      "Industry experience",
                      "Team collaboration",
                      "Innovation & creativity"
                    ].map((priority) => (
                      <div key={priority} className="flex items-center space-x-2">
                        <Checkbox
                          id={priority}
                          checked={formData.priorities.includes(priority)}
                          onCheckedChange={(checked) => 
                            handleCheckboxChange("priorities", priority, checked as boolean)
                          }
                        />
                        <Label htmlFor={priority} className="text-sm font-mono">{priority}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="hearAboutUs" className="font-mono">How did you hear about us?</Label>
                  <Select onValueChange={(value) => handleInputChange("hearAboutUs", value)}>
                    <SelectTrigger className="glass-morphism font-mono">
                      <SelectValue placeholder="Select source" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="google">Google Search</SelectItem>
                      <SelectItem value="social">Social Media</SelectItem>
                      <SelectItem value="referral">Referral</SelectItem>
                      <SelectItem value="portfolio">Saw our portfolio</SelectItem>
                      <SelectItem value="team-page">From team page</SelectItem>
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
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Button
              type="submit"
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 text-primary-foreground px-12 py-4 glow-effect group hacker-text font-mono"
            >
              <Binary className="w-5 h-5 mr-2" />
              EXECUTE.RECRUITMENT()
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <p className="text-sm text-muted-foreground mt-4 font-mono">
              {'>'} Processing request... Our talent acquisition team will contact you within 24 hours.
            </p>
          </motion.div>
        </form>
      </div>
    </div>
  );
}