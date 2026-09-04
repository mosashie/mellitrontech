import { useState } from "react";
import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Calendar } from "./ui/calendar";
import { Badge } from "./ui/badge";
import { 
  Calendar as CalendarIcon,
  Clock, 
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Users,
  Zap,
  Shield,
  Globe,
  Smartphone,
  Palette,
  Brain,
  Link,
  Search,
  Code
} from "lucide-react";

interface ConsultationPageProps {
  onNavigate: (page: string) => void;
}

export function ConsultationPage({ onNavigate }: ConsultationPageProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    serviceType: "",
    projectDescription: "",
    budget: "",
    timeline: "",
    goals: ""
  });

  const services = [
    {
      id: "flutter",
      name: "Flutter Mobile App",
      icon: Smartphone,
      description: "Cross-platform mobile applications",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: "website",
      name: "Website Development",
      icon: Globe,
      description: "Modern responsive websites",
      color: "from-green-500 to-emerald-500"
    },
    {
      id: "uiux",
      name: "UI/UX Design",
      icon: Palette,
      description: "User interface & experience design",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: "ai",
      name: "AI Integration",
      icon: Brain,
      description: "Artificial intelligence solutions",
      color: "from-orange-500 to-red-500"
    },
    {
      id: "blockchain",
      name: "Blockchain Solutions",
      icon: Link,
      description: "Decentralized applications",
      color: "from-indigo-500 to-purple-500"
    },
    {
      id: "seo",
      name: "SEO & Marketing",
      icon: Search,
      description: "Search engine optimization",
      color: "from-yellow-500 to-orange-500"
    },
    {
      id: "hire",
      name: "Hire Developers",
      icon: Code,
      description: "Remote development team",
      color: "from-teal-500 to-blue-500"
    }
  ];

  const timeSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Free 30-Minute Session",
      description: "No strings attached consultation"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Meet with senior developers"
    },
    {
      icon: Shield,
      title: "NDA Protection",
      description: "Your ideas are safe with us"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleServiceSelect = (serviceId: string) => {
    setFormData(prev => ({ ...prev, serviceType: serviceId }));
  };

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    console.log("Consultation booked:", {
      ...formData,
      date: selectedDate,
      time: selectedTime
    });
    setCurrentStep(5);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="text-center space-y-4">
              <h2 className="text-3xl hacker-text glow-text">
                Choose Your Service
              </h2>
              <p className="text-muted-foreground">
                Select the service you're most interested in discussing
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => {
                const Icon = service.icon;
                const isSelected = formData.serviceType === service.id;
                
                return (
                  <motion.div
                    key={service.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Card 
                      className={`cursor-pointer transition-all duration-300 ${
                        isSelected 
                          ? "neon-border glow-effect" 
                          : "glass-morphism hover:neon-border"
                      }`}
                      onClick={() => handleServiceSelect(service.id)}
                    >
                      <CardContent className="p-6 text-center space-y-4">
                        <div className={`w-16 h-16 mx-auto rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{service.name}</h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            {service.description}
                          </p>
                        </div>
                        {isSelected && (
                          <CheckCircle className="w-6 h-6 text-primary mx-auto" />
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        );

      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="text-center space-y-4">
              <h2 className="text-3xl hacker-text glow-text">
                Select Date & Time
              </h2>
              <p className="text-muted-foreground">
                Choose a convenient time for your consultation
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="glass-morphism">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CalendarIcon className="w-5 h-5" />
                    Select Date
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    className="rounded-md border"
                    disabled={(date) => date < new Date() || date.getDay() === 0 || date.getDay() === 6}
                  />
                </CardContent>
              </Card>

              <Card className="glass-morphism">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    Select Time (PST)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {timeSlots.map((time) => (
                      <Button
                        key={time}
                        variant={selectedTime === time ? "default" : "outline"}
                        className={`h-12 ${
                          selectedTime === time 
                            ? "bg-primary text-primary-foreground glow-effect" 
                            : "glass-morphism hover:neon-border"
                        }`}
                        onClick={() => setSelectedTime(time)}
                      >
                        {time}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        );

      case 3:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="text-center space-y-4">
              <h2 className="text-3xl hacker-text glow-text">
                Your Information
              </h2>
              <p className="text-muted-foreground">
                Tell us about yourself and your project
              </p>
            </div>

            <Card className="glass-morphism">
              <CardContent className="p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                      className="h-12 bg-input-background"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                      className="h-12 bg-input-background"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+1 (555) 123-4567"
                      className="h-12 bg-input-background"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="company">Company/Organization</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Your company name"
                      className="h-12 bg-input-background"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="budget">Project Budget</Label>
                    <Select onValueChange={(value) => setFormData(prev => ({ ...prev, budget: value }))}>
                      <SelectTrigger className="h-12 bg-input-background">
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="5k-15k">$5K - $15K</SelectItem>
                        <SelectItem value="15k-50k">$15K - $50K</SelectItem>
                        <SelectItem value="50k-100k">$50K - $100K</SelectItem>
                        <SelectItem value="100k+">$100K+</SelectItem>
                        <SelectItem value="discuss">Let's discuss</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="timeline">Project Timeline</Label>
                    <Select onValueChange={(value) => setFormData(prev => ({ ...prev, timeline: value }))}>
                      <SelectTrigger className="h-12 bg-input-background">
                        <SelectValue placeholder="Select timeline" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="asap">ASAP</SelectItem>
                        <SelectItem value="1-3-months">1-3 months</SelectItem>
                        <SelectItem value="3-6-months">3-6 months</SelectItem>
                        <SelectItem value="6-12-months">6-12 months</SelectItem>
                        <SelectItem value="flexible">Flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="projectDescription">Project Description *</Label>
                  <Textarea
                    id="projectDescription"
                    name="projectDescription"
                    value={formData.projectDescription}
                    onChange={handleInputChange}
                    placeholder="Describe your project, goals, and requirements..."
                    rows={4}
                    required
                    className="resize-none bg-input-background"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="goals">Main Goals & Objectives</Label>
                  <Textarea
                    id="goals"
                    name="goals"
                    value={formData.goals}
                    onChange={handleInputChange}
                    placeholder="What are you hoping to achieve with this project?"
                    rows={3}
                    className="resize-none bg-input-background"
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        );

      case 4:
        const selectedService = services.find(s => s.id === formData.serviceType);
        
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="text-center space-y-4">
              <h2 className="text-3xl hacker-text glow-text">
                Confirm Your Consultation
              </h2>
              <p className="text-muted-foreground">
                Review your booking details before confirming
              </p>
            </div>

            <Card className="glass-morphism">
              <CardContent className="p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold mb-3">Selected Service</h3>
                      {selectedService && (
                        <div className="flex items-center gap-3">
                          <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${selectedService.color} flex items-center justify-center`}>
                            <selectedService.icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <p className="font-medium">{selectedService.name}</p>
                            <p className="text-sm text-muted-foreground">{selectedService.description}</p>
                          </div>
                        </div>
                      )}
                    </div>

                    <div>
                      <h3 className="font-semibold mb-3">Date & Time</h3>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <CalendarIcon className="w-4 h-4 text-primary" />
                          <span>{selectedDate?.toLocaleDateString('en-US', { 
                            weekday: 'long', 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-primary" />
                          <span>{selectedTime} PST (30 minutes)</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold mb-3">Contact Information</h3>
                      <div className="space-y-2 text-sm">
                        <p><span className="font-medium">Name:</span> {formData.name}</p>
                        <p><span className="font-medium">Email:</span> {formData.email}</p>
                        {formData.phone && <p><span className="font-medium">Phone:</span> {formData.phone}</p>}
                        {formData.company && <p><span className="font-medium">Company:</span> {formData.company}</p>}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-3">Project Details</h3>
                      <div className="space-y-2 text-sm">
                        {formData.budget && <p><span className="font-medium">Budget:</span> {formData.budget}</p>}
                        {formData.timeline && <p><span className="font-medium">Timeline:</span> {formData.timeline}</p>}
                      </div>
                    </div>
                  </div>
                </div>

                {formData.projectDescription && (
                  <div>
                    <h3 className="font-semibold mb-3">Project Description</h3>
                    <p className="text-sm text-muted-foreground bg-muted/30 p-4 rounded-lg">
                      {formData.projectDescription}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        );

      case 5:
        return (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
              >
                <CheckCircle className="w-24 h-24 text-primary mx-auto glow-effect" />
              </motion.div>
              
              <h2 className="text-3xl hacker-text glow-text">
                Consultation Booked!
              </h2>
              <p className="text-muted-foreground">
                Your free consultation has been successfully scheduled
              </p>
            </div>

            <Card className="glass-morphism max-w-md mx-auto">
              <CardContent className="p-6 space-y-4">
                <h3 className="font-semibold">What happens next?</h3>
                <div className="space-y-3 text-sm text-left">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-medium text-primary">1</span>
                    </div>
                    <p>You'll receive a calendar invite within 15 minutes</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-medium text-primary">2</span>
                    </div>
                    <p>Our team will review your project details</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-medium text-primary">3</span>
                    </div>
                    <p>We'll prepare a customized consultation agenda</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => onNavigate("home")}
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 glow-effect"
              >
                Back to Home
              </Button>
              <Button 
                variant="outline"
                onClick={() => onNavigate("contact")}
                className="glass-morphism hover:neon-border"
              >
                Contact Us
              </Button>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <h1 className="text-4xl lg:text-5xl hacker-text glow-text">
              Schedule Your Free Consultation
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Let's discuss your project and explore how mellitron tech can bring your vision to life
            </p>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-6 mt-8"
          >
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2 text-sm">
                <benefit.icon className="w-4 h-4 text-primary" />
                <span className="font-medium">{benefit.title}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Progress Steps */}
        {currentStep < 5 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-12"
          >
            <div className="flex items-center justify-center space-x-4">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300 ${
                    currentStep >= step 
                      ? "bg-primary text-primary-foreground glow-effect" 
                      : "bg-muted text-muted-foreground"
                  }`}>
                    {currentStep > step ? <CheckCircle className="w-4 h-4" /> : step}
                  </div>
                  {step < 4 && (
                    <div className={`w-12 h-0.5 mx-2 transition-all duration-300 ${
                      currentStep > step ? "bg-primary" : "bg-muted"
                    }`} />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-center space-x-16 mt-4">
              <span className="text-xs text-muted-foreground">Service</span>
              <span className="text-xs text-muted-foreground">Schedule</span>
              <span className="text-xs text-muted-foreground">Details</span>
              <span className="text-xs text-muted-foreground">Confirm</span>
            </div>
          </motion.div>
        )}

        {/* Step Content */}
        <div className="mb-12">
          {renderStepContent()}
        </div>

        {/* Navigation Buttons */}
        {currentStep < 5 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex justify-between items-center"
          >
            <Button
              variant="outline"
              onClick={currentStep === 1 ? () => onNavigate("contact") : handleBack}
              className="flex items-center gap-2 glass-morphism hover:neon-border"
            >
              <ArrowLeft className="w-4 h-4" />
              {currentStep === 1 ? "Back to Contact" : "Previous"}
            </Button>

            <div className="flex gap-4">
              {currentStep < 4 ? (
                <Button
                  onClick={handleNext}
                  disabled={
                    (currentStep === 1 && !formData.serviceType) ||
                    (currentStep === 2 && (!selectedDate || !selectedTime)) ||
                    (currentStep === 3 && (!formData.name || !formData.email || !formData.projectDescription))
                  }
                  className="flex items-center gap-2 bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 glow-effect"
                >
                  Next
                  <ArrowRight className="w-4 h-4" />
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  className="flex items-center gap-2 bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 glow-effect pulse-glow"
                >
                  <CheckCircle className="w-4 h-4" />
                  Book Consultation
                </Button>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}