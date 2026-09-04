import { useState } from "react";
import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Badge } from "./ui/badge";
import { 
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Upload,
  FileText,
  User,
  Briefcase,
  Send,
  Star,
  MapPin,
  Clock,
  DollarSign
} from "lucide-react";

interface JobApplicationPageProps {
  onNavigate: (page: string) => void;
  jobId?: number;
}

export function JobApplicationPage({ onNavigate, jobId = 1 }: JobApplicationPageProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [applicationData, setApplicationData] = useState({
    personalInfo: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      location: "",
      linkedIn: "",
      website: ""
    },
    experience: {
      currentRole: "",
      company: "",
      experience: "",
      education: "",
      skills: [] as string[],
      resume: null as File | null,
      coverLetter: ""
    },
    preferences: {
      startDate: "",
      salaryExpectation: "",
      workLocation: "",
      visa: "",
      referral: ""
    },
    additional: {
      portfolio: "",
      github: "",
      publications: "",
      motivation: "",
      questions: ""
    }
  });

  // Mock job data - in real app this would come from props or API
  const jobDetails = {
    1: {
      title: "Senior AI Research Engineer",
      department: "AI Research",
      location: "Remote / San Francisco",
      type: "Full-time",
      salary: "$150K - $220K",
      description: "Lead cutting-edge AI research projects and develop next-generation machine learning algorithms."
    },
    2: {
      title: "Blockchain Protocol Developer",
      department: "Blockchain",
      location: "Remote / Global", 
      type: "Full-time",
      salary: "$130K - $200K",
      description: "Design and implement blockchain protocols, smart contracts, and DeFi solutions."
    }
  };

  const currentJob = jobDetails[jobId as keyof typeof jobDetails] || jobDetails[1];

  const skills = [
    "Python", "JavaScript", "TypeScript", "React", "Node.js", "TensorFlow", "PyTorch",
    "Solidity", "Rust", "Go", "Docker", "Kubernetes", "AWS", "GCP", "Azure",
    "Machine Learning", "Deep Learning", "Blockchain", "Smart Contracts", "DeFi",
    "Computer Vision", "NLP", "Quantum Computing", "Cryptography"
  ];

  const handleInputChange = (section: string, field: string, value: any) => {
    setApplicationData(prev => ({
      ...prev,
      [section]: {
        ...prev[section as keyof typeof prev],
        [field]: value
      }
    }));
  };

  const handleSkillToggle = (skill: string) => {
    const currentSkills = applicationData.experience.skills;
    if (currentSkills.includes(skill)) {
      handleInputChange('experience', 'skills', currentSkills.filter(s => s !== skill));
    } else {
      handleInputChange('experience', 'skills', [...currentSkills, skill]);
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      handleInputChange('experience', 'resume', file);
    }
  };

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    console.log("Application submitted:", applicationData);
    setCurrentStep(6);
  };

  const isStepValid = (step: number) => {
    switch (step) {
      case 1:
        return applicationData.personalInfo.firstName && 
               applicationData.personalInfo.lastName && 
               applicationData.personalInfo.email;
      case 2:
        return applicationData.experience.currentRole && 
               applicationData.experience.experience && 
               applicationData.experience.skills.length > 0;
      case 3:
        return applicationData.preferences.startDate && 
               applicationData.preferences.workLocation;
      case 4:
        return applicationData.additional.motivation;
      default:
        return true;
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="text-center space-y-4">
              <h2 className="text-3xl hacker-text glow-text">
                Personal Information
              </h2>
              <p className="text-muted-foreground">
                Let's start with your basic information
              </p>
            </div>

            <Card className="glass-morphism">
              <CardContent className="p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      value={applicationData.personalInfo.firstName}
                      onChange={(e) => handleInputChange('personalInfo', 'firstName', e.target.value)}
                      placeholder="Your first name"
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      value={applicationData.personalInfo.lastName}
                      onChange={(e) => handleInputChange('personalInfo', 'lastName', e.target.value)}
                      placeholder="Your last name"
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={applicationData.personalInfo.email}
                      onChange={(e) => handleInputChange('personalInfo', 'email', e.target.value)}
                      placeholder="your.email@example.com"
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={applicationData.personalInfo.phone}
                      onChange={(e) => handleInputChange('personalInfo', 'phone', e.target.value)}
                      placeholder="+1 (555) 123-4567"
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Current Location</Label>
                  <Input
                    id="location"
                    value={applicationData.personalInfo.location}
                    onChange={(e) => handleInputChange('personalInfo', 'location', e.target.value)}
                    placeholder="City, State, Country"
                    className="h-12"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="linkedIn">LinkedIn Profile</Label>
                    <Input
                      id="linkedIn"
                      value={applicationData.personalInfo.linkedIn}
                      onChange={(e) => handleInputChange('personalInfo', 'linkedIn', e.target.value)}
                      placeholder="https://linkedin.com/in/yourprofile"
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="website">Personal Website</Label>
                    <Input
                      id="website"
                      value={applicationData.personalInfo.website}
                      onChange={(e) => handleInputChange('personalInfo', 'website', e.target.value)}
                      placeholder="https://yourwebsite.com"
                      className="h-12"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        );

      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="text-center space-y-4">
              <h2 className="text-3xl hacker-text glow-text">
                Experience & Skills
              </h2>
              <p className="text-muted-foreground">
                Tell us about your professional background
              </p>
            </div>

            <Card className="glass-morphism">
              <CardContent className="p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="currentRole">Current Role *</Label>
                    <Input
                      id="currentRole"
                      value={applicationData.experience.currentRole}
                      onChange={(e) => handleInputChange('experience', 'currentRole', e.target.value)}
                      placeholder="Senior Software Engineer"
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      value={applicationData.experience.company}
                      onChange={(e) => handleInputChange('experience', 'company', e.target.value)}
                      placeholder="Current company name"
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="experience">Years of Experience *</Label>
                    <Select onValueChange={(value) => handleInputChange('experience', 'experience', value)}>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select experience level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-1">0-1 years</SelectItem>
                        <SelectItem value="2-3">2-3 years</SelectItem>
                        <SelectItem value="4-5">4-5 years</SelectItem>
                        <SelectItem value="6-10">6-10 years</SelectItem>
                        <SelectItem value="10+">10+ years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="education">Education Level</Label>
                    <Select onValueChange={(value) => handleInputChange('experience', 'education', value)}>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select education level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="high-school">High School</SelectItem>
                        <SelectItem value="bachelors">Bachelor's Degree</SelectItem>
                        <SelectItem value="masters">Master's Degree</SelectItem>
                        <SelectItem value="phd">PhD</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-4">
                  <Label>Technical Skills *</Label>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {skills.map((skill) => (
                      <motion.div
                        key={skill}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Badge
                          className={`cursor-pointer transition-all duration-300 ${
                            applicationData.experience.skills.includes(skill)
                              ? "bg-primary text-primary-foreground neon-border"
                              : "glass-morphism hover:neon-border"
                          }`}
                          onClick={() => handleSkillToggle(skill)}
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <Label htmlFor="resume">Resume/CV</Label>
                  <div className="border-2 border-dashed border-border/50 rounded-lg p-8 text-center">
                    <input
                      type="file"
                      id="resume"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                    <label htmlFor="resume" className="cursor-pointer">
                      <Upload className="w-8 h-8 mx-auto mb-4 text-muted-foreground" />
                      <p className="text-muted-foreground">
                        {applicationData.experience.resume 
                          ? `Selected: ${applicationData.experience.resume.name}`
                          : "Click to upload your resume (PDF, DOC, DOCX)"
                        }
                      </p>
                    </label>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="coverLetter">Cover Letter</Label>
                  <Textarea
                    id="coverLetter"
                    value={applicationData.experience.coverLetter}
                    onChange={(e) => handleInputChange('experience', 'coverLetter', e.target.value)}
                    placeholder="Write a brief cover letter highlighting your interest and qualifications..."
                    rows={6}
                    className="resize-none"
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        );

      case 3:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="text-center space-y-4">
              <h2 className="text-3xl hacker-text glow-text">
                Job Preferences
              </h2>
              <p className="text-muted-foreground">
                Let us know your preferences and availability
              </p>
            </div>

            <Card className="glass-morphism">
              <CardContent className="p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="startDate">Available Start Date *</Label>
                    <Input
                      id="startDate"
                      type="date"
                      value={applicationData.preferences.startDate}
                      onChange={(e) => handleInputChange('preferences', 'startDate', e.target.value)}
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="salaryExpectation">Salary Expectation</Label>
                    <Input
                      id="salaryExpectation"
                      value={applicationData.preferences.salaryExpectation}
                      onChange={(e) => handleInputChange('preferences', 'salaryExpectation', e.target.value)}
                      placeholder="e.g., $120K - $150K"
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="workLocation">Preferred Work Location *</Label>
                    <Select onValueChange={(value) => handleInputChange('preferences', 'workLocation', value)}>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select work preference" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="remote">Fully Remote</SelectItem>
                        <SelectItem value="hybrid">Hybrid</SelectItem>
                        <SelectItem value="onsite">On-site</SelectItem>
                        <SelectItem value="flexible">Flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="visa">Work Authorization</Label>
                    <Select onValueChange={(value) => handleInputChange('preferences', 'visa', value)}>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select authorization status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="citizen">US Citizen</SelectItem>
                        <SelectItem value="green-card">Green Card Holder</SelectItem>
                        <SelectItem value="h1b">H1B Visa</SelectItem>
                        <SelectItem value="other-visa">Other Visa</SelectItem>
                        <SelectItem value="need-sponsorship">Need Sponsorship</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="referral">How did you hear about this position?</Label>
                  <Select onValueChange={(value) => handleInputChange('preferences', 'referral', value)}>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select source" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="website">Company Website</SelectItem>
                      <SelectItem value="linkedin">LinkedIn</SelectItem>
                      <SelectItem value="referral">Employee Referral</SelectItem>
                      <SelectItem value="job-board">Job Board</SelectItem>
                      <SelectItem value="social-media">Social Media</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        );

      case 4:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="text-center space-y-4">
              <h2 className="text-3xl hacker-text glow-text">
                Additional Information
              </h2>
              <p className="text-muted-foreground">
                Help us understand you better
              </p>
            </div>

            <Card className="glass-morphism">
              <CardContent className="p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="portfolio">Portfolio URL</Label>
                    <Input
                      id="portfolio"
                      value={applicationData.additional.portfolio}
                      onChange={(e) => handleInputChange('additional', 'portfolio', e.target.value)}
                      placeholder="https://yourportfolio.com"
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="github">GitHub Profile</Label>
                    <Input
                      id="github"
                      value={applicationData.additional.github}
                      onChange={(e) => handleInputChange('additional', 'github', e.target.value)}
                      placeholder="https://github.com/yourusername"
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="publications">Publications/Research</Label>
                  <Textarea
                    id="publications"
                    value={applicationData.additional.publications}
                    onChange={(e) => handleInputChange('additional', 'publications', e.target.value)}
                    placeholder="List any relevant publications, research papers, or notable projects..."
                    rows={4}
                    className="resize-none"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="motivation">Why do you want to work at mellitron tech? *</Label>
                  <Textarea
                    id="motivation"
                    value={applicationData.additional.motivation}
                    onChange={(e) => handleInputChange('additional', 'motivation', e.target.value)}
                    placeholder="Tell us what excites you about this opportunity and how you align with our mission..."
                    rows={6}
                    className="resize-none"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="questions">Questions for Us</Label>
                  <Textarea
                    id="questions"
                    value={applicationData.additional.questions}
                    onChange={(e) => handleInputChange('additional', 'questions', e.target.value)}
                    placeholder="Any questions about the role, team, or company culture?"
                    rows={4}
                    className="resize-none"
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        );

      case 5:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="text-center space-y-4">
              <h2 className="text-3xl hacker-text glow-text">
                Review Your Application
              </h2>
              <p className="text-muted-foreground">
                Please review all information before submitting
              </p>
            </div>

            <Card className="glass-morphism">
              <CardContent className="p-8 space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold mb-3 text-primary">Personal Information</h3>
                      <div className="space-y-2 text-sm">
                        <p><span className="font-medium">Name:</span> {applicationData.personalInfo.firstName} {applicationData.personalInfo.lastName}</p>
                        <p><span className="font-medium">Email:</span> {applicationData.personalInfo.email}</p>
                        {applicationData.personalInfo.phone && <p><span className="font-medium">Phone:</span> {applicationData.personalInfo.phone}</p>}
                        {applicationData.personalInfo.location && <p><span className="font-medium">Location:</span> {applicationData.personalInfo.location}</p>}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-3 text-primary">Experience</h3>
                      <div className="space-y-2 text-sm">
                        <p><span className="font-medium">Current Role:</span> {applicationData.experience.currentRole}</p>
                        {applicationData.experience.company && <p><span className="font-medium">Company:</span> {applicationData.experience.company}</p>}
                        <p><span className="font-medium">Experience:</span> {applicationData.experience.experience}</p>
                        {applicationData.experience.education && <p><span className="font-medium">Education:</span> {applicationData.experience.education}</p>}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold mb-3 text-primary">Preferences</h3>
                      <div className="space-y-2 text-sm">
                        <p><span className="font-medium">Start Date:</span> {applicationData.preferences.startDate}</p>
                        <p><span className="font-medium">Work Location:</span> {applicationData.preferences.workLocation}</p>
                        {applicationData.preferences.salaryExpectation && <p><span className="font-medium">Salary:</span> {applicationData.preferences.salaryExpectation}</p>}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-3 text-primary">Skills</h3>
                      <div className="flex flex-wrap gap-2">
                        {applicationData.experience.skills.map((skill, index) => (
                          <Badge key={index} className="bg-primary/20 text-primary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {applicationData.additional.motivation && (
                  <div>
                    <h3 className="font-semibold mb-3 text-primary">Motivation</h3>
                    <p className="text-sm text-muted-foreground bg-muted/30 p-4 rounded-lg">
                      {applicationData.additional.motivation}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        );

      case 6:
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
                Application Submitted!
              </h2>
              <p className="text-muted-foreground">
                Thank you for your interest in joining mellitron tech
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
                    <p>Our team will review your application within 3-5 business days</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-medium text-primary">2</span>
                    </div>
                    <p>If selected, you'll receive an email for the next steps</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-medium text-primary">3</span>
                    </div>
                    <p>Our interview process typically includes 2-3 rounds</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => onNavigate("open-positions")}
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 glow-effect"
              >
                View Other Positions
              </Button>
              <Button 
                variant="outline"
                onClick={() => onNavigate("home")}
                className="glass-morphism hover:neon-border"
              >
                Back to Home
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
              Apply for Position
            </h1>
            
            {/* Job Details */}
            <Card className="glass-morphism max-w-2xl mx-auto">
              <CardContent className="p-6">
                <div className="text-center space-y-2">
                  <h2 className="text-2xl font-bold text-primary">{currentJob.title}</h2>
                  <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Briefcase className="w-4 h-4" />
                      <span>{currentJob.department}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{currentJob.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{currentJob.type}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <DollarSign className="w-4 h-4" />
                      <span className="text-primary font-medium">{currentJob.salary}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Progress Steps */}
        {currentStep < 6 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <div className="flex items-center justify-center space-x-4">
              {[1, 2, 3, 4, 5].map((step) => (
                <div key={step} className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300 ${
                    currentStep >= step 
                      ? "bg-primary text-primary-foreground glow-effect" 
                      : "bg-muted text-muted-foreground"
                  }`}>
                    {currentStep > step ? <CheckCircle className="w-4 h-4" /> : step}
                  </div>
                  {step < 5 && (
                    <div className={`w-12 h-0.5 mx-2 transition-all duration-300 ${
                      currentStep > step ? "bg-primary" : "bg-muted"
                    }`} />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-center space-x-12 mt-4">
              <span className="text-xs text-muted-foreground">Personal</span>
              <span className="text-xs text-muted-foreground">Experience</span>
              <span className="text-xs text-muted-foreground">Preferences</span>
              <span className="text-xs text-muted-foreground">Additional</span>
              <span className="text-xs text-muted-foreground">Review</span>
            </div>
          </motion.div>
        )}

        {/* Step Content */}
        <div className="mb-12">
          {renderStepContent()}
        </div>

        {/* Navigation Buttons */}
        {currentStep < 6 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex justify-between items-center"
          >
            <Button
              variant="outline"
              onClick={currentStep === 1 ? () => onNavigate("open-positions") : handleBack}
              className="flex items-center gap-2 glass-morphism hover:neon-border"
            >
              <ArrowLeft className="w-4 h-4" />
              {currentStep === 1 ? "Back to Jobs" : "Previous"}
            </Button>

            <div className="flex gap-4">
              {currentStep < 5 ? (
                <Button
                  onClick={handleNext}
                  disabled={!isStepValid(currentStep)}
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
                  <Send className="w-4 h-4" />
                  Submit Application
                </Button>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}